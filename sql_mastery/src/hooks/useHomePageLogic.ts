import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { APP_EVENTS } from '../constants/events';
import { courseData } from '../data/courseData';
import { interviewProblems } from '../data/interviewData';
import type {
  AIChatMessage,
  CourseModule,
  LogEntry,
  QuizQuestion,
  QuizResult,
  ViewMode,
} from '../types';
import { callAIAPI, generateMockHeatmap } from '../utils/aiApi';
import { simulateSQL } from '../utils/simulateSQL';
import { trackEvent } from '../utils/trackEvent';

export interface UseHomePageLogicReturn {
  activeModule: CourseModule;
  viewMode: ViewMode;
  sidebarOpen: boolean;
  completedModules: number[];
  isLoggedIn: boolean;
  showProfileDropdown: boolean;
  totalQuizzesPassed: number;
  quizResults: QuizResult[];
  heatmapData: number[];
  solvedProblems: number[];
  isTerminalOpen: boolean;
  terminalHeight: number;
  terminalWidth: number;
  logs: LogEntry[];
  terminalInput: string;
  currentQuizList: QuizQuestion[];
  currentQuestionIdx: number;
  selectedAnswer: number | null;
  quizScore: number;
  quizCompleted: boolean;
  isGeneratingQuiz: boolean;
  quizModalOpen: boolean;
  aiChatOpen: boolean;
  aiChatMessages: AIChatMessage[];
  aiChatLoading: boolean;
  beginnerModules: CourseModule[];
  advancedModules: CourseModule[];
  progressPercent: number;
  interviewProblemsData: typeof interviewProblems;
  setSidebarOpen: (open: boolean) => void;
  setShowProfileDropdown: (show: boolean) => void;
  setIsLoggedIn: (loggedIn: boolean) => void;
  setIsTerminalOpen: (open: boolean) => void;
  setTerminalInput: (value: string) => void;
  setIsDraggingTerminal: (value: boolean) => void;
  setAiChatOpen: (open: boolean) => void;
  handleBackToModules: () => void;
  openQuizModal: () => void;
  closeQuizModal: () => void;
  handleTerminalKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleRunSQL: (query: string) => void;
  handleAIExplain: (query: string) => Promise<void>;
  handleChatSend: (message: string) => Promise<void>;
  clearLogs: () => void;
  handleAnswerSelect: (index: number) => void;
  handleNextQuestion: () => void;
  resetQuiz: () => void;
  handleGenerateAIQuiz: () => Promise<void>;
  handleQuizModalComplete: (score: number, total: number) => void;
  changeModule: (moduleItem: CourseModule) => void;
  handleMockLogin: () => void;
  onToggleSolved: (id: number) => void;
  setViewMode: (mode: ViewMode) => void;
}

