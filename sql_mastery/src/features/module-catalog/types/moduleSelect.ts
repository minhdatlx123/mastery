export interface ModuleSubject {
  id: string;
  name: string;
  description: string;
  iconType: 'digital' | 'marketing' | 'career';
  totalModules: number;
  quizCount: number;
  practiceCount: number;
  duration: string;
  tags: string[];
  color: {
    from: string;
    to: string;
    glow: string;
    badge: string;
    badgeText: string;
  };
  available: boolean;
  route: string;
}

export interface ModuleStatsItem {
  label: string;
  value: string;
  color: string;
  iconType: 'book' | 'quiz' | 'practice' | 'ai';
}
