import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import LessonView from '../components/LessonView';
import QuizView from '../components/QuizView';
import Terminal from '../components/Terminal';
import AIChatBox from '../components/AIChatBox';
import QuizModal from '../components/QuizModal';
import InterviewPrepView from '../components/InterviewPrepView';
import { courseData } from '../data/courseData';
import { interviewProblems } from '../data/interviewData';
import { simulateSQL } from '../utils/simulateSQL';
import { callAIAPI, generateMockHeatmap } from '../utils/aiApi';
import type { CourseModule, ViewMode, LogEntry, QuizQuestion, AIChatMessage, QuizResult } from '../types';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // Read module ID from URL query param (?module=1)
  const initialModuleId = Number(searchParams.get('module')) || 1;
  const initialModule = courseData.find(m => m.id === initialModuleId) || courseData[0];
  
  const [activeModule, setActiveModule] = useState<CourseModule>(initialModule);
  const [viewMode, setViewMode] = useState<ViewMode>('lesson'); 
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  
  // Auth & Profile State
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [totalQuizzesPassed, setTotalQuizzesPassed] = useState(0);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [heatmapData, setHeatmapData] = useState<number[]>([]);
  const [solvedProblems, setSolvedProblems] = useState<number[]>([]);

  // Terminal State
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [terminalHeight, setTerminalHeight] = useState(280);
  const [terminalWidth, setTerminalWidth] = useState(420);
  const [isDraggingTerminal, setIsDraggingTerminal] = useState(false);
  
  const [logs, setLogs] = useState<LogEntry[]>([{ time: new Date().toLocaleTimeString(), type: 'info', text: 'Há»‡ thá»‘ng giáº£ láº­p SQL CLI Ä‘Ã£ sáºµn sÃ ng. GÃµ lá»‡nh vÃ  nháº¥n Enter Ä‘á»ƒ test...' }]);
  const [terminalInput, setTerminalInput] = useState('');

  // Quiz State (for sidebar Luyá»‡n Táº­p)
  const [currentQuizList, setCurrentQuizList] = useState<QuizQuestion[]>(courseData[0].quiz);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false);

  // Quiz Modal State (for module completion)
  const [quizModalOpen, setQuizModalOpen] = useState(false);

  // AI Chat State
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [aiChatMessages, setAiChatMessages] = useState<AIChatMessage[]>([]);
  const [aiChatLoading, setAiChatLoading] = useState(false);

  const beginnerModules = courseData.filter(m => m.level === 'beginner');
  const advancedModules = courseData.filter(m => m.level === 'advanced');

  // Initialize heatmap on mount
  useEffect(() => {
    setHeatmapData(generateMockHeatmap());
  }, []);

  // Terminal Resizing Logic
  useEffect(() => {
    if (!isDraggingTerminal) return;
    const handleMouseMove = (e: MouseEvent) => {
        e.preventDefault();
        if (window.innerWidth >= 768) {
          const newWidth = window.innerWidth - e.clientX;
          setTerminalWidth(Math.max(280, Math.min(newWidth, window.innerWidth * 0.6)));
        } else {
          const newHeight = window.innerHeight - e.clientY;
          setTerminalHeight(Math.max(150, Math.min(newHeight, window.innerHeight * 0.8)));
        }
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

  // Handle logout -> redirect to login
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  // Navigate back to module selection page
  const handleBackToModules = () => {
    navigate('/');
  };

  // Terminal Handlers
  const handleTerminalKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && terminalInput.trim() !== '') {
      const query = terminalInput.trim();
      setTerminalInput('');
      const timestamp = new Date().toLocaleTimeString();
      setLogs(prev => [...prev, { time: timestamp, type: 'query', text: query }]);
      setTimeout(() => {
        const result = simulateSQL(query);
        setLogs(prev => [...prev, { time: new Date().toLocaleTimeString(), type: 'result', text: result }]);
      }, 300);
    }
  };

  const handleRunSQL = (query: string) => {
    if (!isTerminalOpen) setIsTerminalOpen(true);
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, { time: timestamp, type: 'query', text: query }]);
    setTimeout(() => {
      const result = simulateSQL(query);
      setLogs(prev => [...prev, { time: new Date().toLocaleTimeString(), type: 'result', text: result }]);
    }, 400);
  };

  // AI Explain â†’ opens chatbox
  const handleAIExplain = async (query: string) => {
    setAiChatOpen(true);
    const timestamp = new Date().toLocaleTimeString();
    setAiChatMessages(prev => [...prev, { role: 'user', content: `Giáº£i thÃ­ch SQL:\n${query}`, timestamp }]);
    setAiChatLoading(true);
    try {
      const prompt = `Giáº£i thÃ­ch cÃ¢u lá»‡nh SQL sau má»™t cÃ¡ch chuyÃªn nghiá»‡p, Ä‘i sÃ¢u vÃ o logic xá»­ lÃ½ cho ká»¹ sÆ°:\n\n${query}\n\nTráº£ lá»i trá»±c tiáº¿p, khÃ´ng chÃ o há»i.`;
      const explanation = await callAIAPI(prompt, false);
      setAiChatMessages(prev => [...prev, { role: 'ai', content: explanation as string, timestamp: new Date().toLocaleTimeString() }]);
    } catch (error) {
      setAiChatMessages(prev => [...prev, { role: 'ai', content: 'âŒ Lá»—i: ' + (error as Error).message, timestamp: new Date().toLocaleTimeString() }]);
    } finally {
      setAiChatLoading(false);
    }
  };

  // Chat with AI bot
  const handleChatSend = async (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setAiChatMessages(prev => [...prev, { role: 'user', content: message, timestamp }]);
    setAiChatLoading(true);
    try {
      const context = `Module hiá»‡n táº¡i: ${activeModule.title}\n\nCÃ¢u há»i cá»§a há»c viÃªn: ${message}\n\nTráº£ lá»i trá»±c tiáº¿p báº±ng tiáº¿ng Viá»‡t, ngáº¯n gá»n, chuyÃªn sÃ¢u. Náº¿u cÃ¢u há»i liÃªn quan Ä‘áº¿n SQL hÃ£y kÃ¨m vÃ­ dá»¥ code.`;
      const reply = await callAIAPI(context, false);
      setAiChatMessages(prev => [...prev, { role: 'ai', content: reply as string, timestamp: new Date().toLocaleTimeString() }]);
    } catch (error) {
      setAiChatMessages(prev => [...prev, { role: 'ai', content: 'âŒ ' + (error as Error).message, timestamp: new Date().toLocaleTimeString() }]);
    } finally {
      setAiChatLoading(false);
    }
  };

  const clearLogs = () => setLogs([]);

  // Quiz Handlers (sidebar Luyá»‡n Táº­p mode)
  const handleAnswerSelect = (idx: number) => setSelectedAnswer(idx);

  const handleNextQuestion = () => {
    const isCorrect = selectedAnswer === currentQuizList[currentQuestionIdx].answer;
    const finalScore = quizScore + (isCorrect ? 1 : 0);
    if (isCorrect) setQuizScore(finalScore);

    if (currentQuestionIdx < currentQuizList.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
      if (finalScore >= currentQuizList.length / 2) {
          if (!completedModules.includes(activeModule.id)) {
              setCompletedModules(prev => [...prev, activeModule.id]);
          }
          setTotalQuizzesPassed(prev => prev + finalScore);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizCompleted(false);
  };

  const handleGenerateAIQuiz = async () => {
    setIsGeneratingQuiz(true);
    try {
      const prompt = `Táº¡o 3 cÃ¢u há»i tráº¯c nghiá»‡m SQL level thá»±c chiáº¿n Ä‘i lÃ m vá» chá»§ Ä‘á»: "${activeModule.title}". Má»—i cÃ¢u cÃ³ 3-4 lá»±a chá»n vÃ  1 Ä‘Ã¡p Ã¡n Ä‘Ãºng duy nháº¥t.`;
      const newQuiz = await callAIAPI(prompt, true);
      if (newQuiz && (newQuiz as QuizQuestion[]).length > 0) {
        setCurrentQuizList(newQuiz as QuizQuestion[]);
        resetQuiz();
      }
    } catch {
      alert("KhÃ´ng thá»ƒ táº¡o Quiz AI lÃºc nÃ y. Vui lÃ²ng thá»­ láº¡i sau.");
    } finally {
      setIsGeneratingQuiz(false);
    }
  };

  // Quiz Modal complete handler â†’ records result + auto-navigates to next module
  const handleQuizModalComplete = (score: number, total: number) => {
    const passed = score >= Math.ceil(total / 2);
    
    // Record quiz result
    setQuizResults(prev => [...prev, {
      moduleId: activeModule.id,
      moduleTitle: activeModule.title,
      score,
      total,
      timestamp: new Date().toLocaleTimeString(),
    }]);

    if (passed) {
      // Mark module as completed
      if (!completedModules.includes(activeModule.id)) {
        setCompletedModules(prev => [...prev, activeModule.id]);
      }
      setTotalQuizzesPassed(prev => prev + 1);
      
      // Auto-navigate to next module
      const currentIndex = courseData.findIndex(m => m.id === activeModule.id);
      if (currentIndex < courseData.length - 1) {
        const nextModule = courseData[currentIndex + 1];
        setTimeout(() => {
          setQuizModalOpen(false);
          changeModule(nextModule);
        }, 800);
      } else {
        setQuizModalOpen(false);
      }
    }
  };

  const changeModule = (mod: CourseModule) => {
    setActiveModule(mod);
    setViewMode('lesson');
    resetQuiz();
    if (window.innerWidth < 768) setSidebarOpen(false);
  };

  const handleMockLogin = () => {
     setIsLoggedIn(true);
     setHeatmapData(generateMockHeatmap());
  };

  const progressPercent = Math.round((completedModules.length / courseData.length) * 100) || 0;

  return (
    <div className="flex h-screen bg-[#f4f6f8] font-sans text-slate-800 overflow-hidden">
      
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-slate-900/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <Sidebar
        activeModule={activeModule}
        completedModules={completedModules}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        viewMode={viewMode}
        setViewMode={setViewMode}
        changeModule={changeModule}
        resetQuiz={resetQuiz}
        progressPercent={progressPercent}
        beginnerModules={beginnerModules}
        advancedModules={advancedModules}
        onBackToModules={handleBackToModules}
      />

      {/* MAIN LAYOUT */}
      <div className={`flex-1 flex flex-col h-full relative min-w-0 transition-all duration-300 ease-in-out ${
        sidebarOpen ? 'blur-sm md:blur-none pointer-events-none md:pointer-events-auto' : ''
      }`}>
        
        <Header
          activeModule={activeModule}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          progressPercent={progressPercent}
          isLoggedIn={isLoggedIn}
          showProfileDropdown={showProfileDropdown}
          setShowProfileDropdown={setShowProfileDropdown}
          handleMockLogin={handleMockLogin}
          completedModules={completedModules}
          totalQuizzesPassed={totalQuizzesPassed}
          quizResults={quizResults}
          heatmapData={heatmapData}
          setIsLoggedIn={setIsLoggedIn}
        />

        {/* CONTENT + TERMINAL SPLIT */}
        <div className="flex-1 flex flex-col md:flex-row min-h-0 relative">
          
          {/* CONTENT AREA */}
          <div className="flex-1 overflow-y-auto p-4 md:p-10 bg-[#f4f6f8] relative min-w-0">
            <div className="max-w-3xl mx-auto pb-12">
            <div key={`${activeModule.id}-${viewMode}`} className="animate-module-switch">
              {/* LESSON VIEW */}
              {viewMode === 'lesson' && (
                <LessonView
                  activeModule={activeModule}
                  handleRunSQL={handleRunSQL}
                  handleAIExplain={handleAIExplain}
                  isExplainingCode={aiChatLoading}
                  onStartQuiz={() => setQuizModalOpen(true)}
                />
              )}

              {/* QUIZ VIEW (sidebar Luyá»‡n Táº­p) */}
              {viewMode === 'quiz' && (
                <QuizView
                  currentQuizList={currentQuizList}
                  currentQuestionIdx={currentQuestionIdx}
                  selectedAnswer={selectedAnswer}
                  quizScore={quizScore}
                  quizCompleted={quizCompleted}
                  isGeneratingQuiz={isGeneratingQuiz}
                  handleAnswerSelect={handleAnswerSelect}
                  handleNextQuestion={handleNextQuestion}
                  resetQuiz={resetQuiz}
                  handleGenerateAIQuiz={handleGenerateAIQuiz}
                  activeModule={activeModule}
                  changeModule={changeModule}
                />
              )}

              {/* INTERVIEW PREP VIEW */}
              {viewMode === 'interview' && (
                <InterviewPrepView
                  problems={interviewProblems}
                  handleRunSQL={handleRunSQL}
                  solvedProblems={solvedProblems}
                  onToggleSolved={(id) => {
                    setSolvedProblems(prev =>
                      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
                    );
                  }}
                />
              )}
            </div>
            </div>
          </div>

          {/* TERMINAL */}
          <Terminal
            isTerminalOpen={isTerminalOpen}
            setIsTerminalOpen={setIsTerminalOpen}
            terminalHeight={terminalHeight}
            terminalWidth={terminalWidth}
            logs={logs}
            terminalInput={terminalInput}
            setTerminalInput={setTerminalInput}
            handleTerminalKeyDown={handleTerminalKeyDown}
            clearLogs={clearLogs}
            setIsDraggingTerminal={setIsDraggingTerminal}
          />
        </div>
      </div>

      {/* QUIZ MODAL */}
      <QuizModal
        isOpen={quizModalOpen}
        onClose={() => setQuizModalOpen(false)}
        activeModule={activeModule}
        onComplete={handleQuizModalComplete}
      />

      {/* FLOATING AI CHAT BOX */}
      <AIChatBox
        isOpen={aiChatOpen}
        setIsOpen={setAiChatOpen}
        messages={aiChatMessages}
        isLoading={aiChatLoading}
        onSendMessage={handleChatSend}
      />
    </div>
  );
};

export default HomePage;

