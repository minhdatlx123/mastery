import { useState } from 'react';
import { CheckCircle2, XCircle, X, ArrowRight, RotateCcw, Trophy } from 'lucide-react';
import type { QuizModalProps } from '../types';

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose, activeModule, onComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  const questions = activeModule.quiz;
  const total = questions.length;
  const current = questions[currentIdx];
  const progress = ((currentIdx + (answered ? 1 : 0)) / total) * 100;
  const passed = score >= Math.ceil(total / 2);

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
  };

  const handleConfirm = () => {
    if (selected === null) return;
    const isCorrect = selected === current.answer;
    if (isCorrect) setScore(prev => prev + 1);
    setAnswered(true);
  };

  const handleNext = () => {
    if (currentIdx < total - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleSubmit = () => {
    onComplete(score + (selected === current.answer ? 1 : 0), total);
    setShowResult(true);
    // Update score for last question
    if (selected === current.answer) setScore(prev => prev + 1);
  };

  const handleRetry = () => {
    setCurrentIdx(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-[540px] max-w-full max-h-[85vh] flex flex-col overflow-hidden animate-module-switch">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold mb-0.5">Bài kiểm tra Module</p>
              <h2 className="font-bold text-base leading-tight">{activeModule.title}</h2>
            </div>
            <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors">
              <X size={16} />
            </button>
          </div>
        </div>
        
        {!showResult ? (
          <>
            {/* Progress Bar */}
            <div className="px-6 pt-4 pb-2 shrink-0">
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-2">
                <span>Câu {currentIdx + 1} / {total}</span>
                <span className="text-blue-600">{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
              </div>
            </div>

            {/* Question */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <h3 className="font-bold text-[15px] text-slate-800 mb-5 leading-relaxed">{current.question}</h3>
              <div className="space-y-2.5">
                {current.options.map((opt, i) => {
                  const letter = ['A', 'B', 'C', 'D'][i];
                  const isSelected = selected === i;
                  const isCorrect = i === current.answer;
                  
                  let style = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700';
                  if (answered) {
                    if (isCorrect) style = 'border-emerald-400 bg-emerald-50 text-emerald-800 ring-1 ring-emerald-400';
                    else if (isSelected && !isCorrect) style = 'border-red-400 bg-red-50 text-red-700 ring-1 ring-red-400';
                    else style = 'border-slate-100 text-slate-400 opacity-60';
                  } else if (isSelected) {
                    style = 'border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-blue-500';
                  }
                  
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      disabled={answered}
                      className={`w-full text-left p-3.5 rounded-xl border-2 transition-all flex items-start gap-3 group ${style}`}
                    >
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                        answered 
                          ? (isCorrect ? 'bg-emerald-500 text-white' : isSelected ? 'bg-red-500 text-white' : 'bg-slate-100 text-slate-400')
                          : (isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200')
                      }`}>
                        {answered ? (isCorrect ? <CheckCircle2 size={14} /> : isSelected ? <XCircle size={14} /> : letter) : letter}
                      </span>
                      <span className="text-[13px] font-medium leading-relaxed pt-0.5">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-slate-100 flex justify-between items-center shrink-0">
              <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors">
                Hủy bỏ
              </button>
              {!answered ? (
                <button 
                  onClick={handleConfirm}
                  disabled={selected === null}
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm disabled:opacity-30 hover:bg-blue-700 transition-all disabled:cursor-not-allowed"
                >
                  Xác nhận
                </button>
              ) : (
                <button 
                  onClick={currentIdx === total - 1 ? handleSubmit : handleNext}
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all flex items-center gap-2"
                >
                  {currentIdx === total - 1 ? (
                    <><Trophy size={14} /> Nộp bài</>
                  ) : (
                    <>Câu tiếp theo <ArrowRight size={14} /></>
                  )}
                </button>
              )}
            </div>
          </>
        ) : (
          /* Results Screen */
          <div className="flex-1 flex flex-col items-center justify-center p-8 py-12">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-5 ${passed ? 'bg-emerald-100' : 'bg-red-100'}`}>
              {passed ? <Trophy size={36} className="text-emerald-500" /> : <XCircle size={36} className="text-red-400" />}
            </div>
            <h3 className="text-xl font-black text-slate-800 mb-1">
              {passed ? 'Xuất sắc! 🎉' : 'Chưa đạt yêu cầu'}
            </h3>
            <p className="text-slate-500 text-sm mb-2">
              {passed ? 'Bạn đã hoàn thành bài kiểm tra!' : 'Hãy ôn lại bài học và thử lại nhé!'}
            </p>
            <div className="flex items-center gap-1 mt-2 mb-6">
              <span className={`text-3xl font-black ${passed ? 'text-emerald-600' : 'text-red-500'}`}>{score}</span>
              <span className="text-lg font-bold text-slate-400">/ {total}</span>
              <span className="text-sm text-slate-400 ml-1">câu đúng</span>
            </div>
            <div className="flex gap-3">
              {!passed && (
                <button onClick={handleRetry} className="px-5 py-2.5 border-2 border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
                  <RotateCcw size={14} /> Làm lại
                </button>
              )}
              <button 
                onClick={passed ? () => { onComplete(score, total); onClose(); } : onClose}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center gap-2 ${
                  passed ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                }`}
              >
                {passed ? <><ArrowRight size={14} /> Bài tiếp theo</> : 'Đóng'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModal;
