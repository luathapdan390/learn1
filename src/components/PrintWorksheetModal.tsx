import React, { useState } from 'react';
import { ReadingTest } from '../types/reading';
import { Printer, X, Eye, EyeOff, FileText, CheckCircle2 } from 'lucide-react';

interface PrintWorksheetModalProps {
  test: ReadingTest;
  isOpen: boolean;
  onClose: () => void;
}

export const PrintWorksheetModal: React.FC<PrintWorksheetModalProps> = ({
  test,
  isOpen,
  onClose
}) => {
  const [includeAnswerKey, setIncludeAnswerKey] = useState(false);
  const [includeExplanations, setIncludeExplanations] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]">
        {/* Modal Controls Header */}
        <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Print Test Paper / Worksheet
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Format ready for classroom testing, homework, or exam practice.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium cursor-pointer bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
              <input
                type="checkbox"
                checked={includeAnswerKey}
                onChange={(e) => setIncludeAnswerKey(e.target.checked)}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>Include Answer Key</span>
            </label>

            {includeAnswerKey && (
              <label className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium cursor-pointer bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                <input
                  type="checkbox"
                  checked={includeExplanations}
                  onChange={(e) => setIncludeExplanations(e.target.checked)}
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                <span>With Explanations</span>
              </label>
            )}

            <button
              onClick={handlePrint}
              className="py-1.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow transition flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Print Now</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Area */}
        <div id="printable-worksheet" className="p-8 sm:p-10 overflow-y-auto bg-white text-black font-serif space-y-6">
          {/* Top Exam Header */}
          <div className="border-b-2 border-black pb-4">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-xl font-bold uppercase tracking-wider">
                  ENGLISH READING COMPREHENSION TEST
                </h1>
                <p className="text-sm font-sans font-medium text-gray-600">
                  Grade 7 • Time Allowance: 20 Minutes • Total Score: 10.0 pts
                </p>
              </div>
              <div className="border-2 border-black p-2 min-w-[120px] text-center font-sans">
                <span className="text-xs font-bold block">SCORE / 10.0</span>
                <span className="text-xl font-extrabold">&nbsp; &nbsp; &nbsp; / 10.0</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4 text-xs font-sans">
              <div><strong>Student Name:</strong> ....................................................</div>
              <div><strong>Class:</strong> .........................</div>
              <div><strong>Date:</strong> .........................</div>
            </div>
          </div>

          {/* Reading Passage Section */}
          <div className="space-y-3">
            <div className="bg-gray-100 p-2 text-xs font-sans font-bold uppercase tracking-wide border border-gray-300">
              SECTION I: READING PASSAGE
            </div>
            <h2 className="text-lg font-bold text-center italic">{test.title}</h2>
            <div className="space-y-3 text-sm leading-relaxed text-justify">
              {test.paragraphs.map((p, idx) => (
                <p key={idx}>
                  <strong className="font-sans text-xs mr-1">[Paragraph {idx + 1}]</strong> {p}
                </p>
              ))}
            </div>
          </div>

          {/* 10 Multiple Choice Questions */}
          <div className="space-y-4 pt-2">
            <div className="bg-gray-100 p-2 text-xs font-sans font-bold uppercase tracking-wide border border-gray-300">
              SECTION II: COMPREHENSION QUESTIONS (10 QUESTIONS - 1.0 PT EACH)
            </div>
            <p className="text-xs font-sans italic text-gray-700">
              Directions: Read the passage carefully and choose the best answer (A, B, C, or D) for each question.
            </p>

            <div className="space-y-4 text-sm font-sans">
              {test.questions.map((q) => (
                <div key={q.id} className="space-y-1.5 break-inside-avoid">
                  <p className="font-bold">
                    Question {q.questionNumber}: {q.questionText}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pl-4 text-xs font-normal">
                    {q.options.map((opt) => (
                      <div key={opt.key} className="flex items-baseline gap-1.5">
                        <span className="font-bold">{opt.key}.</span>
                        <span>{opt.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optional Answer Key Section */}
          {includeAnswerKey && (
            <div className="pt-6 border-t-2 border-dashed border-gray-400 space-y-3 break-before-page">
              <div className="bg-gray-100 p-2 text-xs font-sans font-bold uppercase tracking-wide border border-gray-300">
                TEACHER'S ANSWER KEY & SCORING GUIDE (10.0 SCALE)
              </div>
              <div className="grid grid-cols-5 gap-2 text-xs font-sans">
                {test.questions.map((q) => (
                  <div key={q.id} className="border p-2 rounded text-center">
                    <span className="font-bold">Q{q.questionNumber}: </span>
                    <strong className="text-blue-700 font-black">{q.correctAnswer}</strong> (1.0 pt)
                  </div>
                ))}
              </div>

              {includeExplanations && (
                <div className="space-y-2 text-xs font-sans text-gray-700 mt-3">
                  <h4 className="font-bold">Detailed Explanations & Evidence:</h4>
                  {test.questions.map((q) => (
                    <div key={q.id} className="border-b pb-1.5">
                      <strong>Q{q.questionNumber} ({q.correctAnswer}):</strong> {q.explanation}
                      {q.evidenceQuote && (
                        <div className="italic text-gray-500 pl-3">
                          Evidence (¶ {q.evidenceParagraph}): "{q.evidenceQuote}"
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
