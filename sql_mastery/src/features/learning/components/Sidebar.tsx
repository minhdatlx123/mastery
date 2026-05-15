import {
  Terminal, ChevronLeft, Sprout, Rocket, CheckCircle2, BookOpen, HelpCircle, Trophy, Home
} from 'lucide-react';
import type { SidebarProps } from '../types';

const Sidebar: React.FC<SidebarProps> = ({
  activeModule,
  completedModules,
  sidebarOpen,
  setSidebarOpen,
  viewMode,
  setViewMode,
  changeModule,
  resetQuiz,
  progressPercent,
  beginnerModules,
  advancedModules,
  onBackToModules,
}) => {
  return (
    <div className={`shrink-0 bg-white z-40 transition-all duration-300 ease-in-out fixed md:relative h-full border-r border-slate-200 shadow-[10px_0_30px_rgba(0,0,0,0.05)] md:shadow-none flex flex-col overflow-hidden ${
      sidebarOpen ? 'w-72 translate-x-0' : 'w-72 -translate-x-full md:w-0 md:translate-x-0 md:border-r-0'
    }`}>
      <div className="w-72 h-full flex flex-col relative">
        <div className="px-5 py-[11px] flex items-center justify-between border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-2.5 font-black text-lg text-slate-900 tracking-tight">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg shadow-sm">
              <Terminal size={22} strokeWidth={2.5} />
            </div>
            Mastery
          </div>
          <button
            className="text-slate-400 hover:text-slate-800 hover:bg-slate-100 p-1.5 rounded-lg transition-colors focus:outline-none"
            onClick={() => setSidebarOpen(false)}
          >
            <ChevronLeft size={22} />
          </button>
        </div>

        {onBackToModules && (
          <button
            onClick={onBackToModules}
            className="mx-5 mt-3 flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100"
          >
            <Home size={14} />
            Chọn Module
          </button>
        )}

        <div className="px-5 py-4 border-b border-slate-50 bg-slate-50/50 shrink-0">
          <div className="flex justify-between items-center text-xs font-bold text-slate-500 uppercase mb-2 tracking-wider">
            <span>Tiến trình học</span>
            <span className="text-blue-600">{progressPercent}%</span>
          </div>
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-700 ease-out rounded-full"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4 scrollbar-hide pb-24">
          <div className="px-5 mb-2 mt-1 text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
            <Sprout size={14} /> Level: Cơ bản
          </div>
          {beginnerModules.map((mod) => {
            const isCompleted = completedModules.includes(mod.id);
            const isActive = activeModule.id === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => changeModule(mod)}
                className={`w-full text-left px-5 py-3 flex items-center gap-3 transition-all border-l-4 ${
                  isActive
                    ? 'bg-blue-50/70 border-blue-600 text-blue-700'
                    : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                  isCompleted ? 'bg-emerald-500 text-white shadow-sm' : isActive ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-500'
                }`}>
                  {isCompleted ? <CheckCircle2 size={16} strokeWidth={3} /> : mod.id}
                </div>
                <span className="truncate text-sm font-semibold leading-tight">{mod.title.split('. ')[1]}</span>
              </button>
            );
          })}

          <div className="px-5 mb-2 mt-8 text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
            <Rocket size={14} /> Level: Nâng cao
          </div>
          {advancedModules.map((mod) => {
            const isCompleted = completedModules.includes(mod.id);
            const isActive = activeModule.id === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => changeModule(mod)}
                className={`w-full text-left px-5 py-3 flex items-center gap-3 transition-all border-l-4 ${
                  isActive
                    ? 'bg-blue-50/70 border-blue-600 text-blue-700'
                    : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                  isCompleted ? 'bg-emerald-500 text-white shadow-sm' : isActive ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-500'
                }`}>
                  {isCompleted ? <CheckCircle2 size={16} strokeWidth={3} /> : mod.id}
                </div>
                <span className="truncate text-sm font-semibold leading-tight">{mod.title.split('. ')[1]}</span>
              </button>
            );
          })}
        </div>

        <div className="absolute bottom-0 w-full bg-white border-t border-slate-200 p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
          <div className="grid grid-cols-3 gap-1 bg-slate-100/90 rounded-xl p-1.5 border border-slate-200/70 shadow-sm w-full overflow-hidden">
            <button
              onClick={() => { setViewMode('lesson'); resetQuiz(); }}
              className={`min-w-0 py-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer ${viewMode === 'lesson' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-blue-700 hover:bg-blue-50'}`}
            >
              <BookOpen size={14} className="shrink-0" />
              <span className="truncate">Giáo Trình</span>
            </button>
            <button
              onClick={() => setViewMode('quiz')}
              className={`min-w-0 py-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer ${viewMode === 'quiz' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-blue-700 hover:bg-blue-50'}`}
            >
              <HelpCircle size={14} className="shrink-0" />
              <span className="truncate">Luyện Tập</span>
            </button>
            <button
              onClick={() => setViewMode('interview')}
              className={`min-w-0 py-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer ${viewMode === 'interview' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-blue-700 hover:bg-blue-50'}`}
            >
              <Trophy size={14} className="shrink-0" />
              <span className="truncate">Phỏng Vấn</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
