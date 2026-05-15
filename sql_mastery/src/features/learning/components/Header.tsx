import { Menu, Sprout, Rocket } from 'lucide-react';
import ProfileDropdown from './ProfileDropdown';
import type { HeaderProps } from '../types';

const Header: React.FC<HeaderProps> = ({
  activeModule,
  sidebarOpen,
  setSidebarOpen,
  progressPercent,
  isLoggedIn,
  showProfileDropdown,
  setShowProfileDropdown,
  handleMockLogin,
  completedModules,
  totalQuizzesPassed,
  quizResults,
  heatmapData,
  setIsLoggedIn,
}) => {
  return (
    <header className="bg-white border-b border-slate-200 px-4 py-[11px] flex items-center justify-between shrink-0 z-30 sticky top-0">
      <div className="flex items-center gap-3">
        
        {/* Hamburger Button (shown when sidebar closed) */}
        {!sidebarOpen && (
          <button 
            onClick={() => setSidebarOpen(true)} 
            className="relative flex items-center justify-center w-8 h-8 -ml-1 rounded-full hover:bg-slate-50 transition-colors group focus:outline-none shrink-0"
          >
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle cx="16" cy="16" r="14" stroke="#e2e8f0" strokeWidth="2" fill="none" />
              <circle 
                 cx="16" cy="16" r="14" stroke="#2563eb" strokeWidth="2" fill="none" strokeLinecap="round"
                 style={{
                    strokeDasharray: 2 * Math.PI * 14,
                    strokeDashoffset: 2 * Math.PI * 14 - (progressPercent / 100) * (2 * Math.PI * 14),
                    transition: 'stroke-dashoffset 0.8s ease-in-out'
                 }}
              />
            </svg>
            <Menu size={16} className="text-slate-700 group-hover:text-blue-600 transition-colors" />
          </button>
        )}

        <div className="flex flex-col justify-center overflow-hidden">
           <span className={`text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 ${activeModule.level === 'advanced' ? 'text-purple-600' : 'text-blue-600'}`}>
             {activeModule.level === 'advanced' ? <><Rocket size={10}/> NÂNG CAO</> : <><Sprout size={10}/> CƠ BẢN</>}
           </span>
           <h1 className="font-bold text-sm md:text-base text-slate-900 truncate tracking-tight leading-tight">{activeModule.title}</h1>
        </div>
      </div>
      
      {/* User Profile Section */}
      <div className="relative shrink-0 ml-4 z-50">
         <button 
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            className={`flex items-center gap-1.5 p-1 pr-2.5 rounded-full border transition-all ${isLoggedIn ? 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300' : 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:shadow-md'}`}
         >
            {isLoggedIn ? (
               <>
                 <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold overflow-hidden border border-blue-200 shrink-0">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=e2e8f0" alt="Avatar" className="w-full h-full object-cover" />
                 </div>
                 <span className="text-xs font-bold text-slate-700 hidden sm:block">Hoàng Developer</span>
               </>
            ) : (
               <span className="text-sm font-bold px-2 py-0.5" onClick={handleMockLogin}>Đăng nhập</span>
            )}
         </button>

         {/* Profile Dropdown */}
         {isLoggedIn && (
           <ProfileDropdown
             showProfileDropdown={showProfileDropdown}
             setShowProfileDropdown={setShowProfileDropdown}
             completedModules={completedModules}
             totalQuizzesPassed={totalQuizzesPassed}
             quizResults={quizResults}
             heatmapData={heatmapData}
             setIsLoggedIn={setIsLoggedIn}
           />
         )}
      </div>
    </header>
  );
};

export default Header;
