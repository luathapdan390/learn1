export type QuestionType = 
  | 'main-idea' 
  | 'factual-detail' 
  | 'vocabulary' 
  | 'synonym-antonym'
  | 'pronoun-reference' 
  | 'inference' 
  | 'negative-fact' 
  | 'author-purpose'
  | 'tone'
  | 'text-structure';

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

export interface PassageSection {
  sectionTitle?: string;
  paragraphs: string[];
}

export interface ReadingTest {
  id: string;
  title: string;
  subtitle?: string;
  topic: string;
  difficulty: 'Medium' | 'Standard Grade 10 Entrance' | 'Medium-Challenging';
  wordCount: number;
  gradeLevel: 'Grade 10 Entrance Exam' | 'Grade 7' | 'Grade 9 - 10';
  summary: string;
  paragraphs: string[];
  vocabularyList: VocabularyItem[];
  questions: Question[]; // Exactly 20 questions for Grade 10 Entrance Exam
  pointsPerQuestion?: number; // e.g. 0.5 pts per question (20 * 0.5 = 10.0 pts)
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
  scoreScale10: number; // e.g. 8.5 / 10.0 (each question is worth 0.5 pts)
  pointsPerQuestion: number;
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
