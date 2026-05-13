import { useState } from 'react';
import { Mail, Loader2, CheckCircle2 } from 'lucide-react';
import type { ForgotPasswordFormProps } from '../types';

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onBackToLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        alert("Kiểm tra email của bạn để lấy mã OTP nhé!");
        onBackToLogin();
        // Reset trạng thái
        setIsSuccess(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md space-y-8 mt-12 lg:mt-0 animate-fade-in">
      <div className="text-center lg:text-left">
        <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Quên Mật Khẩu? 🔒</h2>
        <p className="text-slate-500 font-medium">Nhập email của bạn để hệ thống gửi mã OTP xác nhận khôi phục lại tài khoản.</p>
      </div>

      <form className="space-y-5" onSubmit={handleForgot}>
        <div className="space-y-1">
          <label className="text-sm font-bold text-slate-700">Email đã đăng ký</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="w-5 h-5 text-slate-400" />
            </div>
            <input 
              type="email" 
              required 
              placeholder="hoangdev@gmail.com" 
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all font-medium text-slate-800 placeholder:text-slate-400"
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isLoading || isSuccess}
          className={`w-full font-bold py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 mt-4 disabled:opacity-70 disabled:cursor-not-allowed ${
            isSuccess 
              ? 'bg-emerald-500 hover:bg-emerald-600 text-white' 
              : 'bg-slate-900 hover:bg-slate-800 text-white'
          }`}
        >
          {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
          {isSuccess && <CheckCircle2 className="w-5 h-5" />}
          <span>{isLoading ? 'Đang gửi mã...' : isSuccess ? 'Đã gửi mã thành công!' : 'Nhận mã OTP bảo mật'}</span>
        </button>
      </form>

      <p className="text-center text-sm font-medium text-slate-600 mt-8">
        Bạn đã nhớ ra mật khẩu? <button onClick={onBackToLogin} className="font-bold text-blue-600 hover:text-blue-700 transition-colors focus:outline-none">Quay lại đăng nhập</button>
      </p>
    </div>
  );
};

export default ForgotPasswordForm;
