import { LoginPageView } from '../components/pages/LoginPageView';
import { useLoginPageState } from '../hooks/useLoginPageState';

const LoginPage: React.FC = () => {
  const {
    currentView,
    showLoginView,
    showForgotPasswordView,
    handleLoginSuccess,
  } = useLoginPageState();

  return (
    <LoginPageView
      currentView={currentView}
      onLoginSuccess={handleLoginSuccess}
      onShowForgotPassword={showForgotPasswordView}
      onShowLogin={showLoginView}
    />
  );
};

export default LoginPage;
