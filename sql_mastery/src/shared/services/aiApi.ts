import type { QuizQuestion } from '../types';

const groqKey = import.meta.env.VITE_GROQ_API_KEY || '';

const SYSTEM_PROMPT = 'Bạn là một giảng viên Data/SQL Senior. Giải thích ngắn gọn, chuyên sâu, trực quan. Sử dụng tiếng Việt chuẩn.';

const callGroq = async (prompt: string, isJson: boolean): Promise<string> => {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${groqKey}`,
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [
        {
          role: 'system',
          content:
            SYSTEM_PROMPT +
            (isJson
              ? '\n\nTrả về JSON array với format: [{"question": "...", "options": ["A","B","C"], "answer": 0}]. Chỉ trả về JSON, không thêm text khác.'
              : ''),
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 2048,
      ...(isJson ? { response_format: { type: 'json_object' } } : {}),
    }),
  });

  if (!response.ok) {
    if (response.status === 429) {
      throw new Error('⚠️ Rate limit AI provider. Chờ 1 phút rồi thử lại.');
    }
    throw new Error(`AI HTTP ${response.status}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
};

export const callAIAPI = async (prompt: string, isJson: boolean = false): Promise<string | QuizQuestion[]> => {
  if (!groqKey) {
    await new Promise((res) => setTimeout(res, 500));

    if (isJson) {
      return [{ question: 'Chưa cấu hình API key', options: ['Đã hiểu', 'OK', 'Sẽ thêm'], answer: 0 }];
    }

    return [
      '⚠️ Chưa cấu hình API Key.',
      '',
      'Thêm vào file .env:',
      '',
      'VITE_GROQ_API_KEY=your_key',
      '→ Lấy tại: console.groq.com/keys',
      '',
      'Sau đó restart: npm run dev',
    ].join('\n');
  }

  const delays = [800, 1500, 3000];

  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const textResult = await callGroq(prompt, isJson);

      if (!textResult) {
        throw new Error('Không nhận được phản hồi từ AI.');
      }

      if (isJson) {
        let parsed = JSON.parse(textResult);
        if (!Array.isArray(parsed) && parsed.questions) parsed = parsed.questions;
        if (!Array.isArray(parsed)) parsed = [parsed];
        return parsed;
      }

      return textResult;
    } catch (err) {
      const message = err instanceof Error ? err.message : '';
      if (message.includes('429') || message.includes('401') || message.includes('403') || message.includes('quota')) {
        throw err;
      }

      if (attempt === 2) {
        throw new Error(`Lỗi AI: ${message}`);
      }

      await new Promise((res) => setTimeout(res, delays[attempt]));
    }
  }

  throw new Error('Không thể kết nối AI sau 3 lần thử.');
};

export const generateMockHeatmap = (): number[] => {
  const days: number[] = [];
  for (let i = 0; i < 28; i += 1) {
    const level = Math.random() > 0.5 ? Math.floor(Math.random() * 4) + 1 : 0;
    days.push(level);
  }
  return days;
};

