import { useRef, useEffect, useState } from 'react';
import { Sparkles, X, Bot, User, Loader2, Send } from 'lucide-react';
import type { AIChatBoxProps } from '../types';

const AIChatBox: React.FC<AIChatBoxProps> = ({
  isOpen,
  setIsOpen,
  messages,
  isLoading,
  onSendMessage,
  isTerminalOpen = false,
  terminalWidth = 0,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [chatInput, setChatInput] = useState('');
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSend = () => {
    const text = chatInput.trim();
    if (!text || isLoading) return;
    onSendMessage(text);
    setChatInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const rightOffset = isDesktop && isTerminalOpen ? terminalWidth + 20 : 20;

  return (
    <div className="fixed z-50 bottom-5" style={{ right: `${rightOffset}px` }}>
      {/* Chat Panel */}
      <div 
        className={`absolute bottom-full mb-2 right-0 w-[360px] max-sm:w-[300px] bg-white rounded-2xl shadow-[0_12px_40px_-10px_rgba(0,0,0,0.25)] border border-slate-200 flex flex-col overflow-hidden transition-all duration-200 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 visible max-h-[520px]' : 'scale-95 opacity-0 invisible max-h-0 pointer-events-none'
        }`}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        {/* Header */}
        <div className="px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Bot size={16} />
            <span className="font-bold text-[13px]">AI SQL Assistant</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center cursor-pointer transition-colors">
            <X size={12} />
          </button>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3.5 space-y-3 min-h-[200px] max-h-[380px] bg-slate-50/50">
          {messages.length === 0 && !isLoading && (
            <div className="flex flex-col items-center justify-center text-slate-400 py-10">
              <Bot size={28} className="text-slate-300 mb-2" />
              <p className="text-[13px] font-semibold">Xin chào! 👋</p>
              <p className="text-[11px] text-slate-400 mt-1 text-center leading-relaxed">
                Hỏi bất kỳ câu SQL nào<br/>hoặc nhấn "Nhờ AI giải thích" ở bài học
              </p>
            </div>
          )}
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'ai' && (
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot size={12} className="text-purple-600" />
                </div>
              )}
              <div className={`max-w-[82%] rounded-xl px-3 py-2 text-[13px] leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-sm' 
                  : 'bg-white border border-slate-200 text-slate-700 rounded-bl-sm shadow-sm'
              }`}>
                <div className="whitespace-pre-line">{msg.content}</div>
                <div className={`text-[9px] mt-1 ${msg.role === 'user' ? 'text-blue-200' : 'text-slate-400'}`}>{msg.timestamp}</div>
              </div>
              {msg.role === 'user' && (
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <User size={12} className="text-blue-600" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                <Bot size={12} className="text-purple-600" />
              </div>
              <div className="bg-white border border-slate-200 rounded-xl rounded-bl-sm px-3 py-2 shadow-sm">
                <div className="flex items-center gap-1.5 text-purple-500">
                  <Loader2 size={12} className="animate-spin" />
                  <span className="text-[13px]">Đang phân tích...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="border-t border-slate-200 px-3 py-2.5 bg-white shrink-0">
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Hỏi về SQL..."
              disabled={isLoading}
              className="flex-1 text-[13px] px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-blue-400 focus:outline-none transition-colors placeholder:text-slate-400 disabled:opacity-50"
            />
            <button
              onClick={handleSend}
              disabled={!chatInput.trim() || isLoading}
              className="w-9 h-9 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center shrink-0 cursor-pointer hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Fixed Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-11 h-11 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 ${
          isOpen ? 'bg-slate-800 text-white' : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-purple-600/20'
        }`}
      >
        {isOpen ? <X size={16} /> : <Sparkles size={16} />}
      </button>
    </div>
  );
};

export default AIChatBox;
