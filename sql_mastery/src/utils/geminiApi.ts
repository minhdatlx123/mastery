import type { QuizQuestion } from '../types';

// --- AI API INTEGRATION (Groq - Free & Fast) ---
const groqKey = import.meta.env.VITE_GROQ_API_KEY || "";
const geminiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

const SYSTEM_PROMPT = "Bạn là một giảng viên Data/SQL Senior. Giải thích ngắn gọn, chuyên sâu, trực quan. Sử dụng tiếng Việt chuẩn.";

// --- Groq API (Primary - Free 30RPM) ---
const callGroq = async (prompt: string, isJson: boolean): Promise<string> => {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${groqKey}`
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: SYSTEM_PROMPT + (isJson ? "\n\nTrả về JSON array với format: [{\"question\": \"...\", \"options\": [\"A\",\"B\",\"C\"], \"answer\": 0}]. Chỉ trả về JSON, không thêm text khác." : "") },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 2048,
      ...(isJson ? { response_format: { type: "json_object" } } : {})
    })
  });
  
  if (!response.ok) {
    if (response.status === 429) throw new Error("⚠️ Rate limit Groq. Chờ 1 phút rồi thử lại.");
    throw new Error(`Groq HTTP ${response.status}`);
  }
  
  const data = await response.json();
  return data.choices?.[0]?.message?.content || "";
};

// --- Gemini API (Fallback) ---
const callGemini = async (prompt: string, isJson: boolean): Promise<string> => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`;
  const payload: Record<string, unknown> = {
    contents: [{ parts: [{ text: prompt }] }],
    systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] }
  };
  if (isJson) {
    payload.generationConfig = { responseMimeType: "application/json", responseSchema: { type: "ARRAY", items: { type: "OBJECT", properties: { question: { type: "STRING" }, options: { type: "ARRAY", items: { type: "STRING" } }, answer: { type: "INTEGER" } }, required: ["question", "options", "answer"] } } };
  }

  const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  if (!response.ok) {
    if (response.status === 429) throw new Error("⚠️ Hết quota Gemini. Chờ hoặc dùng Groq key thay thế.");
    throw new Error(`Gemini HTTP ${response.status}`);
  }
  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
};

// --- Main Entry Point ---
export const callGeminiAPI = async (prompt: string, isJson: boolean = false): Promise<string | QuizQuestion[]> => {
  // Check nếu không có key nào
  if (!groqKey && !geminiKey) {
    await new Promise(res => setTimeout(res, 500));
    if (isJson) {
      return [{ question: "Chưa cấu hình API key", options: ["Đã hiểu", "OK", "Sẽ thêm"], answer: 0 }];
    }
    return "⚠️ Chưa cấu hình API Key.\n\nThêm 1 trong 2 vào file .env:\n\n🟢 Groq (recommended - free):\nVITE_GROQ_API_KEY=your_key\n→ Lấy tại: console.groq.com/keys\n\n🔵 Gemini:\nVITE_GEMINI_API_KEY=your_key\n→ Lấy tại: aistudio.google.com/apikey\n\nSau đó restart: npm run dev";
  }

  const delays = [800, 1500, 3000];
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      let textResult = "";
      
      // Ưu tiên Groq (free & fast), fallback Gemini
      if (groqKey) {
        textResult = await callGroq(prompt, isJson);
      } else {
        textResult = await callGemini(prompt, isJson);
      }

      if (!textResult) throw new Error("Không nhận được phản hồi từ AI.");
      
      if (isJson) {
        // Parse JSON - handle cả trường hợp Groq wrap trong object
        let parsed = JSON.parse(textResult);
        if (!Array.isArray(parsed) && parsed.questions) parsed = parsed.questions;
        if (!Array.isArray(parsed)) parsed = [parsed];
        return parsed;
      }
      return textResult;
    } catch (err) {
      const msg = err instanceof Error ? err.message : "";
      // Không retry lỗi auth/quota
      if (msg.includes("429") || msg.includes("401") || msg.includes("403") || msg.includes("quota")) {
        throw err;
      }
      if (attempt === 2) throw new Error(`Lỗi AI: ${msg}`);
      await new Promise(res => setTimeout(res, delays[attempt]));
    }
  }
  throw new Error("Không thể kết nối AI sau 3 lần thử.");
};

// --- GITHUB DAILY COMMIT MOCK DATA ---
export const generateMockHeatmap = (): number[] => {
    const days: number[] = [];
    for(let i=0; i<28; i++) {
        const level = Math.random() > 0.5 ? Math.floor(Math.random() * 4) + 1 : 0;
        days.push(level);
    }
    return days;
};
