import { Award, Sparkles, Loader2, ChevronRight } from 'lucide-react';
import { courseData } from '../../learning/data/courseData';
import type { QuizViewProps } from '../types';

const QuizView: React.FC<QuizViewProps> = ({
  currentQuizList,
  currentQuestionIdx,
  selectedAnswer,
  quizScore,
  quizCompleted,
  isGeneratingQuiz,
  handleAnswerSelect,
  handleNextQuestion,
  resetQuiz,
  handleGenerateAIQuiz,
  activeModule,
  changeModule,
}) => {
  return (
    <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 p-8 md:p-12 relative overflow-hidden">
      {isGeneratingQuiz && (
         <div className="absolute inset-0 bg-white/90 z-10 flex flex-col items-center justify-center backdrop-blur-sm">
            <Loader2 size={48} className="text-blue-600 animate-spin mb-4" />
            <p className="text-slate-800 font-bold text-lg">AI đang tạo bộ câu hỏi hóc búa cho bạn...</p>
         </div>
      )}

      {!quizCompleted ? (
        <>
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Câu hỏi {currentQuestionIdx + 1} / {currentQuizList.length}</h2>
            <span className="text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest bg-blue-50 text-blue-600">
              Trắc nghiệm Kiến thức
            </span>
          </div>
          
          <p className="text-[17px] text-slate-800 mb-8 font-semibold leading-relaxed">{currentQuizList[currentQuestionIdx].question}</p>
          
          <div className="space-y-4 mb-10">
            {currentQuizList[currentQuestionIdx].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswerSelect(idx)}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 outline-none ${
                  selectedAnswer === idx 
                    ? 'border-blue-600 bg-blue-50/50 text-blue-900 shadow-sm ring-4 ring-blue-600/10' 
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${selectedAnswer === idx ? 'border-blue-600 bg-blue-600' : 'border-slate-300'}`}>
                    {selectedAnswer === idx && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                  </div>
                  <span className="text-[16px] font-medium">{opt}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-end pt-6 border-t border-slate-100">
            <button
              disabled={selectedAnswer === null}
              onClick={handleNextQuestion}
              className={`px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-sm transition-all flex items-center gap-2 ${
                selectedAnswer !== null 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg' 
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              {currentQuestionIdx === currentQuizList.length - 1 ? 'XEM KẾT QUẢ' : 'CÂU TIẾP THEO'} <ChevronRight size={18}/>
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-10">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-50 text-emerald-500 mb-6 ring-8 ring-emerald-50/50">
            <Award size={48} strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Hoàn thành Module!</h2>
          <p className="text-slate-600 mb-10 text-lg">Bạn đã trả lời đúng <span className="font-black text-emerald-600 text-2xl mx-1">{quizScore} / {currentQuizList.length}</span> câu hỏi.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={resetQuiz}
              className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full font-bold text-sm uppercase tracking-wider transition-colors"
            >
              Làm Lại
            </button>
            <button 
              onClick={handleGenerateAIQuiz}
              disabled={isGeneratingQuiz}
              className="px-6 py-3.5 bg-purple-50 border border-purple-200 hover:bg-purple-100 text-purple-700 rounded-full font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles size={16} /> Nhờ AI Tạo Đề Mới
            </button>
            <button 
              onClick={() => {
                const nextModule = courseData.find(m => m.id === activeModule.id + 1);
                if (nextModule) changeModule(nextModule);
              }}
              disabled={activeModule.id === courseData.length}
              className={`px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                activeModule.id < courseData.length 
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg' 
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              HỌC BÀI TIẾP THEO <ChevronRight size={18}/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizView;

