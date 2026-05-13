import { useState } from 'react';
import { Mail, Lock, Loader2, Check } from 'lucide-react';
import type { LoginFormProps } from '../types';

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess, onForgotPassword }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // Redirect sang App chính
      setTimeout(() => {
        onLoginSuccess();
      }, 800);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md space-y-8 mt-12 lg:mt-0 animate-fade-in">
      <div className="text-center lg:text-left">
        <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Đăng Nhập 👋</h2>
        <p className="text-slate-500 font-medium">Đăng nhập để chinh phục hành trình làm chủ dữ liệu của bạn.</p>
      </div>

      {/* Form đăng nhập */}
      <form className="space-y-5" onSubmit={handleLogin}>
        <div className="space-y-1">
          <label className="text-sm font-bold text-slate-700">Email cá nhân</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="w-5 h-5 text-slate-400" />
            </div>
            <input 
              type="email" 
              required 
              placeholder="hoangdev@gmail.com" 
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium text-slate-800 placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <label className="text-sm font-bold text-slate-700">Mật khẩu</label>
            <button 
              type="button" 
              onClick={onForgotPassword} 
              className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors focus:outline-none"
            >
              Quên mật khẩu?
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="w-5 h-5 text-slate-400" />
            </div>
            <input 
              type="password" 
              required 
              placeholder="••••••••" 
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium text-slate-800 placeholder:text-slate-400"
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isLoading || isSuccess}
          className={`w-full font-bold py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 mt-4 disabled:opacity-70 disabled:cursor-not-allowed ${
            isSuccess 
              ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20' 
              : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
          }`}
        >
          {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
          {isSuccess && <Check className="w-5 h-5" />}
          <span>{isLoading ? 'Đang xác thực...' : isSuccess ? 'Đăng nhập thành công!' : 'Đăng nhập ngay'}</span>
        </button>
      </form>

      {/* Signup link */}
      <p className="text-center text-sm font-medium text-slate-600 mt-8">
        Bạn chưa có tài khoản? <a href="#" className="font-bold text-blue-600 hover:text-blue-700 transition-colors">Đăng ký miễn phí</a>
      </p>
    </div>
  );
};

export default LoginForm;
