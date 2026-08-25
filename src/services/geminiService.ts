import { GoogleGenAI } from '@google/genai';
import { ReadingTest } from '../types/reading';

export async function generateGrade7ReadingTest(customTopic?: string): Promise<ReadingTest> {
  const apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY || (window as any).GEMINI_API_KEY || '';
  
  if (!apiKey) {
    throw new Error('Gemini API key is not configured. Please use the preset tests.');
  }

  const ai = new GoogleGenAI({ apiKey });
  const topic = customTopic?.trim() || 'School Life & Future Technology';

  const prompt = `Generate a complete English Reading Comprehension test designed specifically for Grade 7 secondary students (medium difficulty level, A2-B1 English learner level).
Passage Topic: ${topic}
Requirements:
1. Passage length: 280-320 words, split into 4-5 numbered paragraphs.
2. English ONLY (DO NOT include any Vietnamese translations or explanations).
3. Exactly 10 multiple-choice questions (A, B, C, D) testing various comprehension skills:
   - Question 1: Main Idea / Best Title
   - Question 2: Detail / Factual information
   - Question 3: Detail / Factual information
   - Question 4: Vocabulary in context (word meaning)
   - Question 5: Pronoun reference (e.g., 'they', 'it', 'these')
   - Question 6: Negative fact (Which of the following is NOT true / NOT mentioned?)
   - Question 7: Detail / Reason (Why...)
   - Question 8: Inference
   - Question 9: Factual / Supporting evidence
   - Question 10: Conclusion or Author's Purpose
4. Each question must have:
   - 4 options: A, B, C, D (only 1 strictly correct)
   - correctAnswer: 'A' | 'B' | 'C' | 'D'
   - explanation in simple English
   - evidenceParagraph (number 1 to 5)
   - evidenceQuote (exact short quote from the text)
   - skillType ('main-idea' | 'factual-detail' | 'vocabulary' | 'pronoun-reference' | 'negative-fact' | 'inference' | 'author-purpose')
5. Include 4-5 vocabulary items with word, partOfSpeech, pronunciation, simple definition, and exampleSentence.

Respond ONLY with valid JSON following this schema:
{
  "id": "generated-${Date.now()}",
  "title": "string",
  "topic": "${topic}",
  "difficulty": "Medium",
  "wordCount": 300,
  "gradeLevel": "Grade 7",
  "summary": "string",
  "paragraphs": ["paragraph 1", "paragraph 2", "paragraph 3", "paragraph 4"],
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
