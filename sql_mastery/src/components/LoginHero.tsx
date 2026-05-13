const LoginHero: React.FC = () => {
  return (
    <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-[#0f172a] items-center justify-center flex-col p-12 z-0">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-30 animate-pulse-glow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-30 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 w-full max-w-lg">
        {/* Branding */}
        <div className="flex items-center gap-3 font-black text-3xl text-white tracking-tight mb-8">
          <div className="bg-blue-600 text-white p-2 rounded-xl shadow-lg shadow-blue-600/30">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" y1="19" x2="20" y2="19"></line>
            </svg>
          </div>
          SQL<span className="text-blue-500 font-light">Mastery</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
          Làm chủ cơ sở dữ liệu <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">từ con số 0.</span>
        </h1>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-12 border-l-4 border-blue-500 pl-4 font-medium">
          Nền tảng học SQL trực quan nhất. Code trực tiếp trên Terminal giả lập, theo dõi tiến trình học tập chuyên sâu và được hỗ trợ sửa lỗi 1-kèm-1 bởi AI (Gemini).
        </p>

        {/* Floating Abstract UI Elements */}
        <div className="relative h-64 w-full mt-4">
          {/* Element 1 */}
          <div className="absolute top-0 left-4 bg-[#1e293b] border border-slate-700/50 p-4 rounded-2xl shadow-2xl animate-float backdrop-blur-md w-64">
            <div className="flex items-center gap-3 mb-3 border-b border-slate-700 pb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Query Result</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-3/4 bg-slate-700 rounded-full"></div>
              <div className="h-2 w-1/2 bg-slate-700 rounded-full"></div>
              <div className="h-2 w-5/6 bg-slate-700 rounded-full"></div>
            </div>
          </div>

          {/* Element 2 */}
          <div className="absolute top-20 right-4 bg-gradient-to-br from-blue-600 to-indigo-700 p-5 rounded-2xl shadow-xl shadow-blue-900/40 animate-float-delay w-56">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-bold text-sm">Hiệu suất học</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-200">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
            </div>
            <div className="flex items-end gap-2 h-12">
              <div className="w-1/4 bg-white/20 h-1/3 rounded-t-sm"></div>
              <div className="w-1/4 bg-white/40 h-2/3 rounded-t-sm"></div>
              <div className="w-1/4 bg-white/60 h-1/2 rounded-t-sm"></div>
              <div className="w-1/4 bg-white h-full rounded-t-sm"></div>
            </div>
          </div>

          {/* Element 3 */}
          <div className="absolute -bottom-4 left-24 bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
            <code className="text-emerald-300 text-xs font-mono">SELECT * FROM future_job;</code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHero;
