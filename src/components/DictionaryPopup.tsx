import React from 'react';
import { WordDefinition } from '../services/dictionaryService';
import { Volume2, X, BookOpen } from 'lucide-react';

interface DictionaryPopupProps {
  definition: WordDefinition | null;
  position: { x: number; y: number } | null;
  loading: boolean;
  onClose: () => void;
}

export const DictionaryPopup: React.FC<DictionaryPopupProps> = ({
  definition,
  position,
  loading,
  onClose
}) => {
  if (!position || (!definition && !loading)) return null;

  const speakWord = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  // Adjust popup position so it doesn't overflow screen bounds
  const left = Math.min(Math.max(16, position.x - 140), window.innerWidth - 320);
  const top = position.y + 12;

  return (
    <div
      style={{ left: `${left}px`, top: `${top}px` }}
      className="fixed z-50 w-72 sm:w-80 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 shadow-2xl p-4 text-slate-800 dark:text-slate-100 animate-in fade-in zoom-in-95 duration-150"
    >
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
          <BookOpen className="w-3.5 h-3.5" />
          <span>English Word Meaning</span>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          aria-label="Close"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {loading ? (
        <div className="py-4 text-center text-sm text-slate-500">
          <div className="inline-block w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mr-2"></div>
          Looking up word in English...
        </div>
      ) : definition ? (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-base font-bold capitalize text-slate-900 dark:text-white">
                {definition.word}
              </span>
              <span className="text-xs italic text-indigo-500 font-medium">
                ({definition.partOfSpeech})
              </span>
            </div>
            <button
              onClick={() => speakWord(definition.word)}
              title="Listen to pronunciation"
              className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition flex items-center gap-1 text-xs"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Audio</span>
            </button>
          </div>

          {definition.phonetic && (
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {definition.phonetic}
            </p>
          )}

          <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 font-medium bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
            {definition.definition}
          </p>

          {definition.example && (
            <div className="text-[11px] text-slate-500 dark:text-slate-400 italic">
              <span className="font-semibold not-italic text-slate-600 dark:text-slate-300">Example: </span>
              "{definition.example}"
            </div>
          )}

          {definition.synonyms && definition.synonyms.length > 0 && (
            <div className="flex flex-wrap items-center gap-1 pt-1 text-[11px]">
              <span className="text-slate-400 font-medium">Synonyms:</span>
              {definition.synonyms.map((s, idx) => (
                <span
                  key={idx}
                  className="px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};
