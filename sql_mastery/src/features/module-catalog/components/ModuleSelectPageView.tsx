import {
  LogOut,
  GraduationCap,
  Megaphone,
  Briefcase,
  ChevronRight,
  Zap,
  BookOpen,
  Trophy,
  Clock,
  Bot,
  ArrowRight,
  Lock,
  Sparkles,
} from 'lucide-react';
import { moduleStats, moduleSubjects } from '../data/moduleSubjectData';
import type { ModuleStatsItem, ModuleSubject } from '../types/moduleSelect';

interface ModuleSelectPageViewProps {
  animateIn: boolean;
  hoveredSubjectId: string | null;
  onLogout: () => void;
  onHoverSubject: (subjectId: string | null) => void;
  onSelectSubject: (subject: ModuleSubject) => void;
}

const renderSubjectIcon = (iconType: ModuleSubject['iconType']) => {
  if (iconType === 'digital') return <GraduationCap size={34} />;
  if (iconType === 'marketing') return <Megaphone size={34} />;
  return <Briefcase size={34} />;
};

const renderStatsIcon = (iconType: ModuleStatsItem['iconType']) => {
  if (iconType === 'book') return <BookOpen size={16} />;
  if (iconType === 'quiz') return <Trophy size={16} />;
  if (iconType === 'practice') return <Zap size={16} />;
  return <Bot size={16} />;
};

export const ModuleSelectPageView: React.FC<ModuleSelectPageViewProps> = ({
  animateIn,
  hoveredSubjectId,
  onLogout,
  onHoverSubject,
  onSelectSubject,
}) => {
  return (
    <div
      className="min-h-screen overflow-x-hidden overflow-y-auto"
      style={{
        background: 'linear-gradient(135deg, #09090f 0%, #0d1117 50%, #0a0d1a 100%)',
        fontFamily: "'Noto Sans', sans-serif",
      }}
    >
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-15%] left-[-5%] w-[700px] h-[700px] rounded-full opacity-[0.07] animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent)', filter: 'blur(120px)' }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.07] animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, #3b82f6, transparent)',
            filter: 'blur(120px)',
            animationDelay: '2s',
          }}
        />
      </div>

      <header className="relative z-20 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="p-2 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                boxShadow: '0 4px 16px rgba(99,102,241,0.35)',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
            </div>
            <span className="font-black text-xl tracking-tight text-white">Mastery</span>
          </div>

          <div className="flex items-center gap-3">
            <div
              className="hidden sm:flex items-center gap-2.5 px-3 py-2 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="w-7 h-7 rounded-full overflow-hidden border border-blue-400/30">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=e2e8f0"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-semibold text-slate-300">Hoàng Developer</span>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-red-400 transition-colors px-3 py-2 rounded-lg"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <LogOut size={15} />
              <span className="hidden sm:inline">Đăng xuất</span>
            </button>
          </div>
        </div>
      </header>

      <section
        className={`relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-10 text-center transition-all duration-700 ${
          animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
          style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)' }}
        >
          <Sparkles size={13} className="text-indigo-400" />
          <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">
            Nền tảng học đa ngành thực chiến
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-black leading-tight text-white mb-5" style={{ letterSpacing: '-0.02em' }}>
          Chọn Lộ Trình
          <br />
          <span
            style={{
              background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #34d399)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Phù Hợp Với Bạn
          </span>
        </h1>

        <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed font-medium mb-12">
          Học theo lộ trình bài bản, thực hành sát thực tế và mở rộng kỹ năng ở nhiều nhóm ngành khác nhau với AI đồng hành.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          {moduleStats.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <span style={{ color: item.color }}>{renderStatsIcon(item.iconType)}</span>
              <div className="text-left">
                <div className="text-white font-bold text-sm">{item.value}</div>
                <div className="text-slate-500 text-xs font-medium">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className={`relative z-10 max-w-6xl mx-auto px-6 pb-24 transition-all duration-700 delay-150 ${
          animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moduleSubjects.map((subject) => {
            const isHovered = hoveredSubjectId === subject.id;
            return (
              <button
                key={subject.id}
                onClick={() => onSelectSubject(subject)}
                onMouseEnter={() => onHoverSubject(subject.id)}
                onMouseLeave={() => onHoverSubject(null)}
                disabled={!subject.available}
                className={`relative text-left rounded-3xl p-7 transition-all duration-300 group ${
                  subject.available ? 'cursor-pointer hover:-translate-y-2' : 'cursor-not-allowed opacity-60'
                }`}
                style={{
                  background: isHovered && subject.available
                    ? 'linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)'
                    : 'rgba(255,255,255,0.035)',
                  border: `1px solid ${isHovered && subject.available ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.07)'}`,
                  boxShadow: isHovered && subject.available
                    ? `0 24px 60px ${subject.color.glow}, 0 0 0 1px rgba(255,255,255,0.06)`
                    : 'none',
                }}
              >
                {!subject.available && (
                  <div
                    className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <Lock size={11} className="text-slate-400" />
                    <span className="text-[11px] font-bold text-slate-400">Coming Soon</span>
                  </div>
                )}

                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${subject.color.from}, ${subject.color.to})`,
                    boxShadow: `0 8px 24px ${subject.color.glow}`,
                    color: 'white',
                  }}
                >
                  {renderSubjectIcon(subject.iconType)}
                </div>

                <h2 className="text-2xl font-black text-white mb-2 tracking-tight">{subject.name}</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 font-medium">{subject.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {subject.tags.map((tag) => (
                    <span key={tag} className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${subject.color.badge} ${subject.color.badgeText}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5 text-xs text-slate-500 mb-6 font-semibold">
                  <span className="flex items-center gap-1.5"><BookOpen size={13} /> {subject.totalModules} bài học</span>
                  <span className="flex items-center gap-1.5"><Trophy size={13} /> {subject.quizCount}+ quiz</span>
                  <span className="flex items-center gap-1.5"><Clock size={13} /> {subject.duration}</span>
                </div>

                {subject.available ? (
                  <div
                    className="flex items-center gap-2 font-bold text-sm py-3 px-5 rounded-xl transition-all duration-200 justify-center"
                    style={{
                      background: isHovered
                        ? `linear-gradient(135deg, ${subject.color.from}, ${subject.color.to})`
                        : 'rgba(255,255,255,0.06)',
                      color: isHovered ? 'white' : '#94a3b8',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    Bắt đầu học ngay
                    <ArrowRight size={15} className={`transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`} />
                  </div>
                ) : (
                  <div
                    className="flex items-center gap-2 font-bold text-sm py-3 px-5 rounded-xl justify-center"
                    style={{ background: 'rgba(255,255,255,0.04)', color: '#4b5563', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <Lock size={14} />
                    Sắp ra mắt
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <ChevronRight size={14} className="text-slate-500" />
            <span className="text-sm text-slate-500 font-medium">
              Nhiều lộ trình mới cho các nhóm ngành khác sẽ được bổ sung sớm
            </span>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t py-8" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-600 text-sm font-medium">© 2026 Mastery · Nền tảng học đa ngành thực chiến</p>
        </div>
      </footer>
    </div>
  );
};

