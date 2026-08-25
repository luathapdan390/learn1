import { GoogleGenAI } from '@google/genai';
import { ReadingTest } from '../types/reading';

export async function generateGrade10ReadingTest(customTopic?: string): Promise<ReadingTest> {
  const apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY || (window as any).GEMINI_API_KEY || '';
  
  if (!apiKey) {
    throw new Error('Gemini API key is not configured. Please use the preset tests.');
  }

  const ai = new GoogleGenAI({ apiKey });
  const topic = customTopic?.trim() || 'Environmental Conservation and Green Living';

  const prompt = `Generate a comprehensive English Reading Comprehension examination test designed specifically for Vietnamese Grade 10 High School Entrance Exam (Medium difficulty level, B1-B2 CEFR, no listening, 100% English).
Passage Topic: ${topic}
Requirements:
1. Passage length: 450-500 words, structured into 5 to 6 numbered paragraphs ([Paragraph 1], [Paragraph 2], etc.).
2. English ONLY (NO Vietnamese translations or bilingual notes anywhere).
3. Exactly 20 multiple-choice questions (A, B, C, D) corresponding to standard high school entrance exam reading skills:
   - Q1: Main idea / Overall purpose of the passage
   - Q2-Q5: Direct factual detail / True statements
   - Q6-Q8: Vocabulary in context / Synonyms
   - Q9-Q10: Pronoun reference (e.g. 'it', 'they', 'this region')
   - Q11-Q13: Negative facts (Which of the following is NOT true / NOT mentioned?)
   - Q14-Q16: Antonyms / Closest opposite meaning
   - Q17-Q18: Logical inference / Implication
   - Q19: Author's tone or attitude
   - Q20: Best alternate title / Comprehensive conclusion
4. Each question MUST have:
   - 4 clear options: A, B, C, D (exactly 1 unambiguously correct)
   - correctAnswer: 'A' | 'B' | 'C' | 'D'
   - explanation in concise English
   - evidenceParagraph: number (1 to 6)
   - evidenceQuote: exact supporting excerpt from the text
   - skillType: 'main-idea' | 'factual-detail' | 'vocabulary' | 'synonym-antonym' | 'pronoun-reference' | 'negative-fact' | 'inference' | 'author-purpose' | 'tone'
5. Include 5-6 key academic vocabulary items with word, partOfSpeech, pronunciation, English definition, and exampleSentence.
6. pointsPerQuestion: 0.5 (20 questions * 0.5 = 10.0 points total score).

Respond ONLY with valid JSON following this schema:
{
  "id": "test-10-custom-${Date.now()}",
  "title": "string",
  "subtitle": "High School Entrance Examination (Grade 10) - Reading Comprehension Section",
  "topic": "${topic}",
  "difficulty": "Medium",
  "wordCount": 470,
  "gradeLevel": "Grade 10 Entrance Exam",
  "pointsPerQuestion": 0.5,
  "summary": "string",
  "paragraphs": ["string", "string", "string", "string", "string", "string"],
  "vocabularyList": [
    {
      "word": "string",
      "partOfSpeech": "string",
      "pronunciation": "string",
      "definition": "string",
      "exampleSentence": "string"
    }
  ],
  "questions": [
    {
      "id": 1,
      "questionNumber": 1,
      "questionText": "string",
      "options": [
        {"key": "A", "text": "string"},
        {"key": "B", "text": "string"},
        {"key": "C", "text": "string"},
        {"key": "D", "text": "string"}
      ],
      "correctAnswer": "A",
      "explanation": "string",
      "evidenceParagraph": 1,
      "evidenceQuote": "string",
      "skillType": "main-idea"
    }
  ]
}`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      responseMimeType: 'application/json'
    }
  });

  const text = response.text;
  if (!text) throw new Error('Empty response received from AI model');
  
  const parsedData = JSON.parse(text) as ReadingTest;
  return parsedData;
}
