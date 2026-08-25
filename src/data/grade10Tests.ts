import { ReadingTest } from '../types/reading';

export const GRADE_10_ENTRANCE_TESTS: ReadingTest[] = [
  {
    id: 'test-10-ai-education',
    title: 'The AI Revolution in Modern Education: Opportunities and Challenges for Teenagers',
    subtitle: 'High School Entrance Examination (Grade 10) - Reading Comprehension Section',
    topic: 'Science, Technology & Education',
    difficulty: 'Medium',
    wordCount: 465,
    gradeLevel: 'Grade 10 Entrance Exam',
    pointsPerQuestion: 0.5,
    summary: 'An insightful analysis of how artificial intelligence and educational software are transforming modern classrooms, personalizing learning paths, and demanding critical thinking skills from high school students.',
    paragraphs: [
      "[Paragraph 1] In the twenty-first century, technological innovations are transforming virtually every aspect of human life, and education is certainly no exception. Artificial intelligence (AI), once considered a futuristic concept confined to science fiction novels, has now entered modern classrooms across the globe. From intelligent tutoring systems to automated essay feedback, AI-powered tools are fundamentally altering the way secondary school students acquire knowledge, practice skills, and collaborate on academic projects.",
      "[Paragraph 2] One of the most notable advantages of AI in education is personalized learning. In traditional classroom settings, a single teacher often manages thirty to forty students with varied learning speeds and academic strengths. Consequently, some pupils may struggle to keep up with the curriculum, while others become bored because the pace is too slow. AI algorithms solve this dilemma by analyzing each student's individual progress in real time. For instance, when a learner struggles with a complex geometry problem or English grammar rule, the software immediately adapts by generating customized exercises and step-by-step hints until mastery is achieved.",
      "[Paragraph 3] Furthermore, AI-driven applications facilitate interactive and autonomous study outside school hours. Language learners can now converse with AI chatbots that simulate authentic native conversations, offer instantaneous pronunciation corrections, and explain sophisticated idioms without judgment. Additionally, virtual reality (VR) powered by AI enables students to conduct simulated chemistry experiments or explore historical landmarks like the ancient pyramids of Egypt from their study desks, thereby making learning remarkably engaging and memorable.",
      "[Paragraph 4] Despite these undeniable benefits, educators and researchers urge caution regarding the potential drawbacks of over-reliance on artificial intelligence. A primary concern is that excessive dependence on automated problem solvers could weaken students' critical thinking and problem-solving abilities. When learners can obtain ready-made answers with a single click, they might lose the perseverance needed to wrestle with challenging questions independently. Moreover, issues surrounding academic dishonesty, such as submitting AI-generated essays without genuine understanding, pose substantial ethical dilemmas for schools.",
      "[Paragraph 5] Another significant challenge involves digital inequality. While affluent students in well-equipped schools enjoy high-speed internet access and premium AI software, disadvantaged students in remote or low-income areas often lack basic digital devices. Without equitable access to technological resources, this technological divide threatens to widen the existing educational gap between different socioeconomic groups.",
      "[Paragraph 6] In conclusion, artificial intelligence should be viewed as a powerful assistant rather than a complete substitute for dedicated human teachers. The true value of AI lies in automating repetitive tasks and providing tailored guidance, allowing educators to focus on nurturing creativity, emotional intelligence, and ethical values. For prospective high school students, mastering the art of using AI responsibly while cultivating independent critical thought will be the ultimate key to future academic success."
    ],
    vocabularyList: [
      {
        word: "transforming",
        partOfSpeech: "verb (participle)",
        pronunciation: "/trænsˈfɔːmɪŋ/",
        definition: "Changing the form, appearance, or character of something completely.",
        exampleSentence: "Technological innovations are transforming modern classrooms worldwide."
      },
      {
        word: "dilemma",
        partOfSpeech: "noun",
        pronunciation: "/dɪˈlemə/",
        definition: "A situation in which a difficult choice has to be made between two or more alternatives.",
        exampleSentence: "Teachers face the dilemma of balancing different learning speeds in large classes."
      },
      {
        word: "autonomous",
        partOfSpeech: "adjective",
        pronunciation: "/ɔːˈtɒnəməs/",
        definition: "Acting independently or having the freedom to do so; self-governing.",
        exampleSentence: "AI-driven apps encourage students to become autonomous learners."
      },
      {
        word: "perseverance",
        partOfSpeech: "noun",
        pronunciation: "/ˌpɜːsɪˈvɪərəns/",
        definition: "Continued effort to do or achieve something despite difficulties, failure, or opposition.",
        exampleSentence: "Solving difficult mathematics problems requires patience and perseverance."
      },
      {
        word: "equitable",
        partOfSpeech: "adjective",
        pronunciation: "/ˈekwɪtəbl/",
        definition: "Fair and impartial; dealing equally with all concerned.",
        exampleSentence: "Governments must ensure equitable access to technology for all students."
      },
      {
        word: "substitute",
        partOfSpeech: "noun",
        pronunciation: "/ˈsʌbstɪtjuːt/",
        definition: "A person or thing acting or taking the place of another.",
        exampleSentence: "AI is a helpful tool, but it can never be a full substitute for human teachers."
      }
    ],
    questions: [
      {
        id: 1,
        questionNumber: 1,
        questionText: "What is the primary topic of the passage?",
        options: [
          { key: 'A', text: 'The history of science fiction novels in the twentieth century' },
          { key: 'B', text: 'The impacts, benefits, and challenges of artificial intelligence in modern education' },
          { key: 'C', text: 'The financial cost of purchasing virtual reality headsets for schools' },
          { key: 'D', text: 'How to replace human teachers with automated robots in high school' }
        ],
        correctAnswer: 'B',
        explanation: "The entire passage provides a comprehensive overview of how AI is applied in education (paragraphs 1-3), its potential risks and ethical issues (paragraphs 4-5), and how students and teachers should balance AI use (paragraph 6).",
        evidenceParagraph: 1,
        evidenceQuote: "From intelligent tutoring systems to automated essay feedback, AI-powered tools are fundamentally altering the way secondary school students acquire knowledge, practice skills, and collaborate...",
        skillType: 'main-idea'
      },
      {
        id: 2,
        questionNumber: 2,
        questionText: "According to Paragraph 1, what was artificial intelligence once considered in the past?",
        options: [
          { key: 'A', text: 'A compulsory subject in secondary school curricula' },
          { key: 'B', text: 'A futuristic concept limited to science fiction literature' },
          { key: 'C', text: 'A dangerous tool prohibited by educational authorities' },
          { key: 'D', text: 'An ordinary software installed on home television sets' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 1 clearly states: 'Artificial intelligence (AI), once considered a futuristic concept confined to science fiction novels, has now entered modern classrooms across the globe.'",
        evidenceParagraph: 1,
        evidenceQuote: "once considered a futuristic concept confined to science fiction novels",
        skillType: 'factual-detail'
      },
      {
        id: 3,
        questionNumber: 3,
        questionText: "The word 'notable' in Paragraph 2 is closest in meaning to:",
        options: [
          { key: 'A', text: 'remarkable' },
          { key: 'B', text: 'unimportant' },
          { key: 'C', text: 'expensive' },
          { key: 'D', text: 'mysterious' }
        ],
        correctAnswer: 'A',
        explanation: "'Notable' means striking, remarkable, or worthy of attention.",
        evidenceParagraph: 2,
        evidenceQuote: "One of the most notable advantages of AI in education is personalized learning.",
        skillType: 'vocabulary'
      },
      {
        id: 4,
        questionNumber: 4,
        questionText: "Why do some students become bored in traditional classroom settings according to Paragraph 2?",
        options: [
          { key: 'A', text: 'Because schools do not permit textbooks in class' },
          { key: 'B', text: 'Because the learning pace of the whole class is too slow for them' },
          { key: 'C', text: 'Because there are no chairs and desks in the room' },
          { key: 'D', text: 'Because teachers never give homework or examinations' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 2 explains: 'some pupils may struggle to keep up with the curriculum, while others become bored because the pace is too slow.'",
        evidenceParagraph: 2,
        evidenceQuote: "while others become bored because the pace is too slow.",
        skillType: 'factual-detail'
      },
      {
        id: 5,
        questionNumber: 5,
        questionText: "How do AI algorithms help solve the challenge of varied learning speeds in Paragraph 2?",
        options: [
          { key: 'A', text: 'By forcing slow students to leave the classroom immediately' },
          { key: 'B', text: 'By adapting in real time to generate customized exercises and hints' },
          { key: 'C', text: 'By canceling all examinations and homework assignments' },
          { key: 'D', text: 'By grading all students with identical maximum marks' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 2 states: 'AI algorithms solve this dilemma by analyzing each student's individual progress in real time... generating customized exercises and step-by-step hints until mastery is achieved.'",
        evidenceParagraph: 2,
        evidenceQuote: "the software immediately adapts by generating customized exercises and step-by-step hints until mastery is achieved.",
        skillType: 'factual-detail'
      },
      {
        id: 6,
        questionNumber: 6,
        questionText: "The word 'facilitate' in Paragraph 3 is closest in meaning to:",
        options: [
          { key: 'A', text: 'prevent' },
          { key: 'B', text: 'make easier' },
          { key: 'C', text: 'criticize' },
          { key: 'D', text: 'complicate' }
        ],
        correctAnswer: 'B',
        explanation: "'Facilitate' means to make an action or process easy or easier.",
        evidenceParagraph: 3,
        evidenceQuote: "Furthermore, AI-driven applications facilitate interactive and autonomous study outside school hours.",
        skillType: 'vocabulary'
      },
      {
        id: 7,
        questionNumber: 7,
        questionText: "According to Paragraph 3, how does AI specifically benefit language learners?",
        options: [
          { key: 'A', text: 'By translating entire textbooks into foreign languages without permission' },
          { key: 'B', text: 'By simulating native conversations, correcting pronunciation, and explaining idioms' },
          { key: 'C', text: 'By forbidding students from speaking English with their classmates' },
          { key: 'D', text: 'By requiring students to travel abroad to practice basic vocabulary' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 3 states: 'Language learners can now converse with AI chatbots that simulate authentic native conversations, offer instantaneous pronunciation corrections, and explain sophisticated idioms without judgment.'",
        evidenceParagraph: 3,
        evidenceQuote: "Language learners can now converse with AI chatbots that simulate authentic native conversations, offer instantaneous pronunciation corrections, and explain sophisticated idioms...",
        skillType: 'factual-detail'
      },
      {
        id: 8,
        questionNumber: 8,
        questionText: "The word 'their' in Paragraph 3 refers to:",
        options: [
          { key: 'A', text: 'ancient pyramids' },
          { key: 'B', text: 'chemistry experiments' },
          { key: 'C', text: 'students' },
          { key: 'D', text: 'historical landmarks' }
        ],
        correctAnswer: 'C',
        explanation: "In paragraph 3, 'enables students to conduct simulated chemistry experiments or explore historical landmarks... from their study desks', 'their' refers to students.",
        evidenceParagraph: 3,
        evidenceQuote: "enables students to conduct simulated chemistry experiments or explore historical landmarks like the ancient pyramids of Egypt from their study desks",
        skillType: 'pronoun-reference'
      },
      {
        id: 9,
        questionNumber: 9,
        questionText: "Which of the following is NOT mentioned in Paragraph 3 as an AI-powered activity?",
        options: [
          { key: 'A', text: 'Simulated chemistry experiments' },
          { key: 'B', text: 'Exploring historical landmarks like Egyptian pyramids virtually' },
          { key: 'C', text: 'Conversing with chatbots for pronunciation practice' },
          { key: 'D', text: 'Building physical robotic cars during art lessons' }
        ],
        correctAnswer: 'D',
        explanation: "Paragraph 3 mentions simulated chemistry experiments, exploring Egyptian pyramids in VR, and conversing with AI chatbots. Building physical robotic cars is never mentioned.",
        evidenceParagraph: 3,
        evidenceQuote: "converse with AI chatbots... simulated chemistry experiments or explore historical landmarks like the ancient pyramids...",
        skillType: 'negative-fact'
      },
      {
        id: 10,
        questionNumber: 10,
        questionText: "According to Paragraph 4, what is a primary risk of students becoming over-reliant on AI?",
        options: [
          { key: 'A', text: 'They may lose critical thinking skills and perseverance' },
          { key: 'B', text: 'Their computer monitors may overheat and explode' },
          { key: 'C', text: 'They will be unable to read printed paper books' },
          { key: 'D', text: 'They will forget how to write by hand with a pencil' }
        ],
        correctAnswer: 'A',
        explanation: "Paragraph 4 explains: 'excessive dependence on automated problem solvers could weaken students' critical thinking and problem-solving abilities... they might lose the perseverance needed to wrestle with challenging questions.'",
        evidenceParagraph: 4,
        evidenceQuote: "excessive dependence on automated problem solvers could weaken students' critical thinking and problem-solving abilities. When learners can obtain ready-made answers with a single click, they might lose the perseverance...",
        skillType: 'factual-detail'
      },
      {
        id: 11,
        questionNumber: 11,
        questionText: "The word 'perseverance' in Paragraph 4 is closest in meaning to:",
        options: [
          { key: 'A', text: 'laziness' },
          { key: 'B', text: 'persistence and determination' },
          { key: 'C', text: 'arrogance' },
          { key: 'D', text: 'hesitation' }
        ],
        correctAnswer: 'B',
        explanation: "'Perseverance' means persistent effort and determination to overcome difficulties.",
        evidenceParagraph: 4,
        evidenceQuote: "they might lose the perseverance needed to wrestle with challenging questions independently.",
        skillType: 'vocabulary'
      },
      {
        id: 12,
        questionNumber: 12,
        questionText: "What ethical dilemma is specifically highlighted in Paragraph 4?",
        options: [
          { key: 'A', text: 'Teachers refusing to grade handwritten test papers' },
          { key: 'B', text: 'Submitting AI-generated essays without genuine personal understanding' },
          { key: 'C', text: 'Schools charging students for drinking water during breaks' },
          { key: 'D', text: 'Students selling computer keyboards to their classmates' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 4 explicitly notes: 'issues surrounding academic dishonesty, such as submitting AI-generated essays without genuine understanding, pose substantial ethical dilemmas for schools.'",
        evidenceParagraph: 4,
        evidenceQuote: "issues surrounding academic dishonesty, such as submitting AI-generated essays without genuine understanding, pose substantial ethical dilemmas for schools.",
        skillType: 'factual-detail'
      },
      {
        id: 13,
        questionNumber: 13,
        questionText: "The word 'they' in Paragraph 4 refers to:",
        options: [
          { key: 'A', text: 'challenging questions' },
          { key: 'B', text: 'educators' },
          { key: 'C', text: 'learners' },
          { key: 'D', text: 'automated problem solvers' }
        ],
        correctAnswer: 'C',
        explanation: "In paragraph 4, 'When learners can obtain ready-made answers with a single click, they might lose the perseverance...', 'they' refers to learners (students).",
        evidenceParagraph: 4,
        evidenceQuote: "When learners can obtain ready-made answers with a single click, they might lose the perseverance needed to wrestle with challenging questions independently.",
        skillType: 'pronoun-reference'
      },
      {
        id: 14,
        questionNumber: 14,
        questionText: "What problem is described by the term 'technological divide' in Paragraph 5?",
        options: [
          { key: 'A', text: 'The physical distance between computer keyboards and mouse pads' },
          { key: 'B', text: 'The inequality between wealthy students with modern tech and disadvantaged students without digital devices' },
          { key: 'C', text: 'The competition between different smartphone manufacturing companies' },
          { key: 'D', text: 'The difference between electric lights and battery candles' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 5 discusses how affluent students have high-speed internet and premium AI while disadvantaged students in remote areas lack basic devices, widening the educational gap.",
        evidenceParagraph: 5,
        evidenceQuote: "Without equitable access to technological resources, this technological divide threatens to widen the existing educational gap between different socioeconomic groups.",
        skillType: 'factual-detail'
      },
      {
        id: 15,
        questionNumber: 15,
        questionText: "The word 'equitable' in Paragraph 5 is OPPOSITE in meaning to:",
        options: [
          { key: 'A', text: 'unfair / unequal' },
          { key: 'B', text: 'reasonable' },
          { key: 'C', text: 'balanced' },
          { key: 'D', text: 'honest' }
        ],
        correctAnswer: 'A',
        explanation: "'Equitable' means fair and equal. The antonym (opposite) is 'unfair' or 'unequal'.",
        evidenceParagraph: 5,
        evidenceQuote: "Without equitable access to technological resources, this technological divide threatens to widen...",
        skillType: 'synonym-antonym'
      },
      {
        id: 16,
        questionNumber: 16,
        questionText: "According to Paragraph 6, what is the primary role of AI in relation to human teachers?",
        options: [
          { key: 'A', text: 'AI should completely replace all human teachers by 2030' },
          { key: 'B', text: 'AI should be a powerful assistant that automates repetitive tasks rather than a substitute' },
          { key: 'C', text: 'AI should only be used by school principals and administrators' },
          { key: 'D', text: 'AI should teach moral values while teachers fix broken computers' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 6 clearly concludes: 'artificial intelligence should be viewed as a powerful assistant rather than a complete substitute for dedicated human teachers.'",
        evidenceParagraph: 6,
        evidenceQuote: "artificial intelligence should be viewed as a powerful assistant rather than a complete substitute for dedicated human teachers.",
        skillType: 'factual-detail'
      },
      {
        id: 17,
        questionNumber: 17,
        questionText: "What human qualities should teachers focus on nurturing according to Paragraph 6?",
        options: [
          { key: 'A', text: 'Typing speed and software installation' },
          { key: 'B', text: 'Creativity, emotional intelligence, and ethical values' },
          { key: 'C', text: 'Memorizing dictionary pages without thinking' },
          { key: 'D', text: 'Playing competitive video games during class' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 6 states: 'allowing educators to focus on nurturing creativity, emotional intelligence, and ethical values.'",
        evidenceParagraph: 6,
        evidenceQuote: "allowing educators to focus on nurturing creativity, emotional intelligence, and ethical values.",
        skillType: 'factual-detail'
      },
      {
        id: 18,
        questionNumber: 18,
        questionText: "What can be inferred from the author's argument in the passage?",
        options: [
          { key: 'A', text: 'Technology is purely harmful and schools should ban all digital devices' },
          { key: 'B', text: 'AI offers immense benefits, but students must practice critical thinking and responsible use' },
          { key: 'C', text: 'Secondary school students will no longer need to study mathematics or foreign languages' },
          { key: 'D', text: 'Every student already owns high-speed internet and equal equipment' }
        ],
        correctAnswer: 'B',
        explanation: "The author presents a balanced viewpoint: AI provides personalized learning and engagement, but requires critical thinking, ethics, and responsible usage to prevent harm.",
        evidenceParagraph: 6,
        evidenceQuote: "mastering the art of using AI responsibly while cultivating independent critical thought will be the ultimate key to future academic success.",
        skillType: 'inference'
      },
      {
        id: 19,
        questionNumber: 19,
        questionText: "What is the author's overall tone throughout the passage?",
        options: [
          { key: 'A', text: 'Extremely angry and hostile' },
          { key: 'B', text: 'Objective, analytical, and constructive' },
          { key: 'C', text: 'Sarcastic and humorous' },
          { key: 'D', text: 'Indifferent and completely bored' }
        ],
        correctAnswer: 'B',
        explanation: "The author presents both advantages and challenges in a balanced, objective, and constructive manner suitable for an academic text.",
        evidenceParagraph: 6,
        evidenceQuote: "In conclusion, artificial intelligence should be viewed as a powerful assistant rather than a complete substitute...",
        skillType: 'tone'
      },
      {
        id: 20,
        questionNumber: 20,
        questionText: "Which of the following would be the most suitable alternate title for this article?",
        options: [
          { key: 'A', text: 'Why Artificial Intelligence Will Destroy All Modern Schools' },
          { key: 'B', text: 'Smart Classrooms: Balancing Technological Power with Human Wisdom' },
          { key: 'C', text: 'The History of Ancient Egyptian Pyramids in Virtual Reality' },
          { key: 'D', text: 'How to Purchase Cheap Digital Devices in Remote Areas' }
        ],
        correctAnswer: 'B',
        explanation: "'Smart Classrooms: Balancing Technological Power with Human Wisdom' captures both the technological strengths of AI and the essential need for human critical thinking and ethics.",
        evidenceParagraph: 6,
        evidenceQuote: "The true value of AI lies in automating repetitive tasks and providing tailored guidance, allowing educators to focus on nurturing creativity, emotional intelligence, and ethical values.",
        skillType: 'main-idea'
      }
    ]
  },
  {
    id: 'test-10-green-heritage',
    title: 'Ecotourism and Heritage Conservation: Sustainable Development in Vietnam',
    subtitle: 'High School Entrance Examination (Grade 10) - Reading Comprehension Section',
    topic: 'Environment, Heritage & Tourism',
    difficulty: 'Medium',
    wordCount: 470,
    gradeLevel: 'Grade 10 Entrance Exam',
    pointsPerQuestion: 0.5,
    summary: 'An engaging reading passage examining how sustainable ecotourism preserves Vietnam’s UNESCO natural heritage sites like Phong Nha-Ke Bang and Ha Long Bay while generating livelihood for local ethnic communities.',
    paragraphs: [
      "[Paragraph 1] In recent decades, tourism has emerged as one of the fastest-growing economic sectors worldwide, generating millions of jobs and promoting cross-cultural understanding. For a country endowed with stunning coastlines, majestic limestone karsts, and ancient cultural landmarks like Vietnam, tourism serves as a vital engine for economic growth. However, rapid and unregulated mass tourism has also placed severe pressure on fragile ecosystems and historical monuments, giving rise to an urgent need for sustainable ecotourism.",
      "[Paragraph 2] Ecotourism is broadly defined as responsible travel to natural destinations that conserves the local environment, sustains the well-being of indigenous populations, and involves educational interpretation. Unlike conventional tourism, which often prioritizes large resort constructions and high tourist volume, ecotourism emphasizes low-impact activities. Visitors are encouraged to observe biodiversity respectfully, minimize plastic waste, and appreciate untouched wilderness without disturbing native flora and fauna.",
      "[Paragraph 3] A prime example of successful ecotourism in Vietnam is Phong Nha-Ke Bang National Park in Quang Binh Province. Recognized as a UNESCO World Heritage site, this region boasts some of the oldest karst formations in Asia and the world's largest natural cave, Son Doong. Rather than building massive concrete stairways or cable cars inside pristine cave systems, local authorities and tour operators have strictly limited the number of annual trekkers. Tourists must be accompanied by certified local guides and safety experts, ensuring that delicate stalactites and underground rivers remain unpolluted.",
      "[Paragraph 4] Crucially, ecotourism brings substantial socioeconomic benefits to local communities. In mountainous areas such as Sapa and Mai Chau, ethnic minority families have established community-based homestays. Instead of relying solely on slash-and-burn agriculture or illegal logging, villagers can earn sustainable income by offering authentic accommodation, guiding trekking routes, and selling handmade brocade textiles. When local residents directly benefit financially from tourism revenues, they naturally become enthusiastic protectors of their surrounding forests and wildlife.",
      "[Paragraph 5] Nonetheless, developing sustainable ecotourism requires overcoming several obstacles. One common pitfall is 'greenwashing', where commercial travel agencies falsely advertise standard tours as 'eco-friendly' without actually implementing environmental protection practices. Additionally, managing litter, preventing water contamination, and educating travelers on responsible behavior remain demanding tasks that require continuous cooperation among government agencies, private businesses, and tourists.",
      "[Paragraph 6] To sum up, ecotourism represents a harmonious pathway to balance economic prosperity with environmental stewardship and cultural preservation. By adopting mindful travel habits, respecting local traditions, and supporting green initiatives, today's younger generation can ensure that Vietnam's breathtaking natural treasures will endure for generations to come."
    ],
    vocabularyList: [
      {
        word: "endowed",
        partOfSpeech: "verb (passive)",
        pronunciation: "/ɪnˈdaʊd/",
        definition: "Provided naturally with a desirable quality, asset, or feature.",
        exampleSentence: "Vietnam is endowed with rich natural landscapes and historic landmarks."
      },
      {
        word: "pristine",
        partOfSpeech: "adjective",
        pronunciation: "/ˈprɪstiːn/",
        definition: "In its original condition; unspoiled and clean.",
        exampleSentence: "The expedition team walked through pristine forests and undisturbed caves."
      },
      {
        word: "indigenous",
        partOfSpeech: "adjective",
        pronunciation: "/ɪnˈdɪdʒənəs/",
        definition: "Originating or occurring naturally in a particular place; native.",
        exampleSentence: "Ecotourism respects the customs of indigenous ethnic groups."
      },
      {
        word: "greenwashing",
        partOfSpeech: "noun",
        pronunciation: "/ˈɡriːnwɒʃɪŋ/",
        definition: "Misleading marketing that presents an enterprise as environmentally friendly when it is not.",
        exampleSentence: "Travelers must beware of greenwashing when selecting tour agencies."
      },
      {
        word: "stewardship",
        partOfSpeech: "noun",
        pronunciation: "/ˈstjuːədʃɪp/",
        definition: "The responsible overseeing and protection of something considered worth caring for.",
        exampleSentence: "Environmental stewardship is vital for preserving national parks."
      }
    ],
    questions: [
      {
        id: 1,
        questionNumber: 1,
        questionText: "What is the main idea of the entire passage?",
        options: [
          { key: 'A', text: 'The history of cave exploration in Quang Binh Province' },
          { key: 'B', text: 'The principles, benefits, and challenges of sustainable ecotourism in Vietnam' },
          { key: 'C', text: 'How to build high-end luxury beach resorts along coastlines' },
          { key: 'D', text: 'The prices of handmade brocade textiles in northern markets' }
        ],
        correctAnswer: 'B',
        explanation: "The passage defines ecotourism (para 2), gives examples like Phong Nha (para 3), details community benefits (para 4), discusses obstacles like greenwashing (para 5), and calls for preservation (para 6).",
        evidenceParagraph: 1,
        evidenceQuote: "However, rapid and unregulated mass tourism has also placed severe pressure on fragile ecosystems and historical monuments, giving rise to an urgent need for sustainable ecotourism.",
        skillType: 'main-idea'
      },
      {
        id: 2,
        questionNumber: 2,
        questionText: "According to Paragraph 1, why is tourism an important economic engine for Vietnam?",
        options: [
          { key: 'A', text: 'Because Vietnam imports all its electricity from neighboring countries' },
          { key: 'B', text: 'Because Vietnam is endowed with stunning coastlines, limestone karsts, and ancient monuments' },
          { key: 'C', text: 'Because Vietnam prohibits citizens from traveling abroad' },
          { key: 'D', text: 'Because Vietnam has no agricultural or industrial activities' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 1 states: 'For a country endowed with stunning coastlines, majestic limestone karsts, and ancient cultural landmarks like Vietnam, tourism serves as a vital engine for economic growth.'",
        evidenceParagraph: 1,
        evidenceQuote: "For a country endowed with stunning coastlines, majestic limestone karsts, and ancient cultural landmarks like Vietnam, tourism serves as a vital engine for economic growth.",
        skillType: 'factual-detail'
      },
      {
        id: 3,
        questionNumber: 3,
        questionText: "The word 'unregulated' in Paragraph 1 is closest in meaning to:",
        options: [
          { key: 'A', text: 'strictly controlled' },
          { key: 'B', text: 'uncontrolled / not managed by rules' },
          { key: 'C', text: 'illegal and criminal' },
          { key: 'D', text: 'extremely expensive' }
        ],
        correctAnswer: 'B',
        explanation: "'Unregulated' means not controlled or managed by official rules and policies.",
        evidenceParagraph: 1,
        evidenceQuote: "rapid and unregulated mass tourism has also placed severe pressure on fragile ecosystems",
        skillType: 'vocabulary'
      },
      {
        id: 4,
        questionNumber: 4,
        questionText: "According to Paragraph 2, what is a key difference between ecotourism and conventional tourism?",
        options: [
          { key: 'A', text: 'Ecotourism prioritizes giant hotel chains with heated swimming pools' },
          { key: 'B', text: 'Ecotourism emphasizes low-impact activities, waste minimization, and conservation' },
          { key: 'C', text: 'Ecotourism allows travelers to collect wild animal eggs freely' },
          { key: 'D', text: 'Ecotourism is strictly reserved for foreign scientists only' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 2 states: 'Unlike conventional tourism, which often prioritizes large resort constructions and high tourist volume, ecotourism emphasizes low-impact activities. Visitors are encouraged to observe biodiversity respectfully, minimize plastic waste...'",
        evidenceParagraph: 2,
        evidenceQuote: "Unlike conventional tourism, which often prioritizes large resort constructions and high tourist volume, ecotourism emphasizes low-impact activities.",
        skillType: 'factual-detail'
      },
      {
        id: 5,
        questionNumber: 5,
        questionText: "The word 'indigenous' in Paragraph 2 is closest in meaning to:",
        options: [
          { key: 'A', text: 'native / local' },
          { key: 'B', text: 'foreign' },
          { key: 'C', text: 'wealthy' },
          { key: 'D', text: 'modern' }
        ],
        correctAnswer: 'A',
        explanation: "'Indigenous' means naturally belonging to or native to a specific area.",
        evidenceParagraph: 2,
        evidenceQuote: "sustains the well-being of indigenous populations, and involves educational interpretation.",
        skillType: 'vocabulary'
      },
      {
        id: 6,
        questionNumber: 6,
        questionText: "Which world-famous natural wonder located in Quang Binh is mentioned in Paragraph 3?",
        options: [
          { key: 'A', text: 'Mount Everest' },
          { key: 'B', text: 'Son Doong Cave' },
          { key: 'C', text: 'Niagara Falls' },
          { key: 'D', text: 'The Grand Canyon' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 3 notes: 'this region boasts some of the oldest karst formations in Asia and the world's largest natural cave, Son Doong.'",
        evidenceParagraph: 3,
        evidenceQuote: "the world's largest natural cave, Son Doong.",
        skillType: 'factual-detail'
      },
      {
        id: 7,
        questionNumber: 7,
        questionText: "How do tour operators protect the delicate cave environment in Phong Nha according to Paragraph 3?",
        options: [
          { key: 'A', text: 'By constructing huge concrete shopping complexes inside caves' },
          { key: 'B', text: 'By strictly limiting trekker numbers and requiring certified local guides' },
          { key: 'C', text: 'By turning on loud sound systems to scare away bats' },
          { key: 'D', text: 'By pumping dirty water into the underground rivers' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 3 explains: 'local authorities and tour operators have strictly limited the number of annual trekkers. Tourists must be accompanied by certified local guides and safety experts...'",
        evidenceParagraph: 3,
        evidenceQuote: "strictly limited the number of annual trekkers. Tourists must be accompanied by certified local guides and safety experts, ensuring that delicate stalactites...",
        skillType: 'factual-detail'
      },
      {
        id: 8,
        questionNumber: 8,
        questionText: "The word 'pristine' in Paragraph 3 is closest in meaning to:",
        options: [
          { key: 'A', text: 'unspoiled and clean' },
          { key: 'B', text: 'polluted and dirty' },
          { key: 'C', text: 'dark and terrifying' },
          { key: 'D', text: 'cheap and disposable' }
        ],
        correctAnswer: 'A',
        explanation: "'Pristine' means in its original, untouched, and unspoiled condition.",
        evidenceParagraph: 3,
        evidenceQuote: "inside pristine cave systems, local authorities and tour operators have strictly limited...",
        skillType: 'vocabulary'
      },
      {
        id: 9,
        questionNumber: 9,
        questionText: "The word 'this region' in Paragraph 3 refers to:",
        options: [
          { key: 'A', text: 'Sapa and Mai Chau' },
          { key: 'B', text: 'Phong Nha-Ke Bang National Park in Quang Binh Province' },
          { key: 'C', text: 'The Sahara Desert' },
          { key: 'D', text: 'The capital city of Hanoi' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 3 introduces 'Phong Nha-Ke Bang National Park in Quang Binh Province. Recognized as a UNESCO World Heritage site, this region boasts...'",
        evidenceParagraph: 3,
        evidenceQuote: "A prime example of successful ecotourism in Vietnam is Phong Nha-Ke Bang National Park in Quang Binh Province. Recognized as a UNESCO World Heritage site, this region boasts...",
        skillType: 'pronoun-reference'
      },
      {
        id: 10,
        questionNumber: 10,
        questionText: "How has community-based tourism helped ethnic minority families in Paragraph 4?",
        options: [
          { key: 'A', text: 'It forced them to abandon their homeland permanently' },
          { key: 'B', text: 'It provides sustainable income through homestays, guiding, and selling crafts instead of logging' },
          { key: 'C', text: 'It banned them from making handmade brocade fabrics' },
          { key: 'D', text: 'It made them dependent on overseas charity shipments' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 4 explains: 'Instead of relying solely on slash-and-burn agriculture or illegal logging, villagers can earn sustainable income by offering authentic accommodation, guiding trekking routes, and selling handmade brocade textiles.'",
        evidenceParagraph: 4,
        evidenceQuote: "villagers can earn sustainable income by offering authentic accommodation, guiding trekking routes, and selling handmade brocade textiles.",
        skillType: 'factual-detail'
      },
      {
        id: 11,
        questionNumber: 11,
        questionText: "The word 'they' in Paragraph 4 refers to:",
        options: [
          { key: 'A', text: 'surrounding forests' },
          { key: 'B', text: 'local residents' },
          { key: 'C', text: 'brocade textiles' },
          { key: 'D', text: 'tourism revenues' }
        ],
        correctAnswer: 'B',
        explanation: "In paragraph 4, 'When local residents directly benefit financially from tourism revenues, they naturally become enthusiastic protectors...', 'they' refers to local residents.",
        evidenceParagraph: 4,
        evidenceQuote: "When local residents directly benefit financially from tourism revenues, they naturally become enthusiastic protectors of their surrounding forests and wildlife.",
        skillType: 'pronoun-reference'
      },
      {
        id: 12,
        questionNumber: 12,
        questionText: "What harmful practice in Paragraph 5 is termed 'greenwashing'?",
        options: [
          { key: 'A', text: 'Washing green vegetables with soap water' },
          { key: 'B', text: 'Painting hotel walls with bright green paint' },
          { key: 'C', text: 'Falsely advertising tours as eco-friendly without implementing real conservation practices' },
          { key: 'D', text: 'Planting trees on top of high skyscrapers' }
        ],
        correctAnswer: 'C',
        explanation: "Paragraph 5 defines greenwashing: 'where commercial travel agencies falsely advertise standard tours as 'eco-friendly' without actually implementing environmental protection practices.'",
        evidenceParagraph: 5,
        evidenceQuote: "where commercial travel agencies falsely advertise standard tours as 'eco-friendly' without actually implementing environmental protection practices.",
        skillType: 'factual-detail'
      },
      {
        id: 13,
        questionNumber: 13,
        questionText: "The word 'pitfall' in Paragraph 5 is closest in meaning to:",
        options: [
          { key: 'A', text: 'hidden problem / drawback' },
          { key: 'B', text: 'great achievement' },
          { key: 'C', text: 'celebration' },
          { key: 'D', text: 'natural cave' }
        ],
        correctAnswer: 'A',
        explanation: "'Pitfall' means a hidden hazard, difficulty, or danger.",
        evidenceParagraph: 5,
        evidenceQuote: "One common pitfall is 'greenwashing', where commercial travel agencies falsely advertise...",
        skillType: 'vocabulary'
      },
      {
        id: 14,
        questionNumber: 14,
        questionText: "Which of the following is NOT mentioned in Paragraph 5 as an ongoing challenge?",
        options: [
          { key: 'A', text: 'Greenwashing by dishonest travel companies' },
          { key: 'B', text: 'Managing litter and preventing water contamination' },
          { key: 'C', text: 'Educating tourists on responsible behavior' },
          { key: 'D', text: 'Frequent volcanic eruptions destroying national parks' }
        ],
        correctAnswer: 'D',
        explanation: "Paragraph 5 mentions greenwashing, managing litter, preventing water contamination, and educating travelers. Volcanic eruptions are never mentioned.",
        evidenceParagraph: 5,
        evidenceQuote: "One common pitfall is 'greenwashing'... managing litter, preventing water contamination, and educating travelers...",
        skillType: 'negative-fact'
      },
      {
        id: 15,
        questionNumber: 15,
        questionText: "The word 'stewardship' in Paragraph 6 is closest in meaning to:",
        options: [
          { key: 'A', text: 'responsible care and protection' },
          { key: 'B', text: 'complete destruction' },
          { key: 'C', text: 'commercial exploitation' },
          { key: 'D', text: 'quick departure' }
        ],
        correctAnswer: 'A',
        explanation: "'Stewardship' refers to the responsible overseeing, management, and care of natural resources.",
        evidenceParagraph: 6,
        evidenceQuote: "balance economic prosperity with environmental stewardship and cultural preservation.",
        skillType: 'vocabulary'
      },
      {
        id: 16,
        questionNumber: 16,
        questionText: "The word 'endure' in Paragraph 6 is closest in meaning to:",
        options: [
          { key: 'A', text: 'last / continue to exist' },
          { key: 'B', text: 'vanish immediately' },
          { key: 'C', text: 'lose value' },
          { key: 'D', text: 'break into pieces' }
        ],
        correctAnswer: 'A',
        explanation: "'Endure' means to continue to exist in the same state over a long period.",
        evidenceParagraph: 6,
        evidenceQuote: "ensure that Vietnam's breathtaking natural treasures will endure for generations to come.",
        skillType: 'vocabulary'
      },
      {
        id: 17,
        questionNumber: 17,
        questionText: "What can be inferred about local communities when they earn money from ecotourism?",
        options: [
          { key: 'A', text: 'They will cut down more trees to build factories' },
          { key: 'B', text: 'They develop a strong incentive to actively preserve nature and wildlife' },
          { key: 'C', text: 'They refuse to let tourists enter their villages' },
          { key: 'D', text: 'They stop celebrating their traditional cultural festivals' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 4 explains that when local residents directly benefit financially from tourism revenues, they naturally become enthusiastic protectors of their surrounding forests and wildlife.",
        evidenceParagraph: 4,
        evidenceQuote: "When local residents directly benefit financially from tourism revenues, they naturally become enthusiastic protectors of their surrounding forests and wildlife.",
        skillType: 'inference'
      },
      {
        id: 18,
        questionNumber: 18,
        questionText: "Which group of people is specifically addressed in the conclusion to protect heritage?",
        options: [
          { key: 'A', text: 'Foreign airline pilots' },
          { key: 'B', text: 'Today\'s younger generation' },
          { key: 'C', text: 'Ancient historians only' },
          { key: 'D', text: 'Construction crane drivers' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 6 concludes: 'By adopting mindful travel habits... today\'s younger generation can ensure that Vietnam\'s breathtaking natural treasures will endure for generations to come.'",
        evidenceParagraph: 6,
        evidenceQuote: "today's younger generation can ensure that Vietnam's breathtaking natural treasures will endure for generations to come.",
        skillType: 'factual-detail'
      },
      {
        id: 19,
        questionNumber: 19,
        questionText: "What is the author's primary purpose in writing this article?",
        options: [
          { key: 'A', text: 'To advertise expensive holiday tour packages' },
          { key: 'B', text: 'To advocate for responsible ecotourism that protects nature while benefiting local communities' },
          { key: 'C', text: 'To discourage tourists from visiting national parks' },
          { key: 'D', text: 'To criticize ethnic minorities for living in mountainous regions' }
        ],
        correctAnswer: 'B',
        explanation: "The author advocates for sustainable ecotourism, showing its immense value in conserving ecosystems, empowering local ethnic families, and preserving heritage.",
        evidenceParagraph: 6,
        evidenceQuote: "ecotourism represents a harmonious pathway to balance economic prosperity with environmental stewardship and cultural preservation.",
        skillType: 'author-purpose'
      },
      {
        id: 20,
        questionNumber: 20,
        questionText: "What does the passage imply is required to make ecotourism truly successful?",
        options: [
          { key: 'A', text: 'Only government laws without any tourist cooperation' },
          { key: 'B', text: 'Collaboration between government, private businesses, tourists, and local communities' },
          { key: 'C', text: 'Closing all airports and sea ports permanently' },
          { key: 'D', text: 'Allowing travel companies to operate without any environmental regulations' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 5 and 6 emphasize that overcoming obstacles requires continuous cooperation among government agencies, businesses, local residents, and travelers.",
        evidenceParagraph: 5,
        evidenceQuote: "require continuous cooperation among government agencies, private businesses, and tourists.",
        skillType: 'inference'
      }
    ]
  },
  {
    id: 'test-10-mental-health',
    title: 'Adolescent Well-being in the Digital Era: Sleep, Screen Time, and Mental Health',
    subtitle: 'High School Entrance Examination (Grade 10) - Reading Comprehension Section',
    topic: 'Health, Psychology & Modern Lifestyle',
    difficulty: 'Medium',
    wordCount: 455,
    gradeLevel: 'Grade 10 Entrance Exam',
    pointsPerQuestion: 0.5,
    summary: 'A crucial study examining how prolonged smartphone usage, blue light exposure, and social media comparisons influence teenage mental health, sleep hygiene, and academic performance.',
    paragraphs: [
      "[Paragraph 1] In the modern digital landscape, smartphones, tablets, and social media platforms have become indispensable companions for adolescents. Teenagers rely on these digital gadgets to maintain friendships, stream educational tutorials, play interactive video games, and stay updated with global news. Nevertheless, child psychologists and public health organizations are increasingly voicing alarms regarding the profound impacts of excessive screen exposure on teenage physical well-being and mental health.",
      "[Paragraph 2] One of the most immediate casualties of unchecked screen time is sleep quality. The vast majority of teenagers confess to checking their handheld devices right before going to sleep, and many even keep their phones next to their pillows. Medical research reveals that digital screens emit high-energy visible blue light, which suppresses the production of melatonin, a vital hormone responsible for signaling to the brain that it is time for rest. As a result, teens experience chronic sleep deprivation, leading to morning sluggishness, diminished memory retention, and weakened immune defense during crucial exam preparation periods.",
      "[Paragraph 3] Beyond physical fatigue, the psychological repercussions of social media are equally concerning. Platforms frequently showcase idealized and heavily filtered depictions of peers' lives, showcasing glamorous vacations, flawless appearances, and continuous social achievements. When vulnerable teenagers constantly compare their ordinary everyday lives to these curated digital illusions, feelings of inadequacy, low self-esteem, and anxiety often emerge. Furthermore, the relentless pressure to accumulate 'likes' and positive comments can foster unhealthy validation-seeking behaviors.",
      "[Paragraph 4] Another critical consequence is the decline in face-to-face social interactions. While online messaging provides instantaneous connectivity, it lacks essential non-verbal cues such as facial expressions, tone of voice, and empathetic body language. Over time, adolescents who substitute physical socialization with digital chats may find themselves experiencing social awkwardness and heightened loneliness when interacting in real-world communal environments.",
      "[Paragraph 5] Fortunately, educators and health experts do not advocate for a total prohibition of technology; rather, they champion the concept of 'digital hygiene'. This proactive approach includes establishing tech-free zones during family mealtimes, turning off all digital screens at least 60 minutes prior to bedtime, and replacing passive social scrolling with physical sports, reading printed books, or creative hobbies. Schools are also introducing emotional literacy workshops to help students recognize online toxicity and develop psychological resilience.",
      "[Paragraph 6] In summary, technology itself is inherently neutral; its influence on adolescent well-being depends entirely on how mindfully it is utilized. By cultivating self-discipline, setting healthy screen limits, and prioritizing genuine offline connections, teenagers can enjoy the immense educational benefits of the digital age without compromising their mental and physical well-being."
    ],
    vocabularyList: [
      {
        word: "suppresses",
        partOfSpeech: "verb",
        pronunciation: "/səˈpresɪz/",
        definition: "Prevents or inhibits the development, action, or expression of something.",
        exampleSentence: "Blue light from smartphone screens suppresses melatonin production."
      },
      {
        word: "deprivation",
        partOfSpeech: "noun",
        pronunciation: "/ˌdeprɪˈveɪʃn/",
        definition: "The damaging lack of material benefits or essential necessities like sleep.",
        exampleSentence: "Chronic sleep deprivation impairs students' concentration during exams."
      },
      {
        word: "repercussions",
        partOfSpeech: "noun (plural)",
        pronunciation: "/ˌriːpəˈkʌʃnz/",
        definition: "Unintended consequences or secondary effects occurring after an action.",
        exampleSentence: "Excessive screen time carries serious psychological repercussions for teens."
      },
      {
        word: "curated",
        partOfSpeech: "adjective",
        pronunciation: "/kjʊəˈreɪtɪd/",
        definition: "Carefully selected, organized, and presented for public display.",
        exampleSentence: "Social media shows curated moments rather than real-life struggles."
      },
      {
        word: "resilience",
        partOfSpeech: "noun",
        pronunciation: "/rɪˈzɪliəns/",
        definition: "The capacity to recover quickly from difficulties; psychological toughness.",
        exampleSentence: "Emotional literacy programs build mental resilience in teenagers."
      }
    ],
    questions: [
      {
        id: 1,
        questionNumber: 1,
        questionText: "What is the primary focus of the passage?",
        options: [
          { key: 'A', text: 'How to manufacture cheap digital smartphones for secondary schools' },
          { key: 'B', text: 'The effects of excessive screen exposure on adolescent sleep and mental health, along with healthy digital habits' },
          { key: 'C', text: 'The history of social media companies in Silicon Valley' },
          { key: 'D', text: 'Why sports video games are more popular than physical exercise' }
        ],
        correctAnswer: 'B',
        explanation: "The passage discusses how excessive screen exposure harms sleep (para 2) and mental health (para 3-4), and explains how 'digital hygiene' and mindful habits resolve these issues (para 5-6).",
        evidenceParagraph: 1,
        evidenceQuote: "the profound impacts of excessive screen exposure on teenage physical well-being and mental health.",
        skillType: 'main-idea'
      },
      {
        id: 2,
        questionNumber: 2,
        questionText: "According to Paragraph 1, what do adolescents use digital devices for?",
        options: [
          { key: 'A', text: 'Maintaining friendships, streaming tutorials, playing games, and reading news' },
          { key: 'B', text: 'Designing commercial airplanes and space rockets' },
          { key: 'C', text: 'Purchasing real estate properties online' },
          { key: 'D', text: 'Refusing to attend secondary school classes' }
        ],
        correctAnswer: 'A',
        explanation: "Paragraph 1 explicitly lists: 'Teenagers rely on these digital gadgets to maintain friendships, stream educational tutorials, play interactive video games, and stay updated with global news.'",
        evidenceParagraph: 1,
        evidenceQuote: "Teenagers rely on these digital gadgets to maintain friendships, stream educational tutorials, play interactive video games, and stay updated with global news.",
        skillType: 'factual-detail'
      },
      {
        id: 3,
        questionNumber: 3,
        questionText: "The word 'indispensable' in Paragraph 1 is closest in meaning to:",
        options: [
          { key: 'A', text: 'completely necessary / essential' },
          { key: 'B', text: 'harmful and toxic' },
          { key: 'C', text: 'cheap and breakable' },
          { key: 'D', text: 'unwanted' }
        ],
        correctAnswer: 'A',
        explanation: "'Indispensable' means absolutely necessary, essential, or vital.",
        evidenceParagraph: 1,
        evidenceQuote: "smartphones, tablets, and social media platforms have become indispensable companions for adolescents.",
        skillType: 'vocabulary'
      },
      {
        id: 4,
        questionNumber: 4,
        questionText: "According to Paragraph 2, how does blue light from screens disrupt sleep?",
        options: [
          { key: 'A', text: 'It creates loud physical noises in the room' },
          { key: 'B', text: 'It suppresses the production of melatonin, the sleep hormone' },
          { key: 'C', text: 'It burns the pillowcase with high heat' },
          { key: 'D', text: 'It prevents the alarm clock from ringing in the morning' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 2 states: 'digital screens emit high-energy visible blue light, which suppresses the production of melatonin, a vital hormone responsible for signaling to the brain that it is time for rest.'",
        evidenceParagraph: 2,
        evidenceQuote: "digital screens emit high-energy visible blue light, which suppresses the production of melatonin, a vital hormone responsible for signaling to the brain that it is time for rest.",
        skillType: 'factual-detail'
      },
      {
        id: 5,
        questionNumber: 5,
        questionText: "The word 'suppresses' in Paragraph 2 is closest in meaning to:",
        options: [
          { key: 'A', text: 'inhibits / slows down' },
          { key: 'B', text: 'increases greatly' },
          { key: 'C', text: 'measures' },
          { key: 'D', text: 'celebrates' }
        ],
        correctAnswer: 'A',
        explanation: "'Suppresses' means to inhibit, restrain, or prevent the natural production of something.",
        evidenceParagraph: 2,
        evidenceQuote: "which suppresses the production of melatonin, a vital hormone...",
        skillType: 'vocabulary'
      },
      {
        id: 6,
        questionNumber: 6,
        questionText: "Which of the following is NOT listed in Paragraph 2 as a result of sleep deprivation?",
        options: [
          { key: 'A', text: 'Morning sluggishness' },
          { key: 'B', text: 'Diminished memory retention' },
          { key: 'C', text: 'Weakened immune defense' },
          { key: 'D', text: 'Sudden loss of hearing ability' }
        ],
        correctAnswer: 'D',
        explanation: "Paragraph 2 explicitly mentions morning sluggishness, diminished memory retention, and weakened immune defense. Loss of hearing is not mentioned.",
        evidenceParagraph: 2,
        evidenceQuote: "leading to morning sluggishness, diminished memory retention, and weakened immune defense during crucial exam preparation periods.",
        skillType: 'negative-fact'
      },
      {
        id: 7,
        questionNumber: 7,
        questionText: "The word 'their' in Paragraph 2 refers to:",
        options: [
          { key: 'A', text: 'digital screens' },
          { key: 'B', text: 'melatonin hormones' },
          { key: 'C', text: 'teenagers' },
          { key: 'D', text: 'medical research studies' }
        ],
        correctAnswer: 'C',
        explanation: "In paragraph 2, 'The vast majority of teenagers confess to checking their handheld devices right before going to sleep, and many even keep their phones next to their pillows', 'their' refers to teenagers.",
        evidenceParagraph: 2,
        evidenceQuote: "The vast majority of teenagers confess to checking their handheld devices right before going to sleep, and many even keep their phones next to their pillows.",
        skillType: 'pronoun-reference'
      },
      {
        id: 8,
        questionNumber: 8,
        questionText: "According to Paragraph 3, why do vulnerable teens feel inadequate when viewing social media?",
        options: [
          { key: 'A', text: 'Because social media platforms charge money for every login' },
          { key: 'B', text: 'Because they compare their real everyday lives to curated, idealized portrayals of peers' },
          { key: 'C', text: 'Because their friends refuse to send them text messages' },
          { key: 'D', text: 'Because video games are too difficult to complete' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 3 explains: 'When vulnerable teenagers constantly compare their ordinary everyday lives to these curated digital illusions, feelings of inadequacy, low self-esteem, and anxiety often emerge.'",
        evidenceParagraph: 3,
        evidenceQuote: "When vulnerable teenagers constantly compare their ordinary everyday lives to these curated digital illusions, feelings of inadequacy, low self-esteem, and anxiety often emerge.",
        skillType: 'factual-detail'
      },
      {
        id: 9,
        questionNumber: 9,
        questionText: "The word 'repercussions' in Paragraph 3 is closest in meaning to:",
        options: [
          { key: 'A', text: 'negative consequences / effects' },
          { key: 'B', text: 'pleasant surprises' },
          { key: 'C', text: 'financial profits' },
          { key: 'D', text: 'new inventions' }
        ],
        correctAnswer: 'A',
        explanation: "'Repercussions' are unintended, often negative consequences or effects resulting from an event or action.",
        evidenceParagraph: 3,
        evidenceQuote: "Beyond physical fatigue, the psychological repercussions of social media are equally concerning.",
        skillType: 'vocabulary'
      },
      {
        id: 10,
        questionNumber: 10,
        questionText: "The word 'flawless' in Paragraph 3 is OPPOSITE in meaning to:",
        options: [
          { key: 'A', text: 'imperfect / defective' },
          { key: 'B', text: 'perfect' },
          { key: 'C', text: 'attractive' },
          { key: 'D', text: 'shining' }
        ],
        correctAnswer: 'A',
        explanation: "'Flawless' means without any defects or errors. The opposite is 'imperfect' or 'defective'.",
        evidenceParagraph: 3,
        evidenceQuote: "showcasing glamorous vacations, flawless appearances, and continuous social achievements.",
        skillType: 'synonym-antonym'
      },
      {
        id: 11,
        questionNumber: 11,
        questionText: "According to Paragraph 4, what is missing from online messaging compared to face-to-face talk?",
        options: [
          { key: 'A', text: 'Text characters and emojis' },
          { key: 'B', text: 'Non-verbal cues like facial expressions, tone of voice, and body language' },
          { key: 'C', text: 'Internet connectivity speed' },
          { key: 'D', text: 'Cellular phone batteries' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 4 explains: 'it lacks essential non-verbal cues such as facial expressions, tone of voice, and empathetic body language.'",
        evidenceParagraph: 4,
        evidenceQuote: "it lacks essential non-verbal cues such as facial expressions, tone of voice, and empathetic body language.",
        skillType: 'factual-detail'
      },
      {
        id: 12,
        questionNumber: 12,
        questionText: "What problem might occur if teens only socialize through digital chats (Paragraph 4)?",
        options: [
          { key: 'A', text: 'They might experience social awkwardness and loneliness in real-world environments' },
          { key: 'B', text: 'They will instantly become professional computer programmers' },
          { key: 'C', text: 'They will refuse to eat warm food' },
          { key: 'D', text: 'They will speak foreign languages perfectly without studying' }
        ],
        correctAnswer: 'A',
        explanation: "Paragraph 4 states: 'adolescents who substitute physical socialization with digital chats may find themselves experiencing social awkwardness and heightened loneliness when interacting in real-world communal environments.'",
        evidenceParagraph: 4,
        evidenceQuote: "experiencing social awkwardness and heightened loneliness when interacting in real-world communal environments.",
        skillType: 'factual-detail'
      },
      {
        id: 13,
        questionNumber: 13,
        questionText: "The word 'it' in Paragraph 4 refers to:",
        options: [
          { key: 'A', text: 'online messaging' },
          { key: 'B', text: 'facial expression' },
          { key: 'C', text: 'tone of voice' },
          { key: 'D', text: 'physical socialization' }
        ],
        correctAnswer: 'A',
        explanation: "In paragraph 4, 'While online messaging provides instantaneous connectivity, it lacks essential non-verbal cues...', 'it' refers to online messaging.",
        evidenceParagraph: 4,
        evidenceQuote: "While online messaging provides instantaneous connectivity, it lacks essential non-verbal cues such as facial expressions...",
        skillType: 'pronoun-reference'
      },
      {
        id: 14,
        questionNumber: 14,
        questionText: "What do health experts propose instead of totally banning technology (Paragraph 5)?",
        options: [
          { key: 'A', text: 'Throwing away all computers and smartphones' },
          { key: 'B', text: 'Practicing digital hygiene, such as tech-free mealtimes and pre-bedtime limits' },
          { key: 'C', text: 'Playing video games for 10 hours consecutively' },
          { key: 'D', text: 'Replacing school teachers with computer games' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 5 notes: 'they champion the concept of 'digital hygiene'. This proactive approach includes establishing tech-free zones during family mealtimes, turning off all digital screens at least 60 minutes prior to bedtime...'",
        evidenceParagraph: 5,
        evidenceQuote: "they champion the concept of 'digital hygiene'. This proactive approach includes establishing tech-free zones during family mealtimes, turning off all digital screens at least 60 minutes prior to bedtime...",
        skillType: 'factual-detail'
      },
      {
        id: 15,
        questionNumber: 15,
        questionText: "How much time before going to sleep should screens be turned off according to Paragraph 5?",
        options: [
          { key: 'A', text: 'At least 5 minutes' },
          { key: 'B', text: 'At least 60 minutes' },
          { key: 'C', text: 'Exactly 10 seconds' },
          { key: 'D', text: 'Never turn off screens' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 5 directly specifies: 'turning off all digital screens at least 60 minutes prior to bedtime...'",
        evidenceParagraph: 5,
        evidenceQuote: "turning off all digital screens at least 60 minutes prior to bedtime",
        skillType: 'factual-detail'
      },
      {
        id: 16,
        questionNumber: 16,
        questionText: "The word 'proactive' in Paragraph 5 is closest in meaning to:",
        options: [
          { key: 'A', text: 'taking action in advance / preventive' },
          { key: 'B', text: 'slow and reluctant' },
          { key: 'C', text: 'hostile' },
          { key: 'D', text: 'useless' }
        ],
        correctAnswer: 'A',
        explanation: "'Proactive' means controlling a situation by causing something to happen rather than waiting to respond after it happens.",
        evidenceParagraph: 5,
        evidenceQuote: "This proactive approach includes establishing tech-free zones...",
        skillType: 'vocabulary'
      },
      {
        id: 17,
        questionNumber: 17,
        questionText: "The word 'resilience' in Paragraph 5 is closest in meaning to:",
        options: [
          { key: 'A', text: 'the ability to recover and remain strong' },
          { key: 'B', text: 'extreme physical weakness' },
          { key: 'C', text: 'fear of exams' },
          { key: 'D', text: 'inability to make friends' }
        ],
        correctAnswer: 'A',
        explanation: "'Resilience' means the capacity to recover quickly from difficulties, stress, or setbacks.",
        evidenceParagraph: 5,
        evidenceQuote: "help students recognize online toxicity and develop psychological resilience.",
        skillType: 'vocabulary'
      },
      {
        id: 18,
        questionNumber: 18,
        questionText: "According to Paragraph 6, why is technology described as 'inherently neutral'?",
        options: [
          { key: 'A', text: 'Because it cannot be bought with money' },
          { key: 'B', text: 'Because whether it is beneficial or harmful depends on how humans use it' },
          { key: 'C', text: 'Because all electronic devices are manufactured in the same color' },
          { key: 'D', text: 'Because it does not consume any electrical energy' }
        ],
        correctAnswer: 'B',
        explanation: "Paragraph 6 explains: 'technology itself is inherently neutral; its influence on adolescent well-being depends entirely on how mindfully it is utilized.'",
        evidenceParagraph: 6,
        evidenceQuote: "technology itself is inherently neutral; its influence on adolescent well-being depends entirely on how mindfully it is utilized.",
        skillType: 'inference'
      },
      {
        id: 19,
        questionNumber: 19,
        questionText: "What is the author's primary attitude towards teenagers using technology?",
        options: [
          { key: 'A', text: 'Encouraging mindful, disciplined usage and balance rather than complete prohibition' },
          { key: 'B', text: 'Completely opposed to all educational technology' },
          { key: 'C', text: 'Insisting that teenagers spend 12 hours online daily' },
          { key: 'D', text: 'Indifferent to student health and exam performance' }
        ],
        correctAnswer: 'A',
        explanation: "The author advocates for self-discipline, healthy limits, and balance to enjoy the benefits of technology while preserving health.",
        evidenceParagraph: 6,
        evidenceQuote: "By cultivating self-discipline, setting healthy screen limits, and prioritizing genuine offline connections, teenagers can enjoy the immense educational benefits...",
        skillType: 'tone'
      },
      {
        id: 20,
        questionNumber: 20,
        questionText: "Which of the following represents the most comprehensive summary of the passage?",
        options: [
          { key: 'A', text: 'Social media is the only cause of low grades in secondary schools' },
          { key: 'B', text: 'While excessive screen time harms sleep and mental health, practicing digital hygiene enables teens to benefit from technology safely' },
          { key: 'C', text: 'Blue light from mobile phones can be prevented by wearing sunglasses at night' },
          { key: 'D', text: 'Teenagers should never read books or do physical sports anymore' }
        ],
        correctAnswer: 'B',
        explanation: "Option B summarizes both the challenges (sleep loss, anxiety) and the practical solutions (digital hygiene, balanced life) highlighted across all paragraphs.",
        evidenceParagraph: 6,
        evidenceQuote: "By cultivating self-discipline, setting healthy screen limits, and prioritizing genuine offline connections, teenagers can enjoy the immense educational benefits of the digital age without compromising their mental and physical well-being.",
        skillType: 'main-idea'
      }
    ]
  }
];
