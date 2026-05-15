import { useState } from 'react';
import { BookOpen, Award, Activity, LogOut, CheckCircle2, ChevronDown, Trophy, X, FileText, HelpCircle } from 'lucide-react';
import type { ProfileDropdownProps, QuizResult } from '../types';
import { courseData } from '../data/courseData';
import type { CourseModule } from '../types';

type ReviewModalData =
  | { type: 'module'; module: CourseModule }
  | { type: 'quiz'; result: QuizResult; module: CourseModule | undefined };

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  showProfileDropdown,
  setShowProfileDropdown,
  completedModules,
  quizResults,
  heatmapData,
  setIsLoggedIn,
}) => {
  const [showModuleDetails, setShowModuleDetails] = useState(false);
  const [showQuizDetails, setShowQuizDetails] = useState(false);
  const [reviewModal, setReviewModal] = useState<ReviewModalData | null>(null);

  const getHeatmapColor = (level: number): string => {
    if(level === 1) return 'bg-emerald-200';
    if(level === 2) return 'bg-emerald-400';
    if(level === 3) return 'bg-emerald-500';
    if(level >= 4) return 'bg-emerald-700';
    return 'bg-slate-100'; 
  };

  const openModuleReview = (moduleId: number) => {
    const mod = courseData.find(m => m.id === moduleId);
    if (mod) {
      setReviewModal({ type: 'module', module: mod });
    }
  };

  const openQuizReview = (qr: QuizResult) => {
    const mod = courseData.find(m => m.id === qr.moduleId);
    setReviewModal({ type: 'quiz', result: qr, module: mod });
  };

  return (
    <>
      {showProfileDropdown && <div className="fixed inset-0 z-40" onClick={() => setShowProfileDropdown(false)}></div>}
      
      <div 
         className={`absolute right-0 top-11 w-[340px] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.18)] border border-slate-100 z-50 origin-top-right transition-all duration-200 overflow-hidden ${showProfileDropdown ? 'scale-100 opacity-100 translate-y-0 visible' : 'scale-95 opacity-0 -translate-y-2 invisible'}`}
      >
         {/* User Header */}
         <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-slate-50/50 rounded-t-2xl">
            <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white shadow-sm overflow-hidden shrink-0">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=e2e8f0" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
               <span className="font-bold text-slate-800 text-sm leading-tight">Hoàng Developer</span>
               <span className="text-[11px] text-slate-500">hoangdev@gmail.com</span>
            </div>
         </div>

         {/* Stats - Clickable Cards */}
         <div className="p-4 border-b border-slate-100 space-y-3">
            <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Thống kê học tập</h4>
            
            {/* Modules Card - Expandable */}
            <div 
              className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden transition-all"
              onClick={() => setShowModuleDetails(!showModuleDetails)}
            >
              <div className="p-3 flex items-center justify-between cursor-pointer">
                <div>
                  <div className="text-slate-500 text-[10px] font-bold flex items-center gap-1"><BookOpen size={12}/> Bài đã học</div>
                  <div className="text-xl font-black text-slate-800 mt-0.5">{completedModules.length}<span className="text-xs font-bold text-slate-400">/{courseData.length}</span></div>
                </div>
                <ChevronDown size={14} className={`text-slate-400 transition-transform ${showModuleDetails ? 'rotate-180' : ''}`} />
              </div>
              {showModuleDetails && completedModules.length > 0 && (
                <div className="border-t border-slate-100 px-3 py-2 space-y-1 max-h-[120px] overflow-y-auto">
                  {completedModules.sort((a,b) => a-b).map(id => {
                    const mod = courseData.find(m => m.id === id);
                    return (
                      <button
                        key={id}
                        onClick={(e) => { e.stopPropagation(); openModuleReview(id); }}
                        className="w-full flex items-center gap-2 text-[11px] py-1.5 px-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer text-left group"
                      >
                        <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                        <span className="text-slate-600 font-medium truncate group-hover:text-blue-600 transition-colors">{mod?.title}</span>
                        <FileText size={10} className="text-slate-300 group-hover:text-blue-400 ml-auto shrink-0 transition-colors" />
                      </button>
                    );
                  })}
                </div>
              )}
              {showModuleDetails && completedModules.length === 0 && (
                <div className="border-t border-slate-100 px-3 py-3 text-[11px] text-slate-400 italic text-center">
                  Chưa hoàn thành module nào
                </div>
              )}
            </div>

            {/* Quiz Card - Expandable */}
            <div 
              className="bg-emerald-50 rounded-xl border border-emerald-100 overflow-hidden transition-all"
              onClick={() => setShowQuizDetails(!showQuizDetails)}
            >
              <div className="p-3 flex items-center justify-between cursor-pointer">
                <div>
                  <div className="text-emerald-600 text-[10px] font-bold flex items-center gap-1"><Award size={12}/> Quiz đã giải</div>
                  <div className="text-xl font-black text-emerald-700 mt-0.5">{quizResults.length}</div>
                </div>
                <ChevronDown size={14} className={`text-emerald-400 transition-transform ${showQuizDetails ? 'rotate-180' : ''}`} />
              </div>
              {showQuizDetails && quizResults.length > 0 && (() => {
                // Group quizzes by moduleId, show only latest attempt per module
                const uniqueQuizzes = Object.values(
                  quizResults.reduce((acc, qr) => {
                    if (!acc[qr.moduleId] || qr.timestamp > acc[qr.moduleId].timestamp) {
                      acc[qr.moduleId] = qr;
                    }
                    return acc;
                  }, {} as Record<number, typeof quizResults[0]>)
                );
                return (
                <div className="border-t border-emerald-100 px-3 py-2 space-y-1 max-h-[150px] overflow-y-auto">
                  {uniqueQuizzes.map((qr, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); openQuizReview(qr); }}
                      className="w-full flex items-center justify-between text-[11px] py-1.5 px-2 rounded-lg hover:bg-emerald-100/60 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <Trophy size={11} className="text-amber-500 shrink-0" />
                        <span className="text-slate-600 font-medium truncate group-hover:text-emerald-700 transition-colors">{qr.moduleTitle.split('. ')[1] || qr.moduleTitle}</span>
                      </div>
                      <span className={`font-black text-[10px] px-1.5 py-0.5 rounded shrink-0 ml-2 ${qr.score >= Math.ceil(qr.total / 2) ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-500'}`}>
                        {qr.score}/{qr.total}
                      </span>
                    </button>
                  ))}
                </div>
              ); })()}
              {showQuizDetails && quizResults.length === 0 && (
                <div className="border-t border-emerald-100 px-3 py-3 text-[11px] text-emerald-400 italic text-center">
                  Chưa làm bài kiểm tra nào
                </div>
              )}
            </div>
         </div>

         {/* Heatmap */}
         <div className="p-4 border-b border-slate-100">
            <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2.5 flex items-center gap-1.5"><Activity size={12}/> Activity 30 ngày</h4>
            <div className="grid grid-cols-7 gap-1">
               {heatmapData.map((level, i) => (
                  <div key={i} className={`w-full aspect-square rounded-[3px] ${getHeatmapColor(level)}`} title={`Level: ${level}`}></div>
               ))}
            </div>
            <div className="flex items-center justify-end gap-1 mt-1.5 text-[9px] font-medium text-slate-400">
               Ít <div className="w-2 h-2 rounded-[2px] bg-slate-100"></div><div className="w-2 h-2 rounded-[2px] bg-emerald-200"></div><div className="w-2 h-2 rounded-[2px] bg-emerald-400"></div><div className="w-2 h-2 rounded-[2px] bg-emerald-700"></div> Nhiều
            </div>
         </div>

         <div className="p-2">
            <button 
               onClick={() => { setIsLoggedIn(false); setShowProfileDropdown(false); }}
               className="w-full text-left px-4 py-2 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
            >
               <LogOut size={15} /> Đăng xuất
            </button>
         </div>
      </div>

      {/* ====== REVIEW MODAL (Full-screen overlay) ====== */}
      {reviewModal && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => setReviewModal(null)}
        >
          {/* Blur backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <div 
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-hidden animate-[scaleIn_0.2s_ease]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`px-6 py-4 border-b flex items-center justify-between ${
              reviewModal.type === 'module' 
                ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100' 
                : 'bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-100'
            }`}>
              <div className="flex items-center gap-3 min-w-0">
                <div className={`p-2 rounded-xl ${
                  reviewModal.type === 'module' ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'
                }`}>
                  {reviewModal.type === 'module' ? <BookOpen size={18} /> : <HelpCircle size={18} />}
                </div>
                <div className="min-w-0">
                  <p className={`text-[10px] font-bold uppercase tracking-wider ${
                    reviewModal.type === 'module' ? 'text-blue-500' : 'text-emerald-500'
                  }`}>
                    {reviewModal.type === 'module' ? '📖 Ôn lại bài học' : '📝 Kết quả Quiz'}
                  </p>
                  <h3 className="font-bold text-slate-800 text-sm truncate">
                    {reviewModal.type === 'module' ? reviewModal.module.title : reviewModal.result.moduleTitle}
                  </h3>
                </div>
              </div>
              <button 
                onClick={() => setReviewModal(null)}
                className="p-1.5 hover:bg-white/60 rounded-lg transition-colors cursor-pointer shrink-0"
              >
                <X size={18} className="text-slate-400" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-5 overflow-y-auto max-h-[65vh] space-y-4">
              {/* === MODULE REVIEW === */}
              {reviewModal.type === 'module' && (
                <>
                  {/* Level Badge */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${
                    reviewModal.module.level === 'advanced' 
                      ? 'bg-purple-100 text-purple-600' 
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {reviewModal.module.level === 'advanced' ? '🚀 Nâng Cao' : '🌱 Cơ bản'}
                  </div>

                  {/* Sections Summary */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nội dung đã học</h4>
                    {reviewModal.module.sections.map((section, idx) => (
                      <div key={idx} className="text-sm">
                        {section.type === 'heading' && (
                          <h3 className="font-black text-slate-800 text-base border-l-3 border-blue-500 pl-3">
                            {section.content}
                          </h3>
                        )}
                        {section.type === 'subheading' && (
                          <h4 className="font-bold text-slate-700 text-sm mt-2 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                            {section.content}
                          </h4>
                        )}
                        {section.type === 'text' && (
                          <p className="text-slate-600 text-[13px] leading-relaxed">{section.content}</p>
                        )}
                        {section.type === 'note' && (
                          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-[12px] text-amber-900 whitespace-pre-line leading-relaxed">
                            {section.content}
                          </div>
                        )}
                        {section.type === 'practice' && (
                          <div className="bg-slate-900 rounded-xl p-3 mt-1">
                            <p className="text-[10px] text-slate-400 font-bold mb-1.5">💻 {section.instruction}</p>
                            <pre className="text-emerald-400 text-xs font-mono whitespace-pre-wrap overflow-x-auto">{section.query}</pre>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                </>
              )}

              {/* === QUIZ REVIEW === */}
              {reviewModal.type === 'quiz' && (
                <>
                  {/* Score Card */}
                  <div className={`text-center p-5 rounded-2xl border ${
                    reviewModal.result.score >= Math.ceil(reviewModal.result.total / 2) 
                      ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200' 
                      : 'bg-gradient-to-br from-red-50 to-orange-50 border-red-200'
                  }`}>
                    <div className="text-4xl font-black mb-1">
                      {reviewModal.result.score >= Math.ceil(reviewModal.result.total / 2) ? '🎉' : '😥'}
                    </div>
                    <div className={`text-3xl font-black ${
                      reviewModal.result.score >= Math.ceil(reviewModal.result.total / 2) ? 'text-emerald-600' : 'text-red-500'
                    }`}>
                      {reviewModal.result.score}/{reviewModal.result.total}
                    </div>
                    <p className="text-sm font-bold text-slate-500 mt-1">
                      {reviewModal.result.score >= Math.ceil(reviewModal.result.total / 2) ? 'Đạt yêu cầu ✅' : 'Chưa đạt ❌'}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">⏰ {reviewModal.result.timestamp}</p>
                  </div>

                  {/* Module Quiz Questions Review */}
                  {reviewModal.module && reviewModal.module.quiz.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                        📋 Đáp án chi tiết
                      </h4>
                      <div className="space-y-2.5">
                        {reviewModal.module.quiz.map((q, idx) => (
                          <div key={idx} className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                            <p className="text-[12px] font-semibold text-slate-700 mb-2">
                              <span className="text-emerald-500 font-bold">Q{idx + 1}.</span> {q.question}
                            </p>
                            <div className="space-y-1">
                              {q.options.map((opt, oi) => (
                                <div key={oi} className={`text-[11px] px-2.5 py-1.5 rounded-lg flex items-center gap-2 ${
                                  oi === q.answer 
                                    ? 'bg-emerald-100 text-emerald-700 font-bold border border-emerald-200' 
                                    : 'bg-white text-slate-500 border border-slate-100'
                                }`}>
                                  {oi === q.answer && <CheckCircle2 size={11} className="shrink-0" />}
                                  <span className={oi !== q.answer ? 'ml-[19px]' : ''}>{opt}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default ProfileDropdown;
