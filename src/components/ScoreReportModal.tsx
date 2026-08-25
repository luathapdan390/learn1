import React, { useEffect } from 'react';
import { TestResult, ReadingTest } from '../types/reading';
import confetti from 'canvas-confetti';
import {
  Trophy,
  Clock,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Printer,
  Sparkles,
  BarChart3,
  X,
  Target
} from 'lucide-react';

interface ScoreReportModalProps {
  test: ReadingTest;
  result: TestResult;
  isOpen: boolean;
  onClose: () => void;
  onRetake: () => void;
  onPrint: () => void;
  onNextTest: () => void;
}

export const ScoreReportModal: React.FC<ScoreReportModalProps> = ({
  test,
  result,
  isOpen,
  onClose,
  onRetake,
  onPrint
}) => {
  useEffect(() => {
    if (isOpen && result.scoreScale10 >= 7.0) {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }, [isOpen, result.scoreScale10]);

  if (!isOpen) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
  };

  const getGradeAssessment = (score: number) => {
    if (score >= 9.0) {
      return {
        title: 'Outstanding Performance!',
        badge: 'High Distinction (Top Tier)',
        color: 'from-amber-500 to-yellow-600',
        textColor: 'text-amber-600 dark:text-amber-400',
        bgColor: 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900',
        description: 'Exceptional comprehension! You have demonstrated top-level mastery of Grade 10 Entrance Exam reading skills, analyzing nuances, complex vocabulary, and implied meanings effortlessly.'
      };
    } else if (score >= 7.5) {
      return {
        title: 'Great Job!',
        badge: 'Good (Target Met)',
        color: 'from-emerald-500 to-teal-600',
        textColor: 'text-emerald-600 dark:text-emerald-400',
        bgColor: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900',
        description: 'Strong reading competence! You have a solid grasp of key details, context clues, and main paragraph themes. Review any missed vocabulary or inference questions to aim for 10.0.'
      };
    } else if (score >= 5.0) {
      return {
        title: 'Satisfactory Pass',
        badge: 'Average (Pass)',
        color: 'from-blue-500 to-indigo-600',
        textColor: 'text-blue-600 dark:text-blue-400',
        bgColor: 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900',
        description: 'You passed the test. To improve your entrance score, focus on scanning for paragraph evidence and identifying antonyms and pronoun references carefully.'
      };
    } else {
      return {
        title: 'Needs More Practice',
        badge: 'Needs Revision',
        color: 'from-rose-500 to-orange-600',
        textColor: 'text-rose-600 dark:text-rose-400',
        bgColor: 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900',
        description: 'Take time to read each paragraph thoroughly. Click on unfamiliar words to expand your vocabulary bank and review the evidence highlights.'
      };
    }
  };

  const gradeInfo = getGradeAssessment(result.scoreScale10);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-700 text-white p-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md mb-3 ring-4 ring-white/20 shadow-inner">
            <Trophy className="w-8 h-8 text-yellow-300 animate-bounce" />
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight">
            Reading Comprehension Score Report
          </h2>
          <p className="text-indigo-100 text-xs sm:text-sm mt-1">
            Grade 10 High School Entrance Exam • 10.0 Point Scale
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Main 10-Point Score Card */}
          <div className={`p-6 rounded-2xl border ${gradeInfo.bgColor} text-center space-y-2`}>
            <div className="flex items-center justify-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${gradeInfo.textColor} bg-white dark:bg-slate-900 shadow-xs border border-current`}>
                {gradeInfo.badge}
              </span>
            </div>

            {/* Huge 10.0 scale display */}
            <div className="py-2">
              <div className="text-5xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
                {result.scoreScale10.toFixed(1)}
                <span className="text-2xl sm:text-3xl text-slate-400 font-semibold ml-1">
                  / 10.0
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1">
                {result.correctAnswersCount} out of {result.totalQuestions} questions correct ({result.percentage}%) • 0.5 pts each
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
              {gradeInfo.description}
            </p>
          </div>

          {/* Quick Metrics Row */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-center">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Correct (x 0.5 pt)</span>
              <div className="flex items-center justify-center gap-1 mt-1 text-emerald-600 font-bold text-lg">
                <CheckCircle2 className="w-4 h-4" />
                <span>{result.correctAnswersCount} / {result.totalQuestions}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-center">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Incorrect</span>
              <div className="flex items-center justify-center gap-1 mt-1 text-rose-600 font-bold text-lg">
                <XCircle className="w-4 h-4" />
                <span>{result.totalQuestions - result.correctAnswersCount} / {result.totalQuestions}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-center">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Time Spent</span>
              <div className="flex items-center justify-center gap-1 mt-1 text-indigo-600 font-bold text-lg">
                <Clock className="w-4 h-4" />
                <span>{formatTime(result.timeSpentSeconds)}</span>
              </div>
            </div>
          </div>

          {/* Question breakdown grid (20 questions) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4" />
                <span>Questions Answer Key (1 - {test.questions.length})</span>
              </span>
              <span className="text-[11px] font-medium text-slate-400">0.5 pt / correct</span>
            </h4>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {test.questions.map((q) => {
                const userAns = result.answers[q.id];
                const isCorrect = userAns === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`p-2 rounded-xl border text-center text-xs flex flex-col items-center justify-center ${
                      isCorrect
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200'
                        : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900 text-rose-900 dark:text-rose-200'
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      <span className="font-bold">Q{q.questionNumber}</span>
                      <span className="text-[10px] opacity-75">
                        {isCorrect ? '+0.5' : '0.0'}
                      </span>
                    </div>
                    <div className="mt-0.5 flex items-center gap-1 text-[11px]">
                      <span>You: <strong>{userAns || '-'}</strong></span>
                      <span>•</span>
                      <span>Key: <strong>{q.correctAnswer}</strong></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skill Breakdown */}
          {result.skillBreakdown && Object.keys(result.skillBreakdown).length > 0 && (
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-indigo-500" />
                <span>Reading Skills Proficiency</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {(Object.entries(result.skillBreakdown) as [string, { correct: number; total: number } | undefined][]).map(([skill, data]) => {
                  if (!data) return null;
                  const pct = Math.round((data.correct / data.total) * 100);
                  return (
                    <div key={skill} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                      <span className="capitalize text-slate-700 dark:text-slate-300 font-medium">
                        {skill.replace(/-/g, ' ')}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 dark:text-white">
                          {data.correct}/{data.total}
                        </span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                          pct >= 80
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                            : pct >= 50
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                            : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                        }`}>
                          {pct}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Review Explanations & Evidence</span>
            </button>

            <button
              onClick={onPrint}
              className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print Worksheet</span>
            </button>

            <button
              onClick={onRetake}
              className="py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
