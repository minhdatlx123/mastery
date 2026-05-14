import { ModuleSelectPageView } from '../components/pages/ModuleSelectPageView';
import { useModuleSelectPage } from '../hooks/useModuleSelectPage';

const ModuleSelectPage: React.FC = () => {
  const {
    animateIn,
    hoveredSubjectId,
    handleLogout,
    handleSubjectHover,
    handleSelectSubject,
  } = useModuleSelectPage();

  return (
    <ModuleSelectPageView
      animateIn={animateIn}
      hoveredSubjectId={hoveredSubjectId}
      onLogout={handleLogout}
      onHoverSubject={handleSubjectHover}
      onSelectSubject={handleSelectSubject}
    />
  );
};

export default ModuleSelectPage;
