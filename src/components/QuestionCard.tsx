import React from 'react';
import { Question } from '../types/reading';
import { Bookmark, CheckCircle2, XCircle, Info, Sparkles, HelpCircle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: 'A' | 'B' | 'C' | 'D';
  isFlagged: boolean;
  isSubmitted: boolean;
  practiceInstantFeedback?: boolean;
  onSelectOption: (optionKey: 'A' | 'B' | 'C' | 'D') => void;
  onToggleFlag: () => void;
  onHighlightEvidence: (paragraphNum: number, quote: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  isFlagged,
  isSubmitted,
  practiceInstantFeedback,
  onSelectOption,
  onToggleFlag,
  onHighlightEvidence
}) => {
  const showFeedback = isSubmitted || (practiceInstantFeedback && !!selectedAnswer);
  const isCorrect = selectedAnswer === question.correctAnswer;

  const skillLabels: Record<string, { label: string; color: string }> = {
    'main-idea': { label: 'Main Idea', color: 'bg-purple-100 text-purple-700 dark:bg-purple-950/80 dark:text-purple-300' },
    'factual-detail': { label: 'Factual Detail', color: 'bg-blue-100 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300' },
    'vocabulary': { label: 'Vocabulary in Context', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300' },
    'pronoun-reference': { label: 'Reference', color: 'bg-amber-100 text-amber-700 dark:bg-amber-950/80 dark:text-amber-300' },
    'inference': { label: 'Inference', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300' },
    'negative-fact': { label: 'Negative Fact (NOT)', color: 'bg-rose-100 text-rose-700 dark:bg-rose-950/80 dark:text-rose-300' },
    'author-purpose': { label: "Author's Purpose", color: 'bg-teal-100 text-teal-700 dark:bg-teal-950/80 dark:text-teal-300' }
  };

  const currentSkill = skillLabels[question.skillType] || {
    label: 'Comprehension',
    color: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
  };

  return (
    <div
      className={`rounded-2xl border bg-white dark:bg-slate-900 shadow-sm p-5 sm:p-6 transition-all duration-200 ${
        showFeedback
          ? isCorrect
            ? 'border-emerald-300 dark:border-emerald-800/80 ring-1 ring-emerald-100 dark:ring-emerald-950'
            : 'border-rose-300 dark:border-rose-800/80 ring-1 ring-rose-100 dark:ring-rose-950'
          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
      }`}
    >
      {/* Top Header info */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white font-bold text-sm shadow-sm">
            {question.questionNumber}
          </span>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Question {question.questionNumber} of 10
          </span>
          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${currentSkill.color}`}>
            {currentSkill.label}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {!isSubmitted && (
            <button
              onClick={onToggleFlag}
              className={`p-1.5 rounded-lg text-xs font-medium flex items-center gap-1 transition ${
                isFlagged
                  ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300'
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title={isFlagged ? 'Flagged for review' : 'Flag question'}
            >
              <Bookmark className={`w-4 h-4 ${isFlagged ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span className="hidden sm:inline text-[11px]">{isFlagged ? 'Flagged' : 'Flag'}</span>
            </button>
          )}

          {showFeedback && (
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold ${
                isCorrect
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/90 dark:text-emerald-200'
                  : 'bg-rose-100 text-rose-800 dark:bg-rose-950/90 dark:text-rose-200'
              }`}
            >
              {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
              <span>{isCorrect ? '+1.0 pt (Correct)' : '0.0 pt (Incorrect)'}</span>
            </span>
          )}
        </div>
      </div>

      {/* Question Text */}
      <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-4 leading-snug">
        {question.questionText}
      </h3>

      {/* Multiple Choice Options */}
      <div className="space-y-2.5">
        {question.options.map((opt) => {
          const isSelected = selectedAnswer === opt.key;
          const isThisCorrect = opt.key === question.correctAnswer;

          let optionStyle =
            'border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-200';
          let badgeStyle =
            'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200';

          if (showFeedback) {
            if (isThisCorrect) {
              optionStyle =
                'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-100 font-medium ring-1 ring-emerald-500';
              badgeStyle = 'bg-emerald-600 text-white font-bold';
            } else if (isSelected && !isThisCorrect) {
              optionStyle =
                'border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-100 line-through ring-1 ring-rose-500';
              badgeStyle = 'bg-rose-600 text-white font-bold';
            } else {
              optionStyle =
                'border-slate-200 dark:border-slate-800 opacity-60 bg-transparent text-slate-500 dark:text-slate-400';
              badgeStyle = 'bg-slate-200 dark:bg-slate-800 text-slate-500';
            }
          } else if (isSelected) {
            optionStyle =
              'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-100 font-medium ring-2 ring-indigo-500 shadow-sm';
            badgeStyle = 'bg-indigo-600 text-white font-bold';
          }

          return (
            <button
              key={opt.key}
              type="button"
              disabled={isSubmitted}
              onClick={() => onSelectOption(opt.key)}
              className={`w-full text-left p-3 sm:p-3.5 rounded-xl border flex items-start gap-3 transition-all cursor-pointer ${optionStyle} ${
                isSubmitted ? 'cursor-default' : ''
              }`}
            >
              <span
                className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${badgeStyle}`}
              >
                {opt.key}
              </span>
              <span className="text-sm sm:text-base flex-1 pt-0.5 leading-snug">
                {opt.text}
              </span>
              {showFeedback && isThisCorrect && (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              )}
              {showFeedback && isSelected && !isThisCorrect && (
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation & Evidence Box (When submitted or practiced) */}
      {showFeedback && (
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300">
                <Info className="w-4 h-4" />
                <span>English Explanation:</span>
              </div>
              <button
                type="button"
                onClick={() => onHighlightEvidence(question.evidenceParagraph, question.evidenceQuote)}
                className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900 dark:hover:bg-indigo-800 text-indigo-700 dark:text-indigo-200 transition"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Show in Paragraph {question.evidenceParagraph}</span>
              </button>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {question.explanation}
            </p>
            {question.evidenceQuote && (
              <div className="text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900/80 p-2 rounded-lg border border-slate-200/60 dark:border-slate-800">
                <strong className="text-slate-700 dark:text-slate-300">Evidence from text (¶ {question.evidenceParagraph}): </strong>
                <em>"{question.evidenceQuote}"</em>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
