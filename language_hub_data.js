const languageData = {
    english: {
        name: "English",
        flag: "https://flagcdn.com/w80/gb.png",
        color: "#3b82f6",
        wallpaper: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1920&auto=format&fit=crop",
        roadmap: [
            { week: 1, topic: "Nouns, Pronouns, Articles", concepts: "Countable/Uncountable, A/An/The" },
            { week: 2, topic: "Adjectives & Adverbs", concepts: "Comparisons, Degrees" },
            { week: 3, topic: "Prepositions", concepts: "In/On/At, Direction" },
            { week: 4, topic: "Present Tenses", concepts: "Simple, Continuous, Perfect" },
            { week: 5, topic: "Past Tenses", concepts: "Simple, Continuous, Perfect" },
            { week: 6, topic: "Future Tenses", concepts: "Will vs. Going to" },
            { week: 7, topic: "Sentence Mechanics", concepts: "Subject-Verb Agreement" },
            { week: 8, topic: "Conjunctions", concepts: "And, But, Because" },
            { week: 9, topic: "Clauses", concepts: "Relative Clauses" },
            { week: 10, topic: "Conditionals", concepts: "Zero to 3rd" },
            { week: 11, topic: "Passive & Reported Speech", concepts: "Indirect speech" },
            { week: 12, topic: "Advanced Usage", concepts: "Phrasal Verbs, Gerunds" }
        ],
        resources: [
            { name: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish/" },
            { name: "British Council", url: "https://learnenglish.britishcouncil.org/" },
            { name: "Perfect English Grammar", url: "https://www.perfect-english-grammar.com/" },
            { name: "Duolingo", url: "https://www.duolingo.com/learn" }
        ]
    },
    korean: {
        name: "Korean",
        flag: "https://flagcdn.com/w80/kr.png",
        color: "#ef4444",
        wallpaper: "https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=1920&auto=format&fit=crop",
        roadmap: [
            { week: 1, topic: "Hangul Basics", concepts: "Vowels & Consonants" },
            { week: 2, topic: "Batchim", concepts: "Complex Pronunciation" },
            { week: 3, topic: "To be (이다 / 있다)", concepts: "Identification" },
            { week: 4, topic: "Action Verbs", concepts: "Present Tense" },
            { week: 5, topic: "Particles (은/는 vs 이/가)", concepts: "Topic vs Subject" },
            { week: 6, topic: "Past Tense", concepts: "Describing events" },
            { week: 7, topic: "Numbers", concepts: "Sino vs Native" },
            { week: 8, topic: "Object Particles", concepts: "을/를 and Negation" },
            { week: 9, topic: "Connecting Sentences", concepts: "And (-고), But (-지만)" },
            { week: 10, topic: "Future Tense", concepts: "Intent & Plans" },
            { week: 11, topic: "Honorifics", concepts: "Respectful speech" },
            { week: 12, topic: "Adjectives", concepts: "Modifiers" }
        ],
        resources: [
            { name: "Talk To Me In Korean", url: "https://talktomeinkorean.com/" },
            { name: "How To Study Korean", url: "https://www.howtostudykorean.com/" },
            { name: "LingoDeer", url: "https://www.lingodeer.com/" },
            { name: "Duolingo", url: "https://www.duolingo.com/learn" }
        ]
    },
    chinese: {
        name: "Chinese",
        flag: "https://flagcdn.com/w80/cn.png",
        color: "#f59e0b",
        wallpaper: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1920&auto=format&fit=crop",
        roadmap: [
            { week: 1, topic: "Pinyin & 4 Tones", concepts: "Mastering Tones" },
            { week: 2, topic: "Tone Combinations", concepts: "Rhythm" },
            { week: 3, topic: "Numbers & Radicals", concepts: "Stroke Order" },
            { week: 4, topic: "Pronouns & Greetings", concepts: "Ni Hao" },
            { week: 5, topic: "Basic Verbs", concepts: "Shi, Qu, Yao" },
            { week: 6, topic: "Measure Words", concepts: "个, 只, 本" },
            { week: 7, topic: "Questions", concepts: "Ma, Who, Where" },
            { week: 8, topic: "Time & Dates", concepts: "Calendar" },
            { week: 9, topic: "Negation", concepts: "Bu vs Mei" },
            { week: 10, topic: "Adjectives", concepts: "Using 'Hen'" },
            { week: 11, topic: "Particle 'Le'", concepts: "Change of state" },
            { week: 12, topic: "HSK 1 Review", concepts: "150 Words" }
        ],
        resources: [
            { name: "Pleco Dictionary", url: "https://www.pleco.com/" },
            { name: "Yoyo Chinese", url: "https://yoyochinese.com/" },
            { name: "HelloChinese", url: "http://www.hellochinese.cc/" },
            { name: "Duolingo", url: "https://www.duolingo.com/learn" }
        ]
    },
    philippine: {
        name: "Philippine",
        flag: "https://flagcdn.com/w80/ph.png",
        color: "#10b981",
        wallpaper: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1920&auto=format&fit=crop",
        roadmap: [
            { week: 1, topic: "Alphabet & Greetings", concepts: "Abakada" },
            { week: 2, topic: "Introductions", concepts: "Ako si..." },
            { week: 3, topic: "Actor Focus (-um-)", concepts: "Basic actions" },
            { week: 4, topic: "Past & Present", concepts: "Conjugation" },
            { week: 5, topic: "Enclitics", concepts: "Ba, Na, Pa" },
            { week: 6, topic: "Object Focus (-in)", concepts: "Transitive verbs" },
            { week: 7, topic: "Pronouns", concepts: "Ang vs Ng" },
            { week: 8, topic: "Adjectives", concepts: "Ma- words" },
            { week: 9, topic: "Directions", concepts: "Sa particles" },
            { week: 10, topic: "Taglish", concepts: "Casual speech" },
            { week: 11, topic: "Complex Sentences", concepts: "Dahil, Kung" },
            { week: 12, topic: "Conversation", concepts: "Final Review" }
        ],
        resources: [
            { name: "Tagalog.com", url: "https://www.tagalog.com/" },
            { name: "FilipinoPod101", url: "https://www.filipinopod101.com/" },
            { name: "Go Filipino", url: "https://gofilipino.com/" },
            { name: "Duolingo", url: "https://www.duolingo.com/learn" }
        ]
    },
    malay: {
        name: "Malay",
        flag: "https://flagcdn.com/w80/my.png",
        color: "#facc15",
        wallpaper: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1920&auto=format&fit=crop",
        roadmap: [
            { week: 1, topic: "Alphabet & Greetings", concepts: "Apa khabar, Terima kasih" },
            { week: 2, topic: "Introductions", concepts: "Nama saya..., Saya, Awak" },
            { week: 3, topic: "Core Verbs", concepts: "Nak, Makan, Minum" },
            { week: 4, topic: "Time Indicators", concepts: "Sudah, Sedang, Akan" },
            { week: 5, topic: "Questions", concepts: "Apa, Bila, Di mana" },
            { week: 6, topic: "Numbers & Time", concepts: "Counting 1-100" },
            { week: 7, topic: "Adjectives", concepts: "Noun + Adjective + Yang" },
            { week: 8, topic: "Prepositions", concepts: "Di, Ke, Dari" },
            { week: 9, topic: "Affixes", concepts: "MeN- and Pe-" },
            { week: 10, topic: "Conjunctions", concepts: "Dan, Tetapi, Kerana" },
            { week: 11, topic: "Colloquialism", concepts: "Lah, Kan, Jom" },
            { week: 12, topic: "Conversations", ordering: "Food & Directions" }
        ],
        resources: [
            { name: "Learn Malay with Cikgu", url: "https://www.youtube.com/results?search_query=Learn+Malay+with+Cikgu" },
            { name: "Aida's Malay Learning", url: "https://www.youtube.com/results?search_query=Aida's+Malay+Learning" },
            { name: "Memrise (Malay)", url: "https://www.memrise.com/courses/english/malay/" },
            { name: "Omniglot (Malay)", url: "https://omniglot.com/language/phrases/malay.php" }
        ]
    },
    indonesian: {
        name: "Indonesian",
        flag: "https://flagcdn.com/w80/id.png",
        color: "#ef4444",
        wallpaper: "https://images.unsplash.com/photo-1555040479-c949debe66c1?q=80&w=1920&auto=format&fit=crop",
        roadmap: [
            { week: 1, topic: "Alphabet & Greetings", concepts: "Halo, Apa kabar" },
            { week: 2, topic: "Introductions", concepts: "Aku, Kamu" },
            { week: 3, topic: "Core Verbs", concepts: "Mau, Makan, Minum" },
            { week: 4, topic: "Time Indicators", concepts: "Sudah, Sedang, Akan" },
            { week: 5, topic: "Questions", concepts: "Apa, Kapan, Di mana" },
            { week: 6, topic: "Numbers & Time", concepts: "Counting 1-100" },
            { week: 7, topic: "Adjectives", concepts: "Noun + Adjective + Yang" },
            { week: 8, topic: "Prepositions", concepts: "Di, Ke, Dari" },
            { week: 9, topic: "Affixes", concepts: "MeN- and Pe-" },
            { week: 10, topic: "Conjunctions", concepts: "Dan, Tetapi, Karena" },
            { week: 11, topic: "Bahasa Gaul", concepts: "Banget, Sih, Dong" },
            { week: 12, topic: "Conversations", concepts: "Jakarta interactions" }
        ],
        resources: [
            { name: "IndonesianPod101", url: "https://www.indonesianpod101.com/" },
            { name: "Learn Indonesian with Cinta", url: "https://www.youtube.com/results?search_query=Learn+Indonesian+with+Cinta" },
            { name: "LearningIndonesian", url: "https://www.learningindonesian.com/" },
            { name: "Duolingo", url: "https://www.duolingo.com/learn" }
        ]
    }
};
