import { useRef, useEffect, useState } from 'react';
import { Terminal as TerminalIcon, Trash2, ChevronDown, ChevronUp, ChevronRight, Loader2, Bot } from 'lucide-react';
import type { TerminalProps } from '../types';

const Terminal: React.FC<TerminalProps> = ({
  isTerminalOpen,
  setIsTerminalOpen,
  terminalHeight,
  terminalWidth,
  logs,
  terminalInput,
  setTerminalInput,
  handleTerminalKeyDown,
  clearLogs,
  setIsDraggingTerminal,
}) => {
  const logEndRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  useEffect(() => {
    if(isTerminalOpen) logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs, isTerminalOpen]);

  const containerStyle: React.CSSProperties = isDesktop
    ? { width: isTerminalOpen ? `${terminalWidth}px` : '28px', height: '100%' }
    : { height: isTerminalOpen ? `${terminalHeight}px` : '30px', width: '100%' };

  return (
    <div 
      className={`shrink-0 flex flex-col z-10 relative bg-[#1a1d27] ${
        isDesktop ? 'border-l border-[#2d3348]' : 'border-t border-[#2d3348]'
      }`}
      style={containerStyle}
    >
      {/* Resize Handle */}
      {isTerminalOpen && (
        <div 
          className={`absolute z-30 ${
            isDesktop 
              ? 'top-0 left-0 h-full w-1 cursor-ew-resize hover:bg-blue-500/40 transition-colors'
              : 'top-0 left-0 w-full h-1 cursor-ns-resize hover:bg-blue-500/40 transition-colors'
          }`}
          onMouseDown={(e) => { e.preventDefault(); setIsDraggingTerminal(true); }}
        />
      )}

      {/* ===== DESKTOP COLLAPSED ===== */}
      {isDesktop && !isTerminalOpen && (
        <div 
          className="h-full w-[28px] bg-[#1a1d27] flex items-center justify-center hover:bg-[#242838] transition-colors"
          onClick={() => setIsTerminalOpen(true)}
        >
          <TerminalIcon size={13} className="text-slate-500 hover:text-blue-400 transition-colors" />
        </div>
      )}

      {/* ===== MOBILE COLLAPSED ===== */}
      {!isDesktop && !isTerminalOpen && (
        <div 
          className="flex items-center justify-between px-3 h-[30px] bg-[#1a1d27] hover:bg-[#242838] transition-colors select-none"
          onClick={() => setIsTerminalOpen(true)}
        >
          <div className="flex items-center gap-1.5 text-slate-500 text-[9px] font-mono font-bold uppercase tracking-wider">
            <TerminalIcon size={11} className="text-emerald-400" /> console
          </div>
          <ChevronUp size={12} className="text-slate-600" />
        </div>
      )}

      {/* ===== OPEN STATE ===== */}
      {isTerminalOpen && (
        <>
          {/* macOS-style Header */}
          <div 
            className="flex items-center justify-between px-3 h-8 bg-[#212535] border-b border-[#2d3348] shrink-0 select-none"
            onClick={() => setIsTerminalOpen(false)}
          >
            <div className="flex items-center gap-3">
              {/* Traffic lights */}
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] opacity-80 hover:opacity-100 transition-opacity" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e] opacity-80 hover:opacity-100 transition-opacity" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840] opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-[10px] text-slate-500 font-mono tracking-wide">sql_console</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={(e) => { e.stopPropagation(); clearLogs(); }}
                className="text-slate-600 hover:text-red-400 transition-colors p-0.5"
                title="Clear"
              >
                <Trash2 size={12} />
              </button>
              <div className="text-slate-600">
                {isDesktop ? <ChevronRight size={12} /> : <ChevronDown size={12} />}
              </div>
            </div>
          </div>
          
          {/* Log Content */}
          <div className="flex-1 overflow-y-auto px-4 py-3 font-mono text-[12px] leading-[1.7]">
            {logs.map((log, index) => (
              <div key={index} className="mb-1.5 flex gap-0">
                <span className="text-[#4a5173] shrink-0 select-none text-[10px] w-[70px]">{log.time}</span>
                <div className="flex-1 min-w-0">
                  {log.type === 'info' && <span className="text-[#7c85a6] italic">{log.text}</span>}
                  {log.type === 'query' && (
                    <div className="flex items-start gap-1">
                      <span className="text-emerald-400 select-none">❯</span>
                      <span className="text-sky-300 font-medium">{log.text}</span>
                    </div>
                  )}
                  {log.type === 'result' && <span className="text-emerald-300/90 whitespace-pre-wrap block ml-3 leading-snug">{log.text}</span>}
                  {log.type === 'ai-loading' && <span className="text-purple-400 italic flex items-center gap-1.5"><Loader2 size={11} className="animate-spin" /> {log.text}</span>}
                  {log.type === 'ai-explain' && (
                    <div className="text-purple-200/90 bg-purple-500/10 p-3 rounded-lg border border-purple-500/20 mt-1 mb-2 whitespace-pre-line flex gap-2 text-[11px] leading-relaxed">
                      <Bot size={14} className="shrink-0 mt-0.5 text-purple-400" />
                      <span>{log.text}</span>
                    </div>
                  )}
                  {log.type === 'error' && <span className="text-red-400/90 bg-red-500/10 p-2 rounded-lg block border border-red-500/20 text-[11px]">{log.text}</span>}
                </div>
              </div>
            ))}
            <div ref={logEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-[#2d3348] px-4 py-2 flex items-center gap-2 bg-[#1e2130] shrink-0">
            <span className="text-emerald-400 font-mono text-[12px] select-none">❯</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              onKeyDown={handleTerminalKeyDown}
              placeholder="SQL query..."
              className="flex-1 bg-transparent text-slate-200 font-mono text-[12px] outline-none placeholder-[#4a5173] min-w-0 caret-emerald-400"
              spellCheck="false"
              autoComplete="off"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Terminal;
