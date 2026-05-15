import { Info, Keyboard, Play, Sparkles, Loader2, FileCheck } from 'lucide-react';
import VisualDiagram from './VisualDiagram';
import type { LessonViewProps } from '../types';

const LessonView: React.FC<LessonViewProps> = ({
  activeModule,
  handleRunSQL,
  handleAIExplain,
  isExplainingCode,
  onStartQuiz,
}) => {
  return (
    <div className="space-y-6">
      {activeModule.sections.map((sec, idx) => {
        if (sec.type === 'heading') return <h2 key={idx} className="text-2xl font-black text-slate-800 tracking-tight mt-8 mb-4 border-l-4 border-blue-600 pl-4">{sec.content}</h2>;
        if (sec.type === 'subheading') return <h3 key={idx} className="text-lg font-bold text-blue-700 mt-6 mb-2">{sec.content}</h3>;
        if (sec.type === 'text') return <p key={idx} className="text-slate-700 text-[15.5px] md:text-[16px] leading-relaxed text-justify">{sec.content}</p>;
        if (sec.type === 'diagram') return <VisualDiagram key={idx} type={sec.diagramType} title={sec.title} />;
        
        if (sec.type === 'note') {
          return (
            <div key={idx} className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 flex gap-4 shadow-sm relative overflow-hidden my-6">
              <Info className="text-blue-500 shrink-0 mt-0.5" size={24} />
              <div className="text-blue-900 text-[15px] md:text-base leading-relaxed whitespace-pre-line font-medium">{sec.content}</div>
            </div>
          );
        }

        if (sec.type === 'practice') {
          return (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-7 shadow-sm flex flex-col gap-4 my-6">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-lg tracking-tight">
                <Keyboard size={20} className="text-blue-600"/> Code Thực Hành
              </div>
              <p className="text-[15px] text-slate-600 font-medium">{sec.instruction}</p>
              <div className="bg-[#0f172a] rounded-xl overflow-hidden shadow-inner border border-slate-800">
                 <div className="px-4 py-3 bg-[#1e293b] border-b border-slate-700/50 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div><div className="w-3 h-3 rounded-full bg-amber-400/80"></div><div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                 </div>
                 <div className="p-5 overflow-x-auto">
                   <code className="text-[#a7f3d0] font-mono text-[14.5px] leading-relaxed whitespace-pre-wrap">{sec.query}</code>
                 </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-2">
                 <button 
                    onClick={() => handleRunSQL(sec.query)}
                    className="flex-1 md:flex-none justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-colors shadow-sm"
                 >
                    <Play size={14} fill="currentColor" /> CHẠY CODE TRÊN TERMINAL
                 </button>
                 <button 
                    onClick={() => handleAIExplain(sec.query)}
                    disabled={isExplainingCode}
                    className="flex-1 md:flex-none justify-center bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-colors disabled:opacity-50 shadow-sm"
                 >
                    {isExplainingCode ? <Loader2 size={14} className="animate-spin text-purple-600" /> : <Sparkles size={14} className="text-purple-600" />} NHỜ AI GIẢI THÍCH
                 </button>
              </div>
            </div>
          );
        }
        return null;
      })}
      
      <div className="pt-10 flex justify-center border-t border-slate-200 mt-10">
        <button 
          onClick={onStartQuiz}
          className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-indigo-500/20 flex items-center gap-2.5 transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wide"
        >
          <FileCheck size={18} />
          BẮT ĐẦU BÀI KIỂM TRA
        </button>
      </div>
    </div>
  );
};

export default LessonView;
