const languageData = {
    english: {
        name: "English",
        flag: "https://flagcdn.com/w80/gb.png",
        color: "#3b82f6",
        wallpaper: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1920&auto=format&fit=crop",
        weekTerm: "Week",
        comicSearch: "london-illustration,comic",
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
        name: "Hangul",
        flag: "https://flagcdn.com/w80/kr.png",
        color: "#ef4444",
        wallpaper: "https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=1920&auto=format&fit=crop",
        weekTerm: "주차",
        comicSearch: "korea-illustration,anime",
        roadmap: [
            { week: 1, topic: "Hangul Basics", topic_my: "Asas Hangul", concepts: "Vowels & Consonants", concepts_my: "Vokal & Konsonan" },
            { week: 2, topic: "Batchim", topic_my: "Batchim", concepts: "Complex Pronunciation", concepts_my: "Sebutan Kompleks" },
            { week: 3, topic: "To be (이다 / 있다)", topic_my: "Menjadi (이다 / 있다)", concepts: "Identification", concepts_my: "Pengenalpastian" },
            { week: 4, topic: "Action Verbs", topic_my: "Kata Kerja Aksi", concepts: "Present Tense", concepts_my: "Masa Kini" },
            { week: 5, topic: "Particles (은/는 vs 이/가)", topic_my: "Partikel (은/는 vs 이/가)", concepts: "Topic vs Subject", concepts_my: "Topik vs Subjek" },
            { week: 6, topic: "Past Tense", topic_my: "Lampau", concepts: "Describing events", concepts_my: "Menerangkan peristiwa" },
            { week: 7, topic: "Numbers", topic_my: "Nombor", concepts: "Sino vs Native", concepts_my: "Sino vs Asli" },
            { week: 8, topic: "Object Particles", topic_my: "Partikel Objek", concepts: "을/를 and Negation", concepts_my: "을/를 dan Penafian" },
            { week: 9, topic: "Connecting Sentences", topic_my: "Menyambung Ayat", concepts: "And (-고), But (-지만)", concepts_my: "Dan (-고), Tetapi (-지만)" },
            { week: 10, topic: "Future Tense", topic_my: "Tense Masa Depan", concepts: "Intent & Plans", concepts_my: "Niat & Rancangan" },
            { week: 11, topic: "Honorifics", topic_my: "Kehormatan (Honorifics)", concepts: "Respectful speech", concepts_my: "Ucapan hormat" },
            { week: 12, topic: "Adjectives", topic_my: "Kata Adjektif", concepts: "Modifiers", concepts_my: "Pengubahsuai" }
        ],
        resources: [
            { name: "Talk To Me In Korean", url: "https://talktomeinkorean.com/" },
            { name: "How To Study Korean", url: "https://www.howtostudykorean.com/" },
            { name: "LingoDeer", url: "https://www.lingodeer.com/" },
            { name: "Duolingo", url: "https://www.duolingo.com/learn" }
        ]
    },
    chinese: {
        name: "Mandarin",
        flag: "https://flagcdn.com/w80/cn.png",
        color: "#f59e0b",
        wallpaper: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1920&auto=format&fit=crop",
        weekTerm: "第",
        weekSuffix: "周",
        comicSearch: "china-illustration,comic",
        roadmap: [
            { week: 1, topic: "Pinyin & 4 Tones", topic_my: "Pinyin & 4 Ton", concepts: "Mastering Tones", concepts_my: "Menguasai Ton" },
            { week: 2, topic: "Tone Combinations", topic_my: "Kombinasi Ton", concepts: "Rhythm", concepts_my: "Irama" },
            { week: 3, topic: "Numbers & Radicals", topic_my: "Nombor & Radikal", concepts: "Stroke Order", concepts_my: "Turutan Garisan" },
            { week: 4, topic: "Pronouns & Greetings", topic_my: "Kata Ganti Nama & Salam", concepts: "Ni Hao", concepts_my: "Ni Hao" },
            { week: 5, topic: "Basic Verbs", topic_my: "Kata Kerja Asas", concepts: "Shi, Qu, Yao", concepts_my: "Shi, Qu, Yao" },
            { week: 6, topic: "Measure Words", topic_my: "Penjodoh Bilangan", concepts: "个, 只, 本", concepts_my: "个, 只, 本" },
            { week: 7, topic: "Questions", topic_my: "Soalan", concepts: "Ma, Who, Where", concepts_my: "Ma, Siapa, Di mana" },
            { week: 8, topic: "Time & Dates", topic_my: "Masa & Tarikh", concepts: "Calendar", concepts_my: "Kalendar" },
            { week: 9, topic: "Negation", topic_my: "Penafian", concepts: "Bu vs Mei", concepts_my: "Bu vs Mei" },
            { week: 10, topic: "Adjectives", topic_my: "Kata Adjektif", concepts: "Using 'Hen'", concepts_my: "Menggunakan 'Hen'" },
            { week: 11, topic: "Particle 'Le'", topic_my: "Partikel 'Le'", concepts: "Change of state", concepts_my: "Perubahan keadaan" },
            { week: 12, topic: "HSK 1 Review", topic_my: "Ulasan HSK 1", concepts: "150 Words", concepts_my: "150 Perkataan" }
        ],
        resources: [
            { name: "Pleco Dictionary", url: "https://www.pleco.com/" },
            { name: "Yoyo Chinese", url: "https://yoyochinese.com/" },
            { name: "HelloChinese", url: "http://www.hellochinese.cc/" },
            { name: "Duolingo", url: "https://www.duolingo.com/learn" }
        ]
    },
    philippine: {
        name: "Tagalog",
        flag: "https://flagcdn.com/w80/ph.png",
        color: "#10b981",
        wallpaper: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1920&auto=format&fit=crop",
        weekTerm: "Linggo",
        comicSearch: "philippines-illustration,cartoon",
        roadmap: [
            { week: 1, topic: "Alphabet & Greetings", topic_my: "Abjad & Salam", concepts: "Abakada", concepts_my: "Abakada" },
            { week: 2, topic: "Introductions", topic_my: "Pengenalan", concepts: "Ako si...", concepts_my: "Ako si..." },
            { week: 3, topic: "Actor Focus (-um-)", topic_my: "Fokus Pelakon (-um-)", concepts: "Basic actions", concepts_my: "Aksi asas" },
            { week: 4, topic: "Past & Present", topic_my: "Masa Lampau & Kini", concepts: "Conjugation", concepts_my: "Konjugasi" },
            { week: 5, topic: "Enclitics", topic_my: "Enklitik", concepts: "Ba, Na, Pa", concepts_my: "Ba, Na, Pa" },
            { week: 6, topic: "Object Focus (-in)", topic_my: "Fokus Objek (-in)", concepts: "Transitive verbs", concepts_my: "Kata kerja transitif" },
            { week: 7, topic: "Pronouns", topic_my: "Kata Ganti Nama", concepts: "Ang vs Ng", concepts_my: "Ang vs Ng" },
            { week: 8, topic: "Adjectives", topic_my: "Kata Adjektif", concepts: "Ma- words", concepts_my: "Perkataan Ma-" },
            { week: 9, topic: "Directions", topic_my: "Arah", concepts: "Sa particles", concepts_my: "Partikel Sa" },
            { week: 10, topic: "Taglish", topic_my: "Taglish", concepts: "Casual speech", concepts_my: "Ucapan santai" },
            { week: 11, topic: "Complex Sentences", topic_my: "Ayat Kompleks", concepts: "Dahil, Kung", concepts_my: "Dahil, Kung" },
            { week: 12, topic: "Conversation", topic_my: "Perbualan", concepts: "Final Review", concepts_my: "Ulasan Akhir" }
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
        color: "#ca8a04",
        wallpaper: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1920&auto=format&fit=crop",
        weekTerm: "Minggu",
        comicSearch: "malaysia-illustration,comic",
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
        weekTerm: "Minggu",
        comicSearch: "indonesia-illustration,comic",
        roadmap: [
            { week: 1, topic: "Alphabet & Greetings", topic_my: "Abjad & Salam", concepts: "Halo, Apa kabar", concepts_my: "Halo, Apa kabar" },
            { week: 2, topic: "Introductions", topic_my: "Pengenalan", concepts: "Aku, Kamu", concepts_my: "Aku, Kamu" },
            { week: 3, topic: "Core Verbs", topic_my: "Kata Kerja Teras", concepts: "Mau, Makan, Minum", concepts_my: "Mau, Makan, Minum" },
            { week: 4, topic: "Time Indicators", topic_my: "Penunjuk Masa", concepts: "Sudah, Sedang, Akan", concepts_my: "Sudah, Sedang, Akan" },
            { week: 5, topic: "Questions", topic_my: "Soalan", concepts: "Apa, Kapan, Di mana", concepts_my: "Apa, Kapan, Di mana" },
            { week: 6, topic: "Numbers & Time", topic_my: "Nombor & Masa", concepts: "Counting 1-100", concepts_my: "Mengira 1-100" },
            { week: 7, topic: "Adjectives", topic_my: "Kata Adjektif", concepts: "Noun + Adjective + Yang", concepts_my: "Kata Nama + Kata Adjektif + Yang" },
            { week: 8, topic: "Prepositions", topic_my: "Kata Sendi Nama", concepts: "Di, Ke, Dari", concepts_my: "Di, Ke, Dari" },
            { week: 9, topic: "Affixes", topic_my: "Imbuhan", concepts: "MeN- and Pe-", concepts_my: "MeN- and Pe-" },
            { week: 10, topic: "Conjunctions", topic_my: "Kata Hubung", concepts: "Dan, Tetapi, Karena", concepts_my: "Dan, Tetapi, Karena" },
            { week: 11, topic: "Bahasa Gaul", topic_my: "Bahasa Gaul", concepts: "Banget, Sih, Dong", concepts_my: "Banget, Sih, Dong" },
            { week: 12, topic: "Conversations", topic_my: "Perbualan", concepts: "Jakarta interactions", concepts_my: "Interaksi Jakarta" }
        ],
        resources: [
            { name: "IndonesianPod101", url: "https://www.indonesianpod101.com/" },
            { name: "Learn Indonesian with Cinta", url: "https://www.youtube.com/results?search_query=Learn+Indonesian+with+Cinta" },
            { name: "LearningIndonesian", url: "https://www.learningindonesian.com/" },
            { name: "Duolingo", url: "https://www.duolingo.com/learn" }
        ]
    },
    japanese: {
        name: "Japanese",
        flag: "https://flagcdn.com/w80/jp.png",
        color: "#bc002d",
        wallpaper: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1920&auto=format&fit=crop",
        weekTerm: "Week",
        comicSearch: "japan-illustration,anime",
        roadmap: [
            { week: 1, topic: "Hiragana Basics", topic_my: "Asas Hiragana", concepts: "Vowels & K-Row", concepts_my: "Vokal & Baris-K" },
            { week: 2, topic: "Katakana", topic_my: "Katakana", concepts: "Foreign Loanwords", concepts_my: "Kata Pinjaman Luar" },
            { week: 3, topic: "Basic Kanji", topic_my: "Kanji Asas", concepts: "Numbers & Days", concepts_my: "Nombor & Hari" },
            { week: 4, topic: "Greetings & Intro", topic_my: "Salam & Pengenalan", concepts: "Hajimemashite", concepts_my: "Hajimemashite" },
            { week: 5, topic: "To be (Desu/Arimasu)", topic_my: "Menjadi (Desu/Arimasu)", concepts: "Existence", concepts_my: "Kewujudan" },
            { week: 6, topic: "Particles (Wa, Ga, O)", topic_my: "Partikel (Wa, Ga, O)", concepts: "The big 3", concepts_my: "3 Partikel Besar" },
            { week: 7, topic: "Basic Verbs", topic_my: "Kata Kerja Asas", concepts: "Taberu, Nomu, Iku", concepts_my: "Makan, Minum, Pergi" },
            { week: 8, topic: "Adjectives", topic_my: "Kata Adjektif", concepts: "I-adj vs Na-adj", concepts_my: "Kata Adjektif-I vs Kata Adjektif-Na" },
            { week: 9, topic: "Question Words", topic_my: "Kata Tanya", concepts: "Nani, Doko, Itsu", concepts_my: "Apa, Di mana, Bila" },
            { week: 10, topic: "Time & Places", topic_my: "Masa & Tempat", concepts: "Ni particle", concepts_my: "Partikel Ni" },
            { week: 11, topic: "Connecting Words", topic_my: "Kata Hubung", concepts: "Soshite, Demo", concepts_my: "Dan, Tetapi" },
            { week: 12, topic: "JLPT N5 Intro", topic_my: "Pengenalan JLPT N5", concepts: "Vocabulary & Review", concepts_my: "Kosa Kata & Ulasan" }
        ],
        resources: [
            { name: "JapanesePod101", url: "https://www.japanesepod101.com/" },
            { name: "Tae Kim's Guide", url: "https://guidetojapanese.org/learn/" },
            { name: "NHK Easy Japanese", url: "https://www.nhk.or.jp/lesson/english/" },
            { name: "Duolingo", url: "https://www.duolingo.com/learn" }
        ]
    }
};
