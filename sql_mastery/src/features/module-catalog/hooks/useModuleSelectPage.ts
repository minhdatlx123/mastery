import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_EVENTS } from '../../../shared/tracking/events';
import type { ModuleSubject } from '../types/moduleSelect';
import { trackEvent } from '../../../shared/utils/trackEvent';

export interface UseModuleSelectPageReturn {
  animateIn: boolean;
  hoveredSubjectId: string | null;
  handleLogout: () => void;
  handleSubjectHover: (subjectId: string | null) => void;
  handleSelectSubject: (subject: ModuleSubject) => void;
}

export const useModuleSelectPage = (): UseModuleSelectPageReturn => {
  const navigate = useNavigate();
  const [animateIn, setAnimateIn] = useState(false);
  const [hoveredSubjectId, setHoveredSubjectId] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => { 
    trackEvent(APP_EVENTS.LOGOUT_CLICK);
    navigate('/login');
  };

  const handleSelectSubject = (subject: ModuleSubject) => {
    if (!subject.available) return;
    trackEvent(APP_EVENTS.MODULE_SELECTED, subject.id);
    navigate(subject.route);
  };

  return {
    animateIn,
    hoveredSubjectId,
    handleLogout,
    handleSubjectHover: setHoveredSubjectId,
    handleSelectSubject,
  };
};

