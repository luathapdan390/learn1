import React, { useState } from 'react';
import { ReadingTest } from '../types/reading';
import { generateGrade7ReadingTest } from '../services/geminiService';
import { Sparkles, X, Wand2, Loader2, BookOpen, AlertCircle } from 'lucide-react';

interface CustomTestGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTestGenerated: (newTest: ReadingTest) => void;
}

export const CustomTestGeneratorModal: React.FC<CustomTestGeneratorModalProps> = ({
  isOpen,
  onClose,
  onTestGenerated
}) => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const popularTopics = [
    'Traditional Vietnamese Folk Games for Children',
    'Robots and Artificial Intelligence in School',
    'Saving Endangered Sea Turtles and Ocean Life',
    'Space Exploration and Life on the Moon',
    'Renewable Solar and Wind Energy for Future Cities'
  ];

  const handleGenerate = async (selectedTopic?: string) => {
    const finalTopic = selectedTopic || topic;
    if (!finalTopic.trim()) {
      setError('Please enter or select a topic for the reading test.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const generatedTest = await generateGrade7ReadingTest(finalTopic);
      onTestGenerated(generatedTest);
      onClose();
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to generate test. Please try again or use preset tests.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/15 backdrop-blur-sm">
              <Wand2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">
                Generate Custom Grade 7 Test
              </h3>
              <p className="text-xs text-purple-100 mt-0.5">
                AI-crafted 10-question medium reading test
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            disabled={loading}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition disabled:opacity-40"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
              Enter Topic or Theme:
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. Sports Day at School, Wildlife Conservation..."
              disabled={loading}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Quick Suggestions */}
          <div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-2">
              Or pick a popular Grade 7 topic:
            </span>
            <div className="space-y-1.5">
              {popularTopics.map((t, idx) => (
                <button
                  key={idx}
                  type="button"
                  disabled={loading}
                  onClick={() => {
                    setTopic(t);
                    handleGenerate(t);
                  }}
                  className="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 hover:bg-purple-50 dark:bg-slate-800/60 dark:hover:bg-purple-950/40 text-slate-700 dark:text-slate-200 text-xs font-medium transition flex items-center justify-between group disabled:opacity-40"
                >
                  <span className="truncate pr-2">{t}</span>
                  <Sparkles className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-600 transition shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={() => handleGenerate()}
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Generating Grade 7 Test (10 Questions)...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Test Now</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
