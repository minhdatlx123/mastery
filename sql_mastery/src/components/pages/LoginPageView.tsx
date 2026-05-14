import LoginHero from '../LoginHero';
import LoginForm from '../LoginForm';
import ForgotPasswordForm from '../ForgotPasswordForm';
import SocialLogin from '../SocialLogin';
import type { LoginViewType } from '../../types';

interface LoginPageViewProps {
  currentView: LoginViewType;
  onLoginSuccess: () => void;
  onShowForgotPassword: () => void;
  onShowLogin: () => void;
}

export const LoginPageView: React.FC<LoginPageViewProps> = ({
  currentView,
  onLoginSuccess,
  onShowForgotPassword,
  onShowLogin,
}) => {
  return (
    <div className="flex min-h-screen w-full bg-white">
      <LoginHero />

      <div className="w-full lg:w-1/2 min-h-screen bg-white flex items-center justify-center px-6 py-10 sm:px-10 sm:py-12 relative overflow-y-auto hide-scrollbar">
        <div className="absolute top-6 left-6 lg:hidden flex items-center gap-2 font-black text-xl text-slate-900 tracking-tight">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" y1="19" x2="20" y2="19"></line>
            </svg>
          </div>
          Mastery
        </div>

        {currentView === 'login' && (
          <div className="w-full max-w-md space-y-6">
            <LoginForm onLoginSuccess={onLoginSuccess} onForgotPassword={onShowForgotPassword} />
            <SocialLogin onLoginSuccess={onLoginSuccess} />
          </div>
        )}

        {currentView === 'forgot' && (
          <ForgotPasswordForm onBackToLogin={onShowLogin} />
        )}
      </div>
    </div>
  );
};
