import React, { useState } from 'react';
import { ReadingTest } from '../types/reading';
import { Printer, X, FileText } from 'lucide-react';

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
                Print Test Paper / Worksheet (20 Questions)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Grade 10 High School Entrance Exam Standard Format • 10.0 Scale
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
              className="py-1.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow transition flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print Now</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
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
                  HIGH SCHOOL ENTRANCE EXAMINATION (GRADE 10)
                </h1>
                <p className="text-sm font-sans font-bold text-gray-800">
                  Subject: English • Reading Comprehension Paper
                </p>
                <p className="text-xs font-sans font-medium text-gray-600 mt-0.5">
                  Time Allowance: 35 Minutes • 20 Multiple Choice Questions (0.5 pts each) • Total: 10.0 pts
                </p>
              </div>
              <div className="border-2 border-black p-2 min-w-[120px] text-center font-sans">
                <span className="text-xs font-bold block">SCORE / 10.0</span>
                <span className="text-xl font-extrabold">&nbsp; &nbsp; &nbsp; / 10.0</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4 text-xs font-sans">
              <div><strong>Candidate Name:</strong> ....................................................</div>
              <div><strong>Candidate ID:</strong> .........................</div>
              <div><strong>Exam Room:</strong> .........................</div>
            </div>
          </div>

          {/* Reading Passage Section */}
          <div className="space-y-3">
            <div className="bg-gray-100 p-2 text-xs font-sans font-bold uppercase tracking-wide border border-gray-300 flex items-center justify-between">
              <span>SECTION I: READING PASSAGE</span>
              <span className="text-gray-600 font-normal">({test.wordCount} words)</span>
            </div>
            <h2 className="text-lg font-bold text-center italic">{test.title}</h2>
            <div className="space-y-3 text-sm leading-relaxed text-justify">
              {test.paragraphs.map((p, idx) => (
                <p key={idx}>
                  <strong className="font-sans text-xs mr-1">[Paragraph {idx + 1}]</strong> {p.replace(/^\[Paragraph \d+\]\s*/, '')}
                </p>
              ))}
            </div>
          </div>

          {/* 20 Multiple Choice Questions */}
          <div className="space-y-4 pt-2">
            <div className="bg-gray-100 p-2 text-xs font-sans font-bold uppercase tracking-wide border border-gray-300">
              SECTION II: COMPREHENSION QUESTIONS (20 QUESTIONS - 0.5 PT EACH = 10.0 PTS)
            </div>
            <p className="text-xs font-sans italic text-gray-700">
              Directions: Read the passage carefully and choose the correct letter (A, B, C, or D) for questions 1 to 20.
            </p>

            <div className="space-y-4 text-sm font-sans">
              {test.questions.map((q) => (
                <div key={q.id} className="space-y-1.5 break-inside-avoid">
                  <p className="font-bold text-xs sm:text-sm">
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
                TEACHER'S OFFICIAL ANSWER KEY & SCORING MATRIX (10.0 SCALE)
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 text-xs font-sans">
                {test.questions.map((q) => (
                  <div key={q.id} className="border p-2 rounded text-center">
                    <span className="font-bold">Q{q.questionNumber}: </span>
                    <strong className="text-blue-700 font-black">{q.correctAnswer}</strong> (0.5 pt)
                  </div>
                ))}
              </div>

              {includeExplanations && (
                <div className="space-y-2 text-xs font-sans text-gray-700 mt-3">
                  <h4 className="font-bold">Detailed English Explanations & Evidence:</h4>
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
