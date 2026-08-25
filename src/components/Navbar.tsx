import React from 'react';
import { ReadingTest } from '../types/reading';
import {
  BookOpen,
  Clock,
  Printer,
  BookMarked,
  Wand2,
  Moon,
  Sun,
  Type,
  CheckSquare,
  Sparkles,
  RotateCcw
} from 'lucide-react';

interface NavbarProps {
  tests: ReadingTest[];
  currentTest: ReadingTest;
  onSelectTest: (testId: string) => void;
  timerSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  onChangeFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  readingTheme: 'light' | 'sepia' | 'dark';
  onChangeTheme: (theme: 'light' | 'sepia' | 'dark') => void;
  practiceMode: boolean;
  onTogglePracticeMode: () => void;
  onOpenVocabulary: () => void;
  onOpenPrint: () => void;
  onOpenGenerator: () => void;
  onResetTest: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  tests,
  currentTest,
  onSelectTest,
  timerSeconds,
  isTimerRunning,
  onToggleTimer,
  fontSize,
  onChangeFontSize,
  readingTheme,
  onChangeTheme,
  practiceMode,
  onTogglePracticeMode,
  onOpenVocabulary,
  onOpenPrint,
  onOpenGenerator,
  onResetTest
}) => {
  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          {/* Brand Logo & Test Select */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-700 text-white flex items-center justify-center shadow-md">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h1 className="text-base font-bold text-slate-900 dark:text-white leading-none">
                    Grade 7 English Reading
                  </h1>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
                    10 Questions • 10.0 Scale
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Medium Difficulty • No Translation • Instant English Score
                </p>
              </div>
            </div>

            {/* Test Selector Dropdown */}
            <div className="flex items-center gap-2">
              <select
                value={currentTest.id}
                onChange={(e) => onSelectTest(e.target.value)}
                className="text-xs font-semibold px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 outline-none max-w-[220px] truncate"
              >
                {tests.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.title}
                  </option>
                ))}
              </select>

              <button
                onClick={onOpenGenerator}
                title="Generate custom topic test with AI"
                className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900 transition flex items-center gap-1 text-xs font-semibold"
              >
                <Wand2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">New Topic</span>
              </button>
            </div>
          </div>

          {/* Center / Right controls */}
          <div className="flex items-center justify-between sm:justify-end flex-wrap gap-2 pt-1 lg:pt-0 border-t lg:border-t-0 border-slate-100 dark:border-slate-800">
            {/* Timer widget */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700 text-xs font-mono font-bold">
              <Clock className="w-3.5 h-3.5 text-indigo-500" />
              <span>{formatTimer(timerSeconds)}</span>
              <button
                onClick={onToggleTimer}
                className="ml-1 text-[10px] uppercase tracking-wider text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                {isTimerRunning ? 'Pause' : 'Resume'}
              </button>
            </div>

            {/* Mode toggle: Exam vs Practice */}
            <button
              onClick={onTogglePracticeMode}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition flex items-center gap-1.5 ${
                practiceMode
                  ? 'bg-amber-50 dark:bg-amber-950/50 border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300'
                  : 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-800 text-indigo-800 dark:text-indigo-300'
              }`}
              title="Toggle between Exam Mode and Practice Feedback"
            >
              <CheckSquare className="w-3.5 h-3.5" />
              <span>{practiceMode ? 'Practice Mode' : 'Real Exam Mode'}</span>
            </button>

            {/* Reading Theme selector */}
            <div className="flex items-center rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-0.5 text-xs">
              <button
                onClick={() => onChangeTheme('light')}
                className={`px-2 py-1 rounded-lg font-medium transition ${
                  readingTheme === 'light'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
                title="Light Paper Theme"
              >
                Light
              </button>
              <button
                onClick={() => onChangeTheme('sepia')}
                className={`px-2 py-1 rounded-lg font-medium transition ${
                  readingTheme === 'sepia'
                    ? 'bg-[#fcf7ec] text-[#43302b] shadow-xs font-bold'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
                title="Sepia Warm Theme"
              >
                Sepia
              </button>
              <button
                onClick={() => onChangeTheme('dark')}
                className={`px-2 py-1 rounded-lg font-medium transition ${
                  readingTheme === 'dark'
                    ? 'bg-slate-900 text-white shadow-xs font-bold'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
                title="Dark Theme"
              >
                Dark
              </button>
            </div>

            {/* Font Size Adjuster */}
            <div className="flex items-center rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-0.5 text-xs">
              <button
                onClick={() => onChangeFontSize('normal')}
                className={`px-2 py-1 rounded-lg transition ${
                  fontSize === 'normal'
                    ? 'bg-white dark:bg-slate-700 font-bold shadow-xs'
                    : 'text-slate-400'
                }`}
                title="Normal text size"
              >
                A
              </button>
              <button
                onClick={() => onChangeFontSize('large')}
                className={`px-2 py-1 rounded-lg transition ${
                  fontSize === 'large'
                    ? 'bg-white dark:bg-slate-700 font-bold shadow-xs'
                    : 'text-slate-400'
                }`}
                title="Large text size"
              >
                A+
              </button>
              <button
                onClick={() => onChangeFontSize('xlarge')}
                className={`px-2 py-1 rounded-lg transition ${
                  fontSize === 'xlarge'
                    ? 'bg-white dark:bg-slate-700 font-bold shadow-xs'
                    : 'text-slate-400'
                }`}
                title="Extra large text size"
              >
                A++
              </button>
            </div>

            {/* Vocabulary Bank Button */}
            <button
              onClick={onOpenVocabulary}
              className="p-2 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition flex items-center gap-1 text-xs font-semibold"
              title="Passage Vocabulary Bank"
            >
              <BookMarked className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Vocabulary</span>
            </button>

            {/* Print Worksheet Button */}
            <button
              onClick={onOpenPrint}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition flex items-center gap-1 text-xs font-semibold"
              title="Print Worksheet"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Print Test</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
