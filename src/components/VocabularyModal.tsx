import React from 'react';
import { VocabularyItem } from '../types/reading';
import { BookMarked, Volume2, X, Sparkles } from 'lucide-react';

interface VocabularyModalProps {
  vocabularyList: VocabularyItem[];
  passageTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export const VocabularyModal: React.FC<VocabularyModalProps> = ({
  vocabularyList,
  passageTitle,
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const speakWord = (word: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/15 backdrop-blur-sm">
              <BookMarked className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">
                Key English Vocabulary Bank
              </h3>
              <p className="text-xs text-emerald-100 mt-0.5">
                Passage: {passageTitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of Vocab */}
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          <div className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              All definitions and examples are curated in clear, natural English to boost your reading and vocabulary mastery.
            </span>
          </div>

          <div className="space-y-3">
            {vocabularyList.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 hover:border-emerald-300 dark:hover:border-emerald-700 transition space-y-2 shadow-xs"
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-base font-bold text-slate-900 dark:text-white capitalize">
                      {item.word}
                    </span>
                    <span className="text-xs italic text-emerald-600 dark:text-emerald-400 font-medium">
                      ({item.partOfSpeech})
                    </span>
                    {item.pronunciation && (
                      <span className="text-xs font-mono text-slate-400">
                        {item.pronunciation}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => speakWord(item.word)}
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition flex items-center gap-1 text-xs"
                    title="Pronounce word"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Listen</span>
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong className="text-slate-900 dark:text-slate-100 font-semibold">Definition: </strong>
                  {item.definition}
                </p>

                {item.exampleSentence && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic bg-slate-50 dark:bg-slate-900/60 p-2 rounded-lg border border-slate-100 dark:border-slate-800">
                    <strong className="not-italic text-slate-600 dark:text-slate-300 font-semibold">Example: </strong>
                    "{item.exampleSentence}"
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 text-xs font-bold transition"
          >
            Close Vocabulary
          </button>
        </div>
      </div>
    </div>
  );
};
