import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LogOut, Database, ChevronRight, Zap, BookOpen, Trophy,
  Clock, Bot, ArrowRight, Lock, Sparkles
} from 'lucide-react';

// Định nghĩa kiểu "Môn học" tổng
interface Subject {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  totalModules: number;
  quizCount: number;
  practiceCount: number;
  duration: string;
  tags: string[];
  color: {
    from: string;
    to: string;
    glow: string;
    badge: string;
    badgeText: string;
  };
  available: boolean;
  route: string;
}

const subjects: Subject[] = [
  {
    id: 'sql',
    name: 'SQL',
    description:
      'Làm chủ ngôn ngữ truy vấn dữ liệu từ nền tảng đến chuyên sâu — Database, DML, DDL, JOINs, Window Functions, Transactions và hơn thế nữa.',
    icon: <Database size={36} />,
    totalModules: 17,
    quizCount: 50,
    practiceCount: 50,
    duration: '12–18 giờ',
    tags: ['MySQL', 'PostgreSQL', 'SQL Server', 'Phỏng vấn'],
    color: {
      from: '#3b82f6',
      to: '#6366f1',
      glow: 'rgba(99, 102, 241, 0.25)',
      badge: 'bg-blue-500/15',
      badgeText: 'text-blue-300',
    },
    available: true,
    route: '/learn?module=1',
  },
  {
    id: 'react',
    name: 'React',
    description:
      'Xây dựng giao diện người dùng hiện đại với React — Hooks, Context, Router, State Management và các pattern nâng cao.',
    icon: (
      <svg viewBox="0 0 48 48" width="36" height="36" fill="none">
        <ellipse cx="24" cy="24" rx="22" ry="9" stroke="#61DAFB" strokeWidth="2.5" fill="none" />
        <ellipse cx="24" cy="24" rx="22" ry="9" stroke="#61DAFB" strokeWidth="2.5" fill="none" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="22" ry="9" stroke="#61DAFB" strokeWidth="2.5" fill="none" transform="rotate(120 24 24)" />
        <circle cx="24" cy="24" r="3.5" fill="#61DAFB" />
      </svg>
    ),
    totalModules: 20,
    quizCount: 60,
    practiceCount: 80,
    duration: '20–30 giờ',
    tags: ['Hooks', 'Router', 'Redux', 'TypeScript'],
    color: {
      from: '#06b6d4',
      to: '#0ea5e9',
      glow: 'rgba(6, 182, 212, 0.2)',
      badge: 'bg-cyan-500/15',
      badgeText: 'text-cyan-300',
    },
    available: false,
    route: '/learn?module=1',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    description:
      'Backend development với Node.js — REST API, Express, Authentication, Database integration và deployment thực chiến.',
    icon: (
      <svg viewBox="0 0 48 48" width="36" height="36" fill="none">
        <path d="M24 4L6 14v20l18 10 18-10V14L24 4Z" stroke="#68A063" strokeWidth="2.5" fill="none" />
        <path d="M24 4v36M6 14l18 10 18-10" stroke="#68A063" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    totalModules: 15,
    quizCount: 45,
    practiceCount: 60,
    duration: '15–22 giờ',
    tags: ['Express', 'REST API', 'Auth', 'MongoDB'],
    color: {
      from: '#22c55e',
      to: '#16a34a',
      glow: 'rgba(34, 197, 94, 0.2)',
      badge: 'bg-green-500/15',
      badgeText: 'text-green-300',
    },
    available: false,
    route: '/learn?module=1',
  },
];

const ModuleSelectPage: React.FC = () => {
  const navigate = useNavigate();
  const [animateIn, setAnimateIn] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => setAnimateIn(true), 80);
  }, []);

  const handleLogout = () => navigate('/login');

  const handleSelectSubject = (subject: Subject) => {
    if (!subject.available) return;
    navigate(subject.route);
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden overflow-y-auto"
      style={{ background: 'linear-gradient(135deg, #09090f 0%, #0d1117 50%, #0a0d1a 100%)', fontFamily: "'Noto Sans', sans-serif" }}
    >
      {/* Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-[-5%] w-[700px] h-[700px] rounded-full opacity-[0.07] animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent)', filter: 'blur(120px)' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.07] animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)', filter: 'blur(120px)', animationDelay: '2s' }} />
      </div>

      {/* ── HEADER ── */}
      <header className="relative z-20 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="p-2 rounded-xl"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', boxShadow: '0 4px 16px rgba(99,102,241,0.35)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
            </div>
            <span className="font-black text-xl tracking-tight text-white">
              Mastery
            </span>
          </div>

          {/* User */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2.5 px-3 py-2 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="w-7 h-7 rounded-full overflow-hidden border border-blue-400/30">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=e2e8f0"
                  alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-semibold text-slate-300">Hoàng Developer</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-red-400 transition-colors px-3 py-2 rounded-lg"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <LogOut size={15} />
              <span className="hidden sm:inline">Đăng xuất</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        className={`relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-10 text-center transition-all duration-700 ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
          style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)' }}>
          <Sparkles size={13} className="text-indigo-400" />
          <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Nền tảng học lập trình thực chiến</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-black leading-tight text-white mb-5" style={{ letterSpacing: '-0.02em' }}>
          Chọn Môn Học
          <br />
          <span style={{
            background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #34d399)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Của Bạn
          </span>
        </h1>

        <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed font-medium mb-12">
          Học theo lộ trình bài bản, thực hành trực tiếp trên môi trường giả lập và được hỗ trợ bởi AI.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-5">
          {[
            { icon: <BookOpen size={16} />, label: 'Module học', value: '17+', color: '#60a5fa' },
            { icon: <Trophy size={16} />, label: 'Bài Quiz', value: '50+', color: '#fbbf24' },
            { icon: <Zap size={16} />, label: 'Thực hành', value: '50+', color: '#34d399' },
            { icon: <Bot size={16} />, label: 'AI hỗ trợ', value: '24/7', color: '#c084fc' },
          ].map((s, i) => (
            <div key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <span style={{ color: s.color }}>{s.icon}</span>
              <div className="text-left">
                <div className="text-white font-bold text-sm">{s.value}</div>
                <div className="text-slate-500 text-xs font-medium">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SUBJECT CARDS ── */}
      <section
        className={`relative z-10 max-w-6xl mx-auto px-6 pb-24 transition-all duration-700 delay-150 ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => {
            const isHovered = hoveredId === subject.id;
            return (
              <button
                key={subject.id}
                onClick={() => handleSelectSubject(subject)}
                onMouseEnter={() => setHoveredId(subject.id)}
                onMouseLeave={() => setHoveredId(null)}
                disabled={!subject.available}
                className={`relative text-left rounded-3xl p-7 transition-all duration-300 group ${
                  subject.available
                    ? 'cursor-pointer hover:-translate-y-2'
                    : 'cursor-not-allowed opacity-60'
                }`}
                style={{
                  background: isHovered && subject.available
                    ? `linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)`
                    : 'rgba(255,255,255,0.035)',
                  border: `1px solid ${isHovered && subject.available ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.07)'}`,
                  boxShadow: isHovered && subject.available
                    ? `0 24px 60px ${subject.color.glow}, 0 0 0 1px rgba(255,255,255,0.06)`
                    : 'none',
                }}
              >
                {/* Coming Soon badge */}
                {!subject.available && (
                  <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <Lock size={11} className="text-slate-400" />
                    <span className="text-[11px] font-bold text-slate-400">Coming Soon</span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${subject.color.from}, ${subject.color.to})`,
                    boxShadow: `0 8px 24px ${subject.color.glow}`,
                    color: 'white',
                  }}
                >
                  {subject.icon}
                </div>

                {/* Name */}
                <h2 className="text-2xl font-black text-white mb-2 tracking-tight">
                  {subject.name}
                </h2>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5 font-medium">
                  {subject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {subject.tags.map((tag) => (
                    <span key={tag}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${subject.color.badge} ${subject.color.badgeText}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta stats */}
                <div className="flex items-center gap-5 text-xs text-slate-500 mb-6 font-semibold">
                  <span className="flex items-center gap-1.5"><BookOpen size={13} /> {subject.totalModules} bài học</span>
                  <span className="flex items-center gap-1.5"><Trophy size={13} /> {subject.quizCount}+ quiz</span>
                  <span className="flex items-center gap-1.5"><Clock size={13} /> {subject.duration}</span>
                </div>

                {/* CTA */}
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

        {/* Bottom hint */}
        <div className="text-center mt-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <ChevronRight size={14} className="text-slate-500" />
            <span className="text-sm text-slate-500 font-medium">Nhiều môn học mới sẽ được bổ sung trong tương lai</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t py-8" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-600 text-sm font-medium">
            © 2026 Mastery · Nền tảng học lập trình thực chiến
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ModuleSelectPage;