export const useHomePageLogic = (): UseHomePageLogicReturn => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const initialModuleId = Number(searchParams.get('module')) || 1;
  const initialModule = courseData.find((moduleItem) => moduleItem.id === initialModuleId) || courseData[0];

  const [activeModule, setActiveModule] = useState<CourseModule>(initialModule);
  const [viewMode, setViewMode] = useState<ViewMode>('lesson');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [completedModules, setCompletedModules] = useState<number[]>([]);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [totalQuizzesPassed, setTotalQuizzesPassed] = useState(0);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [heatmapData, setHeatmapData] = useState<number[]>([]);
  const [solvedProblems, setSolvedProblems] = useState<number[]>([]);

  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [terminalHeight, setTerminalHeight] = useState(280);
  const [terminalWidth, setTerminalWidth] = useState(420);
  const [isDraggingTerminal, setIsDraggingTerminal] = useState(false);

  const [logs, setLogs] = useState<LogEntry[]>([
    {
      time: new Date().toLocaleTimeString(),
      type: 'info',
      text: 'Hệ thống terminal mô phỏng đã sẵn sàng. Nhập lệnh và nhấn Enter để bắt đầu.',
    },
  ]);
  const [terminalInput, setTerminalInput] = useState('');

  const [currentQuizList, setCurrentQuizList] = useState<QuizQuestion[]>(courseData[0].quiz);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false);

  const [quizModalOpen, setQuizModalOpen] = useState(false);

  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [aiChatMessages, setAiChatMessages] = useState<AIChatMessage[]>([]);
  const [aiChatLoading, setAiChatLoading] = useState(false);

  const beginnerModules = courseData.filter((moduleItem) => moduleItem.level === 'beginner');
  const advancedModules = courseData.filter((moduleItem) => moduleItem.level === 'advanced');

  useEffect(() => {
    setHeatmapData(generateMockHeatmap());
  }, []);

  useEffect(() => {
    if (!isDraggingTerminal) return;

    const handleMouseMove = (event: MouseEvent) => {
      event.preventDefault();

      if (window.innerWidth >= 768) {
        const nextWidth = window.innerWidth - event.clientX;
        const minDesktopWidth = 340;
        const maxDesktopWidth = Math.min(560, window.innerWidth * 0.5);
        setTerminalWidth(Math.max(minDesktopWidth, Math.min(nextWidth, maxDesktopWidth)));
        return;
      }

      const nextHeight = window.innerHeight - event.clientY;
      setTerminalHeight(Math.max(180, Math.min(nextHeight, window.innerHeight * 0.8)));
    };

    const handleMouseUp = () => setIsDraggingTerminal(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingTerminal]);

  useEffect(() => {
    setCurrentQuizList(activeModule.quiz);
  }, [activeModule]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const handleBackToModules = () => {
    navigate('/');
  };

  const appendLog = (logItem: Omit<LogEntry, 'time'>) => {
    setLogs((prevLogs) => [...prevLogs, { ...logItem, time: new Date().toLocaleTimeString() }]);
  };

  const handleTerminalKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter' || terminalInput.trim() === '') return;

    const query = terminalInput.trim();
    setTerminalInput('');
    trackEvent(APP_EVENTS.TERMINAL_COMMAND_SUBMIT, query);

    appendLog({ type: 'query', text: query });

    setTimeout(() => {
      const result = simulateSQL(query);
      appendLog({ type: 'result', text: result });
    }, 300);
  };

  const handleRunSQL = (query: string) => {
    trackEvent(APP_EVENTS.TERMINAL_RUN_SAMPLE, query);
    if (!isTerminalOpen) setIsTerminalOpen(true);

    appendLog({ type: 'query', text: query });

    setTimeout(() => {
      const result = simulateSQL(query);
      appendLog({ type: 'result', text: result });
    }, 400);
  };

  const handleAIExplain = async (query: string) => {
    trackEvent(APP_EVENTS.AI_EXPLAIN_REQUEST, query);
    setAiChatOpen(true);

    setAiChatMessages((prevMessages) => [
      ...prevMessages,
      { role: 'user', content: `Giải thích truy vấn:\n${query}`, timestamp: new Date().toLocaleTimeString() },
    ]);

    setAiChatLoading(true);

    try {
      const prompt = `Giải thích câu lệnh SQL sau theo cách dễ hiểu cho người mới, nhưng vẫn chính xác về kỹ thuật:\n\n${query}`;
      const explanation = await callAIAPI(prompt, false);

      setAiChatMessages((prevMessages) => [
        ...prevMessages,
        { role: 'ai', content: explanation as string, timestamp: new Date().toLocaleTimeString() },
      ]);
    } catch (error) {
      setAiChatMessages((prevMessages) => [
        ...prevMessages,
        { role: 'ai', content: `Lỗi: ${(error as Error).message}`, timestamp: new Date().toLocaleTimeString() },
      ]);
    } finally {
      setAiChatLoading(false);
    }
  };

  const handleChatSend = async (message: string) => {
    trackEvent(APP_EVENTS.AI_CHAT_SEND, message);

    setAiChatMessages((prevMessages) => [
      ...prevMessages,
      { role: 'user', content: message, timestamp: new Date().toLocaleTimeString() },
    ]);

    setAiChatLoading(true);

    try {
      const context = `Module hiện tại: ${activeModule.title}\n\nCâu hỏi: ${message}\n\nHãy trả lời bằng tiếng Việt, ngắn gọn và rõ ràng.`;
      const reply = await callAIAPI(context, false);

      setAiChatMessages((prevMessages) => [
        ...prevMessages,
        { role: 'ai', content: reply as string, timestamp: new Date().toLocaleTimeString() },
      ]);
    } catch (error) {
      setAiChatMessages((prevMessages) => [
        ...prevMessages,
        { role: 'ai', content: `Lỗi: ${(error as Error).message}`, timestamp: new Date().toLocaleTimeString() },
      ]);
    } finally {
      setAiChatLoading(false);
    }
  };

  const clearLogs = () => setLogs([]);
  const openQuizModal = () => setQuizModalOpen(true);
  const closeQuizModal = () => setQuizModalOpen(false);

  const handleAnswerSelect = (index: number) => setSelectedAnswer(index);

  const resetQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizCompleted(false);
  };

  const handleNextQuestion = () => {
    trackEvent(APP_EVENTS.QUIZ_NEXT_QUESTION, currentQuestionIdx);

    const isCorrectAnswer = selectedAnswer === currentQuizList[currentQuestionIdx].answer;
    const finalScore = quizScore + (isCorrectAnswer ? 1 : 0);

    if (isCorrectAnswer) setQuizScore(finalScore);

    if (currentQuestionIdx < currentQuizList.length - 1) {
      setCurrentQuestionIdx((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
      return;
    }

    setQuizCompleted(true);

    if (finalScore >= currentQuizList.length / 2) {
      if (!completedModules.includes(activeModule.id)) {
        setCompletedModules((prevModules) => [...prevModules, activeModule.id]);
      }
      setTotalQuizzesPassed((prevTotal) => prevTotal + finalScore);
    }
  };

  const handleGenerateAIQuiz = async () => {
    trackEvent(APP_EVENTS.QUIZ_GENERATE_BY_AI, activeModule.title);
    setIsGeneratingQuiz(true);

    try {
      const prompt = `Tạo 3 câu hỏi trắc nghiệm mức cơ bản về chủ đề "${activeModule.title}". Mỗi câu có 4 lựa chọn và 1 đáp án đúng.`;
      const newQuiz = await callAIAPI(prompt, true);

      if (newQuiz && (newQuiz as QuizQuestion[]).length > 0) {
        setCurrentQuizList(newQuiz as QuizQuestion[]);
        resetQuiz();
      }
    } catch {
      alert('Không thể tạo quiz AI lúc này. Vui lòng thử lại sau.');
    } finally {
      setIsGeneratingQuiz(false);
    }
  };

  const changeModule = (moduleItem: CourseModule) => {
    setActiveModule(moduleItem);
    setViewMode('lesson');
    resetQuiz();

    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const handleQuizModalComplete = (score: number, total: number) => {
    trackEvent(APP_EVENTS.QUIZ_MODAL_COMPLETE, { score, total, moduleId: activeModule.id });

    const passed = score >= Math.ceil(total / 2);

    setQuizResults((prevResults) => [
      ...prevResults,
      {
        moduleId: activeModule.id,
        moduleTitle: activeModule.title,
        score,
        total,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);

    if (!passed) return;

    if (!completedModules.includes(activeModule.id)) {
      setCompletedModules((prevModules) => [...prevModules, activeModule.id]);
    }

    setTotalQuizzesPassed((prevValue) => prevValue + 1);

    const currentIndex = courseData.findIndex((moduleItem) => moduleItem.id === activeModule.id);
    if (currentIndex < courseData.length - 1) {
      const nextModule = courseData[currentIndex + 1];
      setTimeout(() => {
        setQuizModalOpen(false);
        changeModule(nextModule);
      }, 800);
      return;
    }

    setQuizModalOpen(false);
  };

  const handleMockLogin = () => {
    setIsLoggedIn(true);
    setHeatmapData(generateMockHeatmap());
  };

  const onToggleSolved = (id: number) => {
    setSolvedProblems((prevSolved) =>
      prevSolved.includes(id) ? prevSolved.filter((itemId) => itemId !== id) : [...prevSolved, id],
    );
  };

  const progressPercent = Math.round((completedModules.length / courseData.length) * 100) || 0;

  return {
    activeModule,
    viewMode,
    sidebarOpen,
    completedModules,
    isLoggedIn,
    showProfileDropdown,
    totalQuizzesPassed,
    quizResults,
    heatmapData,
    solvedProblems,
    isTerminalOpen,
    terminalHeight,
    terminalWidth,
    logs,
    terminalInput,
    currentQuizList,
    currentQuestionIdx,
    selectedAnswer,
    quizScore,
    quizCompleted,
    isGeneratingQuiz,
    quizModalOpen,
    aiChatOpen,
    aiChatMessages,
    aiChatLoading,
    beginnerModules,
    advancedModules,
    progressPercent,
    interviewProblemsData: interviewProblems,
    setSidebarOpen,
    setShowProfileDropdown,
    setIsLoggedIn,
    setIsTerminalOpen,
    setTerminalInput,
    setIsDraggingTerminal,
    setAiChatOpen,
    handleBackToModules,
    openQuizModal,
    closeQuizModal,
    handleTerminalKeyDown,
    handleRunSQL,
    handleAIExplain,
    handleChatSend,
    clearLogs,
    handleAnswerSelect,
    handleNextQuestion,
    resetQuiz,
    handleGenerateAIQuiz,
    handleQuizModalComplete,
    changeModule,
    handleMockLogin,
    onToggleSolved,
    setViewMode,
  };
};
