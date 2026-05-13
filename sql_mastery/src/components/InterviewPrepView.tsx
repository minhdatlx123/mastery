import { useState } from 'react';
import {
  ChevronDown, ChevronUp, Lightbulb, Code2, Play, CheckCircle2,
  Trophy, Filter, Flame, Zap, Brain
} from 'lucide-react';
import type { InterviewPrepViewProps, ProblemDifficulty } from '../types';

const difficultyConfig: Record<ProblemDifficulty, { label: string; color: string; bg: string; icon: React.ReactNode }> = {
  easy: { label: 'Dễ', color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-200', icon: <Zap size={12} /> },
  medium: { label: 'Trung bình', color: 'text-amber-700', bg: 'bg-amber-50 border-amber-200', icon: <Flame size={12} /> },
  hard: { label: 'Khó', color: 'text-rose-700', bg: 'bg-rose-50 border-rose-200', icon: <Brain size={12} /> },
};

const InterviewPrepView: React.FC<InterviewPrepViewProps> = ({
  problems,
  handleRunSQL,
  solvedProblems,
  onToggleSolved,
}) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showHint, setShowHint] = useState<Record<number, boolean>>({});
  const [showAnswer, setShowAnswer] = useState<Record<number, boolean>>({});
  const [filterDifficulty, setFilterDifficulty] = useState<'all' | ProblemDifficulty>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [...new Set(problems.map(p => p.category))];
  const filtered = problems.filter(p => {
    if (filterDifficulty !== 'all' && p.difficulty !== filterDifficulty) return false;
    if (filterCategory !== 'all' && p.category !== filterCategory) return false;
    return true;
  });

  const totalSolved = solvedProblems.length;
  const easyCount = problems.filter(p => p.difficulty === 'easy').length;
  const mediumCount = problems.filter(p => p.difficulty === 'medium').length;
  const hardCount = problems.filter(p => p.difficulty === 'hard').length;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
            <Trophy size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Luyện Đề Phỏng Vấn SQL</h1>
            <p className="text-sm text-slate-500">Tổng hợp các dạng bài thường gặp khi phỏng vấn Data Analyst / Engineer</p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap gap-3 mt-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg text-sm font-semibold text-slate-600">
            <CheckCircle2 size={14} className="text-emerald-500" />
            {totalSolved}/{problems.length} đã giải
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-lg text-sm font-semibold text-emerald-600">
            <Zap size={14} /> {easyCount} Dễ
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-lg text-sm font-semibold text-amber-600">
            <Flame size={14} /> {mediumCount} TB
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-rose-50 rounded-lg text-sm font-semibold text-rose-600">
            <Brain size={14} /> {hardCount} Khó
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-slate-200">
        <Filter size={16} className="text-slate-400" />
        <div className="flex gap-1.5 bg-slate-100 rounded-lg p-1">
          {(['all', 'easy', 'medium', 'hard'] as const).map(d => (
            <button
              key={d}
              onClick={() => setFilterDifficulty(d)}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
                filterDifficulty === d
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {d === 'all' ? 'Tất cả' : difficultyConfig[d].label}
            </button>
          ))}
        </div>
        <select
          value={filterCategory}
          onChange={e => setFilterCategory(e.target.value)}
          className="text-xs font-semibold px-3 py-2 rounded-lg bg-slate-100 border-0 text-slate-600 focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
        >
          <option value="all">📂 Tất cả nhóm</option>
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Problem List */}
      <div className="space-y-3">
        {filtered.map((problem, idx) => {
          const isExpanded = expandedId === problem.id;
          const isSolved = solvedProblems.includes(problem.id);
          const dc = difficultyConfig[problem.difficulty];

          return (
            <div
              key={problem.id}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isExpanded ? 'shadow-lg border-blue-200 bg-white' : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
              } ${isSolved ? 'border-l-4 border-l-emerald-400' : ''}`}
            >
              {/* Card Header */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : problem.id)}
                className="w-full px-5 py-4 flex items-center gap-4 text-left cursor-pointer"
              >
                <div className="text-sm font-bold text-slate-400 w-7 text-center shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold rounded-md border ${dc.bg} ${dc.color}`}>
                      {dc.icon} {dc.label}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                      {problem.category}
                    </span>
                    {isSolved && (
                      <CheckCircle2 size={14} className="text-emerald-500" />
                    )}
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm truncate">{problem.title}</h3>
                </div>
                {isExpanded ? <ChevronUp size={18} className="text-slate-400 shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-5 pb-5 border-t border-slate-100 pt-4 space-y-4 animate-[fadeIn_0.2s_ease]">
                  {/* Description */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">📋 Đề bài</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">{problem.description}</p>
                  </div>

                  {/* Table Structure */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">🗃️ Cấu trúc bảng</h4>
                    <pre className="text-xs bg-slate-900 text-emerald-400 p-4 rounded-lg overflow-x-auto font-mono">
                      {problem.tables}
                    </pre>
                  </div>

                  {/* Hint */}
                  <div>
                    <button
                      onClick={() => setShowHint(prev => ({ ...prev, [problem.id]: !prev[problem.id] }))}
                      className="flex items-center gap-2 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors cursor-pointer"
                    >
                      <Lightbulb size={14} />
                      {showHint[problem.id] ? 'Ẩn gợi ý' : 'Xem gợi ý'}
                    </button>
                    {showHint[problem.id] && (
                      <div className="mt-2 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
                        💡 {problem.hint}
                      </div>
                    )}
                  </div>

                  {/* Answer */}
                  <div>
                    <button
                      onClick={() => setShowAnswer(prev => ({ ...prev, [problem.id]: !prev[problem.id] }))}
                      className="flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      <Code2 size={14} />
                      {showAnswer[problem.id] ? 'Ẩn lời giải' : 'Xem lời giải mẫu'}
                    </button>
                    {showAnswer[problem.id] && (
                      <div className="mt-2 space-y-3">
                        <pre className="text-xs bg-slate-900 text-sky-300 p-4 rounded-lg overflow-x-auto font-mono whitespace-pre-wrap">
                          {problem.sampleAnswer}
                        </pre>
                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
                          📖 <strong>Giải thích:</strong> {problem.explanation}
                        </div>
                        <button
                          onClick={() => handleRunSQL(problem.sampleAnswer)}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold rounded-lg hover:shadow-lg transition-all cursor-pointer"
                        >
                          <Play size={14} /> Chạy trên Terminal
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Mark as Solved */}
                  <div className="pt-2 border-t border-slate-100">
                    <button
                      onClick={() => onToggleSolved(problem.id)}
                      className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                        isSolved
                          ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <CheckCircle2 size={14} />
                      {isSolved ? '✅ Đã giải xong' : 'Đánh dấu đã giải'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <Filter size={40} className="mx-auto mb-3 opacity-50" />
            <p className="font-semibold">Không có bài tập nào khớp bộ lọc</p>
          </div>
        )}
      </div>

      {/* Tips Section */}
      <div className="mt-10 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
        <h3 className="font-black text-indigo-900 mb-3 flex items-center gap-2">
          <span className="text-lg">💡</span> Các "bẫy" cần lưu ý khi phỏng vấn
        </h3>
        <ul className="space-y-2 text-sm text-indigo-800">
          <li className="flex items-start gap-2">
            <span className="text-indigo-400 font-bold shrink-0">01.</span>
            <span><strong>Aggregation vs Window Function:</strong> SUM() + GROUP BY gộp dòng, SUM() OVER() giữ nguyên dòng.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-400 font-bold shrink-0">02.</span>
            <span><strong>Không dùng DISTINCT bừa:</strong> Khi bị lặp dòng, kiểm tra lại khóa JOIN trước khi dùng DISTINCT.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-400 font-bold shrink-0">03.</span>
            <span><strong>WHERE vs HAVING:</strong> WHERE lọc trước gom nhóm. HAVING lọc sau. Không dùng Alias của SELECT cho WHERE.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-400 font-bold shrink-0">04.</span>
            <span><strong>RANK vs DENSE_RANK vs ROW_NUMBER:</strong> Hiểu rõ cách xử lý đồng hạng trước khi chọn hàm.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InterviewPrepView;
