import Sidebar from './Sidebar';
import Header from './Header';
import LessonView from './LessonView';
import QuizView from '../../quiz/components/QuizView';
import Terminal from './Terminal';
import AIChatBox from './AIChatBox';
import QuizModal from '../../quiz/components/QuizModal';
import InterviewPrepView from '../../interview/components/InterviewPrepView';
import type { UseHomePageLogicReturn } from '../hooks/useHomePageLogic';

export const HomePageView: React.FC<UseHomePageLogicReturn> = ({
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
  interviewProblemsData,
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
}) => {
  return (
    <div className="flex h-screen bg-[#f4f6f8] font-sans text-slate-800 overflow-hidden">
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-slate-900/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

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

      <div
        className={`flex-1 flex flex-col h-full relative min-w-0 transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'blur-sm md:blur-none pointer-events-none md:pointer-events-auto' : ''
        }`}
      >
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

        <div className="flex-1 flex flex-col md:flex-row min-h-0 relative">
          <div className="flex-1 overflow-y-auto p-4 md:p-10 bg-[#f4f6f8] relative min-w-0">
            <div className="max-w-3xl mx-auto pb-12">
              <div key={`${activeModule.id}-${viewMode}`} className="animate-module-switch">
                {viewMode === 'lesson' && (
                  <LessonView
                    activeModule={activeModule}
                    handleRunSQL={handleRunSQL}
                    handleAIExplain={handleAIExplain}
                    isExplainingCode={aiChatLoading}
                    onStartQuiz={openQuizModal}
                  />
                )}

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

                {viewMode === 'interview' && (
                  <InterviewPrepView
                    problems={interviewProblemsData}
                    handleRunSQL={handleRunSQL}
                    solvedProblems={solvedProblems}
                    onToggleSolved={onToggleSolved}
                  />
                )}
              </div>
            </div>
          </div>

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

      <QuizModal
        isOpen={quizModalOpen}
        onClose={closeQuizModal}
        activeModule={activeModule}
        onComplete={handleQuizModalComplete}
      />

      <AIChatBox
        isOpen={aiChatOpen}
        setIsOpen={setAiChatOpen}
        messages={aiChatMessages}
        isLoading={aiChatLoading}
        onSendMessage={handleChatSend}
        isTerminalOpen={isTerminalOpen}
        terminalWidth={terminalWidth}
      />
    </div>
  );
};

