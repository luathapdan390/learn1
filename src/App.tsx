import React, { useState, useEffect } from 'react';
import { GRADE_10_ENTRANCE_TESTS } from './data/grade10Tests';
import { ReadingTest, StudentAnswers, FlaggedQuestions, TestResult } from './types/reading';
import { WordDefinition } from './services/dictionaryService';
import { Navbar } from './components/Navbar';
import { PassageViewer } from './components/PassageViewer';
import { QuestionCard } from './components/QuestionCard';
import { QuestionNavigator } from './components/QuestionNavigator';
import { ScoreReportModal } from './components/ScoreReportModal';
import { PrintWorksheetModal } from './components/PrintWorksheetModal';
import { VocabularyModal } from './components/VocabularyModal';
import { CustomTestGeneratorModal } from './components/CustomTestGeneratorModal';
import { DictionaryPopup } from './components/DictionaryPopup';
import { AlertCircle, Trophy, RotateCcw, Sparkles } from 'lucide-react';

export default function App() {
  // Test collection state
  const [allTests, setAllTests] = useState<ReadingTest[]>(GRADE_10_ENTRANCE_TESTS);
  const [currentTestId, setCurrentTestId] = useState<string>(GRADE_10_ENTRANCE_TESTS[0].id);

  // Active test
  const currentTest = allTests.find((t) => t.id === currentTestId) || allTests[0];

  // Test progress state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<StudentAnswers>({});
  const [flagged, setFlagged] = useState<FlaggedQuestions>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  // Timer state
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  // Reading preferences
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [readingTheme, setReadingTheme] = useState<'light' | 'sepia' | 'dark'>('light');
  const [practiceMode, setPracticeMode] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'single' | 'all'>('single');

  // Evidence highlighting
  const [highlightedParagraph, setHighlightedParagraph] = useState<number | null>(null);
  const [highlightedQuote, setHighlightedQuote] = useState<string | null>(null);

  // Modals state
  const [isScoreModalOpen, setIsScoreModalOpen] = useState<boolean>(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);
  const [isVocabModalOpen, setIsVocabModalOpen] = useState<boolean>(false);
  const [isGeneratorModalOpen, setIsGeneratorModalOpen] = useState<boolean>(false);
  const [submitConfirmOpen, setSubmitConfirmOpen] = useState<boolean>(false);

  // Dictionary popup state
  const [dictPopup, setDictPopup] = useState<{
    definition: WordDefinition | null;
    pos: { x: number; y: number } | null;
    loading: boolean;
  }>({ definition: null, pos: null, loading: false });

  // Timer interval
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && !isSubmitted) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, isSubmitted]);

  // Handle test change
  const handleSelectTest = (testId: string) => {
    setCurrentTestId(testId);
    setAnswers({});
    setFlagged({});
    setIsSubmitted(false);
    setTestResult(null);
    setCurrentQuestionIndex(0);
    setTimerSeconds(0);
    setIsTimerRunning(true);
    setHighlightedParagraph(null);
    setHighlightedQuote(null);
    setDictPopup({ definition: null, pos: null, loading: false });
  };

  // Reset current test
  const handleResetTest = () => {
    setAnswers({});
    setFlagged({});
    setIsSubmitted(false);
    setTestResult(null);
    setCurrentQuestionIndex(0);
    setTimerSeconds(0);
    setIsTimerRunning(true);
    setHighlightedParagraph(null);
    setHighlightedQuote(null);
    setSubmitConfirmOpen(false);
    setIsScoreModalOpen(false);
  };

  // Select question option
  const handleSelectOption = (questionId: number, optionKey: 'A' | 'B' | 'C' | 'D') => {
    if (isSubmitted) return;
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionKey
    }));
  };

  // Toggle flag
  const handleToggleFlag = (questionId: number) => {
    setFlagged((prev) => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  // Submit test and calculate 10-point scale score (e.g. 20 questions * 0.5 = 10.0 scale)
  const executeSubmit = () => {
    let correctCount = 0;
    const skillBreakdown: TestResult['skillBreakdown'] = {};

    currentTest.questions.forEach((q) => {
      const userAns = answers[q.id];
      const isCorrect = userAns === q.correctAnswer;
      if (isCorrect) correctCount += 1;

      // Track skills
      const skill = q.skillType;
      if (!skillBreakdown[skill]) {
        skillBreakdown[skill] = { correct: 0, total: 0 };
      }
      skillBreakdown[skill]!.total += 1;
      if (isCorrect) {
        skillBreakdown[skill]!.correct += 1;
      }
    });

    // Score on 10-point scale: exactly (correctCount / totalCount) * 10
    const pointsPerQ = currentTest.pointsPerQuestion || 0.5;
    const scoreScale10 = Number(((correctCount / currentTest.questions.length) * 10).toFixed(1));
    const percentage = Math.round((correctCount / currentTest.questions.length) * 100);

    const result: TestResult = {
      testId: currentTest.id,
      totalQuestions: currentTest.questions.length,
      correctAnswersCount: correctCount,
      scoreScale10,
      pointsPerQuestion: pointsPerQ,
      percentage,
      timeSpentSeconds: timerSeconds,
      completedAt: new Date().toISOString(),
      skillBreakdown,
      answers
    };

    setTestResult(result);
    setIsSubmitted(true);
    setIsTimerRunning(false);
    setSubmitConfirmOpen(false);
    setIsScoreModalOpen(true);
  };

  const handleRequestSubmit = () => {
    const answeredCount = Object.keys(answers).length;
    const totalCount = currentTest.questions.length;

    if (answeredCount < totalCount) {
      setSubmitConfirmOpen(true);
    } else {
      executeSubmit();
    }
  };

  // Evidence highlight trigger
  const handleHighlightEvidence = (paragraphNum: number, quote: string) => {
    setHighlightedParagraph(paragraphNum);
    setHighlightedQuote(quote);
  };

  // Dictionary lookup
  const handleWordLookupStart = (pos: { x: number; y: number }) => {
    setDictPopup({ definition: null, pos, loading: true });
  };

  const handleWordClick = (definition: WordDefinition, pos: { x: number; y: number }) => {
    setDictPopup({ definition, pos, loading: false });
  };

  // Close dictionary popover on background click
  const handleContainerClick = () => {
    if (dictPopup.pos) {
      setDictPopup({ definition: null, pos: null, loading: false });
    }
  };

  // Switch to next test
  const handleNextTest = () => {
    const currentIndex = allTests.findIndex((t) => t.id === currentTest.id);
    const nextIndex = (currentIndex + 1) % allTests.length;
    handleSelectTest(allTests[nextIndex].id);
    setIsScoreModalOpen(false);
  };

  return (
    <div
      onClick={handleContainerClick}
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
        readingTheme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
      }`}
    >
      {/* Top Navigation */}
      <Navbar
        tests={allTests}
        currentTest={currentTest}
        onSelectTest={handleSelectTest}
        timerSeconds={timerSeconds}
        isTimerRunning={isTimerRunning}
        onToggleTimer={() => setIsTimerRunning((prev) => !prev)}
        fontSize={fontSize}
        onChangeFontSize={setFontSize}
        readingTheme={readingTheme}
        onChangeTheme={setReadingTheme}
        practiceMode={practiceMode}
        onTogglePracticeMode={() => setPracticeMode((prev) => !prev)}
        onOpenVocabulary={() => setIsVocabModalOpen(true)}
        onOpenPrint={() => setIsPrintModalOpen(true)}
        onOpenGenerator={() => setIsGeneratorModalOpen(true)}
        onResetTest={handleResetTest}
      />

      {/* Main Test Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 flex flex-col gap-6">
        {/* Results Banner when Submitted */}
        {isSubmitted && testResult && (
          <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-700 text-white shadow-lg flex flex-wrap items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                <Trophy className="w-6 h-6 text-yellow-300" />
              </div>
              <div>
                <span className="text-xs font-semibold text-indigo-200 uppercase tracking-wider block">
                  Grade 10 Exam Completed • Official 10.0 Scale Score
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black">{testResult.scoreScale10.toFixed(1)} / 10.0</span>
                  <span className="text-xs text-indigo-100 font-medium">
                    ({testResult.correctAnswersCount}/{currentTest.questions.length} correct • {testResult.percentage}%)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsScoreModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-white text-indigo-700 hover:bg-indigo-50 font-bold text-xs shadow transition flex items-center gap-1.5 cursor-pointer"
              >
                <Trophy className="w-3.5 h-3.5" />
                <span>View Full Score Report</span>
              </button>
              <button
                onClick={handleResetTest}
                className="px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs transition flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake</span>
              </button>
            </div>
          </div>
        )}

        {/* Split Screen Container: Left (Passage) - Right (Questions & Navigator) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start flex-1">
          {/* Left Column: Passage Reader (7 cols on lg) */}
          <div className="lg:col-span-7 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6.5rem)] flex flex-col">
            <PassageViewer
              test={currentTest}
              fontSize={fontSize}
              readingTheme={readingTheme}
              highlightedParagraph={highlightedParagraph}
              highlightedQuote={highlightedQuote}
              onWordClick={handleWordClick}
              onWordLookupStart={handleWordLookupStart}
            />
          </div>

          {/* Right Column: Questions & Navigator (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-5">
            {/* View Mode Toggle: Single Question vs All Questions */}
            <div className="flex items-center justify-between pb-1 flex-wrap gap-2">
              <div className="flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>Display:</span>
                <button
                  onClick={() => setViewMode('single')}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    viewMode === 'single'
                      ? 'bg-indigo-600 text-white font-bold'
                      : 'hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  One by One
                </button>
                <button
                  onClick={() => setViewMode('all')}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    viewMode === 'all'
                      ? 'bg-indigo-600 text-white font-bold'
                      : 'hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  All {currentTest.questions.length} Questions
                </button>
              </div>

              {highlightedParagraph !== null && (
                <button
                  onClick={() => {
                    setHighlightedParagraph(null);
                    setHighlightedQuote(null);
                  }}
                  className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-medium cursor-pointer"
                >
                  Clear evidence highlight
                </button>
              )}
            </div>

            {/* Questions area */}
            {viewMode === 'single' ? (
              <QuestionCard
                question={currentTest.questions[currentQuestionIndex]}
                totalQuestions={currentTest.questions.length}
                selectedAnswer={answers[currentTest.questions[currentQuestionIndex].id]}
                isFlagged={!!flagged[currentTest.questions[currentQuestionIndex].id]}
                isSubmitted={isSubmitted}
                practiceInstantFeedback={practiceMode}
                onSelectOption={(key) =>
                  handleSelectOption(currentTest.questions[currentQuestionIndex].id, key)
                }
                onToggleFlag={() => handleToggleFlag(currentTest.questions[currentQuestionIndex].id)}
                onHighlightEvidence={handleHighlightEvidence}
              />
            ) : (
              <div className="space-y-4">
                {currentTest.questions.map((q) => (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    totalQuestions={currentTest.questions.length}
                    selectedAnswer={answers[q.id]}
                    isFlagged={!!flagged[q.id]}
                    isSubmitted={isSubmitted}
                    practiceInstantFeedback={practiceMode}
                    onSelectOption={(key) => handleSelectOption(q.id, key)}
                    onToggleFlag={() => handleToggleFlag(q.id)}
                    onHighlightEvidence={handleHighlightEvidence}
                  />
                ))}
              </div>
            )}

            {/* Question Navigator */}
            <QuestionNavigator
              questions={currentTest.questions}
              currentQuestionIndex={currentQuestionIndex}
              answers={answers}
              flagged={flagged}
              isSubmitted={isSubmitted}
              onSelectQuestion={(idx) => {
                setCurrentQuestionIndex(idx);
                if (viewMode === 'all') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              onSubmitTest={handleRequestSubmit}
              onResetTest={handleResetTest}
            />
          </div>
        </div>
      </main>

      {/* Confirmation Modal for Unanswered Questions */}
      {submitConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400">
              <AlertCircle className="w-7 h-7 shrink-0" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Unanswered Questions
              </h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              You have completed{' '}
              <strong className="text-indigo-600 dark:text-indigo-400">
                {Object.keys(answers).length}
              </strong>{' '}
              out of <strong>{currentTest.questions.length}</strong> questions.
              Unanswered questions will be marked with 0.0 points.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Do you want to submit now to calculate your 10-point scale score?
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setSubmitConfirmOpen(false)}
                className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                Keep Answering
              </button>
              <button
                onClick={executeSubmit}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow transition cursor-pointer"
              >
                Submit & Calculate Score
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Score Report Modal */}
      {testResult && (
        <ScoreReportModal
          test={currentTest}
          result={testResult}
          isOpen={isScoreModalOpen}
          onClose={() => setIsScoreModalOpen(false)}
          onRetake={handleResetTest}
          onPrint={() => {
            setIsScoreModalOpen(false);
            setIsPrintModalOpen(true);
          }}
          onNextTest={handleNextTest}
        />
      )}

      {/* Printable Worksheet Modal */}
      <PrintWorksheetModal
        test={currentTest}
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />

      {/* Key Vocabulary Bank Modal */}
      <VocabularyModal
        vocabularyList={currentTest.vocabularyList}
        passageTitle={currentTest.title}
        isOpen={isVocabModalOpen}
        onClose={() => setIsVocabModalOpen(false)}
      />

      {/* Custom AI Test Generator Modal */}
      <CustomTestGeneratorModal
        isOpen={isGeneratorModalOpen}
        onClose={() => setIsGeneratorModalOpen(false)}
        onTestGenerated={(newTest) => {
          setAllTests((prev) => [newTest, ...prev]);
          handleSelectTest(newTest.id);
        }}
      />

      {/* Dictionary Popover for Clicked Words */}
      <DictionaryPopup
        definition={dictPopup.definition}
        position={dictPopup.pos}
        loading={dictPopup.loading}
        onClose={() => setDictPopup({ definition: null, pos: null, loading: false })}
      />
    </div>
  );
}
