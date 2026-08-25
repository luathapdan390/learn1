import { ReadingTest } from '../types/reading';

export const GRADE_7_READING_TESTS: ReadingTest[] = [
  {
    id: 'test-1-green-living',
    title: 'Green Teen Project: Making Our Town Cleaner and Greener',
    topic: 'Environment & Community Service',
    difficulty: 'Medium',
    wordCount: 310,
    gradeLevel: 'Grade 7',
    summary: 'A group of secondary school students in Green Valley started an inspiring environmental club to clean parks, plant trees, and reduce plastic waste.',
    paragraphs: [
      "In many cities today, environmental pollution is becoming a serious problem. To tackle this challenge, a group of seventh-grade students in Green Valley Middle School created a club called the 'Green Teen Project' six months ago. Their main goal is to protect the local environment and encourage people in their neighborhood to adopt a greener lifestyle.",
      "Every Saturday morning, more than thirty club members gather at the local community center. They wear bright green shirts and carry reusable garbage bags. Their first regular activity is picking up litter in public parks, along riverbanks, and around school grounds. In addition, they sort the collected waste into plastic bottles, paper, aluminum cans, and organic matter for recycling. Last month alone, they collected over 200 kilograms of plastic waste.",
      "Besides cleaning up the town, the Green Teen members also organize tree-planting campaigns. They have planted more than 150 young trees in bare areas near residential buildings. Trees provide cool shade during hot summer days, purify the fresh air, and create habitats for birds and small animals. The students water the trees twice a week and check their growth carefully.",
      "Furthermore, the club holds educational workshops for younger pupils at primary schools. They teach children how to recycle old cardboard boxes into pencil holders, make compost from kitchen scraps, and save electricity at home. Mark, the club leader, says: 'We believe that small actions can make a huge difference. When we take care of our environment, it will take care of us.'",
      "Thanks to the hard work of the Green Teen Project, the town has become visibly cleaner, and more residents are now bringing their own cloth bags to the market. The local town council recently awarded the students a certificate of honor for their meaningful contribution."
    ],
    vocabularyList: [
      {
        word: "adopt",
        partOfSpeech: "verb",
        pronunciation: "/əˈdɒpt/",
        definition: "To start to use a new method, habit, or way of living.",
        exampleSentence: "Our school encourages all students to adopt eco-friendly habits."
      },
      {
        word: "sort",
        partOfSpeech: "verb",
        pronunciation: "/sɔːt/",
        definition: "To arrange or separate things into groups according to type or quality.",
        exampleSentence: "Students sort plastic bottles, paper, and metal cans for recycling."
      },
      {
        word: "purify",
        partOfSpeech: "verb",
        pronunciation: "/ˈpjʊərɪfaɪ/",
        definition: "To make something pure or clean by removing dirty or harmful substances.",
        exampleSentence: "Green plants help purify the air in our classroom."
      },
      {
        word: "compost",
        partOfSpeech: "noun",
        pronunciation: "/ˈkɒmpɒst/",
        definition: "Decayed organic material used as a fertilizer for growing plants.",
        exampleSentence: "They use kitchen vegetable scraps to make rich compost for the garden."
      },
      {
        word: "contribution",
        partOfSpeech: "noun",
        pronunciation: "/ˌkɒntrɪˈbjuːʃn/",
        definition: "An action or service that helps to cause or improve something.",
        exampleSentence: "The students received an award for their great contribution to the community."
      }
    ],
    questions: [
      {
        id: 1,
        questionNumber: 1,
        questionText: "What is the best title for this passage?",
        options: [
          { key: 'A', text: 'How to Recycle Kitchen Scraps at Home' },
          { key: 'B', text: 'Students Working Together for a Greener Community' },
          { key: 'C', text: 'The History of Green Valley Middle School' },
          { key: 'D', text: 'The Dangers of Plastic Waste in Big Cities' }
        ],
        correctAnswer: 'B',
        explanation: "The passage describes how 7th-grade students formed the 'Green Teen Project' to clean parks, plant trees, recycle, and educate others to make their town greener.",
        evidenceParagraph: 1,
        evidenceQuote: "To tackle this challenge, a group of seventh-grade students in Green Valley Middle School created a club called the 'Green Teen Project' six months ago.",
        skillType: 'main-idea'
      },
      {
        id: 2,
        questionNumber: 2,
        questionText: "When was the 'Green Teen Project' founded?",
        options: [
          { key: 'A', text: 'Six months ago' },
          { key: 'B', text: 'Last Saturday' },
          { key: 'C', text: 'Last month' },
          { key: 'D', text: 'One year ago' }
        ],
        correctAnswer: 'A',
        explanation: "Paragraph 1 clearly states that the club was created 'six months ago' by seventh-grade students.",
        evidenceParagraph: 1,
        evidenceQuote: "created a club called the 'Green Teen Project' six months ago.",
        skillType: 'factual-detail'
      },
      {
        id: 3,
        questionNumber: 3,
        questionText: "What do club members do every Saturday morning?",
        options: [
          { key: 'A', text: 'Visit supermarkets to sell recycled items' },
          { key: 'B', text: 'Gather at the community center and clean public areas' },
          { key: 'C', text: 'Attend science classes at their school' },
          { key: 'D', text: 'Compete in a sports tournament in the park' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 2 states that every Saturday morning they gather at the community center and pick up litter in public parks, riverbanks, and school grounds.",
        evidenceParagraph: 2,
        evidenceQuote: "Every Saturday morning, more than thirty club members gather at the local community center. They wear bright green shirts and carry reusable garbage bags. Their first regular activity is picking up litter in public parks...",
        skillType: 'factual-detail'
      },
      {
        id: 4,
        questionNumber: 4,
        questionText: "How much plastic waste did the club collect last month alone?",
        options: [
          { key: 'A', text: 'About 30 kilograms' },
          { key: 'B', text: 'Over 150 kilograms' },
          { key: 'C', text: 'Over 200 kilograms' },
          { key: 'D', text: 'Around 500 kilograms' }
        ],
        correctAnswer: 'C',
        explanation: "Paragraph 2 directly reports: 'Last month alone, they collected over 200 kilograms of plastic waste.'",
        evidenceParagraph: 2,
        evidenceQuote: "Last month alone, they collected over 200 kilograms of plastic waste.",
        skillType: 'factual-detail'
      },
      {
        id: 5,
        questionNumber: 5,
        questionText: "The word 'purify' in paragraph 3 is closest in meaning to:",
        options: [
          { key: 'A', text: 'clean' },
          { key: 'B', text: 'pollute' },
          { key: 'C', text: 'warm' },
          { key: 'D', text: 'destroy' }
        ],
        correctAnswer: 'A',
        explanation: "'Purify' means to make something clean and free from harmful substances.",
        evidenceParagraph: 3,
        evidenceQuote: "Trees provide cool shade during hot summer days, purify the fresh air, and create habitats...",
        skillType: 'vocabulary'
      },
      {
        id: 6,
        questionNumber: 6,
        questionText: "The word 'They' in paragraph 4 refers to:",
        options: [
          { key: 'A', text: 'kitchen scraps' },
          { key: 'B', text: 'younger pupils' },
          { key: 'C', text: 'pencil holders' },
          { key: 'D', text: 'the Green Teen members' }
        ],
        correctAnswer: 'D',
        explanation: "In paragraph 4, 'the club holds educational workshops... They teach children how to recycle...', 'They' refers to the club members (Green Teen members).",
        evidenceParagraph: 4,
        evidenceQuote: "Furthermore, the club holds educational workshops for younger pupils at primary schools. They teach children how to recycle old cardboard boxes...",
        skillType: 'pronoun-reference'
      },
      {
        id: 7,
        questionNumber: 7,
        questionText: "According to paragraph 3, why are trees beneficial to the town?",
        options: [
          { key: 'A', text: 'They provide shade, clean the air, and shelter animals' },
          { key: 'B', text: 'They produce plastic bottles and paper for recycling' },
          { key: 'C', text: 'They stop people from using electricity at home' },
          { key: 'D', text: 'They can be cut down to build community centers' }
        ],
        correctAnswer: 'A',
        explanation: "Paragraph 3 explains: 'Trees provide cool shade during hot summer days, purify the fresh air, and create habitats for birds and small animals.'",
        evidenceParagraph: 3,
        evidenceQuote: "Trees provide cool shade during hot summer days, purify the fresh air, and create habitats for birds and small animals.",
        skillType: 'factual-detail'
      },
      {
        id: 8,
        questionNumber: 8,
        questionText: "Which of the following activities is NOT mentioned in the passage?",
        options: [
          { key: 'A', text: 'Planting trees in bare areas' },
          { key: 'B', text: 'Sorting garbage for recycling' },
          { key: 'C', text: 'Selling eco-friendly clothes to raise money' },
          { key: 'D', text: 'Teaching primary students how to make compost' }
        ],
        correctAnswer: 'C',
        explanation: "Selling clothes is never mentioned. Planting trees (para 3), sorting garbage (para 2), and teaching compost making (para 4) are all explicitly mentioned.",
        evidenceParagraph: 2,
        evidenceQuote: "They wear bright green shirts and carry reusable garbage bags... sort the collected waste...",
        skillType: 'negative-fact'
      },
      {
        id: 9,
        questionNumber: 9,
        questionText: "What can be inferred about the local residents in paragraph 5?",
        options: [
          { key: 'A', text: 'They dislike the students\' weekend activities' },
          { key: 'B', text: 'They have been influenced positively by the students' },
          { key: 'C', text: 'They refused to stop using plastic shopping bags' },
          { key: 'D', text: 'They moved away because of environmental pollution' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 5 mentions that the town is cleaner and 'more residents are now bringing their own cloth bags to the market', showing the students' positive influence.",
        evidenceParagraph: 5,
        evidenceQuote: "Thanks to the hard work of the Green Teen Project, the town has become visibly cleaner, and more residents are now bringing their own cloth bags to the market.",
        skillType: 'inference'
      },
      {
        id: 10,
        questionNumber: 10,
        questionText: "What is the author's primary purpose in writing this article?",
        options: [
          { key: 'A', text: 'To warn readers about dangerous wild animals' },
          { key: 'B', text: 'To complain about dirty parks in Green Valley' },
          { key: 'C', text: 'To praise and inspire young people taking action for the environment' },
          { key: 'D', text: 'To explain how to run a municipal town council' }
        ],
        correctAnswer: 'C',
        explanation: "The author highlights the positive impact of these 7th-grade students, showing how teamwork and initiative can inspire an entire community to protect nature.",
        evidenceParagraph: 4,
        evidenceQuote: "Mark, the club leader, says: 'We believe that small actions can make a huge difference. When we take care of our environment, it will take care of us.'",
        skillType: 'author-purpose'
      }
    ]
  },
  {
    id: 'test-2-festivals',
    title: 'The Mid-Autumn Festival: Lights, Family, and Mooncakes',
    topic: 'Festivals & Traditions',
    difficulty: 'Medium',
    wordCount: 295,
    gradeLevel: 'Grade 7',
    summary: 'An exploration of the traditions, colorful lantern parades, lion dances, and delicious mooncakes during the celebrated Mid-Autumn Festival.',
    paragraphs: [
      "The Mid-Autumn Festival, also known as the Full Moon Festival or Children's Festival, is one of the most famous and delightful celebrations in many Asian countries. It usually takes place on the 15th day of the eighth lunar month, when the moon is believed to be at its brightest and fullest shape of the entire year.",
      "Weeks before the festival arrives, streets are brightly decorated with hundreds of colorful lanterns in various shapes, such as stars, fish, butterflies, and cartoon characters. Children look forward to this special occasion because they receive toys, masks, and handmade paper lanterns from their parents and grandparents.",
      "On the festival night, lively dragon and lion dance troupes perform enthusiastically along the streets to the rhythmic beat of drums and gongs. Children carry their glowing lanterns in cheerful parades around the neighborhood while singing traditional folk songs. The atmosphere is filled with laughter and excitement.",
      "Another indispensable part of the celebration is sharing mooncakes with family members. Mooncakes are round pastries filled with sweet lotus seed paste, red beans, or salted egg yolks. Their round shape symbolizes unity, completeness, and family reunion. In the evening, families gather in their courtyards to admire the shining full moon, sip hot fragrant green tea, and enjoy sweet slices of mooncake together.",
      "In modern times, although lifestyles have changed rapidly, the Mid-Autumn Festival remains a meaningful time for family members to reunite, show gratitude, and celebrate the beauty of nature."
    ],
    vocabularyList: [
      {
        word: "delightful",
        partOfSpeech: "adjective",
        pronunciation: "/dɪˈlaɪtfəl/",
        definition: "Giving great pleasure, charm, or happiness.",
        exampleSentence: "We had a delightful evening watching the lantern parade."
      },
      {
        word: "indispensable",
        partOfSpeech: "adjective",
        pronunciation: "/ˌɪndɪˈspensəbl/",
        definition: "Too important to be without; essential.",
        exampleSentence: "Mooncakes are an indispensable treat during the Mid-Autumn Festival."
      },
      {
        word: "symbolize",
        partOfSpeech: "verb",
        pronunciation: "/ˈsɪmbəlaɪz/",
        definition: "To represent something or be a symbol of an idea.",
        exampleSentence: "The round shape of mooncakes symbolizes family unity."
      },
      {
        word: "reunion",
        partOfSpeech: "noun",
        pronunciation: "/ˌriːˈjuːniən/",
        definition: "A situation in which people meet again after being separated.",
        exampleSentence: "The festival is a special time for family reunion."
      }
    ],
    questions: [
      {
        id: 1,
        questionNumber: 1,
        questionText: "What is the main topic of the reading passage?",
        options: [
          { key: 'A', text: 'How to make handmade paper lanterns' },
          { key: 'B', text: 'Traditional customs and celebrations of the Mid-Autumn Festival' },
          { key: 'C', text: 'The history of dragon dances in Asian countries' },
          { key: 'D', text: 'Different kinds of tea enjoyed during holidays' }
        ],
        correctAnswer: 'B',
        explanation: "The passage introduces the Mid-Autumn Festival, its timing, lantern parades, lion dances, mooncake traditions, and family reunions.",
        evidenceParagraph: 1,
        evidenceQuote: "The Mid-Autumn Festival, also known as the Full Moon Festival or Children's Festival, is one of the most famous and delightful celebrations...",
        skillType: 'main-idea'
      },
      {
        id: 2,
        questionNumber: 2,
        questionText: "When is the Mid-Autumn Festival held?",
        options: [
          { key: 'A', text: 'On the first day of the lunar new year' },
          { key: 'B', text: 'On the 15th day of the eighth lunar month' },
          { key: 'C', text: 'On the eighth day of the fifth lunar month' },
          { key: 'D', text: 'On the 15th day of every calendar month' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 1 states: 'It usually takes place on the 15th day of the eighth lunar month...'",
        evidenceParagraph: 1,
        evidenceQuote: "It usually takes place on the 15th day of the eighth lunar month, when the moon is believed to be at its brightest...",
        skillType: 'factual-detail'
      },
      {
        id: 3,
        questionNumber: 3,
        questionText: "Why do children look forward to this festival?",
        options: [
          { key: 'A', text: 'They do not have to study for three months' },
          { key: 'B', text: 'They receive toys, masks, and lanterns from family' },
          { key: 'C', text: 'They can travel to other countries by airplane' },
          { key: 'D', text: 'They are allowed to stay awake all night to cook meals' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 2 states: 'Children look forward to this special occasion because they receive toys, masks, and handmade paper lanterns from their parents and grandparents.'",
        evidenceParagraph: 2,
        evidenceQuote: "Children look forward to this special occasion because they receive toys, masks, and handmade paper lanterns from their parents and grandparents.",
        skillType: 'factual-detail'
      },
      {
        id: 4,
        questionNumber: 4,
        questionText: "What accompanies the performances of dragon and lion dancers?",
        options: [
          { key: 'A', text: 'Quiet classical piano music' },
          { key: 'B', text: 'Fireworks and rain showers' },
          { key: 'C', text: 'Rhythmic beats of drums and gongs' },
          { key: 'D', text: 'Modern electronic rock music' }
        ],
        correctAnswer: 'C',
        explanation: "Paragraph 3 notes that dancers perform 'to the rhythmic beat of drums and gongs.'",
        evidenceParagraph: 3,
        evidenceQuote: "perform enthusiastically along the streets to the rhythmic beat of drums and gongs.",
        skillType: 'factual-detail'
      },
      {
        id: 5,
        questionNumber: 5,
        questionText: "The word 'indispensable' in paragraph 4 is closest in meaning to:",
        options: [
          { key: 'A', text: 'essential' },
          { key: 'B', text: 'unimportant' },
          { key: 'C', text: 'expensive' },
          { key: 'D', text: 'dangerous' }
        ],
        correctAnswer: 'A',
        explanation: "'Indispensable' means completely necessary or essential.",
        evidenceParagraph: 4,
        evidenceQuote: "Another indispensable part of the celebration is sharing mooncakes with family members.",
        skillType: 'vocabulary'
      },
      {
        id: 6,
        questionNumber: 6,
        questionText: "What does the round shape of mooncakes symbolize?",
        options: [
          { key: 'A', text: 'Wealth and fast vehicles' },
          { key: 'B', text: 'Cold winter weather' },
          { key: 'C', text: 'Unity, completeness, and family reunion' },
          { key: 'D', text: 'Good grades in English exams' }
        ],
        correctAnswer: 'C',
        explanation: "Paragraph 4 explains: 'Their round shape symbolizes unity, completeness, and family reunion.'",
        evidenceParagraph: 4,
        evidenceQuote: "Their round shape symbolizes unity, completeness, and family reunion.",
        skillType: 'factual-detail'
      },
      {
        id: 7,
        questionNumber: 7,
        questionText: "The word 'Their' in paragraph 4 refers to:",
        options: [
          { key: 'A', text: 'family members' },
          { key: 'B', text: 'mooncakes' },
          { key: 'C', text: 'drums and gongs' },
          { key: 'D', text: 'colorful lanterns' }
        ],
        correctAnswer: 'B',
        explanation: "In paragraph 4, 'Mooncakes are round pastries... Their round shape symbolizes...', 'Their' refers to mooncakes.",
        evidenceParagraph: 4,
        evidenceQuote: "Mooncakes are round pastries filled with sweet lotus seed paste... Their round shape symbolizes unity...",
        skillType: 'pronoun-reference'
      },
      {
        id: 8,
        questionNumber: 8,
        questionText: "What do families typically do together in the evening?",
        options: [
          { key: 'A', text: 'Admire the full moon, drink tea, and eat mooncake slices' },
          { key: 'B', text: 'Go shopping for winter coats in supermarkets' },
          { key: 'C', text: 'Watch action movies in cinema theaters' },
          { key: 'D', text: 'Clean school classrooms and plant vegetables' }
        ],
        correctAnswer: 'A',
        explanation: "Paragraph 4 states: 'families gather in their courtyards to admire the shining full moon, sip hot fragrant green tea, and enjoy sweet slices of mooncake together.'",
        evidenceParagraph: 4,
        evidenceQuote: "families gather in their courtyards to admire the shining full moon, sip hot fragrant green tea, and enjoy sweet slices of mooncake together.",
        skillType: 'factual-detail'
      },
      {
        id: 9,
        questionNumber: 9,
        questionText: "Which of the following is NOT true according to the passage?",
        options: [
          { key: 'A', text: 'Lanterns can be made in the shapes of stars and fish' },
          { key: 'B', text: 'The festival happens when the moon is completely dark' },
          { key: 'C', text: 'Mooncakes can contain red beans or salted egg yolks' },
          { key: 'D', text: 'The festival is also known as the Children\'s Festival' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 1 states that the festival happens when the moon is at its brightest and fullest, NOT when it is completely dark.",
        evidenceParagraph: 1,
        evidenceQuote: "when the moon is believed to be at its brightest and fullest shape of the entire year.",
        skillType: 'negative-fact'
      },
      {
        id: 10,
        questionNumber: 10,
        questionText: "What is the core message expressed in the final paragraph?",
        options: [
          { key: 'A', text: 'Traditional festivals will soon disappear completely' },
          { key: 'B', text: 'Modern people do not have time for their families' },
          { key: 'C', text: 'Family connection and gratitude remain vital despite modern changes' },
          { key: 'D', text: 'Children should only play with electronic games' }
        ],
        correctAnswer: 'C',
        explanation: "Paragraph 5 concludes that despite rapid modern lifestyle changes, the festival remains a deeply meaningful time for family reunion, gratitude, and appreciating nature.",
        evidenceParagraph: 5,
        evidenceQuote: "the Mid-Autumn Festival remains a meaningful time for family members to reunite, show gratitude, and celebrate the beauty of nature.",
        skillType: 'inference'
      }
    ]
  },
  {
    id: 'test-3-healthy-habits',
    title: 'Eat Well, Sleep Well: Healthy Habits for Teenagers',
    topic: 'Health & Lifestyle',
    difficulty: 'Medium',
    wordCount: 285,
    gradeLevel: 'Grade 7',
    summary: 'Practical advice on nutrition, balanced physical exercise, and sufficient sleep to help teenagers stay energetic and focus better at school.',
    paragraphs: [
      "During the teenage years, our bodies and brains develop at a rapid pace. To support this growth, maintaining good health through smart daily habits is extremely important. Unfortunately, many students nowadays skip breakfast, spend hours playing video games late at night, and consume too much fast food.",
      "First of all, a nutritious diet provides the fuel our bodies need. Health experts recommend eating a balanced breakfast every morning, including whole grains, eggs, and fresh milk. Breakfast boosts concentration in morning classes and prevents fatigue. Moreover, teenagers should eat plenty of colorful vegetables and fruits because they contain essential vitamins and minerals that strengthen our immune system. Drinking at least 1.5 to 2 liters of clean water daily is also crucial for hydration.",
      "Secondly, regular physical exercise keeps our muscles strong and our hearts healthy. You do not need to train like a professional athlete; simply playing badminton, jogging, cycling, or swimming for 30 to 45 minutes every day is sufficient. Physical activity not only burns calories but also releases endorphins, natural chemicals that reduce stress and make you feel happier.",
      "Lastly, getting enough sleep is non-negotiable. Teenagers require about 8 to 9 hours of quality sleep each night. Going to bed late and using smartphones in bed can disrupt sleep patterns because the blue light from screens confuses the brain. A good night's rest helps repair muscle tissues, consolidates memory, and prepares you for a productive school day.",
      "In conclusion, building healthy lifestyle habits might require effort at first, but the long-term benefits for your mind and body are invaluable."
    ],
    vocabularyList: [
      {
        word: "fatigue",
        partOfSpeech: "noun",
        pronunciation: "/fəˈtiːɡ/",
        definition: "A feeling of extreme physical or mental tiredness.",
        exampleSentence: "Skipping meals often leads to fatigue during afternoon lessons."
      },
      {
        word: "sufficient",
        partOfSpeech: "adjective",
        pronunciation: "/səˈfɪʃnt/",
        definition: "Enough for a particular purpose; adequate.",
        exampleSentence: "Thirty minutes of daily exercise is sufficient for good health."
      },
      {
        word: "disrupt",
        partOfSpeech: "verb",
        pronunciation: "/dɪsˈrʌpt/",
        definition: "To interrupt or prevent something from continuing normally.",
        exampleSentence: "Looking at screens late at night can disrupt your sleep cycle."
      },
      {
        word: "invaluable",
        partOfSpeech: "adjective",
        pronunciation: "/ɪnˈvæljuəbl/",
        definition: "Extremely useful or valuable.",
        exampleSentence: "Daily exercise provides invaluable health benefits for students."
      }
    ],
    questions: [
      {
        id: 1,
        questionNumber: 1,
        questionText: "What is the main purpose of this passage?",
        options: [
          { key: 'A', text: 'To guide teenagers on how to build healthy daily habits' },
          { key: 'B', text: 'To explain how to become a professional athlete' },
          { key: 'C', text: 'To warn students about the cost of fast food' },
          { key: 'D', text: 'To teach students how to repair broken mobile phones' }
        ],
        correctAnswer: 'A',
        explanation: "The passage discusses diet, exercise, and sleep to help teenagers lead healthy, balanced lives.",
        evidenceParagraph: 1,
        evidenceQuote: "maintaining good health through smart daily habits is extremely important.",
        skillType: 'main-idea'
      },
      {
        id: 2,
        questionNumber: 2,
        questionText: "According to paragraph 2, what does a balanced breakfast help students do?",
        options: [
          { key: 'A', text: 'Sleep longer in the morning' },
          { key: 'B', text: 'Boost concentration and prevent fatigue in class' },
          { key: 'C', text: 'Skip eating lunch and dinner' },
          { key: 'D', text: 'Win video game tournaments' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 2 states: 'Breakfast boosts concentration in morning classes and prevents fatigue.'",
        evidenceParagraph: 2,
        evidenceQuote: "Breakfast boosts concentration in morning classes and prevents fatigue.",
        skillType: 'factual-detail'
      },
      {
        id: 3,
        questionNumber: 3,
        questionText: "How much clean water should teenagers drink daily?",
        options: [
          { key: 'A', text: 'Less than 0.5 liters' },
          { key: 'B', text: 'At least 1.5 to 2 liters' },
          { key: 'C', text: 'Exactly 5 liters' },
          { key: 'D', text: 'Only when they feel thirsty after swimming' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 2 clearly advises: 'Drinking at least 1.5 to 2 liters of clean water daily is also crucial for hydration.'",
        evidenceParagraph: 2,
        evidenceQuote: "Drinking at least 1.5 to 2 liters of clean water daily is also crucial for hydration.",
        skillType: 'factual-detail'
      },
      {
        id: 4,
        questionNumber: 4,
        questionText: "The word 'sufficient' in paragraph 3 is closest in meaning to:",
        options: [
          { key: 'A', text: 'enough' },
          { key: 'B', text: 'useless' },
          { key: 'C', text: 'boring' },
          { key: 'D', text: 'impossible' }
        ],
        correctAnswer: 'A',
        explanation: "'Sufficient' means enough for a particular purpose.",
        evidenceParagraph: 3,
        evidenceQuote: "simply playing badminton, jogging, cycling, or swimming for 30 to 45 minutes every day is sufficient.",
        skillType: 'vocabulary'
      },
      {
        id: 5,
        questionNumber: 5,
        questionText: "The word 'they' in paragraph 2 refers to:",
        options: [
          { key: 'A', text: 'fast food items' },
          { key: 'B', text: 'morning classes' },
          { key: 'C', text: 'colorful vegetables and fruits' },
          { key: 'D', text: 'health experts' }
        ],
        correctAnswer: 'C',
        explanation: "In paragraph 2, 'teenagers should eat plenty of colorful vegetables and fruits because they contain essential vitamins...', 'they' refers to vegetables and fruits.",
        evidenceParagraph: 2,
        evidenceQuote: "teenagers should eat plenty of colorful vegetables and fruits because they contain essential vitamins...",
        skillType: 'pronoun-reference'
      },
      {
        id: 6,
        questionNumber: 6,
        questionText: "What chemical does physical exercise release to reduce stress?",
        options: [
          { key: 'A', text: 'Endorphins' },
          { key: 'B', text: 'Caffeine' },
          { key: 'C', text: 'Vitamins' },
          { key: 'D', text: 'Minerals' }
        ],
        correctAnswer: 'A',
        explanation: "Paragraph 3 mentions: 'Physical activity not only burns calories but also releases endorphins, natural chemicals that reduce stress...'",
        evidenceParagraph: 3,
        evidenceQuote: "Physical activity not only burns calories but also releases endorphins, natural chemicals that reduce stress...",
        skillType: 'factual-detail'
      },
      {
        id: 7,
        questionNumber: 7,
        questionText: "How many hours of sleep do teenagers require each night?",
        options: [
          { key: 'A', text: '4 to 5 hours' },
          { key: 'B', text: '6 to 7 hours' },
          { key: 'C', text: 'About 8 to 9 hours' },
          { key: 'D', text: 'More than 12 hours' }
        ],
        correctAnswer: 'C',
        explanation: "Paragraph 4 states: 'Teenagers require about 8 to 9 hours of quality sleep each night.'",
        evidenceParagraph: 4,
        evidenceQuote: "Teenagers require about 8 to 9 hours of quality sleep each night.",
        skillType: 'factual-detail'
      },
      {
        id: 8,
        questionNumber: 8,
        questionText: "Why can using smartphones in bed harm sleep quality?",
        options: [
          { key: 'A', text: 'The battery makes too much noise' },
          { key: 'B', text: 'The blue light from screens confuses the brain' },
          { key: 'C', text: 'It uses up home electricity too quickly' },
          { key: 'D', text: 'It makes the bed feel too warm' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 4 explains: 'using smartphones in bed can disrupt sleep patterns because the blue light from screens confuses the brain.'",
        evidenceParagraph: 4,
        evidenceQuote: "using smartphones in bed can disrupt sleep patterns because the blue light from screens confuses the brain.",
        skillType: 'factual-detail'
      },
      {
        id: 9,
        questionNumber: 9,
        questionText: "Which bad habit is NOT mentioned in paragraph 1?",
        options: [
          { key: 'A', text: 'Skipping breakfast' },
          { key: 'B', text: 'Consuming too much fast food' },
          { key: 'C', text: 'Staying up late playing video games' },
          { key: 'D', text: 'Refusing to attend physical education classes' }
        ],
        correctAnswer: 'D',
        explanation: "Paragraph 1 mentions skipping breakfast, playing games late, and eating fast food. It does not mention refusing PE classes.",
        evidenceParagraph: 1,
        evidenceQuote: "many students nowadays skip breakfast, spend hours playing video games late at night, and consume too much fast food.",
        skillType: 'negative-fact'
      },
      {
        id: 10,
        questionNumber: 10,
        questionText: "What can be concluded from the passage?",
        options: [
          { key: 'A', text: 'Only adults need to practice healthy habits' },
          { key: 'B', text: 'Small, consistent healthy habits lead to long-term well-being' },
          { key: 'C', text: 'Exercising for several hours daily is necessary to stay fit' },
          { key: 'D', text: 'Drinking water is only required during sports' }
        ],
        correctAnswer: 'B',
        explanation: "The conclusion states that building healthy lifestyle habits brings invaluable long-term benefits for mental and physical health.",
        evidenceParagraph: 5,
        evidenceQuote: "building healthy lifestyle habits might require effort at first, but the long-term benefits for your mind and body are invaluable.",
        skillType: 'inference'
      }
    ]
  },
  {
    id: 'test-4-countryside-life',
    title: 'Peaceful Countryside Life: Nature and Community',
    topic: 'Life in the Countryside',
    difficulty: 'Medium',
    wordCount: 290,
    gradeLevel: 'Grade 7',
    summary: 'A glimpse into the tranquil life in rural villages, surrounded by vast green fields, fresh air, close-knit neighbors, and seasonal harvests.',
    paragraphs: [
      "While modern cities are famous for tall skyscrapers, crowded shopping malls, and bustling traffic, life in the countryside offers a completely different experience. Rural areas are renowned for their peaceful atmosphere, vast green rice fields, and friendly communities where neighbors always look out for one another.",
      "One of the biggest advantages of living in the countryside is the clean, fresh environment. Unlike noisy urban centers filled with exhaust smoke from motorbikes and cars, villages are surrounded by lush trees, flowing rivers, and open skies. People wake up to the pleasant chirping of birds rather than loud traffic horns. Breathing fresh air every morning helps villagers stay active and feel relaxed.",
      "Furthermore, rural life follows the natural rhythm of farming seasons. During harvest time, golden paddies stretch across the horizon as farmers work together under the gentle sunlight. Children often help their parents feed farm animals or gather vegetables from home gardens. In the late afternoon, kids fly colorful kites in open pastures and swim in cool streams.",
      "The sense of community in the countryside is remarkably strong. Whenever someone builds a new house or celebrates a wedding, neighbors gladly come together to help without expecting payment. In the evenings, elderly villagers sit on wooden benches outside their porches to share stories over warm tea.",
      "Although the countryside may have fewer entertainment facilities like cinemas or huge supermarkets, many people cherish its simplicity, peacefulness, and tight-knit relationships."
    ],
    vocabularyList: [
      {
        word: "bustling",
        partOfSpeech: "adjective",
        pronunciation: "/ˈbʌslɪŋ/",
        definition: "Full of energetic and noisy activity; very busy.",
        exampleSentence: "Big city streets are always bustling with cars and pedestrians."
      },
      {
        word: "renowned",
        partOfSpeech: "adjective",
        pronunciation: "/rɪˈnaʊnd/",
        definition: "Known or talked about by many people; famous.",
        exampleSentence: "The village is renowned for its fresh air and friendly locals."
      },
      {
        word: "tight-knit",
        partOfSpeech: "adjective",
        pronunciation: "/ˌtaɪtˈnɪt/",
        definition: "Closely and firmly integrated; having close friendly ties.",
        exampleSentence: "They live in a tight-knit community where everyone knows each other."
      },
      {
        word: "cherish",
        partOfSpeech: "verb",
        pronunciation: "/ˈtʃerɪʃ/",
        definition: "To protect and care for someone or something lovingly; treasure.",
        exampleSentence: "Many rural families cherish their peaceful lifestyle."
      }
    ],
    questions: [
      {
        id: 1,
        questionNumber: 1,
        questionText: "What is the main topic of the passage?",
        options: [
          { key: 'A', text: 'The disadvantages of farming in modern times' },
          { key: 'B', text: 'The advantages and serene lifestyle of living in the countryside' },
          { key: 'C', text: 'How to build high-rise skyscrapers in big cities' },
          { key: 'D', text: 'The history of traditional kite flying' }
        ],
        correctAnswer: 'B',
        explanation: "The passage describes the peaceful environment, community spirit, and simple pleasures of countryside life.",
        evidenceParagraph: 1,
        evidenceQuote: "life in the countryside offers a completely different experience. Rural areas are renowned for their peaceful atmosphere...",
        skillType: 'main-idea'
      },
      {
        id: 2,
        questionNumber: 2,
        questionText: "According to paragraph 2, how is the rural environment different from urban centers?",
        options: [
          { key: 'A', text: 'It has more factories and tall office buildings' },
          { key: 'B', text: 'It is surrounded by lush trees, rivers, and fresh air instead of traffic smoke' },
          { key: 'C', text: 'It suffers from heavier traffic jams during morning rush hours' },
          { key: 'D', text: 'It has no water sources for drinking' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 2 states that unlike noisy cities with exhaust smoke, villages are surrounded by lush trees, flowing rivers, and open skies.",
        evidenceParagraph: 2,
        evidenceQuote: "Unlike noisy urban centers filled with exhaust smoke from motorbikes and cars, villages are surrounded by lush trees, flowing rivers, and open skies.",
        skillType: 'factual-detail'
      },
      {
        id: 3,
        questionNumber: 3,
        questionText: "What do children in the countryside often do in the late afternoon?",
        options: [
          { key: 'A', text: 'Fly colorful kites and swim in cool streams' },
          { key: 'B', text: 'Work in shopping malls' },
          { key: 'C', text: 'Drive tractors on expressways' },
          { key: 'D', text: 'Watch films in modern movie theaters' }
        ],
        correctAnswer: 'A',
        explanation: "Paragraph 3 mentions: 'In the late afternoon, kids fly colorful kites in open pastures and swim in cool streams.'",
        evidenceParagraph: 3,
        evidenceQuote: "In the late afternoon, kids fly colorful kites in open pastures and swim in cool streams.",
        skillType: 'factual-detail'
      },
      {
        id: 4,
        questionNumber: 4,
        questionText: "The word 'renowned' in paragraph 1 is closest in meaning to:",
        options: [
          { key: 'A', text: 'famous' },
          { key: 'B', text: 'unhappy' },
          { key: 'C', text: 'expensive' },
          { key: 'D', text: 'crowded' }
        ],
        correctAnswer: 'A',
        explanation: "'Renowned' means famous or well known.",
        evidenceParagraph: 1,
        evidenceQuote: "Rural areas are renowned for their peaceful atmosphere, vast green rice fields...",
        skillType: 'vocabulary'
      },
      {
        id: 5,
        questionNumber: 5,
        questionText: "The word 'its' in paragraph 5 refers to:",
        options: [
          { key: 'A', text: 'the countryside' },
          { key: 'B', text: 'the supermarket' },
          { key: 'C', text: 'the traffic' },
          { key: 'D', text: 'the harvest' }
        ],
        correctAnswer: 'A',
        explanation: "In paragraph 5, 'Although the countryside may have fewer entertainment facilities... many people cherish its simplicity...', 'its' refers to the countryside.",
        evidenceParagraph: 5,
        evidenceQuote: "Although the countryside may have fewer entertainment facilities like cinemas or huge supermarkets, many people cherish its simplicity...",
        skillType: 'pronoun-reference'
      },
      {
        id: 6,
        questionNumber: 6,
        questionText: "How do neighbors in rural villages show their close community bond?",
        options: [
          { key: 'A', text: 'They send emails to each other instead of talking' },
          { key: 'B', text: 'They willingly help each other with house building and weddings' },
          { key: 'C', text: 'They lock their doors and rarely speak to others' },
          { key: 'D', text: 'They charge money for answering questions' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 4 explains: 'Whenever someone builds a new house or celebrates a wedding, neighbors gladly come together to help without expecting payment.'",
        evidenceParagraph: 4,
        evidenceQuote: "Whenever someone builds a new house or celebrates a wedding, neighbors gladly come together to help without expecting payment.",
        skillType: 'factual-detail'
      },
      {
        id: 7,
        questionNumber: 7,
        questionText: "What wakes people up in the countryside according to paragraph 2?",
        options: [
          { key: 'A', text: 'The loud sound of sirens and cars' },
          { key: 'B', text: 'The pleasant chirping of birds' },
          { key: 'C', text: 'Loud construction noise' },
          { key: 'D', text: 'Airport announcements' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 2 states: 'People wake up to the pleasant chirping of birds rather than loud traffic horns.'",
        evidenceParagraph: 2,
        evidenceQuote: "People wake up to the pleasant chirping of birds rather than loud traffic horns.",
        skillType: 'factual-detail'
      },
      {
        id: 8,
        questionNumber: 8,
        questionText: "Which of the following is NOT true according to the passage?",
        options: [
          { key: 'A', text: 'Rice fields turn golden during harvest season' },
          { key: 'B', text: 'The countryside has fewer cinemas than big cities' },
          { key: 'C', text: 'Neighbors in villages charge high fees for helping each other' },
          { key: 'D', text: 'Children assist their parents with farm animals' }
        ],
        correctAnswer: 'C',
        explanation: "Option C is false because paragraph 4 clearly states neighbors help 'without expecting payment'.",
        evidenceParagraph: 4,
        evidenceQuote: "neighbors gladly come together to help without expecting payment.",
        skillType: 'negative-fact'
      },
      {
        id: 9,
        questionNumber: 9,
        questionText: "What can be inferred about why some people prefer countryside living?",
        options: [
          { key: 'A', text: 'They value close community relationships and tranquil nature over city entertainment' },
          { key: 'B', text: 'They want to drive fast sports cars on highways' },
          { key: 'C', text: 'They dislike seeing trees and open pastures' },
          { key: 'D', text: 'They cannot afford to purchase food from gardens' }
        ],
        correctAnswer: 'A',
        explanation: "The conclusion explains that people value its simplicity, peacefulness, and strong relationships despite having fewer entertainment venues.",
        evidenceParagraph: 5,
        evidenceQuote: "many people cherish its simplicity, peacefulness, and tight-knit relationships.",
        skillType: 'inference'
      },
      {
        id: 10,
        questionNumber: 10,
        questionText: "What tone does the author use throughout the passage?",
        options: [
          { key: 'A', text: 'Angry and critical' },
          { key: 'B', text: 'Warm, appreciative, and positive' },
          { key: 'C', text: 'Confused and scared' },
          { key: 'D', text: 'Sarcastic and humorous' }
        ],
        correctAnswer: 'B',
        explanation: "The author describes the countryside with warm, appreciative language ('peaceful', 'pleasant chirping', 'golden paddies', 'cherish its simplicity').",
        evidenceParagraph: 5,
        evidenceQuote: "many people cherish its simplicity, peacefulness, and tight-knit relationships.",
        skillType: 'author-purpose'
      }
    ]
  }
];
