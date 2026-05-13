import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginHero from '../components/LoginHero';
import LoginForm from '../components/LoginForm';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import SocialLogin from '../components/SocialLogin';
import type { LoginViewType } from '../types';

const LoginPage: React.FC = () => {
  const [currentView, setCurrentView] = useState<LoginViewType>('login');
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/');
  };

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
            <LoginForm
              onLoginSuccess={handleLoginSuccess}
              onForgotPassword={() => setCurrentView('forgot')}
            />
            <SocialLogin onLoginSuccess={handleLoginSuccess} />
          </div>
        )}

        {currentView === 'forgot' && (
          <ForgotPasswordForm onBackToLogin={() => setCurrentView('login')} />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
