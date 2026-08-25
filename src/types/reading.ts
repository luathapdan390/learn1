export type QuestionType = 
  | 'main-idea' 
  | 'factual-detail' 
  | 'vocabulary' 
  | 'pronoun-reference' 
  | 'inference' 
  | 'negative-fact' 
  | 'author-purpose';

export interface Question {
  id: number;
  questionNumber: number;
  questionText: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  evidenceParagraph: number;
  evidenceQuote: string;
  skillType: QuestionType;
}

export interface VocabularyItem {
  word: string;
  partOfSpeech: string;
  pronunciation?: string;
  definition: string;
  exampleSentence: string;
}

export interface ReadingTest {
  id: string;
  title: string;
  topic: string;
  difficulty: 'Medium' | 'Medium-Advanced' | 'Standard Grade 7';
  wordCount: number;
  gradeLevel: 'Grade 7';
  summary: string;
  paragraphs: string[];
  vocabularyList: VocabularyItem[];
  questions: Question[]; // Exactly 10 questions
}

export interface StudentAnswers {
  [questionId: number]: 'A' | 'B' | 'C' | 'D';
}

export interface FlaggedQuestions {
  [questionId: number]: boolean;
}

export interface TestResult {
  testId: string;
  totalQuestions: number;
  correctAnswersCount: number;
  scoreScale10: number; // e.g. 8.0 / 10.0
  percentage: number;
  timeSpentSeconds: number;
  completedAt: string;
  skillBreakdown: {
    [key in QuestionType]?: {
      correct: number;
      total: number;
    };
  };
  answers: StudentAnswers;
}
