import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { LoginViewType } from '../types';
import { APP_EVENTS } from '../../../shared/tracking/events';
import { trackEvent } from '../../../shared/utils/trackEvent';

export interface UseLoginPageStateReturn {
  currentView: LoginViewType;
  showLoginView: () => void;
  showForgotPasswordView: () => void;
  handleLoginSuccess: () => void;
}

export const useLoginPageState = (): UseLoginPageStateReturn => {
  const [currentView, setCurrentView] = useState<LoginViewType>('login');
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    trackEvent(APP_EVENTS.LOGIN_SUCCESS);
    navigate('/');
  };

  return {
    currentView,
    showLoginView: () => setCurrentView('login'),
    showForgotPasswordView: () => setCurrentView('forgot'),
    handleLoginSuccess,
  };
};

