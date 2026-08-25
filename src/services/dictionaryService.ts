export interface WordDefinition {
  word: string;
  phonetic?: string;
  partOfSpeech: string;
  definition: string;
  example?: string;
  synonyms?: string[];
}

// Built-in offline quick dictionary for common Grade 7 vocabulary
const BUILT_IN_DICTIONARY: Record<string, WordDefinition> = {
  environment: {
    word: 'environment',
    phonetic: '/ɪnˈvaɪrənmənt/',
    partOfSpeech: 'noun',
    definition: 'The natural world, including the land, water, air, plants, and animals.',
    example: 'We must work together to protect our local environment.',
    synonyms: ['surroundings', 'nature', 'ecosystem']
  },
  pollution: {
    word: 'pollution',
    phonetic: '/pəˈluːʃn/',
    partOfSpeech: 'noun',
    definition: 'Harmful materials or dirty chemicals introduced into the environment.',
    example: 'Car exhaust is a major cause of air pollution.',
    synonyms: ['contamination', 'dirtiness', 'smog']
  },
  recycle: {
    word: 'recycle',
    phonetic: '/ˌriːˈsaɪkl/',
    partOfSpeech: 'verb',
    definition: 'To treat or process used materials so that they can be used again.',
    example: 'Students recycle plastic bottles and cans.',
    synonyms: ['reprocess', 'reuse', 'reclaim']
  },
  community: {
    word: 'community',
    phonetic: '/kəˈmjuːnəti/',
    partOfSpeech: 'noun',
    definition: 'A group of people living in the same place or having a particular characteristic in common.',
    example: 'The local community held a meeting in the town hall.',
    synonyms: ['neighborhood', 'society', 'public']
  },
  campaign: {
    word: 'campaign',
    phonetic: '/kæmˈpeɪn/',
    partOfSpeech: 'noun',
    definition: 'A planned series of actions intended to achieve a specific goal.',
    example: 'Our school launched a tree-planting campaign.',
    synonyms: ['movement', 'drive', 'operation']
  },
  nutritious: {
    word: 'nutritious',
    phonetic: '/njuːˈtrɪʃəs/',
    partOfSpeech: 'adjective',
    definition: 'Containing many of the substances which help the body to grow and stay healthy.',
    example: 'Fresh fruits and vegetables are very nutritious.',
    synonyms: ['nourishing', 'wholesome', 'healthy']
  },
  concentrate: {
    word: 'concentrate',
    phonetic: '/ˈkɒnsntreɪt/',
    partOfSpeech: 'verb',
    definition: 'To give all your attention or effort to something.',
    example: 'A good breakfast helps you concentrate in class.',
    synonyms: ['focus', 'pay attention']
  },
  reunion: {
    word: 'reunion',
    phonetic: '/ˌriːˈjuːniən/',
    partOfSpeech: 'noun',
    definition: 'A social gathering of people who have not been together for some time.',
    example: 'The festival is a special moment for family reunion.',
    synonyms: ['gathering', 'assembly', 'meetup']
  },
  symbolize: {
    word: 'symbolize',
    phonetic: '/ˈsɪmbəlaɪz/',
    partOfSpeech: 'verb',
    definition: 'To represent something or stand as a symbol for an idea or quality.',
    example: 'The round mooncake symbolizes unity and completeness.',
    synonyms: ['represent', 'signify', 'stand for']
  },
  cherish: {
    word: 'cherish',
    phonetic: '/ˈtʃerɪʃ/',
    partOfSpeech: 'verb',
    definition: 'To hold something dear; feel or show great affection for.',
    example: 'Villagers cherish the peace and quiet of rural life.',
    synonyms: ['treasure', 'value', 'appreciate']
  }
};

export async function lookupWord(rawWord: string): Promise<WordDefinition | null> {
  const cleanWord = rawWord.toLowerCase().replace(/[^a-z]/g, '');
  if (!cleanWord || cleanWord.length < 2) return null;

  // Check built-in cache
  if (BUILT_IN_DICTIONARY[cleanWord]) {
    return BUILT_IN_DICTIONARY[cleanWord];
  }

  // Attempt free dictionary API lookup (English-to-English)
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${cleanWord}`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const item = data[0];
        const meaning = item.meanings?.[0];
        const def = meaning?.definitions?.[0];
        const phonetic = item.phonetics?.find((p: any) => p.text)?.text || item.phonetic;

        return {
          word: item.word || cleanWord,
          phonetic: phonetic,
          partOfSpeech: meaning?.partOfSpeech || 'word',
          definition: def?.definition || 'No definition available.',
          example: def?.example,
          synonyms: meaning?.synonyms?.slice(0, 3) || []
        };
      }
    }
  } catch {
    // network failure or offline
  }

  // Fallback default clean item
  return {
    word: cleanWord,
    partOfSpeech: 'word',
    definition: `Word in context: "${cleanWord}". Read the surrounding sentence to understand its contextual meaning.`,
    synonyms: []
  };
}
