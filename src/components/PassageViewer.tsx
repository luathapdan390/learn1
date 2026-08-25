import React, { useRef, useEffect } from 'react';
import { ReadingTest } from '../types/reading';
import { BookOpen, Volume2, VolumeX, Sparkles, HelpCircle, Eye } from 'lucide-react';
import { lookupWord, WordDefinition } from '../services/dictionaryService';

interface PassageViewerProps {
  test: ReadingTest;
  fontSize: 'normal' | 'large' | 'xlarge';
  readingTheme: 'light' | 'sepia' | 'dark';
  highlightedParagraph: number | null;
  highlightedQuote: string | null;
  onWordClick: (definition: WordDefinition, pos: { x: number; y: number }) => void;
  onWordLookupStart: (pos: { x: number; y: number }) => void;
}

export const PassageViewer: React.FC<PassageViewerProps> = ({
  test,
  fontSize,
  readingTheme,
  highlightedParagraph,
  highlightedQuote,
  onWordClick,
  onWordLookupStart
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = React.useState(false);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  // Scroll to highlighted paragraph when requested
  useEffect(() => {
    if (highlightedParagraph !== null && paragraphRefs.current[highlightedParagraph - 1]) {
      const el = paragraphRefs.current[highlightedParagraph - 1];
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [highlightedParagraph]);

  // Handle Text to speech
  const toggleAudioSpeech = () => {
    if (!('speechSynthesis' in window)) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();
    const fullText = test.paragraphs.join('. ');
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // clear, comfortable pace for Grade 7

    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  // Font class mapping
  const fontSizeClasses = {
    normal: 'text-base leading-relaxed',
    large: 'text-lg leading-loose',
    xlarge: 'text-xl leading-loose'
  };

  // Theme styling mapping
  const themeClasses = {
    light: 'bg-white text-slate-800 border-slate-200/80 shadow-sm',
    sepia: 'bg-[#fcf7ec] text-[#43302b] border-[#e8ddc9] shadow-sm',
    dark: 'bg-slate-900 text-slate-100 border-slate-800 shadow-sm'
  };

  // Handle word click
  const handleWordSpanClick = async (e: React.MouseEvent<HTMLSpanElement>, rawWord: string) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = { x: rect.left, y: rect.bottom };
    onWordLookupStart(pos);

    const definition = await lookupWord(rawWord);
    if (definition) {
      onWordClick(definition, pos);
    }
  };

  // Render paragraph with clickable words & highlighted evidence
  const renderParagraphContent = (paraText: string, paraIndex: number) => {
    const isTargetPara = highlightedParagraph === paraIndex + 1;

    // Check if there is a specific quote highlight
    if (isTargetPara && highlightedQuote && paraText.includes(highlightedQuote)) {
      const parts = paraText.split(highlightedQuote);
      return (
        <span>
          {renderWordSpans(parts[0])}
          <mark className="bg-amber-200/90 dark:bg-amber-500/30 text-amber-950 dark:text-amber-200 px-1 py-0.5 rounded font-semibold border-b-2 border-amber-500 transition-all duration-300">
            {highlightedQuote}
          </mark>
          {renderWordSpans(parts[1])}
        </span>
      );
    }

    return renderWordSpans(paraText);
  };

  const renderWordSpans = (text: string) => {
    if (!text) return null;
    const tokens = text.split(/(\s+|[.,!?;:()"])/);

    return tokens.map((token, i) => {
      const isWord = /^[a-zA-Z0-9'-]+$/.test(token);
      if (!isWord) return token;

      return (
        <span
          key={i}
          onClick={(e) => handleWordSpanClick(e, token)}
          className="hover:bg-indigo-100 dark:hover:bg-indigo-900/60 hover:text-indigo-700 dark:hover:text-indigo-300 cursor-pointer rounded px-0.5 transition-colors duration-150 inline-block"
          title="Click to see English meaning"
        >
          {token}
        </span>
      );
    });
  };

  return (
    <div
      className={`rounded-2xl border p-5 sm:p-7 flex flex-col h-full transition-colors duration-200 ${themeClasses[readingTheme]}`}
    >
      {/* Passage Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200/60 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300">
              <BookOpen className="w-3 h-3" />
              Reading Passage • Grade 7
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
              Difficulty: {test.difficulty}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight font-serif">
            {test.title}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Topic: <span className="font-semibold">{test.topic}</span> • {test.wordCount} words
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleAudioSpeech}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition shadow-sm ${
              isPlayingAudio
                ? 'bg-rose-50 border-rose-300 text-rose-700 dark:bg-rose-950/60 dark:border-rose-800 dark:text-rose-300 animate-pulse'
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/80'
            }`}
            title={isPlayingAudio ? 'Stop reading' : 'Read passage aloud'}
          >
            {isPlayingAudio ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span>{isPlayingAudio ? 'Stop Audio' : 'Read Aloud'}</span>
          </button>
        </div>
      </div>

      {/* Helpful Hint banner */}
      <div className="mb-4 px-3 py-2 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-between text-xs text-indigo-700 dark:text-indigo-300">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-500 shrink-0" />
          <span>
            <strong className="font-semibold">Reading Tip:</strong> Click any word in the text to see its English definition!
          </span>
        </div>
        {highlightedParagraph !== null && (
          <span className="flex items-center gap-1 text-[11px] font-bold bg-indigo-200/80 dark:bg-indigo-900 px-2 py-0.5 rounded-md">
            <Eye className="w-3 h-3" />
            Showing evidence in ¶ {highlightedParagraph}
          </span>
        )}
      </div>

      {/* Main Paragraphs Area */}
      <div className="overflow-y-auto pr-1 space-y-4 font-serif select-text flex-1">
        {test.paragraphs.map((para, index) => {
          const isTarget = highlightedParagraph === index + 1;
          return (
            <div
              key={index}
              ref={(el) => { paragraphRefs.current[index] = el; }}
              className={`relative p-3 rounded-xl transition-all duration-300 ${
                isTarget
                  ? 'bg-indigo-50/80 dark:bg-indigo-950/40 border-l-4 border-indigo-600 shadow-sm ring-1 ring-indigo-200 dark:ring-indigo-800'
                  : 'hover:bg-black/[0.02] dark:hover:bg-white/[0.02]'
              }`}
            >
              <div className="flex items-start gap-2.5">
                <span className="shrink-0 select-none text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-300 mt-1">
                  ¶ {index + 1}
                </span>
                <p className={`${fontSizeClasses[fontSize]} text-justify`}>
                  {renderParagraphContent(para, index)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
