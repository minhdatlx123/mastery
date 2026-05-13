// ==========================================
// SQL Mastery - Type Definitions
// ==========================================

// --- Diagram Types ---
export type DiagramType =
  | 'database'
  | 'ddl'
  | 'dml'
  | 'keys'
  | 'joins'
  | 'groupby'
  | 'cte'
  | 'window'
  | 'index'
  | 'trigger';

// --- Course Section Types (Discriminated Union) ---
export interface HeadingSection {
  type: 'heading';
  content: string;
}

export interface SubheadingSection {
  type: 'subheading';
  content: string;
}

export interface TextSection {
  type: 'text';
  content: string;
}

export interface DiagramSection {
  type: 'diagram';
  diagramType: DiagramType;
  title: string;
}

export interface NoteSection {
  type: 'note';
  content: string;
}

export interface PracticeSection {
  type: 'practice';
  instruction: string;
  query: string;
}

export type CourseSection =
  | HeadingSection
  | SubheadingSection
  | TextSection
  | DiagramSection
  | NoteSection
  | PracticeSection;

// --- Quiz ---
export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
}

// --- Course Module ---
export type ModuleLevel = 'beginner' | 'advanced';

export interface CourseModule {
  id: number;
  level: ModuleLevel;
  title: string;
  sections: CourseSection[];
  quiz: QuizQuestion[];
}

// --- Terminal ---
export type LogType = 'info' | 'query' | 'result' | 'ai-loading' | 'ai-explain' | 'error';

export interface LogEntry {
  time: string;
  type: LogType;
  text: string;
}

// --- View Mode ---
export type ViewMode = 'lesson' | 'quiz' | 'interview';

// --- Login View ---
export type LoginViewType = 'login' | 'forgot';

// --- Component Props ---
export interface VisualDiagramProps {
  type: DiagramType;
  title: string;
}

export interface SidebarProps {
  activeModule: CourseModule;
  completedModules: number[];
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  changeModule: (mod: CourseModule) => void;
  resetQuiz: () => void;
  progressPercent: number;
  beginnerModules: CourseModule[];
  advancedModules: CourseModule[];
  onBackToModules?: () => void;
}

export interface HeaderProps {
  activeModule: CourseModule;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  progressPercent: number;
  isLoggedIn: boolean;
  showProfileDropdown: boolean;
  setShowProfileDropdown: (show: boolean) => void;
  handleMockLogin: () => void;
  completedModules: number[];
  totalQuizzesPassed: number;
  quizResults: QuizResult[];
  heatmapData: number[];
  setIsLoggedIn: (v: boolean) => void;
}

export interface ProfileDropdownProps {
  showProfileDropdown: boolean;
  setShowProfileDropdown: (show: boolean) => void;
  completedModules: number[];
  totalQuizzesPassed: number;
  quizResults: QuizResult[];
  heatmapData: number[];
  setIsLoggedIn: (v: boolean) => void;
}

export interface TerminalProps {
  isTerminalOpen: boolean;
  setIsTerminalOpen: (open: boolean) => void;
  terminalHeight: number;
  terminalWidth: number;
  logs: LogEntry[];
  terminalInput: string;
  setTerminalInput: (v: string) => void;
  handleTerminalKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  clearLogs: () => void;
  setIsDraggingTerminal: (v: boolean) => void;
}

export interface LessonViewProps {
  activeModule: CourseModule;
  handleRunSQL: (query: string) => void;
  handleAIExplain: (query: string) => void;
  isExplainingCode: boolean;
  onStartQuiz: () => void;
}

export interface QuizViewProps {
  currentQuizList: QuizQuestion[];
  currentQuestionIdx: number;
  selectedAnswer: number | null;
  quizScore: number;
  quizCompleted: boolean;
  isGeneratingQuiz: boolean;
  handleAnswerSelect: (idx: number) => void;
  handleNextQuestion: () => void;
  resetQuiz: () => void;
  handleGenerateAIQuiz: () => void;
  activeModule: CourseModule;
  changeModule: (mod: CourseModule) => void;
}

export interface LoginFormProps {
  onLoginSuccess: () => void;
  onForgotPassword: () => void;
}

export interface ForgotPasswordFormProps {
  onBackToLogin: () => void;
}

export interface SocialLoginProps {
  onLoginSuccess: () => void;
}

// --- AI Chat ---
export interface AIChatMessage {
  role: 'user' | 'ai';
  content: string;
  timestamp: string;
}

export interface AIChatBoxProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  messages: AIChatMessage[];
  isLoading: boolean;
  onSendMessage: (message: string) => void;
  isTerminalOpen?: boolean;
  terminalWidth?: number;
}

// --- Quiz Modal ---
export interface QuizResult {
  moduleId: number;
  moduleTitle: string;
  score: number;
  total: number;
  timestamp: string;
}

export interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeModule: CourseModule;
  onComplete: (score: number, total: number) => void;
}

// --- Interview Prep ---
export type ProblemDifficulty = 'easy' | 'medium' | 'hard';

export interface InterviewProblem {
  id: number;
  category: string;
  title: string;
  difficulty: ProblemDifficulty;
  description: string;
  tables: string;
  hint: string;
  sampleAnswer: string;
  explanation: string;
}

export interface InterviewPrepViewProps {
  problems: InterviewProblem[];
  handleRunSQL: (query: string) => void;
  solvedProblems: number[];
  onToggleSolved: (id: number) => void;
}
