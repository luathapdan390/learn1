import React from 'react';
import { Question, StudentAnswers, FlaggedQuestions } from '../types/reading';
import { Bookmark, Check, Send, ArrowLeft, ArrowRight, RotateCcw, AlertTriangle } from 'lucide-react';

interface QuestionNavigatorProps {
  questions: Question[];
  currentQuestionIndex: number;
  answers: StudentAnswers;
  flagged: FlaggedQuestions;
  isSubmitted: boolean;
  onSelectQuestion: (index: number) => void;
  onSubmitTest: () => void;
  onResetTest: () => void;
}

export const QuestionNavigator: React.FC<QuestionNavigatorProps> = ({
  questions,
  currentQuestionIndex,
  answers,
  flagged,
  isSubmitted,
  onSelectQuestion,
  onSubmitTest,
  onResetTest
}) => {
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-4 sm:p-5 space-y-4">
      {/* Header & Progress */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            Question Navigator
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {isSubmitted
              ? 'Click to review each question'
              : `${answeredCount} of ${totalQuestions} questions completed`}
          </p>
        </div>

        {!isSubmitted && (
          <div className="text-right">
            <span className="text-sm font-extrabold text-indigo-600 dark:text-indigo-400">
              {progressPercent}%
            </span>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {!isSubmitted && (
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
          <div
            className="bg-indigo-600 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      )}

      {/* Grid of 10 Questions */}
      <div className="grid grid-cols-5 gap-2">
        {questions.map((q, idx) => {
          const isCurrent = currentQuestionIndex === idx;
          const isAnswered = answers[q.id] !== undefined;
          const isFlag = flagged[q.id];
          const isCorrect = isSubmitted && answers[q.id] === q.correctAnswer;
          const isWrong = isSubmitted && answers[q.id] !== q.correctAnswer;

          let btnClass = 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';

          if (isSubmitted) {
            if (isCorrect) {
              btnClass = 'bg-emerald-500 text-white border-emerald-600 font-bold';
            } else if (isWrong) {
              btnClass = 'bg-rose-500 text-white border-rose-600 font-bold';
            } else {
              btnClass = 'bg-slate-200 dark:bg-slate-700 text-slate-500 border-slate-300 dark:border-slate-600';
            }
          } else if (isAnswered) {
            btnClass = 'bg-indigo-600 text-white border-indigo-700 font-bold shadow-sm';
          }

          return (
            <button
              key={q.id}
              onClick={() => onSelectQuestion(idx)}
              className={`relative h-11 rounded-xl border text-sm font-semibold flex items-center justify-center transition-all ${btnClass} ${
                isCurrent ? 'ring-2 ring-offset-2 ring-indigo-500 dark:ring-offset-slate-900 scale-105 z-10' : 'hover:opacity-90'
              }`}
            >
              <span>{q.questionNumber}</span>

              {/* Flag Indicator */}
              {isFlag && !isSubmitted && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border-2 border-white dark:border-slate-900" />
              )}
            </button>
          );
        })}
      </div>

      {/* Prev / Next controls */}
      <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
        <button
          onClick={() => onSelectQuestion(Math.max(0, currentQuestionIndex - 1))}
          disabled={currentQuestionIndex === 0}
          className="flex-1 py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-1 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Previous</span>
        </button>
        <button
          onClick={() => onSelectQuestion(Math.min(totalQuestions - 1, currentQuestionIndex + 1))}
          disabled={currentQuestionIndex === totalQuestions - 1}
          className="flex-1 py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-1 transition"
        >
          <span>Next</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Submit / Retake Button */}
      {!isSubmitted ? (
        <button
          onClick={onSubmitTest}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Submit Test & Calculate Score</span>
        </button>
      ) : (
        <button
          onClick={onResetTest}
          className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs transition flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Retake This Test</span>
        </button>
      )}
    </div>
  );
};
