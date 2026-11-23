export const TIERS = [
  { id: 1, title: "CORE 500", range: "1 — 500", desc: "Фундамент живой речи (5 колод по 100 слов)", target: 500, unlockAt: 0 },
  { id: 2, title: "FLUENT 1000", range: "501 — 1000", desc: "Свободное понимание сериалов", target: 1000, unlockAt: 425 },
  { id: 3, title: "SHARP 1500", range: "1001 — 1500", desc: "Точные оттенки и эмоции", target: 1500, unlockAt: 850 },
  { id: 4, title: "DEEP 2000", range: "1501 — 2000", desc: "Уверенный уровень без барьеров", target: 2000, unlockAt: 1300 },
  { id: 5, title: "PRO 2500", range: "2001 — 2500", desc: "Сленг, идиомы и нюансы", target: 2500, unlockAt: 1750 },
  { id: 6, title: "NATIVE 3000", range: "2501 — 3000", desc: "Почти как носитель из Лондона", target: 3000, unlockAt: 2200 }
];

export const INITIAL_WORDS = [
  {
    "id": 1,
    "tier": 1,
    "deck": 1,
    "word": "reckon",
    "ipa": "/ˈrek.ən/",
    "translation": "полагать, считать",
    "vibe": "Британский мастхэв вместо 'I think'.",
    "contextPrimary": {
      "source": "UK Живая речь",
      "en": "I reckon we should head off now.",
      "ru": "Думаю, нам пора выдвигаться."
    },
    "contextReview": {
      "source": "Второй контекст",
      "en": "Do you reckon she knows?",
      "ru": "Как думаешь, она в курсе?"
    },
    "quizOptions": [
      "осведомлённый",
      "полагать, считать",
      "знакомый"
    ]
  },
  {
    "id": 2,
    "tier": 1,
    "deck": 1,
    "word": "dodgy",
    "ipa": "/ˈdɒdʒ.i/",
    "translation": "мутный, сомнительный",
    "vibe": "Про подозрительных людей, плохую еду или кривой Wi-Fi.",
    "contextPrimary": {
      "source": "UK Живая речь",
      "en": "That bloke looks a bit dodgy.",
      "ru": "Тот парень выглядит мутновато."
    },
    "contextReview": {
      "source": "Второй контекст",
      "en": "My phone charger is acting dodgy.",
      "ru": "Моя зарядка барахлит."
    },
    "quizOptions": [
      "мутный, сомнительный",
      "рассматривать, считать",
      "обстоятельство"
    ]
  },
  {
    "id": 3,
    "tier": 1,
    "deck": 1,
    "word": "figure out",
    "ipa": "/ˈfɪɡ.ər aʊt/",
    "translation": "разобраться, понять",
    "vibe": "Когда нужно включить голову и решить задачу.",
    "contextPrimary": {
      "source": "UK Живая речь",
      "en": "I'll figure out how to fix this.",
      "ru": "Я разберусь, как это починить."
    },
    "contextReview": {
      "source": "Второй контекст",
      "en": "Have you figured out what happened?",
      "ru": "Ты понял, что произошло?"
    },
    "quizOptions": [
      "исследовать",
      "определять",
      "разобраться, понять"
    ]
  },
  {
    "id": 4,
    "tier": 1,
    "deck": 1,
    "word": "knackered",
    "ipa": "/ˈnæk.əd/",
    "translation": "безумно уставший",
    "vibe": "Разговорный британский синоним 'exhausted'.",
    "contextPrimary": {
      "source": "UK Живая речь",
      "en": "I'm absolutely knackered after work.",
      "ru": "Я после работы просто без сил."
    },
    "contextReview": {
      "source": "Второй контекст",
      "en": "You look knackered, mate.",
      "ru": "Ты выглядишь выжатым, приятель."
    },
    "quizOptions": [
      "давать возможность",
      "безумно уставший",
      "особенность, черта"
    ]
  },
  {
    "id": 5,
    "tier": 1,
    "deck": 1,
    "word": "spot on",
    "ipa": "/ˌspɒt ˈɒn/",
    "translation": "в самую точку",
    "vibe": "Идеальная точность прогноза, ответа или образа.",
    "contextPrimary": {
      "source": "UK Живая речь",
      "en": "Your guess was completely spot on.",
      "ru": "Твоя догадка попала в самую точку."
    },
    "contextReview": {
      "source": "Второй контекст",
      "en": "The timing is spot on.",
      "ru": "Момент просто идеальный."
    },
    "quizOptions": [
      "фокусироваться",
      "подразумевать",
      "в самую точку"
    ]
  },
  {
    "id": 6,
    "tier": 1,
    "deck": 1,
    "word": "fancy",
    "ipa": "/ˈfæn.si/",
    "translation": "хотеть, испытывать симпатию",
    "vibe": "В UK: 'хочешь кофе?' или 'она мне нравится'.",
    "contextPrimary": {
      "source": "UK Живая речь",
      "en": "Do you fancy grabbing a coffee?",
      "ru": "Не хочешь взять по кофе?"
    },
    "contextReview": {
      "source": "Второй контекст",
      "en": "I think he fancies you.",
      "ru": "По-моему, ты ему нравишься."
    },
    "quizOptions": [
      "вина, неисправность",
      "хотеть, испытывать симпатию",
      "подчёркивать"
    ]
  },
  {
    "id": 7,
    "tier": 1,
    "deck": 1,
    "word": "gutted",
    "ipa": "/ˈɡʌt.ɪd/",
    "translation": "ужасно расстроенный",
    "vibe": "Когда что-то сорвалось и очень обидно.",
    "contextPrimary": {
      "source": "UK Живая речь",
      "en": "I was gutted when they cancelled the gig.",
      "ru": "Я жутко расстроился, когда концерт отменили."
    },
    "contextReview": {
      "source": "Второй контекст",
      "en": "She looked completely gutted.",
      "ru": "Она выглядела совершенно подавленной."
    },
    "quizOptions": [
      "ужасно расстроенный",
      "осведомлённый",
      "поощрять, ободрять"
    ]
  },
  {
    "id": 8,
    "tier": 1,
    "deck": 1,
    "word": "sorted",
    "ipa": "/ˈsɔː.tɪd/",
    "translation": "решено, улажено, готово",
    "vibe": "Любимое слово британцев, когда вопрос закрыт.",
    "contextPrimary": {
      "source": "UK Живая речь",
      "en": "Tickets are booked, everything's sorted.",
      "ru": "Билеты куплены, всё улажено."
    },
    "contextReview": {
      "source": "Второй контекст",
      "en": "Give me five minutes and we're sorted.",
      "ru": "Дай мне пять минут, и всё будет готово."
    },
    "quizOptions": [
      "решено, улажено, готово",
      "хотеть, испытывать симпатию",
      "ужасно расстроенный"
    ]
  },
  {
    "id": 9,
    "tier": 1,
    "deck": 1,
    "word": "cheeky",
    "ipa": "/ˈtʃiː.ki/",
    "translation": "дерзкий, нагловатый (с шармом)",
    "vibe": "Когда кто-то наглеет, но с улыбкой и обаянием.",
    "contextPrimary": {
      "source": "UK Живая речь",
      "en": "Fancy a cheeky Nando's after work?",
      "ru": "Как насчёт внезапного ужина после работы?"
    },
    "contextReview": {
      "source": "Второй контекст",
      "en": "Don't be cheeky with me!",
      "ru": "Не дерзи мне!"
    },
    "quizOptions": [
      "дерзкий, нагловатый (с шармом)",
      "доказательство, улика",
      "влияние, удар"
    ]
  },
  {
    "id": 10,
    "tier": 1,
    "deck": 1,
    "word": "rubbish",
    "ipa": "/ˈrʌb.ɪʃ/",
    "translation": "чушь, ерунда, мусор",
    "vibe": "В UK говорят вместо 'trash' или 'nonsense'.",
    "contextPrimary": {
      "source": "UK Живая речь",
      "en": "That's absolute rubbish!",
      "ru": "Это полная чушь!"
    },
    "contextReview": {
      "source": "Второй контекст",
      "en": "I feel rubbish today.",
      "ru": "Я сегодня паршиво себя чувствую."
    },
    "quizOptions": [
      "колебаться, медлить",
      "оценивать",
      "чушь, ерунда, мусор"
    ]
  },
  {
    "id": 11,
    "tier": 1,
    "deck": 1,
    "word": "circumstance",
    "ipa": "",
    "translation": "обстоятельство",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to circumstance this properly.",
      "ru": "Важно правильно сделать это (обстоятельство)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to circumstance in daily life.",
      "ru": "Каждый старается (обстоятельство) в повседневной жизни."
    },
    "quizOptions": [
      "выделять, главный момент",
      "обстоятельство",
      "доставлять"
    ]
  },
  {
    "id": 12,
    "tier": 1,
    "deck": 1,
    "word": "claim",
    "ipa": "",
    "translation": "утверждать, заявлять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to claim this properly.",
      "ru": "Важно правильно сделать это (утверждать, заявлять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to claim in daily life.",
      "ru": "Каждый старается (утверждать, заявлять) в повседневной жизни."
    },
    "quizOptions": [
      "указывать",
      "утверждать, заявлять",
      "потреблять"
    ]
  },
  {
    "id": 13,
    "tier": 1,
    "deck": 1,
    "word": "commit",
    "ipa": "",
    "translation": "совершать, посвящать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to commit this properly.",
      "ru": "Важно правильно сделать это (совершать, посвящать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to commit in daily life.",
      "ru": "Каждый старается (совершать, посвящать) в повседневной жизни."
    },
    "quizOptions": [
      "вдохновлять",
      "совершать, посвящать",
      "рассматривать, считать"
    ]
  },
  {
    "id": 14,
    "tier": 1,
    "deck": 1,
    "word": "compare",
    "ipa": "",
    "translation": "сравнивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to compare this properly.",
      "ru": "Важно правильно сделать это (сравнивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to compare in daily life.",
      "ru": "Каждый старается (сравнивать) в повседневной жизни."
    },
    "quizOptions": [
      "особенность, черта",
      "сравнивать",
      "отчётливый, особый"
    ]
  },
  {
    "id": 15,
    "tier": 1,
    "deck": 1,
    "word": "complain",
    "ipa": "",
    "translation": "жаловаться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to complain this properly.",
      "ru": "Важно правильно сделать это (жаловаться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to complain in daily life.",
      "ru": "Каждый старается (жаловаться) в повседневной жизни."
    },
    "quizOptions": [
      "совершать, посвящать",
      "сила, заставлять",
      "жаловаться"
    ]
  },
  {
    "id": 16,
    "tier": 1,
    "deck": 1,
    "word": "concern",
    "ipa": "",
    "translation": "беспокойство, касаться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to concern this properly.",
      "ru": "Важно правильно сделать это (беспокойство, касаться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to concern in daily life.",
      "ru": "Каждый старается (беспокойство, касаться) в повседневной жизни."
    },
    "quizOptions": [
      "беспокойство, касаться",
      "появляться, всплывать",
      "устанавливать, основывать"
    ]
  },
  {
    "id": 17,
    "tier": 1,
    "deck": 1,
    "word": "confirm",
    "ipa": "",
    "translation": "подтверждать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to confirm this properly.",
      "ru": "Важно правильно сделать это (подтверждать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to confirm in daily life.",
      "ru": "Каждый старается (подтверждать) в повседневной жизни."
    },
    "quizOptions": [
      "разобраться, понять",
      "подтверждать",
      "весь, целый"
    ]
  },
  {
    "id": 18,
    "tier": 1,
    "deck": 1,
    "word": "consequence",
    "ipa": "",
    "translation": "последствие",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to consequence this properly.",
      "ru": "Важно правильно сделать это (последствие)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to consequence in daily life.",
      "ru": "Каждый старается (последствие) в повседневной жизни."
    },
    "quizOptions": [
      "неизбежный",
      "заслуживать",
      "последствие"
    ]
  },
  {
    "id": 19,
    "tier": 1,
    "deck": 1,
    "word": "consider",
    "ipa": "",
    "translation": "рассматривать, считать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to consider this properly.",
      "ru": "Важно правильно сделать это (рассматривать, считать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to consider in daily life.",
      "ru": "Каждый старается (рассматривать, считать) в повседневной жизни."
    },
    "quizOptions": [
      "за пределами",
      "рассматривать, считать",
      "нетерпеливый, стремящийся"
    ]
  },
  {
    "id": 20,
    "tier": 1,
    "deck": 1,
    "word": "consist",
    "ipa": "",
    "translation": "состоять из",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to consist this properly.",
      "ru": "Важно правильно сделать это (состоять из)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to consist in daily life.",
      "ru": "Каждый старается (состоять из) в повседневной жизни."
    },
    "quizOptions": [
      "окружение, среда",
      "полагать, считать",
      "состоять из"
    ]
  },
  {
    "id": 21,
    "tier": 1,
    "deck": 1,
    "word": "constant",
    "ipa": "",
    "translation": "постоянный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to constant this properly.",
      "ru": "Важно правильно сделать это (постоянный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to constant in daily life.",
      "ru": "Каждый старается (постоянный) в повседневной жизни."
    },
    "quizOptions": [
      "оценивать",
      "осведомлённый",
      "постоянный"
    ]
  },
  {
    "id": 22,
    "tier": 1,
    "deck": 1,
    "word": "consume",
    "ipa": "",
    "translation": "потреблять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to consume this properly.",
      "ru": "Важно правильно сделать это (потреблять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to consume in daily life.",
      "ru": "Каждый старается (потреблять) в повседневной жизни."
    },
    "quizOptions": [
      "расширять",
      "осматривать, изучать",
      "потреблять"
    ]
  },
  {
    "id": 23,
    "tier": 1,
    "deck": 1,
    "word": "convince",
    "ipa": "",
    "translation": "убеждать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to convince this properly.",
      "ru": "Важно правильно сделать это (убеждать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to convince in daily life.",
      "ru": "Каждый старается (убеждать) в повседневной жизни."
    },
    "quizOptions": [
      "указывать",
      "обнаруживать",
      "убеждать"
    ]
  },
  {
    "id": 24,
    "tier": 1,
    "deck": 1,
    "word": "cope",
    "ipa": "",
    "translation": "справляться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to cope this properly.",
      "ru": "Важно правильно сделать это (справляться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to cope in daily life.",
      "ru": "Каждый старается (справляться) в повседневной жизни."
    },
    "quizOptions": [
      "справляться",
      "знакомый",
      "подчёркивать"
    ]
  },
  {
    "id": 25,
    "tier": 1,
    "deck": 1,
    "word": "crucial",
    "ipa": "",
    "translation": "ключевой, решающий",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to crucial this properly.",
      "ru": "Важно правильно сделать это (ключевой, решающий)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to crucial in daily life.",
      "ru": "Каждый старается (ключевой, решающий) в повседневной жизни."
    },
    "quizOptions": [
      "ключевой, решающий",
      "чушь, ерунда, мусор",
      "осведомлённый"
    ]
  },
  {
    "id": 26,
    "tier": 1,
    "deck": 1,
    "word": "curious",
    "ipa": "",
    "translation": "любопытный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to curious this properly.",
      "ru": "Важно правильно сделать это (любопытный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to curious in daily life.",
      "ru": "Каждый старается (любопытный) в повседневной жизни."
    },
    "quizOptions": [
      "избегать",
      "продлевать, расширять",
      "любопытный"
    ]
  },
  {
    "id": 27,
    "tier": 1,
    "deck": 1,
    "word": "decade",
    "ipa": "",
    "translation": "десятилетие",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to decade this properly.",
      "ru": "Важно правильно сделать это (десятилетие)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to decade in daily life.",
      "ru": "Каждый старается (десятилетие) в повседневной жизни."
    },
    "quizOptions": [
      "десятилетие",
      "особенность, черта",
      "благодарный"
    ]
  },
  {
    "id": 28,
    "tier": 1,
    "deck": 1,
    "word": "decent",
    "ipa": "",
    "translation": "приличный, достойный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to decent this properly.",
      "ru": "Важно правильно сделать это (приличный, достойный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to decent in daily life.",
      "ru": "Каждый старается (приличный, достойный) в повседневной жизни."
    },
    "quizOptions": [
      "разочаровывать",
      "приличный, достойный",
      "гибкий"
    ]
  },
  {
    "id": 29,
    "tier": 1,
    "deck": 1,
    "word": "decline",
    "ipa": "",
    "translation": "снижаться, отклонять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to decline this properly.",
      "ru": "Важно правильно сделать это (снижаться, отклонять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to decline in daily life.",
      "ru": "Каждый старается (снижаться, отклонять) в повседневной жизни."
    },
    "quizOptions": [
      "снижаться, отклонять",
      "потреблять",
      "полагать, считать"
    ]
  },
  {
    "id": 30,
    "tier": 1,
    "deck": 1,
    "word": "define",
    "ipa": "",
    "translation": "определять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to define this properly.",
      "ru": "Важно правильно сделать это (определять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to define in daily life.",
      "ru": "Каждый старается (определять) в повседневной жизни."
    },
    "quizOptions": [
      "нетерпеливый, стремящийся",
      "определять",
      "жаловаться"
    ]
  },
  {
    "id": 31,
    "tier": 1,
    "deck": 1,
    "word": "delay",
    "ipa": "",
    "translation": "задержка, откладывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to delay this properly.",
      "ru": "Важно правильно сделать это (задержка, откладывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to delay in daily life.",
      "ru": "Каждый старается (задержка, откладывать) в повседневной жизни."
    },
    "quizOptions": [
      "задержка, откладывать",
      "опознавать, определять",
      "сомнение, сомневаться"
    ]
  },
  {
    "id": 32,
    "tier": 1,
    "deck": 1,
    "word": "deliver",
    "ipa": "",
    "translation": "доставлять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to deliver this properly.",
      "ru": "Важно правильно сделать это (доставлять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to deliver in daily life.",
      "ru": "Каждый старается (доставлять) в повседневной жизни."
    },
    "quizOptions": [
      "способный",
      "доставлять",
      "продлевать, расширять"
    ]
  },
  {
    "id": 33,
    "tier": 1,
    "deck": 1,
    "word": "demand",
    "ipa": "",
    "translation": "требовать, спрос",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to demand this properly.",
      "ru": "Важно правильно сделать это (требовать, спрос)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to demand in daily life.",
      "ru": "Каждый старается (требовать, спрос) в повседневной жизни."
    },
    "quizOptions": [
      "расход, трата",
      "требовать, спрос",
      "сомнение, сомневаться"
    ]
  },
  {
    "id": 34,
    "tier": 1,
    "deck": 1,
    "word": "deny",
    "ipa": "",
    "translation": "отрицать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to deny this properly.",
      "ru": "Важно правильно сделать это (отрицать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to deny in daily life.",
      "ru": "Каждый старается (отрицать) в повседневной жизни."
    },
    "quizOptions": [
      "отрицать",
      "разобраться, понять",
      "весь, целый"
    ]
  },
  {
    "id": 35,
    "tier": 1,
    "deck": 1,
    "word": "depend",
    "ipa": "",
    "translation": "зависеть",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to depend this properly.",
      "ru": "Важно правильно сделать это (зависеть)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to depend in daily life.",
      "ru": "Каждый старается (зависеть) в повседневной жизни."
    },
    "quizOptions": [
      "зависеть",
      "отчётливый, особый",
      "убеждать"
    ]
  },
  {
    "id": 36,
    "tier": 1,
    "deck": 1,
    "word": "deserve",
    "ipa": "",
    "translation": "заслуживать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to deserve this properly.",
      "ru": "Важно правильно сделать это (заслуживать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to deserve in daily life.",
      "ru": "Каждый старается (заслуживать) в повседневной жизни."
    },
    "quizOptions": [
      "за пределами",
      "задержка, откладывать",
      "заслуживать"
    ]
  },
  {
    "id": 37,
    "tier": 1,
    "deck": 1,
    "word": "despite",
    "ipa": "",
    "translation": "несмотря на",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to despite this properly.",
      "ru": "Важно правильно сделать это (несмотря на)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to despite in daily life.",
      "ru": "Каждый старается (несмотря на) в повседневной жизни."
    },
    "quizOptions": [
      "нетерпеливый, стремящийся",
      "несмотря на",
      "вина, неисправность"
    ]
  },
  {
    "id": 38,
    "tier": 1,
    "deck": 1,
    "word": "determine",
    "ipa": "",
    "translation": "определять, решать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to determine this properly.",
      "ru": "Важно правильно сделать это (определять, решать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to determine in daily life.",
      "ru": "Каждый старается (определять, решать) в повседневной жизни."
    },
    "quizOptions": [
      "определять, решать",
      "эффективный",
      "постоянный"
    ]
  },
  {
    "id": 39,
    "tier": 1,
    "deck": 1,
    "word": "device",
    "ipa": "",
    "translation": "устройство",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to device this properly.",
      "ru": "Важно правильно сделать это (устройство)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to device in daily life.",
      "ru": "Каждый старается (устройство) в повседневной жизни."
    },
    "quizOptions": [
      "определять, решать",
      "в самую точку",
      "устройство"
    ]
  },
  {
    "id": 40,
    "tier": 1,
    "deck": 1,
    "word": "disappoint",
    "ipa": "",
    "translation": "разочаровывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to disappoint this properly.",
      "ru": "Важно правильно сделать это (разочаровывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to disappoint in daily life.",
      "ru": "Каждый старается (разочаровывать) в повседневной жизни."
    },
    "quizOptions": [
      "окружение, среда",
      "разочаровывать",
      "любопытный"
    ]
  },
  {
    "id": 41,
    "tier": 1,
    "deck": 1,
    "word": "discover",
    "ipa": "",
    "translation": "обнаруживать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to discover this properly.",
      "ru": "Важно правильно сделать это (обнаруживать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to discover in daily life.",
      "ru": "Каждый старается (обнаруживать) в повседневной жизни."
    },
    "quizOptions": [
      "осведомлённый",
      "полагать, считать",
      "обнаруживать"
    ]
  },
  {
    "id": 42,
    "tier": 1,
    "deck": 1,
    "word": "distinct",
    "ipa": "",
    "translation": "отчётливый, особый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to distinct this properly.",
      "ru": "Важно правильно сделать это (отчётливый, особый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to distinct in daily life.",
      "ru": "Каждый старается (отчётливый, особый) в повседневной жизни."
    },
    "quizOptions": [
      "отчётливый, особый",
      "расстраивать, злить",
      "любопытный"
    ]
  },
  {
    "id": 43,
    "tier": 1,
    "deck": 1,
    "word": "disturb",
    "ipa": "",
    "translation": "беспокоить",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to disturb this properly.",
      "ru": "Важно правильно сделать это (беспокоить)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to disturb in daily life.",
      "ru": "Каждый старается (беспокоить) в повседневной жизни."
    },
    "quizOptions": [
      "несмотря на",
      "беспокоить",
      "подразумевать"
    ]
  },
  {
    "id": 44,
    "tier": 1,
    "deck": 1,
    "word": "doubt",
    "ipa": "",
    "translation": "сомнение, сомневаться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to doubt this properly.",
      "ru": "Важно правильно сделать это (сомнение, сомневаться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to doubt in daily life.",
      "ru": "Каждый старается (сомнение, сомневаться) в повседневной жизни."
    },
    "quizOptions": [
      "сомнение, сомневаться",
      "решено, улажено, готово",
      "необходимый, важный"
    ]
  },
  {
    "id": 45,
    "tier": 1,
    "deck": 1,
    "word": "eager",
    "ipa": "",
    "translation": "нетерпеливый, стремящийся",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to eager this properly.",
      "ru": "Важно правильно сделать это (нетерпеливый, стремящийся)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to eager in daily life.",
      "ru": "Каждый старается (нетерпеливый, стремящийся) в повседневной жизни."
    },
    "quizOptions": [
      "улучшать",
      "нетерпеливый, стремящийся",
      "избегать"
    ]
  },
  {
    "id": 46,
    "tier": 1,
    "deck": 1,
    "word": "efficient",
    "ipa": "",
    "translation": "эффективный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to efficient this properly.",
      "ru": "Важно правильно сделать это (эффективный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to efficient in daily life.",
      "ru": "Каждый старается (эффективный) в повседневной жизни."
    },
    "quizOptions": [
      "эффективный",
      "увеличивать",
      "выгода, польза"
    ]
  },
  {
    "id": 47,
    "tier": 1,
    "deck": 1,
    "word": "emerge",
    "ipa": "",
    "translation": "появляться, всплывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to emerge this properly.",
      "ru": "Важно правильно сделать это (появляться, всплывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to emerge in daily life.",
      "ru": "Каждый старается (появляться, всплывать) в повседневной жизни."
    },
    "quizOptions": [
      "мутный, сомнительный",
      "подлинный, искренний",
      "появляться, всплывать"
    ]
  },
  {
    "id": 48,
    "tier": 1,
    "deck": 1,
    "word": "emphasize",
    "ipa": "",
    "translation": "подчёркивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to emphasize this properly.",
      "ru": "Важно правильно сделать это (подчёркивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to emphasize in daily life.",
      "ru": "Каждый старается (подчёркивать) в повседневной жизни."
    },
    "quizOptions": [
      "подчёркивать",
      "определять, решать",
      "сила, заставлять"
    ]
  },
  {
    "id": 49,
    "tier": 1,
    "deck": 1,
    "word": "enable",
    "ipa": "",
    "translation": "давать возможность",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to enable this properly.",
      "ru": "Важно правильно сделать это (давать возможность)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to enable in daily life.",
      "ru": "Каждый старается (давать возможность) в повседневной жизни."
    },
    "quizOptions": [
      "необходимый, важный",
      "давать возможность",
      "рассматривать, считать"
    ]
  },
  {
    "id": 50,
    "tier": 1,
    "deck": 1,
    "word": "encourage",
    "ipa": "",
    "translation": "поощрять, ободрять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to encourage this properly.",
      "ru": "Важно правильно сделать это (поощрять, ободрять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to encourage in daily life.",
      "ru": "Каждый старается (поощрять, ободрять) в повседневной жизни."
    },
    "quizOptions": [
      "осведомлённый",
      "поощрять, ободрять",
      "сомнение, сомневаться"
    ]
  },
  {
    "id": 51,
    "tier": 1,
    "deck": 1,
    "word": "ensure",
    "ipa": "",
    "translation": "обеспечивать, гарантировать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to ensure this properly.",
      "ru": "Важно правильно сделать это (обеспечивать, гарантировать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to ensure in daily life.",
      "ru": "Каждый старается (обеспечивать, гарантировать) в повседневной жизни."
    },
    "quizOptions": [
      "совершать, посвящать",
      "избегать",
      "обеспечивать, гарантировать"
    ]
  },
  {
    "id": 52,
    "tier": 1,
    "deck": 1,
    "word": "entire",
    "ipa": "",
    "translation": "весь, целый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to entire this properly.",
      "ru": "Важно правильно сделать это (весь, целый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to entire in daily life.",
      "ru": "Каждый старается (весь, целый) в повседневной жизни."
    },
    "quizOptions": [
      "беспокойство, касаться",
      "доставлять",
      "весь, целый"
    ]
  },
  {
    "id": 53,
    "tier": 1,
    "deck": 1,
    "word": "environment",
    "ipa": "",
    "translation": "окружение, среда",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to environment this properly.",
      "ru": "Важно правильно сделать это (окружение, среда)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to environment in daily life.",
      "ru": "Каждый старается (окружение, среда) в повседневной жизни."
    },
    "quizOptions": [
      "ужасно расстроенный",
      "окружение, среда",
      "справляться, ручка"
    ]
  },
  {
    "id": 54,
    "tier": 1,
    "deck": 1,
    "word": "essential",
    "ipa": "",
    "translation": "необходимый, важный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to essential this properly.",
      "ru": "Важно правильно сделать это (необходимый, важный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to essential in daily life.",
      "ru": "Каждый старается (необходимый, важный) в повседневной жизни."
    },
    "quizOptions": [
      "необходимый, важный",
      "частый",
      "сравнивать"
    ]
  },
  {
    "id": 55,
    "tier": 1,
    "deck": 1,
    "word": "establish",
    "ipa": "",
    "translation": "устанавливать, основывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to establish this properly.",
      "ru": "Важно правильно сделать это (устанавливать, основывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to establish in daily life.",
      "ru": "Каждый старается (устанавливать, основывать) в повседневной жизни."
    },
    "quizOptions": [
      "устанавливать, основывать",
      "ужасно расстроенный",
      "осматривать, изучать"
    ]
  },
  {
    "id": 56,
    "tier": 1,
    "deck": 1,
    "word": "estimate",
    "ipa": "",
    "translation": "оценивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to estimate this properly.",
      "ru": "Важно правильно сделать это (оценивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to estimate in daily life.",
      "ru": "Каждый старается (оценивать) в повседневной жизни."
    },
    "quizOptions": [
      "оценивать",
      "ожидать",
      "поощрять, ободрять"
    ]
  },
  {
    "id": 57,
    "tier": 1,
    "deck": 1,
    "word": "eventually",
    "ipa": "",
    "translation": "в конце концов",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to eventually this properly.",
      "ru": "Важно правильно сделать это (в конце концов)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to eventually in daily life.",
      "ru": "Каждый старается (в конце концов) в повседневной жизни."
    },
    "quizOptions": [
      "увеличивать",
      "в конце концов",
      "весь, целый"
    ]
  },
  {
    "id": 58,
    "tier": 1,
    "deck": 1,
    "word": "evidence",
    "ipa": "",
    "translation": "доказательство, улика",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to evidence this properly.",
      "ru": "Важно правильно сделать это (доказательство, улика)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to evidence in daily life.",
      "ru": "Каждый старается (доказательство, улика) в повседневной жизни."
    },
    "quizOptions": [
      "доказательство, улика",
      "огромный",
      "беспокойство, касаться"
    ]
  },
  {
    "id": 59,
    "tier": 1,
    "deck": 1,
    "word": "examine",
    "ipa": "",
    "translation": "осматривать, изучать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to examine this properly.",
      "ru": "Важно правильно сделать это (осматривать, изучать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to examine in daily life.",
      "ru": "Каждый старается (осматривать, изучать) в повседневной жизни."
    },
    "quizOptions": [
      "превышать",
      "снижаться, отклонять",
      "осматривать, изучать"
    ]
  },
  {
    "id": 60,
    "tier": 1,
    "deck": 1,
    "word": "exceed",
    "ipa": "",
    "translation": "превышать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to exceed this properly.",
      "ru": "Важно правильно сделать это (превышать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to exceed in daily life.",
      "ru": "Каждый старается (превышать) в повседневной жизни."
    },
    "quizOptions": [
      "превышать",
      "постепенный",
      "ужасно расстроенный"
    ]
  },
  {
    "id": 61,
    "tier": 1,
    "deck": 1,
    "word": "exclude",
    "ipa": "",
    "translation": "исключать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to exclude this properly.",
      "ru": "Важно правильно сделать это (исключать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to exclude in daily life.",
      "ru": "Каждый старается (исключать) в повседневной жизни."
    },
    "quizOptions": [
      "подлинный, искренний",
      "исключать",
      "решено, улажено, готово"
    ]
  },
  {
    "id": 62,
    "tier": 1,
    "deck": 1,
    "word": "expand",
    "ipa": "",
    "translation": "расширять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to expand this properly.",
      "ru": "Важно правильно сделать это (расширять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to expand in daily life.",
      "ru": "Каждый старается (расширять) в повседневной жизни."
    },
    "quizOptions": [
      "расширять",
      "предполагать",
      "в конце концов"
    ]
  },
  {
    "id": 63,
    "tier": 1,
    "deck": 1,
    "word": "expect",
    "ipa": "",
    "translation": "ожидать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to expect this properly.",
      "ru": "Важно правильно сделать это (ожидать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to expect in daily life.",
      "ru": "Каждый старается (ожидать) в повседневной жизни."
    },
    "quizOptions": [
      "исключать",
      "ожидать",
      "разобраться, понять"
    ]
  },
  {
    "id": 64,
    "tier": 1,
    "deck": 1,
    "word": "expense",
    "ipa": "",
    "translation": "расход, трата",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to expense this properly.",
      "ru": "Важно правильно сделать это (расход, трата)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to expense in daily life.",
      "ru": "Каждый старается (расход, трата) в повседневной жизни."
    },
    "quizOptions": [
      "расход, трата",
      "полагать, считать",
      "превышать"
    ]
  },
  {
    "id": 65,
    "tier": 1,
    "deck": 1,
    "word": "experience",
    "ipa": "",
    "translation": "опыт, испытывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to experience this properly.",
      "ru": "Важно правильно сделать это (опыт, испытывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to experience in daily life.",
      "ru": "Каждый старается (опыт, испытывать) в повседневной жизни."
    },
    "quizOptions": [
      "хотеть, испытывать симпатию",
      "полагать, считать",
      "опыт, испытывать"
    ]
  },
  {
    "id": 66,
    "tier": 1,
    "deck": 1,
    "word": "explore",
    "ipa": "",
    "translation": "исследовать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to explore this properly.",
      "ru": "Важно правильно сделать это (исследовать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to explore in daily life.",
      "ru": "Каждый старается (исследовать) в повседневной жизни."
    },
    "quizOptions": [
      "решено, улажено, готово",
      "исследовать",
      "состоять из"
    ]
  },
  {
    "id": 67,
    "tier": 1,
    "deck": 1,
    "word": "expose",
    "ipa": "",
    "translation": "разоблачать, подвергать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to expose this properly.",
      "ru": "Важно правильно сделать это (разоблачать, подвергать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to expose in daily life.",
      "ru": "Каждый старается (разоблачать, подвергать) в повседневной жизни."
    },
    "quizOptions": [
      "потреблять",
      "последствие",
      "разоблачать, подвергать"
    ]
  },
  {
    "id": 68,
    "tier": 1,
    "deck": 1,
    "word": "extend",
    "ipa": "",
    "translation": "продлевать, расширять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to extend this properly.",
      "ru": "Важно правильно сделать это (продлевать, расширять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to extend in daily life.",
      "ru": "Каждый старается (продлевать, расширять) в повседневной жизни."
    },
    "quizOptions": [
      "продлевать, расширять",
      "нетерпеливый, стремящийся",
      "выделять, главный момент"
    ]
  },
  {
    "id": 69,
    "tier": 1,
    "deck": 1,
    "word": "extraordinary",
    "ipa": "",
    "translation": "необычайный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to extraordinary this properly.",
      "ru": "Важно правильно сделать это (необычайный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to extraordinary in daily life.",
      "ru": "Каждый старается (необычайный) в повседневной жизни."
    },
    "quizOptions": [
      "достигать",
      "необычайный",
      "приличный, достойный"
    ]
  },
  {
    "id": 70,
    "tier": 1,
    "deck": 1,
    "word": "familiar",
    "ipa": "",
    "translation": "знакомый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to familiar this properly.",
      "ru": "Важно правильно сделать это (знакомый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to familiar in daily life.",
      "ru": "Каждый старается (знакомый) в повседневной жизни."
    },
    "quizOptions": [
      "выгода, польза",
      "знакомый",
      "разочаровывать"
    ]
  },
  {
    "id": 71,
    "tier": 1,
    "deck": 1,
    "word": "fault",
    "ipa": "",
    "translation": "вина, неисправность",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to fault this properly.",
      "ru": "Важно правильно сделать это (вина, неисправность)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to fault in daily life.",
      "ru": "Каждый старается (вина, неисправность) в повседневной жизни."
    },
    "quizOptions": [
      "эффективный",
      "вина, неисправность",
      "сравнивать"
    ]
  },
  {
    "id": 72,
    "tier": 1,
    "deck": 1,
    "word": "feature",
    "ipa": "",
    "translation": "особенность, черта",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to feature this properly.",
      "ru": "Важно правильно сделать это (особенность, черта)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to feature in daily life.",
      "ru": "Каждый старается (особенность, черта) в повседневной жизни."
    },
    "quizOptions": [
      "особенность, черта",
      "сила, заставлять",
      "осматривать, изучать"
    ]
  },
  {
    "id": 73,
    "tier": 1,
    "deck": 1,
    "word": "flexible",
    "ipa": "",
    "translation": "гибкий",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to flexible this properly.",
      "ru": "Важно правильно сделать это (гибкий)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to flexible in daily life.",
      "ru": "Каждый старается (гибкий) в повседневной жизни."
    },
    "quizOptions": [
      "опыт, испытывать",
      "гибкий",
      "особенность, черта"
    ]
  },
  {
    "id": 74,
    "tier": 1,
    "deck": 1,
    "word": "focus",
    "ipa": "",
    "translation": "фокусироваться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to focus this properly.",
      "ru": "Важно правильно сделать это (фокусироваться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to focus in daily life.",
      "ru": "Каждый старается (фокусироваться) в повседневной жизни."
    },
    "quizOptions": [
      "обеспечивать, гарантировать",
      "фокусироваться",
      "появляться, всплывать"
    ]
  },
  {
    "id": 75,
    "tier": 1,
    "deck": 1,
    "word": "forbid",
    "ipa": "",
    "translation": "запрещать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to forbid this properly.",
      "ru": "Важно правильно сделать это (запрещать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to forbid in daily life.",
      "ru": "Каждый старается (запрещать) в повседневной жизни."
    },
    "quizOptions": [
      "весь, целый",
      "решено, улажено, готово",
      "запрещать"
    ]
  },
  {
    "id": 76,
    "tier": 1,
    "deck": 1,
    "word": "force",
    "ipa": "",
    "translation": "сила, заставлять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to force this properly.",
      "ru": "Важно правильно сделать это (сила, заставлять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to force in daily life.",
      "ru": "Каждый старается (сила, заставлять) в повседневной жизни."
    },
    "quizOptions": [
      "подлинный, искренний",
      "способный",
      "сила, заставлять"
    ]
  },
  {
    "id": 77,
    "tier": 1,
    "deck": 1,
    "word": "frequent",
    "ipa": "",
    "translation": "частый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to frequent this properly.",
      "ru": "Важно правильно сделать это (частый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to frequent in daily life.",
      "ru": "Каждый старается (частый) в повседневной жизни."
    },
    "quizOptions": [
      "особенность, черта",
      "частый",
      "настаивать"
    ]
  },
  {
    "id": 78,
    "tier": 1,
    "deck": 1,
    "word": "frustrate",
    "ipa": "",
    "translation": "расстраивать, злить",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to frustrate this properly.",
      "ru": "Важно правильно сделать это (расстраивать, злить)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to frustrate in daily life.",
      "ru": "Каждый старается (расстраивать, злить) в повседневной жизни."
    },
    "quizOptions": [
      "беглый взгляд",
      "расстраивать, злить",
      "исключать"
    ]
  },
  {
    "id": 79,
    "tier": 1,
    "deck": 1,
    "word": "gain",
    "ipa": "",
    "translation": "получать, прирост",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to gain this properly.",
      "ru": "Важно правильно сделать это (получать, прирост)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to gain in daily life.",
      "ru": "Каждый старается (получать, прирост) в повседневной жизни."
    },
    "quizOptions": [
      "получать, прирост",
      "справляться, ручка",
      "давать возможность"
    ]
  },
  {
    "id": 80,
    "tier": 1,
    "deck": 1,
    "word": "genuine",
    "ipa": "",
    "translation": "подлинный, искренний",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to genuine this properly.",
      "ru": "Важно правильно сделать это (подлинный, искренний)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to genuine in daily life.",
      "ru": "Каждый старается (подлинный, искренний) в повседневной жизни."
    },
    "quizOptions": [
      "весь, целый",
      "подлинный, искренний",
      "нетерпеливый, стремящийся"
    ]
  },
  {
    "id": 81,
    "tier": 1,
    "deck": 1,
    "word": "glance",
    "ipa": "",
    "translation": "беглый взгляд",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to glance this properly.",
      "ru": "Важно правильно сделать это (беглый взгляд)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to glance in daily life.",
      "ru": "Каждый старается (беглый взгляд) в повседневной жизни."
    },
    "quizOptions": [
      "осматривать, изучать",
      "беглый взгляд",
      "указывать"
    ]
  },
  {
    "id": 82,
    "tier": 1,
    "deck": 1,
    "word": "gradual",
    "ipa": "",
    "translation": "постепенный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to gradual this properly.",
      "ru": "Важно правильно сделать это (постепенный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to gradual in daily life.",
      "ru": "Каждый старается (постепенный) в повседневной жизни."
    },
    "quizOptions": [
      "постепенный",
      "сравнивать",
      "появляться, всплывать"
    ]
  },
  {
    "id": 83,
    "tier": 1,
    "deck": 1,
    "word": "grateful",
    "ipa": "",
    "translation": "благодарный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to grateful this properly.",
      "ru": "Важно правильно сделать это (благодарный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to grateful in daily life.",
      "ru": "Каждый старается (благодарный) в повседневной жизни."
    },
    "quizOptions": [
      "благодарный",
      "обстоятельство",
      "мутный, сомнительный"
    ]
  },
  {
    "id": 84,
    "tier": 1,
    "deck": 1,
    "word": "handle",
    "ipa": "",
    "translation": "справляться, ручка",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to handle this properly.",
      "ru": "Важно правильно сделать это (справляться, ручка)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to handle in daily life.",
      "ru": "Каждый старается (справляться, ручка) в повседневной жизни."
    },
    "quizOptions": [
      "избегать",
      "справляться, ручка",
      "исключать"
    ]
  },
  {
    "id": 85,
    "tier": 1,
    "deck": 1,
    "word": "hesitate",
    "ipa": "",
    "translation": "колебаться, медлить",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to hesitate this properly.",
      "ru": "Важно правильно сделать это (колебаться, медлить)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to hesitate in daily life.",
      "ru": "Каждый старается (колебаться, медлить) в повседневной жизни."
    },
    "quizOptions": [
      "справляться, ручка",
      "колебаться, медлить",
      "огромный"
    ]
  },
  {
    "id": 86,
    "tier": 1,
    "deck": 1,
    "word": "highlight",
    "ipa": "",
    "translation": "выделять, главный момент",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to highlight this properly.",
      "ru": "Важно правильно сделать это (выделять, главный момент)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to highlight in daily life.",
      "ru": "Каждый старается (выделять, главный момент) в повседневной жизни."
    },
    "quizOptions": [
      "ужасно расстроенный",
      "выделять, главный момент",
      "оценивать"
    ]
  },
  {
    "id": 87,
    "tier": 1,
    "deck": 1,
    "word": "huge",
    "ipa": "",
    "translation": "огромный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to huge this properly.",
      "ru": "Важно правильно сделать это (огромный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to huge in daily life.",
      "ru": "Каждый старается (огромный) в повседневной жизни."
    },
    "quizOptions": [
      "ужасно расстроенный",
      "отрицать",
      "огромный"
    ]
  },
  {
    "id": 88,
    "tier": 1,
    "deck": 1,
    "word": "identify",
    "ipa": "",
    "translation": "опознавать, определять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to identify this properly.",
      "ru": "Важно правильно сделать это (опознавать, определять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to identify in daily life.",
      "ru": "Каждый старается (опознавать, определять) в повседневной жизни."
    },
    "quizOptions": [
      "опознавать, определять",
      "колебаться, медлить",
      "появляться, всплывать"
    ]
  },
  {
    "id": 89,
    "tier": 1,
    "deck": 1,
    "word": "ignore",
    "ipa": "",
    "translation": "игнорировать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to ignore this properly.",
      "ru": "Важно правильно сделать это (игнорировать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to ignore in daily life.",
      "ru": "Каждый старается (игнорировать) в повседневной жизни."
    },
    "quizOptions": [
      "игнорировать",
      "особенность, черта",
      "вдохновлять"
    ]
  },
  {
    "id": 90,
    "tier": 1,
    "deck": 1,
    "word": "impact",
    "ipa": "",
    "translation": "влияние, удар",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to impact this properly.",
      "ru": "Важно правильно сделать это (влияние, удар)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to impact in daily life.",
      "ru": "Каждый старается (влияние, удар) в повседневной жизни."
    },
    "quizOptions": [
      "выгода, польза",
      "включать в себя",
      "влияние, удар"
    ]
  },
  {
    "id": 91,
    "tier": 1,
    "deck": 1,
    "word": "imply",
    "ipa": "",
    "translation": "подразумевать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to imply this properly.",
      "ru": "Важно правильно сделать это (подразумевать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to imply in daily life.",
      "ru": "Каждый старается (подразумевать) в повседневной жизни."
    },
    "quizOptions": [
      "влияние, удар",
      "подразумевать",
      "знакомый"
    ]
  },
  {
    "id": 92,
    "tier": 1,
    "deck": 1,
    "word": "improve",
    "ipa": "",
    "translation": "улучшать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to improve this properly.",
      "ru": "Важно правильно сделать это (улучшать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to improve in daily life.",
      "ru": "Каждый старается (улучшать) в повседневной жизни."
    },
    "quizOptions": [
      "улучшать",
      "фокусироваться",
      "включать в себя"
    ]
  },
  {
    "id": 93,
    "tier": 1,
    "deck": 1,
    "word": "include",
    "ipa": "",
    "translation": "включать в себя",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to include this properly.",
      "ru": "Важно правильно сделать это (включать в себя)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to include in daily life.",
      "ru": "Каждый старается (включать в себя) в повседневной жизни."
    },
    "quizOptions": [
      "включать в себя",
      "начальный",
      "ужасно расстроенный"
    ]
  },
  {
    "id": 94,
    "tier": 1,
    "deck": 1,
    "word": "increase",
    "ipa": "",
    "translation": "увеличивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to increase this properly.",
      "ru": "Важно правильно сделать это (увеличивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to increase in daily life.",
      "ru": "Каждый старается (увеличивать) в повседневной жизни."
    },
    "quizOptions": [
      "разоблачать, подвергать",
      "убеждать",
      "увеличивать"
    ]
  },
  {
    "id": 95,
    "tier": 1,
    "deck": 1,
    "word": "indicate",
    "ipa": "",
    "translation": "указывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to indicate this properly.",
      "ru": "Важно правильно сделать это (указывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to indicate in daily life.",
      "ru": "Каждый старается (указывать) в повседневной жизни."
    },
    "quizOptions": [
      "указывать",
      "вина, неисправность",
      "в конце концов"
    ]
  },
  {
    "id": 96,
    "tier": 1,
    "deck": 1,
    "word": "inevitable",
    "ipa": "",
    "translation": "неизбежный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to inevitable this properly.",
      "ru": "Важно правильно сделать это (неизбежный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to inevitable in daily life.",
      "ru": "Каждый старается (неизбежный) в повседневной жизни."
    },
    "quizOptions": [
      "эффективный",
      "неизбежный",
      "весь, целый"
    ]
  },
  {
    "id": 97,
    "tier": 1,
    "deck": 1,
    "word": "influence",
    "ipa": "",
    "translation": "влияние, влиять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to influence this properly.",
      "ru": "Важно правильно сделать это (влияние, влиять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to influence in daily life.",
      "ru": "Каждый старается (влияние, влиять) в повседневной жизни."
    },
    "quizOptions": [
      "давать возможность",
      "влияние, влиять",
      "сила, заставлять"
    ]
  },
  {
    "id": 98,
    "tier": 1,
    "deck": 1,
    "word": "initial",
    "ipa": "",
    "translation": "начальный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to initial this properly.",
      "ru": "Важно правильно сделать это (начальный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to initial in daily life.",
      "ru": "Каждый старается (начальный) в повседневной жизни."
    },
    "quizOptions": [
      "начальный",
      "избегать",
      "оценивать"
    ]
  },
  {
    "id": 99,
    "tier": 1,
    "deck": 1,
    "word": "insist",
    "ipa": "",
    "translation": "настаивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to insist this properly.",
      "ru": "Важно правильно сделать это (настаивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to insist in daily life.",
      "ru": "Каждый старается (настаивать) в повседневной жизни."
    },
    "quizOptions": [
      "эффективный",
      "разобраться, понять",
      "настаивать"
    ]
  },
  {
    "id": 100,
    "tier": 1,
    "deck": 1,
    "word": "inspire",
    "ipa": "",
    "translation": "вдохновлять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to inspire this properly.",
      "ru": "Важно правильно сделать это (вдохновлять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to inspire in daily life.",
      "ru": "Каждый старается (вдохновлять) в повседневной жизни."
    },
    "quizOptions": [
      "постоянный",
      "вдохновлять",
      "беспокойство, касаться"
    ]
  },
  {
    "id": 101,
    "tier": 1,
    "deck": 2,
    "word": "achieve",
    "ipa": "",
    "translation": "достигать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to achieve this properly.",
      "ru": "Важно правильно сделать это (достигать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to achieve in daily life.",
      "ru": "Каждый старается (достигать) в повседневной жизни."
    },
    "quizOptions": [
      "за пределами",
      "достигать",
      "необходимый, важный"
    ]
  },
  {
    "id": 102,
    "tier": 1,
    "deck": 2,
    "word": "approach",
    "ipa": "",
    "translation": "подход, приближаться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to approach this properly.",
      "ru": "Важно правильно сделать это (подход, приближаться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to approach in daily life.",
      "ru": "Каждый старается (подход, приближаться) в повседневной жизни."
    },
    "quizOptions": [
      "подход, приближаться",
      "беспокоить",
      "вина, неисправность"
    ]
  },
  {
    "id": 103,
    "tier": 1,
    "deck": 2,
    "word": "assume",
    "ipa": "",
    "translation": "предполагать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to assume this properly.",
      "ru": "Важно правильно сделать это (предполагать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to assume in daily life.",
      "ru": "Каждый старается (предполагать) в повседневной жизни."
    },
    "quizOptions": [
      "доказательство, улика",
      "предполагать",
      "запрещать"
    ]
  },
  {
    "id": 104,
    "tier": 1,
    "deck": 2,
    "word": "avoid",
    "ipa": "",
    "translation": "избегать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to avoid this properly.",
      "ru": "Важно правильно сделать это (избегать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to avoid in daily life.",
      "ru": "Каждый старается (избегать) в повседневной жизни."
    },
    "quizOptions": [
      "продлевать, расширять",
      "избегать",
      "решено, улажено, готово"
    ]
  },
  {
    "id": 105,
    "tier": 1,
    "deck": 2,
    "word": "aware",
    "ipa": "",
    "translation": "осведомлённый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to aware this properly.",
      "ru": "Важно правильно сделать это (осведомлённый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to aware in daily life.",
      "ru": "Каждый старается (осведомлённый) в повседневной жизни."
    },
    "quizOptions": [
      "ужасно расстроенный",
      "вдохновлять",
      "осведомлённый"
    ]
  },
  {
    "id": 106,
    "tier": 1,
    "deck": 2,
    "word": "benefit",
    "ipa": "",
    "translation": "выгода, польза",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to benefit this properly.",
      "ru": "Важно правильно сделать это (выгода, польза)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to benefit in daily life.",
      "ru": "Каждый старается (выгода, польза) в повседневной жизни."
    },
    "quizOptions": [
      "обнаруживать",
      "достигать",
      "выгода, польза"
    ]
  },
  {
    "id": 107,
    "tier": 1,
    "deck": 2,
    "word": "beyond",
    "ipa": "",
    "translation": "за пределами",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to beyond this properly.",
      "ru": "Важно правильно сделать это (за пределами)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to beyond in daily life.",
      "ru": "Каждый старается (за пределами) в повседневной жизни."
    },
    "quizOptions": [
      "за пределами",
      "полагать, считать",
      "способный"
    ]
  },
  {
    "id": 108,
    "tier": 1,
    "deck": 2,
    "word": "brief",
    "ipa": "",
    "translation": "краткий",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to brief this properly.",
      "ru": "Важно правильно сделать это (краткий)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to brief in daily life.",
      "ru": "Каждый старается (краткий) в повседневной жизни."
    },
    "quizOptions": [
      "безумно уставший",
      "краткий",
      "неизбежный"
    ]
  },
  {
    "id": 109,
    "tier": 1,
    "deck": 2,
    "word": "capable",
    "ipa": "",
    "translation": "способный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to capable this properly.",
      "ru": "Важно правильно сделать это (способный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to capable in daily life.",
      "ru": "Каждый старается (способный) в повседневной жизни."
    },
    "quizOptions": [
      "беглый взгляд",
      "весь, целый",
      "способный"
    ]
  },
  {
    "id": 110,
    "tier": 1,
    "deck": 2,
    "word": "challenge",
    "ipa": "",
    "translation": "вызов, сложная задача",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to challenge this properly.",
      "ru": "Важно правильно сделать это (вызов, сложная задача)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to challenge in daily life.",
      "ru": "Каждый старается (вызов, сложная задача) в повседневной жизни."
    },
    "quizOptions": [
      "полагать, считать",
      "ожидать",
      "вызов, сложная задача"
    ]
  },
  {
    "id": 111,
    "tier": 1,
    "deck": 2,
    "word": "circumstance",
    "ipa": "",
    "translation": "обстоятельство",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to circumstance this properly.",
      "ru": "Важно правильно сделать это (обстоятельство)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to circumstance in daily life.",
      "ru": "Каждый старается (обстоятельство) в повседневной жизни."
    },
    "quizOptions": [
      "обстоятельство",
      "устанавливать, основывать",
      "превышать"
    ]
  },
  {
    "id": 112,
    "tier": 1,
    "deck": 2,
    "word": "claim",
    "ipa": "",
    "translation": "утверждать, заявлять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to claim this properly.",
      "ru": "Важно правильно сделать это (утверждать, заявлять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to claim in daily life.",
      "ru": "Каждый старается (утверждать, заявлять) в повседневной жизни."
    },
    "quizOptions": [
      "опыт, испытывать",
      "зависеть",
      "утверждать, заявлять"
    ]
  },
  {
    "id": 113,
    "tier": 1,
    "deck": 2,
    "word": "commit",
    "ipa": "",
    "translation": "совершать, посвящать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to commit this properly.",
      "ru": "Важно правильно сделать это (совершать, посвящать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to commit in daily life.",
      "ru": "Каждый старается (совершать, посвящать) в повседневной жизни."
    },
    "quizOptions": [
      "потреблять",
      "особенность, черта",
      "совершать, посвящать"
    ]
  },
  {
    "id": 114,
    "tier": 1,
    "deck": 2,
    "word": "compare",
    "ipa": "",
    "translation": "сравнивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to compare this properly.",
      "ru": "Важно правильно сделать это (сравнивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to compare in daily life.",
      "ru": "Каждый старается (сравнивать) в повседневной жизни."
    },
    "quizOptions": [
      "опознавать, определять",
      "сравнивать",
      "весь, целый"
    ]
  },
  {
    "id": 115,
    "tier": 1,
    "deck": 2,
    "word": "complain",
    "ipa": "",
    "translation": "жаловаться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to complain this properly.",
      "ru": "Важно правильно сделать это (жаловаться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to complain in daily life.",
      "ru": "Каждый старается (жаловаться) в повседневной жизни."
    },
    "quizOptions": [
      "жаловаться",
      "сила, заставлять",
      "осведомлённый"
    ]
  },
  {
    "id": 116,
    "tier": 1,
    "deck": 2,
    "word": "concern",
    "ipa": "",
    "translation": "беспокойство, касаться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to concern this properly.",
      "ru": "Важно правильно сделать это (беспокойство, касаться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to concern in daily life.",
      "ru": "Каждый старается (беспокойство, касаться) в повседневной жизни."
    },
    "quizOptions": [
      "в конце концов",
      "сомнение, сомневаться",
      "беспокойство, касаться"
    ]
  },
  {
    "id": 117,
    "tier": 1,
    "deck": 2,
    "word": "confirm",
    "ipa": "",
    "translation": "подтверждать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to confirm this properly.",
      "ru": "Важно правильно сделать это (подтверждать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to confirm in daily life.",
      "ru": "Каждый старается (подтверждать) в повседневной жизни."
    },
    "quizOptions": [
      "подтверждать",
      "нетерпеливый, стремящийся",
      "избегать"
    ]
  },
  {
    "id": 118,
    "tier": 1,
    "deck": 2,
    "word": "consequence",
    "ipa": "",
    "translation": "последствие",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to consequence this properly.",
      "ru": "Важно правильно сделать это (последствие)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to consequence in daily life.",
      "ru": "Каждый старается (последствие) в повседневной жизни."
    },
    "quizOptions": [
      "беспокойство, касаться",
      "поощрять, ободрять",
      "последствие"
    ]
  },
  {
    "id": 119,
    "tier": 1,
    "deck": 2,
    "word": "consider",
    "ipa": "",
    "translation": "рассматривать, считать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to consider this properly.",
      "ru": "Важно правильно сделать это (рассматривать, считать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to consider in daily life.",
      "ru": "Каждый старается (рассматривать, считать) в повседневной жизни."
    },
    "quizOptions": [
      "вдохновлять",
      "рассматривать, считать",
      "чушь, ерунда, мусор"
    ]
  },
  {
    "id": 120,
    "tier": 1,
    "deck": 2,
    "word": "consist",
    "ipa": "",
    "translation": "состоять из",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to consist this properly.",
      "ru": "Важно правильно сделать это (состоять из)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to consist in daily life.",
      "ru": "Каждый старается (состоять из) в повседневной жизни."
    },
    "quizOptions": [
      "безумно уставший",
      "требовать, спрос",
      "состоять из"
    ]
  },
  {
    "id": 121,
    "tier": 1,
    "deck": 2,
    "word": "constant",
    "ipa": "",
    "translation": "постоянный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to constant this properly.",
      "ru": "Важно правильно сделать это (постоянный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to constant in daily life.",
      "ru": "Каждый старается (постоянный) в повседневной жизни."
    },
    "quizOptions": [
      "безумно уставший",
      "решено, улажено, готово",
      "постоянный"
    ]
  },
  {
    "id": 122,
    "tier": 1,
    "deck": 2,
    "word": "consume",
    "ipa": "",
    "translation": "потреблять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to consume this properly.",
      "ru": "Важно правильно сделать это (потреблять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to consume in daily life.",
      "ru": "Каждый старается (потреблять) в повседневной жизни."
    },
    "quizOptions": [
      "превышать",
      "поощрять, ободрять",
      "потреблять"
    ]
  },
  {
    "id": 123,
    "tier": 1,
    "deck": 2,
    "word": "convince",
    "ipa": "",
    "translation": "убеждать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to convince this properly.",
      "ru": "Важно правильно сделать это (убеждать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to convince in daily life.",
      "ru": "Каждый старается (убеждать) в повседневной жизни."
    },
    "quizOptions": [
      "убеждать",
      "сомнение, сомневаться",
      "разобраться, понять"
    ]
  },
  {
    "id": 124,
    "tier": 1,
    "deck": 2,
    "word": "cope",
    "ipa": "",
    "translation": "справляться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to cope this properly.",
      "ru": "Важно правильно сделать это (справляться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to cope in daily life.",
      "ru": "Каждый старается (справляться) в повседневной жизни."
    },
    "quizOptions": [
      "совершать, посвящать",
      "справляться",
      "сила, заставлять"
    ]
  },
  {
    "id": 125,
    "tier": 1,
    "deck": 2,
    "word": "crucial",
    "ipa": "",
    "translation": "ключевой, решающий",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to crucial this properly.",
      "ru": "Важно правильно сделать это (ключевой, решающий)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to crucial in daily life.",
      "ru": "Каждый старается (ключевой, решающий) в повседневной жизни."
    },
    "quizOptions": [
      "ключевой, решающий",
      "снижаться, отклонять",
      "в конце концов"
    ]
  },
  {
    "id": 126,
    "tier": 1,
    "deck": 2,
    "word": "curious",
    "ipa": "",
    "translation": "любопытный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to curious this properly.",
      "ru": "Важно правильно сделать это (любопытный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to curious in daily life.",
      "ru": "Каждый старается (любопытный) в повседневной жизни."
    },
    "quizOptions": [
      "любопытный",
      "окружение, среда",
      "полагать, считать"
    ]
  },
  {
    "id": 127,
    "tier": 1,
    "deck": 2,
    "word": "decade",
    "ipa": "",
    "translation": "десятилетие",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to decade this properly.",
      "ru": "Важно правильно сделать это (десятилетие)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to decade in daily life.",
      "ru": "Каждый старается (десятилетие) в повседневной жизни."
    },
    "quizOptions": [
      "предполагать",
      "вдохновлять",
      "десятилетие"
    ]
  },
  {
    "id": 128,
    "tier": 1,
    "deck": 2,
    "word": "decent",
    "ipa": "",
    "translation": "приличный, достойный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to decent this properly.",
      "ru": "Важно правильно сделать это (приличный, достойный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to decent in daily life.",
      "ru": "Каждый старается (приличный, достойный) в повседневной жизни."
    },
    "quizOptions": [
      "требовать, спрос",
      "приличный, достойный",
      "мутный, сомнительный"
    ]
  },
  {
    "id": 129,
    "tier": 1,
    "deck": 2,
    "word": "decline",
    "ipa": "",
    "translation": "снижаться, отклонять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to decline this properly.",
      "ru": "Важно правильно сделать это (снижаться, отклонять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to decline in daily life.",
      "ru": "Каждый старается (снижаться, отклонять) в повседневной жизни."
    },
    "quizOptions": [
      "снижаться, отклонять",
      "подчёркивать",
      "определять"
    ]
  },
  {
    "id": 130,
    "tier": 1,
    "deck": 2,
    "word": "define",
    "ipa": "",
    "translation": "определять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to define this properly.",
      "ru": "Важно правильно сделать это (определять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to define in daily life.",
      "ru": "Каждый старается (определять) в повседневной жизни."
    },
    "quizOptions": [
      "появляться, всплывать",
      "последствие",
      "определять"
    ]
  },
  {
    "id": 131,
    "tier": 1,
    "deck": 2,
    "word": "delay",
    "ipa": "",
    "translation": "задержка, откладывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to delay this properly.",
      "ru": "Важно правильно сделать это (задержка, откладывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to delay in daily life.",
      "ru": "Каждый старается (задержка, откладывать) в повседневной жизни."
    },
    "quizOptions": [
      "задержка, откладывать",
      "сравнивать",
      "осведомлённый"
    ]
  },
  {
    "id": 132,
    "tier": 1,
    "deck": 2,
    "word": "deliver",
    "ipa": "",
    "translation": "доставлять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to deliver this properly.",
      "ru": "Важно правильно сделать это (доставлять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to deliver in daily life.",
      "ru": "Каждый старается (доставлять) в повседневной жизни."
    },
    "quizOptions": [
      "доставлять",
      "нетерпеливый, стремящийся",
      "безумно уставший"
    ]
  },
  {
    "id": 133,
    "tier": 1,
    "deck": 2,
    "word": "demand",
    "ipa": "",
    "translation": "требовать, спрос",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to demand this properly.",
      "ru": "Важно правильно сделать это (требовать, спрос)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to demand in daily life.",
      "ru": "Каждый старается (требовать, спрос) в повседневной жизни."
    },
    "quizOptions": [
      "требовать, спрос",
      "определять",
      "подчёркивать"
    ]
  },
  {
    "id": 134,
    "tier": 1,
    "deck": 2,
    "word": "deny",
    "ipa": "",
    "translation": "отрицать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to deny this properly.",
      "ru": "Важно правильно сделать это (отрицать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to deny in daily life.",
      "ru": "Каждый старается (отрицать) в повседневной жизни."
    },
    "quizOptions": [
      "весь, целый",
      "любопытный",
      "отрицать"
    ]
  },
  {
    "id": 135,
    "tier": 1,
    "deck": 2,
    "word": "depend",
    "ipa": "",
    "translation": "зависеть",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to depend this properly.",
      "ru": "Важно правильно сделать это (зависеть)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to depend in daily life.",
      "ru": "Каждый старается (зависеть) в повседневной жизни."
    },
    "quizOptions": [
      "доставлять",
      "зависеть",
      "исследовать"
    ]
  },
  {
    "id": 136,
    "tier": 1,
    "deck": 2,
    "word": "deserve",
    "ipa": "",
    "translation": "заслуживать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to deserve this properly.",
      "ru": "Важно правильно сделать это (заслуживать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to deserve in daily life.",
      "ru": "Каждый старается (заслуживать) в повседневной жизни."
    },
    "quizOptions": [
      "несмотря на",
      "заслуживать",
      "опыт, испытывать"
    ]
  },
  {
    "id": 137,
    "tier": 1,
    "deck": 2,
    "word": "despite",
    "ipa": "",
    "translation": "несмотря на",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to despite this properly.",
      "ru": "Важно правильно сделать это (несмотря на)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to despite in daily life.",
      "ru": "Каждый старается (несмотря на) в повседневной жизни."
    },
    "quizOptions": [
      "постоянный",
      "хотеть, испытывать симпатию",
      "несмотря на"
    ]
  },
  {
    "id": 138,
    "tier": 1,
    "deck": 2,
    "word": "determine",
    "ipa": "",
    "translation": "определять, решать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to determine this properly.",
      "ru": "Важно правильно сделать это (определять, решать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to determine in daily life.",
      "ru": "Каждый старается (определять, решать) в повседневной жизни."
    },
    "quizOptions": [
      "беспокоить",
      "расширять",
      "определять, решать"
    ]
  },
  {
    "id": 139,
    "tier": 1,
    "deck": 2,
    "word": "device",
    "ipa": "",
    "translation": "устройство",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to device this properly.",
      "ru": "Важно правильно сделать это (устройство)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to device in daily life.",
      "ru": "Каждый старается (устройство) в повседневной жизни."
    },
    "quizOptions": [
      "указывать",
      "устройство",
      "дерзкий, нагловатый (с шармом)"
    ]
  },
  {
    "id": 140,
    "tier": 1,
    "deck": 2,
    "word": "disappoint",
    "ipa": "",
    "translation": "разочаровывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to disappoint this properly.",
      "ru": "Важно правильно сделать это (разочаровывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to disappoint in daily life.",
      "ru": "Каждый старается (разочаровывать) в повседневной жизни."
    },
    "quizOptions": [
      "разочаровывать",
      "давать возможность",
      "вдохновлять"
    ]
  },
  {
    "id": 141,
    "tier": 1,
    "deck": 2,
    "word": "discover",
    "ipa": "",
    "translation": "обнаруживать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to discover this properly.",
      "ru": "Важно правильно сделать это (обнаруживать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to discover in daily life.",
      "ru": "Каждый старается (обнаруживать) в повседневной жизни."
    },
    "quizOptions": [
      "обнаруживать",
      "отчётливый, особый",
      "в самую точку"
    ]
  },
  {
    "id": 142,
    "tier": 1,
    "deck": 2,
    "word": "distinct",
    "ipa": "",
    "translation": "отчётливый, особый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to distinct this properly.",
      "ru": "Важно правильно сделать это (отчётливый, особый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to distinct in daily life.",
      "ru": "Каждый старается (отчётливый, особый) в повседневной жизни."
    },
    "quizOptions": [
      "отчётливый, особый",
      "обстоятельство",
      "полагать, считать"
    ]
  },
  {
    "id": 143,
    "tier": 1,
    "deck": 2,
    "word": "disturb",
    "ipa": "",
    "translation": "беспокоить",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to disturb this properly.",
      "ru": "Важно правильно сделать это (беспокоить)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to disturb in daily life.",
      "ru": "Каждый старается (беспокоить) в повседневной жизни."
    },
    "quizOptions": [
      "опыт, испытывать",
      "беспокоить",
      "подход, приближаться"
    ]
  },
  {
    "id": 144,
    "tier": 1,
    "deck": 2,
    "word": "doubt",
    "ipa": "",
    "translation": "сомнение, сомневаться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to doubt this properly.",
      "ru": "Важно правильно сделать это (сомнение, сомневаться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to doubt in daily life.",
      "ru": "Каждый старается (сомнение, сомневаться) в повседневной жизни."
    },
    "quizOptions": [
      "обнаруживать",
      "частый",
      "сомнение, сомневаться"
    ]
  },
  {
    "id": 145,
    "tier": 1,
    "deck": 2,
    "word": "eager",
    "ipa": "",
    "translation": "нетерпеливый, стремящийся",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to eager this properly.",
      "ru": "Важно правильно сделать это (нетерпеливый, стремящийся)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to eager in daily life.",
      "ru": "Каждый старается (нетерпеливый, стремящийся) в повседневной жизни."
    },
    "quizOptions": [
      "полагать, считать",
      "отчётливый, особый",
      "нетерпеливый, стремящийся"
    ]
  },
  {
    "id": 146,
    "tier": 1,
    "deck": 2,
    "word": "efficient",
    "ipa": "",
    "translation": "эффективный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to efficient this properly.",
      "ru": "Важно правильно сделать это (эффективный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to efficient in daily life.",
      "ru": "Каждый старается (эффективный) в повседневной жизни."
    },
    "quizOptions": [
      "опыт, испытывать",
      "эффективный",
      "огромный"
    ]
  },
  {
    "id": 147,
    "tier": 1,
    "deck": 2,
    "word": "emerge",
    "ipa": "",
    "translation": "появляться, всплывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to emerge this properly.",
      "ru": "Важно правильно сделать это (появляться, всплывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to emerge in daily life.",
      "ru": "Каждый старается (появляться, всплывать) в повседневной жизни."
    },
    "quizOptions": [
      "фокусироваться",
      "появляться, всплывать",
      "давать возможность"
    ]
  },
  {
    "id": 148,
    "tier": 1,
    "deck": 2,
    "word": "emphasize",
    "ipa": "",
    "translation": "подчёркивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to emphasize this properly.",
      "ru": "Важно правильно сделать это (подчёркивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to emphasize in daily life.",
      "ru": "Каждый старается (подчёркивать) в повседневной жизни."
    },
    "quizOptions": [
      "краткий",
      "дерзкий, нагловатый (с шармом)",
      "подчёркивать"
    ]
  },
  {
    "id": 149,
    "tier": 1,
    "deck": 2,
    "word": "enable",
    "ipa": "",
    "translation": "давать возможность",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to enable this properly.",
      "ru": "Важно правильно сделать это (давать возможность)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to enable in daily life.",
      "ru": "Каждый старается (давать возможность) в повседневной жизни."
    },
    "quizOptions": [
      "давать возможность",
      "за пределами",
      "достигать"
    ]
  },
  {
    "id": 150,
    "tier": 1,
    "deck": 2,
    "word": "encourage",
    "ipa": "",
    "translation": "поощрять, ободрять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to encourage this properly.",
      "ru": "Важно правильно сделать это (поощрять, ободрять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to encourage in daily life.",
      "ru": "Каждый старается (поощрять, ободрять) в повседневной жизни."
    },
    "quizOptions": [
      "поощрять, ободрять",
      "превышать",
      "расширять"
    ]
  },
  {
    "id": 151,
    "tier": 1,
    "deck": 2,
    "word": "ensure",
    "ipa": "",
    "translation": "обеспечивать, гарантировать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to ensure this properly.",
      "ru": "Важно правильно сделать это (обеспечивать, гарантировать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to ensure in daily life.",
      "ru": "Каждый старается (обеспечивать, гарантировать) в повседневной жизни."
    },
    "quizOptions": [
      "выгода, польза",
      "обеспечивать, гарантировать",
      "обнаруживать"
    ]
  },
  {
    "id": 152,
    "tier": 1,
    "deck": 2,
    "word": "entire",
    "ipa": "",
    "translation": "весь, целый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to entire this properly.",
      "ru": "Важно правильно сделать это (весь, целый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to entire in daily life.",
      "ru": "Каждый старается (весь, целый) в повседневной жизни."
    },
    "quizOptions": [
      "потреблять",
      "весь, целый",
      "частый"
    ]
  },
  {
    "id": 153,
    "tier": 1,
    "deck": 2,
    "word": "environment",
    "ipa": "",
    "translation": "окружение, среда",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to environment this properly.",
      "ru": "Важно правильно сделать это (окружение, среда)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to environment in daily life.",
      "ru": "Каждый старается (окружение, среда) в повседневной жизни."
    },
    "quizOptions": [
      "последствие",
      "окружение, среда",
      "расход, трата"
    ]
  },
  {
    "id": 154,
    "tier": 1,
    "deck": 2,
    "word": "essential",
    "ipa": "",
    "translation": "необходимый, важный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to essential this properly.",
      "ru": "Важно правильно сделать это (необходимый, важный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to essential in daily life.",
      "ru": "Каждый старается (необходимый, важный) в повседневной жизни."
    },
    "quizOptions": [
      "потреблять",
      "необходимый, важный",
      "настаивать"
    ]
  },
  {
    "id": 155,
    "tier": 1,
    "deck": 2,
    "word": "establish",
    "ipa": "",
    "translation": "устанавливать, основывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to establish this properly.",
      "ru": "Важно правильно сделать это (устанавливать, основывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to establish in daily life.",
      "ru": "Каждый старается (устанавливать, основывать) в повседневной жизни."
    },
    "quizOptions": [
      "устанавливать, основывать",
      "определять",
      "сила, заставлять"
    ]
  },
  {
    "id": 156,
    "tier": 1,
    "deck": 2,
    "word": "estimate",
    "ipa": "",
    "translation": "оценивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to estimate this properly.",
      "ru": "Важно правильно сделать это (оценивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to estimate in daily life.",
      "ru": "Каждый старается (оценивать) в повседневной жизни."
    },
    "quizOptions": [
      "оценивать",
      "поощрять, ободрять",
      "нетерпеливый, стремящийся"
    ]
  },
  {
    "id": 157,
    "tier": 1,
    "deck": 2,
    "word": "eventually",
    "ipa": "",
    "translation": "в конце концов",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to eventually this properly.",
      "ru": "Важно правильно сделать это (в конце концов)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to eventually in daily life.",
      "ru": "Каждый старается (в конце концов) в повседневной жизни."
    },
    "quizOptions": [
      "подлинный, искренний",
      "исследовать",
      "в конце концов"
    ]
  },
  {
    "id": 158,
    "tier": 1,
    "deck": 2,
    "word": "evidence",
    "ipa": "",
    "translation": "доказательство, улика",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to evidence this properly.",
      "ru": "Важно правильно сделать это (доказательство, улика)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to evidence in daily life.",
      "ru": "Каждый старается (доказательство, улика) в повседневной жизни."
    },
    "quizOptions": [
      "чушь, ерунда, мусор",
      "доказательство, улика",
      "неизбежный"
    ]
  },
  {
    "id": 159,
    "tier": 1,
    "deck": 2,
    "word": "examine",
    "ipa": "",
    "translation": "осматривать, изучать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to examine this properly.",
      "ru": "Важно правильно сделать это (осматривать, изучать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to examine in daily life.",
      "ru": "Каждый старается (осматривать, изучать) в повседневной жизни."
    },
    "quizOptions": [
      "осведомлённый",
      "осматривать, изучать",
      "полагать, считать"
    ]
  },
  {
    "id": 160,
    "tier": 1,
    "deck": 2,
    "word": "exceed",
    "ipa": "",
    "translation": "превышать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to exceed this properly.",
      "ru": "Важно правильно сделать это (превышать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to exceed in daily life.",
      "ru": "Каждый старается (превышать) в повседневной жизни."
    },
    "quizOptions": [
      "превышать",
      "избегать",
      "безумно уставший"
    ]
  },
  {
    "id": 161,
    "tier": 1,
    "deck": 2,
    "word": "exclude",
    "ipa": "",
    "translation": "исключать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to exclude this properly.",
      "ru": "Важно правильно сделать это (исключать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to exclude in daily life.",
      "ru": "Каждый старается (исключать) в повседневной жизни."
    },
    "quizOptions": [
      "сомнение, сомневаться",
      "подчёркивать",
      "исключать"
    ]
  },
  {
    "id": 162,
    "tier": 1,
    "deck": 2,
    "word": "expand",
    "ipa": "",
    "translation": "расширять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to expand this properly.",
      "ru": "Важно правильно сделать это (расширять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to expand in daily life.",
      "ru": "Каждый старается (расширять) в повседневной жизни."
    },
    "quizOptions": [
      "расширять",
      "потреблять",
      "устанавливать, основывать"
    ]
  },
  {
    "id": 163,
    "tier": 1,
    "deck": 2,
    "word": "expect",
    "ipa": "",
    "translation": "ожидать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to expect this properly.",
      "ru": "Важно правильно сделать это (ожидать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to expect in daily life.",
      "ru": "Каждый старается (ожидать) в повседневной жизни."
    },
    "quizOptions": [
      "опыт, испытывать",
      "ожидать",
      "предполагать"
    ]
  },
  {
    "id": 164,
    "tier": 1,
    "deck": 2,
    "word": "expense",
    "ipa": "",
    "translation": "расход, трата",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to expense this properly.",
      "ru": "Важно правильно сделать это (расход, трата)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to expense in daily life.",
      "ru": "Каждый старается (расход, трата) в повседневной жизни."
    },
    "quizOptions": [
      "расход, трата",
      "избегать",
      "получать, прирост"
    ]
  },
  {
    "id": 165,
    "tier": 1,
    "deck": 2,
    "word": "experience",
    "ipa": "",
    "translation": "опыт, испытывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to experience this properly.",
      "ru": "Важно правильно сделать это (опыт, испытывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to experience in daily life.",
      "ru": "Каждый старается (опыт, испытывать) в повседневной жизни."
    },
    "quizOptions": [
      "ключевой, решающий",
      "опыт, испытывать",
      "краткий"
    ]
  },
  {
    "id": 166,
    "tier": 1,
    "deck": 2,
    "word": "explore",
    "ipa": "",
    "translation": "исследовать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to explore this properly.",
      "ru": "Важно правильно сделать это (исследовать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to explore in daily life.",
      "ru": "Каждый старается (исследовать) в повседневной жизни."
    },
    "quizOptions": [
      "исследовать",
      "утверждать, заявлять",
      "отчётливый, особый"
    ]
  },
  {
    "id": 167,
    "tier": 1,
    "deck": 2,
    "word": "expose",
    "ipa": "",
    "translation": "разоблачать, подвергать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to expose this properly.",
      "ru": "Важно правильно сделать это (разоблачать, подвергать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to expose in daily life.",
      "ru": "Каждый старается (разоблачать, подвергать) в повседневной жизни."
    },
    "quizOptions": [
      "разоблачать, подвергать",
      "подход, приближаться",
      "постоянный"
    ]
  },
  {
    "id": 168,
    "tier": 1,
    "deck": 2,
    "word": "extend",
    "ipa": "",
    "translation": "продлевать, расширять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to extend this properly.",
      "ru": "Важно правильно сделать это (продлевать, расширять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to extend in daily life.",
      "ru": "Каждый старается (продлевать, расширять) в повседневной жизни."
    },
    "quizOptions": [
      "в самую точку",
      "продлевать, расширять",
      "справляться, ручка"
    ]
  },
  {
    "id": 169,
    "tier": 1,
    "deck": 2,
    "word": "extraordinary",
    "ipa": "",
    "translation": "необычайный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to extraordinary this properly.",
      "ru": "Важно правильно сделать это (необычайный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to extraordinary in daily life.",
      "ru": "Каждый старается (необычайный) в повседневной жизни."
    },
    "quizOptions": [
      "необычайный",
      "совершать, посвящать",
      "определять"
    ]
  },
  {
    "id": 170,
    "tier": 1,
    "deck": 2,
    "word": "familiar",
    "ipa": "",
    "translation": "знакомый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to familiar this properly.",
      "ru": "Важно правильно сделать это (знакомый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to familiar in daily life.",
      "ru": "Каждый старается (знакомый) в повседневной жизни."
    },
    "quizOptions": [
      "последствие",
      "знакомый",
      "в конце концов"
    ]
  },
  {
    "id": 171,
    "tier": 1,
    "deck": 2,
    "word": "fault",
    "ipa": "",
    "translation": "вина, неисправность",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to fault this properly.",
      "ru": "Важно правильно сделать это (вина, неисправность)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to fault in daily life.",
      "ru": "Каждый старается (вина, неисправность) в повседневной жизни."
    },
    "quizOptions": [
      "получать, прирост",
      "вина, неисправность",
      "продлевать, расширять"
    ]
  },
  {
    "id": 172,
    "tier": 1,
    "deck": 2,
    "word": "feature",
    "ipa": "",
    "translation": "особенность, черта",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to feature this properly.",
      "ru": "Важно правильно сделать это (особенность, черта)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to feature in daily life.",
      "ru": "Каждый старается (особенность, черта) в повседневной жизни."
    },
    "quizOptions": [
      "особенность, черта",
      "подчёркивать",
      "включать в себя"
    ]
  },
  {
    "id": 173,
    "tier": 1,
    "deck": 2,
    "word": "flexible",
    "ipa": "",
    "translation": "гибкий",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to flexible this properly.",
      "ru": "Важно правильно сделать это (гибкий)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to flexible in daily life.",
      "ru": "Каждый старается (гибкий) в повседневной жизни."
    },
    "quizOptions": [
      "утверждать, заявлять",
      "постепенный",
      "гибкий"
    ]
  },
  {
    "id": 174,
    "tier": 1,
    "deck": 2,
    "word": "focus",
    "ipa": "",
    "translation": "фокусироваться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to focus this properly.",
      "ru": "Важно правильно сделать это (фокусироваться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to focus in daily life.",
      "ru": "Каждый старается (фокусироваться) в повседневной жизни."
    },
    "quizOptions": [
      "хотеть, испытывать симпатию",
      "фокусироваться",
      "обнаруживать"
    ]
  },
  {
    "id": 175,
    "tier": 1,
    "deck": 2,
    "word": "forbid",
    "ipa": "",
    "translation": "запрещать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to forbid this properly.",
      "ru": "Важно правильно сделать это (запрещать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to forbid in daily life.",
      "ru": "Каждый старается (запрещать) в повседневной жизни."
    },
    "quizOptions": [
      "обнаруживать",
      "запрещать",
      "особенность, черта"
    ]
  },
  {
    "id": 176,
    "tier": 1,
    "deck": 2,
    "word": "force",
    "ipa": "",
    "translation": "сила, заставлять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to force this properly.",
      "ru": "Важно правильно сделать это (сила, заставлять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to force in daily life.",
      "ru": "Каждый старается (сила, заставлять) в повседневной жизни."
    },
    "quizOptions": [
      "сила, заставлять",
      "весь, целый",
      "давать возможность"
    ]
  },
  {
    "id": 177,
    "tier": 1,
    "deck": 2,
    "word": "frequent",
    "ipa": "",
    "translation": "частый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to frequent this properly.",
      "ru": "Важно правильно сделать это (частый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to frequent in daily life.",
      "ru": "Каждый старается (частый) в повседневной жизни."
    },
    "quizOptions": [
      "частый",
      "расстраивать, злить",
      "жаловаться"
    ]
  },
  {
    "id": 178,
    "tier": 1,
    "deck": 2,
    "word": "frustrate",
    "ipa": "",
    "translation": "расстраивать, злить",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to frustrate this properly.",
      "ru": "Важно правильно сделать это (расстраивать, злить)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to frustrate in daily life.",
      "ru": "Каждый старается (расстраивать, злить) в повседневной жизни."
    },
    "quizOptions": [
      "гибкий",
      "хотеть, испытывать симпатию",
      "расстраивать, злить"
    ]
  },
  {
    "id": 179,
    "tier": 1,
    "deck": 2,
    "word": "gain",
    "ipa": "",
    "translation": "получать, прирост",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to gain this properly.",
      "ru": "Важно правильно сделать это (получать, прирост)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to gain in daily life.",
      "ru": "Каждый старается (получать, прирост) в повседневной жизни."
    },
    "quizOptions": [
      "необходимый, важный",
      "получать, прирост",
      "заслуживать"
    ]
  },
  {
    "id": 180,
    "tier": 1,
    "deck": 2,
    "word": "genuine",
    "ipa": "",
    "translation": "подлинный, искренний",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to genuine this properly.",
      "ru": "Важно правильно сделать это (подлинный, искренний)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to genuine in daily life.",
      "ru": "Каждый старается (подлинный, искренний) в повседневной жизни."
    },
    "quizOptions": [
      "обнаруживать",
      "необходимый, важный",
      "подлинный, искренний"
    ]
  },
  {
    "id": 181,
    "tier": 1,
    "deck": 2,
    "word": "glance",
    "ipa": "",
    "translation": "беглый взгляд",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to glance this properly.",
      "ru": "Важно правильно сделать это (беглый взгляд)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to glance in daily life.",
      "ru": "Каждый старается (беглый взгляд) в повседневной жизни."
    },
    "quizOptions": [
      "разобраться, понять",
      "расширять",
      "беглый взгляд"
    ]
  },
  {
    "id": 182,
    "tier": 1,
    "deck": 2,
    "word": "gradual",
    "ipa": "",
    "translation": "постепенный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to gradual this properly.",
      "ru": "Важно правильно сделать это (постепенный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to gradual in daily life.",
      "ru": "Каждый старается (постепенный) в повседневной жизни."
    },
    "quizOptions": [
      "постепенный",
      "вина, неисправность",
      "предполагать"
    ]
  },
  {
    "id": 183,
    "tier": 1,
    "deck": 2,
    "word": "grateful",
    "ipa": "",
    "translation": "благодарный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to grateful this properly.",
      "ru": "Важно правильно сделать это (благодарный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to grateful in daily life.",
      "ru": "Каждый старается (благодарный) в повседневной жизни."
    },
    "quizOptions": [
      "благодарный",
      "расширять",
      "гибкий"
    ]
  },
  {
    "id": 184,
    "tier": 1,
    "deck": 2,
    "word": "handle",
    "ipa": "",
    "translation": "справляться, ручка",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to handle this properly.",
      "ru": "Важно правильно сделать это (справляться, ручка)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to handle in daily life.",
      "ru": "Каждый старается (справляться, ручка) в повседневной жизни."
    },
    "quizOptions": [
      "осматривать, изучать",
      "сила, заставлять",
      "справляться, ручка"
    ]
  },
  {
    "id": 185,
    "tier": 1,
    "deck": 2,
    "word": "hesitate",
    "ipa": "",
    "translation": "колебаться, медлить",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to hesitate this properly.",
      "ru": "Важно правильно сделать это (колебаться, медлить)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to hesitate in daily life.",
      "ru": "Каждый старается (колебаться, медлить) в повседневной жизни."
    },
    "quizOptions": [
      "потреблять",
      "выгода, польза",
      "колебаться, медлить"
    ]
  },
  {
    "id": 186,
    "tier": 1,
    "deck": 2,
    "word": "highlight",
    "ipa": "",
    "translation": "выделять, главный момент",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to highlight this properly.",
      "ru": "Важно правильно сделать это (выделять, главный момент)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to highlight in daily life.",
      "ru": "Каждый старается (выделять, главный момент) в повседневной жизни."
    },
    "quizOptions": [
      "достигать",
      "увеличивать",
      "выделять, главный момент"
    ]
  },
  {
    "id": 187,
    "tier": 1,
    "deck": 2,
    "word": "huge",
    "ipa": "",
    "translation": "огромный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to huge this properly.",
      "ru": "Важно правильно сделать это (огромный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to huge in daily life.",
      "ru": "Каждый старается (огромный) в повседневной жизни."
    },
    "quizOptions": [
      "определять",
      "огромный",
      "опыт, испытывать"
    ]
  },
  {
    "id": 188,
    "tier": 1,
    "deck": 2,
    "word": "identify",
    "ipa": "",
    "translation": "опознавать, определять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to identify this properly.",
      "ru": "Важно правильно сделать это (опознавать, определять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to identify in daily life.",
      "ru": "Каждый старается (опознавать, определять) в повседневной жизни."
    },
    "quizOptions": [
      "достигать",
      "подход, приближаться",
      "опознавать, определять"
    ]
  },
  {
    "id": 189,
    "tier": 1,
    "deck": 2,
    "word": "ignore",
    "ipa": "",
    "translation": "игнорировать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to ignore this properly.",
      "ru": "Важно правильно сделать это (игнорировать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to ignore in daily life.",
      "ru": "Каждый старается (игнорировать) в повседневной жизни."
    },
    "quizOptions": [
      "указывать",
      "игнорировать",
      "давать возможность"
    ]
  },
  {
    "id": 190,
    "tier": 1,
    "deck": 2,
    "word": "impact",
    "ipa": "",
    "translation": "влияние, удар",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to impact this properly.",
      "ru": "Важно правильно сделать это (влияние, удар)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to impact in daily life.",
      "ru": "Каждый старается (влияние, удар) в повседневной жизни."
    },
    "quizOptions": [
      "влияние, удар",
      "давать возможность",
      "решено, улажено, готово"
    ]
  },
  {
    "id": 191,
    "tier": 1,
    "deck": 2,
    "word": "imply",
    "ipa": "",
    "translation": "подразумевать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to imply this properly.",
      "ru": "Важно правильно сделать это (подразумевать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to imply in daily life.",
      "ru": "Каждый старается (подразумевать) в повседневной жизни."
    },
    "quizOptions": [
      "решено, улажено, готово",
      "последствие",
      "подразумевать"
    ]
  },
  {
    "id": 192,
    "tier": 1,
    "deck": 2,
    "word": "improve",
    "ipa": "",
    "translation": "улучшать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to improve this properly.",
      "ru": "Важно правильно сделать это (улучшать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to improve in daily life.",
      "ru": "Каждый старается (улучшать) в повседневной жизни."
    },
    "quizOptions": [
      "улучшать",
      "дерзкий, нагловатый (с шармом)",
      "разобраться, понять"
    ]
  },
  {
    "id": 193,
    "tier": 1,
    "deck": 2,
    "word": "include",
    "ipa": "",
    "translation": "включать в себя",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to include this properly.",
      "ru": "Важно правильно сделать это (включать в себя)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to include in daily life.",
      "ru": "Каждый старается (включать в себя) в повседневной жизни."
    },
    "quizOptions": [
      "сомнение, сомневаться",
      "включать в себя",
      "зависеть"
    ]
  },
  {
    "id": 194,
    "tier": 1,
    "deck": 2,
    "word": "increase",
    "ipa": "",
    "translation": "увеличивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to increase this properly.",
      "ru": "Важно правильно сделать это (увеличивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to increase in daily life.",
      "ru": "Каждый старается (увеличивать) в повседневной жизни."
    },
    "quizOptions": [
      "весь, целый",
      "предполагать",
      "увеличивать"
    ]
  },
  {
    "id": 195,
    "tier": 1,
    "deck": 2,
    "word": "indicate",
    "ipa": "",
    "translation": "указывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to indicate this properly.",
      "ru": "Важно правильно сделать это (указывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to indicate in daily life.",
      "ru": "Каждый старается (указывать) в повседневной жизни."
    },
    "quizOptions": [
      "указывать",
      "эффективный",
      "ужасно расстроенный"
    ]
  },
  {
    "id": 196,
    "tier": 1,
    "deck": 2,
    "word": "inevitable",
    "ipa": "",
    "translation": "неизбежный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to inevitable this properly.",
      "ru": "Важно правильно сделать это (неизбежный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to inevitable in daily life.",
      "ru": "Каждый старается (неизбежный) в повседневной жизни."
    },
    "quizOptions": [
      "колебаться, медлить",
      "неизбежный",
      "состоять из"
    ]
  },
  {
    "id": 197,
    "tier": 1,
    "deck": 2,
    "word": "influence",
    "ipa": "",
    "translation": "влияние, влиять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to influence this properly.",
      "ru": "Важно правильно сделать это (влияние, влиять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to influence in daily life.",
      "ru": "Каждый старается (влияние, влиять) в повседневной жизни."
    },
    "quizOptions": [
      "влияние, влиять",
      "необходимый, важный",
      "чушь, ерунда, мусор"
    ]
  },
  {
    "id": 198,
    "tier": 1,
    "deck": 2,
    "word": "initial",
    "ipa": "",
    "translation": "начальный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to initial this properly.",
      "ru": "Важно правильно сделать это (начальный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to initial in daily life.",
      "ru": "Каждый старается (начальный) в повседневной жизни."
    },
    "quizOptions": [
      "начальный",
      "определять, решать",
      "благодарный"
    ]
  },
  {
    "id": 199,
    "tier": 1,
    "deck": 2,
    "word": "insist",
    "ipa": "",
    "translation": "настаивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to insist this properly.",
      "ru": "Важно правильно сделать это (настаивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to insist in daily life.",
      "ru": "Каждый старается (настаивать) в повседневной жизни."
    },
    "quizOptions": [
      "эффективный",
      "сомнение, сомневаться",
      "настаивать"
    ]
  },
  {
    "id": 200,
    "tier": 1,
    "deck": 2,
    "word": "inspire",
    "ipa": "",
    "translation": "вдохновлять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to inspire this properly.",
      "ru": "Важно правильно сделать это (вдохновлять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to inspire in daily life.",
      "ru": "Каждый старается (вдохновлять) в повседневной жизни."
    },
    "quizOptions": [
      "вдохновлять",
      "отрицать",
      "опыт, испытывать"
    ]
  },
  {
    "id": 201,
    "tier": 1,
    "deck": 3,
    "word": "achieve",
    "ipa": "",
    "translation": "достигать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to achieve this properly.",
      "ru": "Важно правильно сделать это (достигать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to achieve in daily life.",
      "ru": "Каждый старается (достигать) в повседневной жизни."
    },
    "quizOptions": [
      "частый",
      "достигать",
      "появляться, всплывать"
    ]
  },
  {
    "id": 202,
    "tier": 1,
    "deck": 3,
    "word": "approach",
    "ipa": "",
    "translation": "подход, приближаться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to approach this properly.",
      "ru": "Важно правильно сделать это (подход, приближаться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to approach in daily life.",
      "ru": "Каждый старается (подход, приближаться) в повседневной жизни."
    },
    "quizOptions": [
      "ожидать",
      "чушь, ерунда, мусор",
      "подход, приближаться"
    ]
  },
  {
    "id": 203,
    "tier": 1,
    "deck": 3,
    "word": "assume",
    "ipa": "",
    "translation": "предполагать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to assume this properly.",
      "ru": "Важно правильно сделать это (предполагать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to assume in daily life.",
      "ru": "Каждый старается (предполагать) в повседневной жизни."
    },
    "quizOptions": [
      "предполагать",
      "осматривать, изучать",
      "безумно уставший"
    ]
  },
  {
    "id": 204,
    "tier": 1,
    "deck": 3,
    "word": "avoid",
    "ipa": "",
    "translation": "избегать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to avoid this properly.",
      "ru": "Важно правильно сделать это (избегать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to avoid in daily life.",
      "ru": "Каждый старается (избегать) в повседневной жизни."
    },
    "quizOptions": [
      "избегать",
      "включать в себя",
      "безумно уставший"
    ]
  },
  {
    "id": 205,
    "tier": 1,
    "deck": 3,
    "word": "aware",
    "ipa": "",
    "translation": "осведомлённый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to aware this properly.",
      "ru": "Важно правильно сделать это (осведомлённый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to aware in daily life.",
      "ru": "Каждый старается (осведомлённый) в повседневной жизни."
    },
    "quizOptions": [
      "осведомлённый",
      "появляться, всплывать",
      "сравнивать"
    ]
  },
  {
    "id": 206,
    "tier": 1,
    "deck": 3,
    "word": "benefit",
    "ipa": "",
    "translation": "выгода, польза",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to benefit this properly.",
      "ru": "Важно правильно сделать это (выгода, польза)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to benefit in daily life.",
      "ru": "Каждый старается (выгода, польза) в повседневной жизни."
    },
    "quizOptions": [
      "выгода, польза",
      "предполагать",
      "десятилетие"
    ]
  },
  {
    "id": 207,
    "tier": 1,
    "deck": 3,
    "word": "beyond",
    "ipa": "",
    "translation": "за пределами",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to beyond this properly.",
      "ru": "Важно правильно сделать это (за пределами)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to beyond in daily life.",
      "ru": "Каждый старается (за пределами) в повседневной жизни."
    },
    "quizOptions": [
      "дерзкий, нагловатый (с шармом)",
      "за пределами",
      "зависеть"
    ]
  },
  {
    "id": 208,
    "tier": 1,
    "deck": 3,
    "word": "brief",
    "ipa": "",
    "translation": "краткий",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to brief this properly.",
      "ru": "Важно правильно сделать это (краткий)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to brief in daily life.",
      "ru": "Каждый старается (краткий) в повседневной жизни."
    },
    "quizOptions": [
      "краткий",
      "продлевать, расширять",
      "задержка, откладывать"
    ]
  },
  {
    "id": 209,
    "tier": 1,
    "deck": 3,
    "word": "capable",
    "ipa": "",
    "translation": "способный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to capable this properly.",
      "ru": "Важно правильно сделать это (способный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to capable in daily life.",
      "ru": "Каждый старается (способный) в повседневной жизни."
    },
    "quizOptions": [
      "гибкий",
      "способный",
      "задержка, откладывать"
    ]
  },
  {
    "id": 210,
    "tier": 1,
    "deck": 3,
    "word": "challenge",
    "ipa": "",
    "translation": "вызов, сложная задача",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to challenge this properly.",
      "ru": "Важно правильно сделать это (вызов, сложная задача)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to challenge in daily life.",
      "ru": "Каждый старается (вызов, сложная задача) в повседневной жизни."
    },
    "quizOptions": [
      "указывать",
      "вызов, сложная задача",
      "опыт, испытывать"
    ]
  },
  {
    "id": 211,
    "tier": 1,
    "deck": 3,
    "word": "circumstance",
    "ipa": "",
    "translation": "обстоятельство",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to circumstance this properly.",
      "ru": "Важно правильно сделать это (обстоятельство)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to circumstance in daily life.",
      "ru": "Каждый старается (обстоятельство) в повседневной жизни."
    },
    "quizOptions": [
      "обстоятельство",
      "подразумевать",
      "снижаться, отклонять"
    ]
  },
  {
    "id": 212,
    "tier": 1,
    "deck": 3,
    "word": "claim",
    "ipa": "",
    "translation": "утверждать, заявлять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to claim this properly.",
      "ru": "Важно правильно сделать это (утверждать, заявлять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to claim in daily life.",
      "ru": "Каждый старается (утверждать, заявлять) в повседневной жизни."
    },
    "quizOptions": [
      "опознавать, определять",
      "дерзкий, нагловатый (с шармом)",
      "утверждать, заявлять"
    ]
  },
  {
    "id": 213,
    "tier": 1,
    "deck": 3,
    "word": "commit",
    "ipa": "",
    "translation": "совершать, посвящать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to commit this properly.",
      "ru": "Важно правильно сделать это (совершать, посвящать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to commit in daily life.",
      "ru": "Каждый старается (совершать, посвящать) в повседневной жизни."
    },
    "quizOptions": [
      "за пределами",
      "совершать, посвящать",
      "улучшать"
    ]
  },
  {
    "id": 214,
    "tier": 1,
    "deck": 3,
    "word": "compare",
    "ipa": "",
    "translation": "сравнивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to compare this properly.",
      "ru": "Важно правильно сделать это (сравнивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to compare in daily life.",
      "ru": "Каждый старается (сравнивать) в повседневной жизни."
    },
    "quizOptions": [
      "отчётливый, особый",
      "сравнивать",
      "фокусироваться"
    ]
  },
  {
    "id": 215,
    "tier": 1,
    "deck": 3,
    "word": "complain",
    "ipa": "",
    "translation": "жаловаться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to complain this properly.",
      "ru": "Важно правильно сделать это (жаловаться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to complain in daily life.",
      "ru": "Каждый старается (жаловаться) в повседневной жизни."
    },
    "quizOptions": [
      "жаловаться",
      "состоять из",
      "исключать"
    ]
  },
  {
    "id": 216,
    "tier": 1,
    "deck": 3,
    "word": "concern",
    "ipa": "",
    "translation": "беспокойство, касаться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to concern this properly.",
      "ru": "Важно правильно сделать это (беспокойство, касаться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to concern in daily life.",
      "ru": "Каждый старается (беспокойство, касаться) в повседневной жизни."
    },
    "quizOptions": [
      "беспокойство, касаться",
      "устройство",
      "подчёркивать"
    ]
  },
  {
    "id": 217,
    "tier": 1,
    "deck": 3,
    "word": "confirm",
    "ipa": "",
    "translation": "подтверждать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to confirm this properly.",
      "ru": "Важно правильно сделать это (подтверждать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to confirm in daily life.",
      "ru": "Каждый старается (подтверждать) в повседневной жизни."
    },
    "quizOptions": [
      "хотеть, испытывать симпатию",
      "подтверждать",
      "эффективный"
    ]
  },
  {
    "id": 218,
    "tier": 1,
    "deck": 3,
    "word": "consequence",
    "ipa": "",
    "translation": "последствие",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to consequence this properly.",
      "ru": "Важно правильно сделать это (последствие)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to consequence in daily life.",
      "ru": "Каждый старается (последствие) в повседневной жизни."
    },
    "quizOptions": [
      "последствие",
      "мутный, сомнительный",
      "потреблять"
    ]
  },
  {
    "id": 219,
    "tier": 1,
    "deck": 3,
    "word": "consider",
    "ipa": "",
    "translation": "рассматривать, считать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to consider this properly.",
      "ru": "Важно правильно сделать это (рассматривать, считать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to consider in daily life.",
      "ru": "Каждый старается (рассматривать, считать) в повседневной жизни."
    },
    "quizOptions": [
      "поощрять, ободрять",
      "требовать, спрос",
      "рассматривать, считать"
    ]
  },
  {
    "id": 220,
    "tier": 1,
    "deck": 3,
    "word": "consist",
    "ipa": "",
    "translation": "состоять из",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to consist this properly.",
      "ru": "Важно правильно сделать это (состоять из)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to consist in daily life.",
      "ru": "Каждый старается (состоять из) в повседневной жизни."
    },
    "quizOptions": [
      "в самую точку",
      "состоять из",
      "последствие"
    ]
  },
  {
    "id": 221,
    "tier": 1,
    "deck": 3,
    "word": "constant",
    "ipa": "",
    "translation": "постоянный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to constant this properly.",
      "ru": "Важно правильно сделать это (постоянный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to constant in daily life.",
      "ru": "Каждый старается (постоянный) в повседневной жизни."
    },
    "quizOptions": [
      "постоянный",
      "эффективный",
      "любопытный"
    ]
  },
  {
    "id": 222,
    "tier": 1,
    "deck": 3,
    "word": "consume",
    "ipa": "",
    "translation": "потреблять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to consume this properly.",
      "ru": "Важно правильно сделать это (потреблять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to consume in daily life.",
      "ru": "Каждый старается (потреблять) в повседневной жизни."
    },
    "quizOptions": [
      "потреблять",
      "требовать, спрос",
      "устройство"
    ]
  },
  {
    "id": 223,
    "tier": 1,
    "deck": 3,
    "word": "convince",
    "ipa": "",
    "translation": "убеждать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to convince this properly.",
      "ru": "Важно правильно сделать это (убеждать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to convince in daily life.",
      "ru": "Каждый старается (убеждать) в повседневной жизни."
    },
    "quizOptions": [
      "выгода, польза",
      "ужасно расстроенный",
      "убеждать"
    ]
  },
  {
    "id": 224,
    "tier": 1,
    "deck": 3,
    "word": "cope",
    "ipa": "",
    "translation": "справляться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to cope this properly.",
      "ru": "Важно правильно сделать это (справляться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to cope in daily life.",
      "ru": "Каждый старается (справляться) в повседневной жизни."
    },
    "quizOptions": [
      "справляться",
      "обеспечивать, гарантировать",
      "отчётливый, особый"
    ]
  },
  {
    "id": 225,
    "tier": 1,
    "deck": 3,
    "word": "crucial",
    "ipa": "",
    "translation": "ключевой, решающий",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to crucial this properly.",
      "ru": "Важно правильно сделать это (ключевой, решающий)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to crucial in daily life.",
      "ru": "Каждый старается (ключевой, решающий) в повседневной жизни."
    },
    "quizOptions": [
      "ключевой, решающий",
      "необычайный",
      "неизбежный"
    ]
  },
  {
    "id": 226,
    "tier": 1,
    "deck": 3,
    "word": "curious",
    "ipa": "",
    "translation": "любопытный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to curious this properly.",
      "ru": "Важно правильно сделать это (любопытный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to curious in daily life.",
      "ru": "Каждый старается (любопытный) в повседневной жизни."
    },
    "quizOptions": [
      "предполагать",
      "любопытный",
      "требовать, спрос"
    ]
  },
  {
    "id": 227,
    "tier": 1,
    "deck": 3,
    "word": "decade",
    "ipa": "",
    "translation": "десятилетие",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to decade this properly.",
      "ru": "Важно правильно сделать это (десятилетие)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to decade in daily life.",
      "ru": "Каждый старается (десятилетие) в повседневной жизни."
    },
    "quizOptions": [
      "беглый взгляд",
      "необходимый, важный",
      "десятилетие"
    ]
  },
  {
    "id": 228,
    "tier": 1,
    "deck": 3,
    "word": "decent",
    "ipa": "",
    "translation": "приличный, достойный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to decent this properly.",
      "ru": "Важно правильно сделать это (приличный, достойный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to decent in daily life.",
      "ru": "Каждый старается (приличный, достойный) в повседневной жизни."
    },
    "quizOptions": [
      "частый",
      "приличный, достойный",
      "вина, неисправность"
    ]
  },
  {
    "id": 229,
    "tier": 1,
    "deck": 3,
    "word": "decline",
    "ipa": "",
    "translation": "снижаться, отклонять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to decline this properly.",
      "ru": "Важно правильно сделать это (снижаться, отклонять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to decline in daily life.",
      "ru": "Каждый старается (снижаться, отклонять) в повседневной жизни."
    },
    "quizOptions": [
      "снижаться, отклонять",
      "осматривать, изучать",
      "беспокоить"
    ]
  },
  {
    "id": 230,
    "tier": 1,
    "deck": 3,
    "word": "define",
    "ipa": "",
    "translation": "определять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to define this properly.",
      "ru": "Важно правильно сделать это (определять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to define in daily life.",
      "ru": "Каждый старается (определять) в повседневной жизни."
    },
    "quizOptions": [
      "определять",
      "осведомлённый",
      "вина, неисправность"
    ]
  },
  {
    "id": 231,
    "tier": 1,
    "deck": 3,
    "word": "delay",
    "ipa": "",
    "translation": "задержка, откладывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to delay this properly.",
      "ru": "Важно правильно сделать это (задержка, откладывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to delay in daily life.",
      "ru": "Каждый старается (задержка, откладывать) в повседневной жизни."
    },
    "quizOptions": [
      "задержка, откладывать",
      "хотеть, испытывать симпатию",
      "благодарный"
    ]
  },
  {
    "id": 232,
    "tier": 1,
    "deck": 3,
    "word": "deliver",
    "ipa": "",
    "translation": "доставлять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to deliver this properly.",
      "ru": "Важно правильно сделать это (доставлять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to deliver in daily life.",
      "ru": "Каждый старается (доставлять) в повседневной жизни."
    },
    "quizOptions": [
      "весь, целый",
      "доставлять",
      "ужасно расстроенный"
    ]
  },
  {
    "id": 233,
    "tier": 1,
    "deck": 3,
    "word": "demand",
    "ipa": "",
    "translation": "требовать, спрос",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to demand this properly.",
      "ru": "Важно правильно сделать это (требовать, спрос)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to demand in daily life.",
      "ru": "Каждый старается (требовать, спрос) в повседневной жизни."
    },
    "quizOptions": [
      "огромный",
      "последствие",
      "требовать, спрос"
    ]
  },
  {
    "id": 234,
    "tier": 1,
    "deck": 3,
    "word": "deny",
    "ipa": "",
    "translation": "отрицать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to deny this properly.",
      "ru": "Важно правильно сделать это (отрицать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to deny in daily life.",
      "ru": "Каждый старается (отрицать) в повседневной жизни."
    },
    "quizOptions": [
      "появляться, всплывать",
      "исследовать",
      "отрицать"
    ]
  },
  {
    "id": 235,
    "tier": 1,
    "deck": 3,
    "word": "depend",
    "ipa": "",
    "translation": "зависеть",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to depend this properly.",
      "ru": "Важно правильно сделать это (зависеть)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to depend in daily life.",
      "ru": "Каждый старается (зависеть) в повседневной жизни."
    },
    "quizOptions": [
      "опознавать, определять",
      "зависеть",
      "определять"
    ]
  },
  {
    "id": 236,
    "tier": 1,
    "deck": 3,
    "word": "deserve",
    "ipa": "",
    "translation": "заслуживать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to deserve this properly.",
      "ru": "Важно правильно сделать это (заслуживать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to deserve in daily life.",
      "ru": "Каждый старается (заслуживать) в повседневной жизни."
    },
    "quizOptions": [
      "подчёркивать",
      "хотеть, испытывать симпатию",
      "заслуживать"
    ]
  },
  {
    "id": 237,
    "tier": 1,
    "deck": 3,
    "word": "despite",
    "ipa": "",
    "translation": "несмотря на",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to despite this properly.",
      "ru": "Важно правильно сделать это (несмотря на)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to despite in daily life.",
      "ru": "Каждый старается (несмотря на) в повседневной жизни."
    },
    "quizOptions": [
      "несмотря на",
      "осведомлённый",
      "безумно уставший"
    ]
  },
  {
    "id": 238,
    "tier": 1,
    "deck": 3,
    "word": "determine",
    "ipa": "",
    "translation": "определять, решать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to determine this properly.",
      "ru": "Важно правильно сделать это (определять, решать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to determine in daily life.",
      "ru": "Каждый старается (определять, решать) в повседневной жизни."
    },
    "quizOptions": [
      "вдохновлять",
      "полагать, считать",
      "определять, решать"
    ]
  },
  {
    "id": 239,
    "tier": 1,
    "deck": 3,
    "word": "device",
    "ipa": "",
    "translation": "устройство",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to device this properly.",
      "ru": "Важно правильно сделать это (устройство)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to device in daily life.",
      "ru": "Каждый старается (устройство) в повседневной жизни."
    },
    "quizOptions": [
      "неизбежный",
      "осведомлённый",
      "устройство"
    ]
  },
  {
    "id": 240,
    "tier": 1,
    "deck": 3,
    "word": "disappoint",
    "ipa": "",
    "translation": "разочаровывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to disappoint this properly.",
      "ru": "Важно правильно сделать это (разочаровывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to disappoint in daily life.",
      "ru": "Каждый старается (разочаровывать) в повседневной жизни."
    },
    "quizOptions": [
      "разочаровывать",
      "окружение, среда",
      "поощрять, ободрять"
    ]
  },
  {
    "id": 241,
    "tier": 1,
    "deck": 3,
    "word": "discover",
    "ipa": "",
    "translation": "обнаруживать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to discover this properly.",
      "ru": "Важно правильно сделать это (обнаруживать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to discover in daily life.",
      "ru": "Каждый старается (обнаруживать) в повседневной жизни."
    },
    "quizOptions": [
      "продлевать, расширять",
      "обнаруживать",
      "задержка, откладывать"
    ]
  },
  {
    "id": 242,
    "tier": 1,
    "deck": 3,
    "word": "distinct",
    "ipa": "",
    "translation": "отчётливый, особый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to distinct this properly.",
      "ru": "Важно правильно сделать это (отчётливый, особый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to distinct in daily life.",
      "ru": "Каждый старается (отчётливый, особый) в повседневной жизни."
    },
    "quizOptions": [
      "необходимый, важный",
      "отчётливый, особый",
      "совершать, посвящать"
    ]
  },
  {
    "id": 243,
    "tier": 1,
    "deck": 3,
    "word": "disturb",
    "ipa": "",
    "translation": "беспокоить",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to disturb this properly.",
      "ru": "Важно правильно сделать это (беспокоить)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to disturb in daily life.",
      "ru": "Каждый старается (беспокоить) в повседневной жизни."
    },
    "quizOptions": [
      "беспокоить",
      "расстраивать, злить",
      "подход, приближаться"
    ]
  },
  {
    "id": 244,
    "tier": 1,
    "deck": 3,
    "word": "doubt",
    "ipa": "",
    "translation": "сомнение, сомневаться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to doubt this properly.",
      "ru": "Важно правильно сделать это (сомнение, сомневаться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to doubt in daily life.",
      "ru": "Каждый старается (сомнение, сомневаться) в повседневной жизни."
    },
    "quizOptions": [
      "необычайный",
      "сомнение, сомневаться",
      "беспокойство, касаться"
    ]
  },
  {
    "id": 245,
    "tier": 1,
    "deck": 3,
    "word": "eager",
    "ipa": "",
    "translation": "нетерпеливый, стремящийся",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to eager this properly.",
      "ru": "Важно правильно сделать это (нетерпеливый, стремящийся)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to eager in daily life.",
      "ru": "Каждый старается (нетерпеливый, стремящийся) в повседневной жизни."
    },
    "quizOptions": [
      "подчёркивать",
      "достигать",
      "нетерпеливый, стремящийся"
    ]
  },
  {
    "id": 246,
    "tier": 1,
    "deck": 3,
    "word": "efficient",
    "ipa": "",
    "translation": "эффективный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to efficient this properly.",
      "ru": "Важно правильно сделать это (эффективный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to efficient in daily life.",
      "ru": "Каждый старается (эффективный) в повседневной жизни."
    },
    "quizOptions": [
      "осведомлённый",
      "состоять из",
      "эффективный"
    ]
  },
  {
    "id": 247,
    "tier": 1,
    "deck": 3,
    "word": "emerge",
    "ipa": "",
    "translation": "появляться, всплывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to emerge this properly.",
      "ru": "Важно правильно сделать это (появляться, всплывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to emerge in daily life.",
      "ru": "Каждый старается (появляться, всплывать) в повседневной жизни."
    },
    "quizOptions": [
      "появляться, всплывать",
      "в самую точку",
      "десятилетие"
    ]
  },
  {
    "id": 248,
    "tier": 1,
    "deck": 3,
    "word": "emphasize",
    "ipa": "",
    "translation": "подчёркивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to emphasize this properly.",
      "ru": "Важно правильно сделать это (подчёркивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to emphasize in daily life.",
      "ru": "Каждый старается (подчёркивать) в повседневной жизни."
    },
    "quizOptions": [
      "подчёркивать",
      "поощрять, ободрять",
      "жаловаться"
    ]
  },
  {
    "id": 249,
    "tier": 1,
    "deck": 3,
    "word": "enable",
    "ipa": "",
    "translation": "давать возможность",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to enable this properly.",
      "ru": "Важно правильно сделать это (давать возможность)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to enable in daily life.",
      "ru": "Каждый старается (давать возможность) в повседневной жизни."
    },
    "quizOptions": [
      "постоянный",
      "состоять из",
      "давать возможность"
    ]
  },
  {
    "id": 250,
    "tier": 1,
    "deck": 3,
    "word": "encourage",
    "ipa": "",
    "translation": "поощрять, ободрять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to encourage this properly.",
      "ru": "Важно правильно сделать это (поощрять, ободрять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to encourage in daily life.",
      "ru": "Каждый старается (поощрять, ободрять) в повседневной жизни."
    },
    "quizOptions": [
      "поощрять, ободрять",
      "вызов, сложная задача",
      "обстоятельство"
    ]
  },
  {
    "id": 251,
    "tier": 1,
    "deck": 3,
    "word": "ensure",
    "ipa": "",
    "translation": "обеспечивать, гарантировать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to ensure this properly.",
      "ru": "Важно правильно сделать это (обеспечивать, гарантировать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to ensure in daily life.",
      "ru": "Каждый старается (обеспечивать, гарантировать) в повседневной жизни."
    },
    "quizOptions": [
      "обеспечивать, гарантировать",
      "чушь, ерунда, мусор",
      "эффективный"
    ]
  },
  {
    "id": 252,
    "tier": 1,
    "deck": 3,
    "word": "entire",
    "ipa": "",
    "translation": "весь, целый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to entire this properly.",
      "ru": "Важно правильно сделать это (весь, целый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to entire in daily life.",
      "ru": "Каждый старается (весь, целый) в повседневной жизни."
    },
    "quizOptions": [
      "обнаруживать",
      "весь, целый",
      "беспокоить"
    ]
  },
  {
    "id": 253,
    "tier": 1,
    "deck": 3,
    "word": "environment",
    "ipa": "",
    "translation": "окружение, среда",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to environment this properly.",
      "ru": "Важно правильно сделать это (окружение, среда)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to environment in daily life.",
      "ru": "Каждый старается (окружение, среда) в повседневной жизни."
    },
    "quizOptions": [
      "окружение, среда",
      "расширять",
      "указывать"
    ]
  },
  {
    "id": 254,
    "tier": 1,
    "deck": 3,
    "word": "essential",
    "ipa": "",
    "translation": "необходимый, важный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to essential this properly.",
      "ru": "Важно правильно сделать это (необходимый, важный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to essential in daily life.",
      "ru": "Каждый старается (необходимый, важный) в повседневной жизни."
    },
    "quizOptions": [
      "доказательство, улика",
      "постоянный",
      "необходимый, важный"
    ]
  },
  {
    "id": 255,
    "tier": 1,
    "deck": 3,
    "word": "establish",
    "ipa": "",
    "translation": "устанавливать, основывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to establish this properly.",
      "ru": "Важно правильно сделать это (устанавливать, основывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to establish in daily life.",
      "ru": "Каждый старается (устанавливать, основывать) в повседневной жизни."
    },
    "quizOptions": [
      "необходимый, важный",
      "устанавливать, основывать",
      "весь, целый"
    ]
  },
  {
    "id": 256,
    "tier": 1,
    "deck": 3,
    "word": "estimate",
    "ipa": "",
    "translation": "оценивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to estimate this properly.",
      "ru": "Важно правильно сделать это (оценивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to estimate in daily life.",
      "ru": "Каждый старается (оценивать) в повседневной жизни."
    },
    "quizOptions": [
      "оценивать",
      "неизбежный",
      "запрещать"
    ]
  },
  {
    "id": 257,
    "tier": 1,
    "deck": 3,
    "word": "eventually",
    "ipa": "",
    "translation": "в конце концов",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to eventually this properly.",
      "ru": "Важно правильно сделать это (в конце концов)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to eventually in daily life.",
      "ru": "Каждый старается (в конце концов) в повседневной жизни."
    },
    "quizOptions": [
      "зависеть",
      "в конце концов",
      "совершать, посвящать"
    ]
  },
  {
    "id": 258,
    "tier": 1,
    "deck": 3,
    "word": "evidence",
    "ipa": "",
    "translation": "доказательство, улика",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to evidence this properly.",
      "ru": "Важно правильно сделать это (доказательство, улика)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to evidence in daily life.",
      "ru": "Каждый старается (доказательство, улика) в повседневной жизни."
    },
    "quizOptions": [
      "доказательство, улика",
      "появляться, всплывать",
      "подход, приближаться"
    ]
  },
  {
    "id": 259,
    "tier": 1,
    "deck": 3,
    "word": "examine",
    "ipa": "",
    "translation": "осматривать, изучать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to examine this properly.",
      "ru": "Важно правильно сделать это (осматривать, изучать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to examine in daily life.",
      "ru": "Каждый старается (осматривать, изучать) в повседневной жизни."
    },
    "quizOptions": [
      "осматривать, изучать",
      "подтверждать",
      "ключевой, решающий"
    ]
  },
  {
    "id": 260,
    "tier": 1,
    "deck": 3,
    "word": "exceed",
    "ipa": "",
    "translation": "превышать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to exceed this properly.",
      "ru": "Важно правильно сделать это (превышать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to exceed in daily life.",
      "ru": "Каждый старается (превышать) в повседневной жизни."
    },
    "quizOptions": [
      "особенность, черта",
      "в конце концов",
      "превышать"
    ]
  },
  {
    "id": 261,
    "tier": 1,
    "deck": 3,
    "word": "exclude",
    "ipa": "",
    "translation": "исключать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to exclude this properly.",
      "ru": "Важно правильно сделать это (исключать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to exclude in daily life.",
      "ru": "Каждый старается (исключать) в повседневной жизни."
    },
    "quizOptions": [
      "устройство",
      "исключать",
      "дерзкий, нагловатый (с шармом)"
    ]
  },
  {
    "id": 262,
    "tier": 1,
    "deck": 3,
    "word": "expand",
    "ipa": "",
    "translation": "расширять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to expand this properly.",
      "ru": "Важно правильно сделать это (расширять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to expand in daily life.",
      "ru": "Каждый старается (расширять) в повседневной жизни."
    },
    "quizOptions": [
      "расширять",
      "давать возможность",
      "справляться, ручка"
    ]
  },
  {
    "id": 263,
    "tier": 1,
    "deck": 3,
    "word": "expect",
    "ipa": "",
    "translation": "ожидать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to expect this properly.",
      "ru": "Важно правильно сделать это (ожидать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to expect in daily life.",
      "ru": "Каждый старается (ожидать) в повседневной жизни."
    },
    "quizOptions": [
      "безумно уставший",
      "ожидать",
      "необычайный"
    ]
  },
  {
    "id": 264,
    "tier": 1,
    "deck": 3,
    "word": "expense",
    "ipa": "",
    "translation": "расход, трата",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to expense this properly.",
      "ru": "Важно правильно сделать это (расход, трата)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to expense in daily life.",
      "ru": "Каждый старается (расход, трата) в повседневной жизни."
    },
    "quizOptions": [
      "расход, трата",
      "опознавать, определять",
      "решено, улажено, готово"
    ]
  },
  {
    "id": 265,
    "tier": 1,
    "deck": 3,
    "word": "experience",
    "ipa": "",
    "translation": "опыт, испытывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to experience this properly.",
      "ru": "Важно правильно сделать это (опыт, испытывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to experience in daily life.",
      "ru": "Каждый старается (опыт, испытывать) в повседневной жизни."
    },
    "quizOptions": [
      "запрещать",
      "необычайный",
      "опыт, испытывать"
    ]
  },
  {
    "id": 266,
    "tier": 1,
    "deck": 3,
    "word": "explore",
    "ipa": "",
    "translation": "исследовать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to explore this properly.",
      "ru": "Важно правильно сделать это (исследовать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to explore in daily life.",
      "ru": "Каждый старается (исследовать) в повседневной жизни."
    },
    "quizOptions": [
      "обнаруживать",
      "исследовать",
      "хотеть, испытывать симпатию"
    ]
  },
  {
    "id": 267,
    "tier": 1,
    "deck": 3,
    "word": "expose",
    "ipa": "",
    "translation": "разоблачать, подвергать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to expose this properly.",
      "ru": "Важно правильно сделать это (разоблачать, подвергать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to expose in daily life.",
      "ru": "Каждый старается (разоблачать, подвергать) в повседневной жизни."
    },
    "quizOptions": [
      "выгода, польза",
      "разоблачать, подвергать",
      "полагать, считать"
    ]
  },
  {
    "id": 268,
    "tier": 1,
    "deck": 3,
    "word": "extend",
    "ipa": "",
    "translation": "продлевать, расширять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to extend this properly.",
      "ru": "Важно правильно сделать это (продлевать, расширять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to extend in daily life.",
      "ru": "Каждый старается (продлевать, расширять) в повседневной жизни."
    },
    "quizOptions": [
      "указывать",
      "продлевать, расширять",
      "эффективный"
    ]
  },
  {
    "id": 269,
    "tier": 1,
    "deck": 3,
    "word": "extraordinary",
    "ipa": "",
    "translation": "необычайный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to extraordinary this properly.",
      "ru": "Важно правильно сделать это (необычайный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to extraordinary in daily life.",
      "ru": "Каждый старается (необычайный) в повседневной жизни."
    },
    "quizOptions": [
      "необычайный",
      "устройство",
      "безумно уставший"
    ]
  },
  {
    "id": 270,
    "tier": 1,
    "deck": 3,
    "word": "familiar",
    "ipa": "",
    "translation": "знакомый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to familiar this properly.",
      "ru": "Важно правильно сделать это (знакомый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to familiar in daily life.",
      "ru": "Каждый старается (знакомый) в повседневной жизни."
    },
    "quizOptions": [
      "хотеть, испытывать симпатию",
      "знакомый",
      "вдохновлять"
    ]
  },
  {
    "id": 271,
    "tier": 1,
    "deck": 3,
    "word": "fault",
    "ipa": "",
    "translation": "вина, неисправность",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to fault this properly.",
      "ru": "Важно правильно сделать это (вина, неисправность)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to fault in daily life.",
      "ru": "Каждый старается (вина, неисправность) в повседневной жизни."
    },
    "quizOptions": [
      "чушь, ерунда, мусор",
      "вина, неисправность",
      "заслуживать"
    ]
  },
  {
    "id": 272,
    "tier": 1,
    "deck": 3,
    "word": "feature",
    "ipa": "",
    "translation": "особенность, черта",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to feature this properly.",
      "ru": "Важно правильно сделать это (особенность, черта)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to feature in daily life.",
      "ru": "Каждый старается (особенность, черта) в повседневной жизни."
    },
    "quizOptions": [
      "огромный",
      "улучшать",
      "особенность, черта"
    ]
  },
  {
    "id": 273,
    "tier": 1,
    "deck": 3,
    "word": "flexible",
    "ipa": "",
    "translation": "гибкий",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to flexible this properly.",
      "ru": "Важно правильно сделать это (гибкий)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to flexible in daily life.",
      "ru": "Каждый старается (гибкий) в повседневной жизни."
    },
    "quizOptions": [
      "потреблять",
      "гибкий",
      "определять, решать"
    ]
  },
  {
    "id": 274,
    "tier": 1,
    "deck": 3,
    "word": "focus",
    "ipa": "",
    "translation": "фокусироваться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to focus this properly.",
      "ru": "Важно правильно сделать это (фокусироваться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to focus in daily life.",
      "ru": "Каждый старается (фокусироваться) в повседневной жизни."
    },
    "quizOptions": [
      "фокусироваться",
      "обеспечивать, гарантировать",
      "разобраться, понять"
    ]
  },
  {
    "id": 275,
    "tier": 1,
    "deck": 3,
    "word": "forbid",
    "ipa": "",
    "translation": "запрещать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to forbid this properly.",
      "ru": "Важно правильно сделать это (запрещать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to forbid in daily life.",
      "ru": "Каждый старается (запрещать) в повседневной жизни."
    },
    "quizOptions": [
      "расширять",
      "запрещать",
      "избегать"
    ]
  },
  {
    "id": 276,
    "tier": 1,
    "deck": 3,
    "word": "force",
    "ipa": "",
    "translation": "сила, заставлять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to force this properly.",
      "ru": "Важно правильно сделать это (сила, заставлять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to force in daily life.",
      "ru": "Каждый старается (сила, заставлять) в повседневной жизни."
    },
    "quizOptions": [
      "сила, заставлять",
      "доказательство, улика",
      "вдохновлять"
    ]
  },
  {
    "id": 277,
    "tier": 1,
    "deck": 3,
    "word": "frequent",
    "ipa": "",
    "translation": "частый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to frequent this properly.",
      "ru": "Важно правильно сделать это (частый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to frequent in daily life.",
      "ru": "Каждый старается (частый) в повседневной жизни."
    },
    "quizOptions": [
      "избегать",
      "частый",
      "эффективный"
    ]
  },
  {
    "id": 278,
    "tier": 1,
    "deck": 3,
    "word": "frustrate",
    "ipa": "",
    "translation": "расстраивать, злить",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to frustrate this properly.",
      "ru": "Важно правильно сделать это (расстраивать, злить)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to frustrate in daily life.",
      "ru": "Каждый старается (расстраивать, злить) в повседневной жизни."
    },
    "quizOptions": [
      "расстраивать, злить",
      "избегать",
      "требовать, спрос"
    ]
  },
  {
    "id": 279,
    "tier": 1,
    "deck": 3,
    "word": "gain",
    "ipa": "",
    "translation": "получать, прирост",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to gain this properly.",
      "ru": "Важно правильно сделать это (получать, прирост)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to gain in daily life.",
      "ru": "Каждый старается (получать, прирост) в повседневной жизни."
    },
    "quizOptions": [
      "доставлять",
      "получать, прирост",
      "опознавать, определять"
    ]
  },
  {
    "id": 280,
    "tier": 1,
    "deck": 3,
    "word": "genuine",
    "ipa": "",
    "translation": "подлинный, искренний",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to genuine this properly.",
      "ru": "Важно правильно сделать это (подлинный, искренний)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to genuine in daily life.",
      "ru": "Каждый старается (подлинный, искренний) в повседневной жизни."
    },
    "quizOptions": [
      "подлинный, искренний",
      "подразумевать",
      "вызов, сложная задача"
    ]
  },
  {
    "id": 281,
    "tier": 1,
    "deck": 3,
    "word": "glance",
    "ipa": "",
    "translation": "беглый взгляд",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to glance this properly.",
      "ru": "Важно правильно сделать это (беглый взгляд)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to glance in daily life.",
      "ru": "Каждый старается (беглый взгляд) в повседневной жизни."
    },
    "quizOptions": [
      "хотеть, испытывать симпатию",
      "беглый взгляд",
      "необходимый, важный"
    ]
  },
  {
    "id": 282,
    "tier": 1,
    "deck": 3,
    "word": "gradual",
    "ipa": "",
    "translation": "постепенный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to gradual this properly.",
      "ru": "Важно правильно сделать это (постепенный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to gradual in daily life.",
      "ru": "Каждый старается (постепенный) в повседневной жизни."
    },
    "quizOptions": [
      "определять",
      "безумно уставший",
      "постепенный"
    ]
  },
  {
    "id": 283,
    "tier": 1,
    "deck": 3,
    "word": "grateful",
    "ipa": "",
    "translation": "благодарный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to grateful this properly.",
      "ru": "Важно правильно сделать это (благодарный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to grateful in daily life.",
      "ru": "Каждый старается (благодарный) в повседневной жизни."
    },
    "quizOptions": [
      "определять, решать",
      "благодарный",
      "разоблачать, подвергать"
    ]
  },
  {
    "id": 284,
    "tier": 1,
    "deck": 3,
    "word": "handle",
    "ipa": "",
    "translation": "справляться, ручка",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to handle this properly.",
      "ru": "Важно правильно сделать это (справляться, ручка)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to handle in daily life.",
      "ru": "Каждый старается (справляться, ручка) в повседневной жизни."
    },
    "quizOptions": [
      "совершать, посвящать",
      "справляться, ручка",
      "сомнение, сомневаться"
    ]
  },
  {
    "id": 285,
    "tier": 1,
    "deck": 3,
    "word": "hesitate",
    "ipa": "",
    "translation": "колебаться, медлить",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to hesitate this properly.",
      "ru": "Важно правильно сделать это (колебаться, медлить)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to hesitate in daily life.",
      "ru": "Каждый старается (колебаться, медлить) в повседневной жизни."
    },
    "quizOptions": [
      "колебаться, медлить",
      "улучшать",
      "подчёркивать"
    ]
  },
  {
    "id": 286,
    "tier": 1,
    "deck": 3,
    "word": "highlight",
    "ipa": "",
    "translation": "выделять, главный момент",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to highlight this properly.",
      "ru": "Важно правильно сделать это (выделять, главный момент)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to highlight in daily life.",
      "ru": "Каждый старается (выделять, главный момент) в повседневной жизни."
    },
    "quizOptions": [
      "разобраться, понять",
      "выделять, главный момент",
      "огромный"
    ]
  },
  {
    "id": 287,
    "tier": 1,
    "deck": 3,
    "word": "huge",
    "ipa": "",
    "translation": "огромный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to huge this properly.",
      "ru": "Важно правильно сделать это (огромный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to huge in daily life.",
      "ru": "Каждый старается (огромный) в повседневной жизни."
    },
    "quizOptions": [
      "огромный",
      "улучшать",
      "рассматривать, считать"
    ]
  },
  {
    "id": 288,
    "tier": 1,
    "deck": 3,
    "word": "identify",
    "ipa": "",
    "translation": "опознавать, определять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to identify this properly.",
      "ru": "Важно правильно сделать это (опознавать, определять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to identify in daily life.",
      "ru": "Каждый старается (опознавать, определять) в повседневной жизни."
    },
    "quizOptions": [
      "в конце концов",
      "опознавать, определять",
      "разобраться, понять"
    ]
  },
  {
    "id": 289,
    "tier": 1,
    "deck": 3,
    "word": "ignore",
    "ipa": "",
    "translation": "игнорировать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to ignore this properly.",
      "ru": "Важно правильно сделать это (игнорировать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to ignore in daily life.",
      "ru": "Каждый старается (игнорировать) в повседневной жизни."
    },
    "quizOptions": [
      "игнорировать",
      "решено, улажено, готово",
      "предполагать"
    ]
  },
  {
    "id": 290,
    "tier": 1,
    "deck": 3,
    "word": "impact",
    "ipa": "",
    "translation": "влияние, удар",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to impact this properly.",
      "ru": "Важно правильно сделать это (влияние, удар)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to impact in daily life.",
      "ru": "Каждый старается (влияние, удар) в повседневной жизни."
    },
    "quizOptions": [
      "расстраивать, злить",
      "вызов, сложная задача",
      "влияние, удар"
    ]
  },
  {
    "id": 291,
    "tier": 1,
    "deck": 3,
    "word": "imply",
    "ipa": "",
    "translation": "подразумевать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to imply this properly.",
      "ru": "Важно правильно сделать это (подразумевать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to imply in daily life.",
      "ru": "Каждый старается (подразумевать) в повседневной жизни."
    },
    "quizOptions": [
      "потреблять",
      "устройство",
      "подразумевать"
    ]
  },
  {
    "id": 292,
    "tier": 1,
    "deck": 3,
    "word": "improve",
    "ipa": "",
    "translation": "улучшать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to improve this properly.",
      "ru": "Важно правильно сделать это (улучшать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to improve in daily life.",
      "ru": "Каждый старается (улучшать) в повседневной жизни."
    },
    "quizOptions": [
      "беспокоить",
      "улучшать",
      "краткий"
    ]
  },
  {
    "id": 293,
    "tier": 1,
    "deck": 3,
    "word": "include",
    "ipa": "",
    "translation": "включать в себя",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to include this properly.",
      "ru": "Важно правильно сделать это (включать в себя)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to include in daily life.",
      "ru": "Каждый старается (включать в себя) в повседневной жизни."
    },
    "quizOptions": [
      "включать в себя",
      "огромный",
      "исключать"
    ]
  },
  {
    "id": 294,
    "tier": 1,
    "deck": 3,
    "word": "increase",
    "ipa": "",
    "translation": "увеличивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to increase this properly.",
      "ru": "Важно правильно сделать это (увеличивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to increase in daily life.",
      "ru": "Каждый старается (увеличивать) в повседневной жизни."
    },
    "quizOptions": [
      "потреблять",
      "осведомлённый",
      "увеличивать"
    ]
  },
  {
    "id": 295,
    "tier": 1,
    "deck": 3,
    "word": "indicate",
    "ipa": "",
    "translation": "указывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to indicate this properly.",
      "ru": "Важно правильно сделать это (указывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to indicate in daily life.",
      "ru": "Каждый старается (указывать) в повседневной жизни."
    },
    "quizOptions": [
      "подчёркивать",
      "указывать",
      "доставлять"
    ]
  },
  {
    "id": 296,
    "tier": 1,
    "deck": 3,
    "word": "inevitable",
    "ipa": "",
    "translation": "неизбежный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to inevitable this properly.",
      "ru": "Важно правильно сделать это (неизбежный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to inevitable in daily life.",
      "ru": "Каждый старается (неизбежный) в повседневной жизни."
    },
    "quizOptions": [
      "неизбежный",
      "подразумевать",
      "подход, приближаться"
    ]
  },
  {
    "id": 297,
    "tier": 1,
    "deck": 3,
    "word": "influence",
    "ipa": "",
    "translation": "влияние, влиять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to influence this properly.",
      "ru": "Важно правильно сделать это (влияние, влиять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to influence in daily life.",
      "ru": "Каждый старается (влияние, влиять) в повседневной жизни."
    },
    "quizOptions": [
      "разоблачать, подвергать",
      "влияние, влиять",
      "вызов, сложная задача"
    ]
  },
  {
    "id": 298,
    "tier": 1,
    "deck": 3,
    "word": "initial",
    "ipa": "",
    "translation": "начальный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to initial this properly.",
      "ru": "Важно правильно сделать это (начальный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to initial in daily life.",
      "ru": "Каждый старается (начальный) в повседневной жизни."
    },
    "quizOptions": [
      "превышать",
      "начальный",
      "обнаруживать"
    ]
  },
  {
    "id": 299,
    "tier": 1,
    "deck": 3,
    "word": "insist",
    "ipa": "",
    "translation": "настаивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to insist this properly.",
      "ru": "Важно правильно сделать это (настаивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to insist in daily life.",
      "ru": "Каждый старается (настаивать) в повседневной жизни."
    },
    "quizOptions": [
      "огромный",
      "снижаться, отклонять",
      "настаивать"
    ]
  },
  {
    "id": 300,
    "tier": 1,
    "deck": 3,
    "word": "inspire",
    "ipa": "",
    "translation": "вдохновлять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to inspire this properly.",
      "ru": "Важно правильно сделать это (вдохновлять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to inspire in daily life.",
      "ru": "Каждый старается (вдохновлять) в повседневной жизни."
    },
    "quizOptions": [
      "частый",
      "вдохновлять",
      "хотеть, испытывать симпатию"
    ]
  },
  {
    "id": 301,
    "tier": 1,
    "deck": 4,
    "word": "achieve",
    "ipa": "",
    "translation": "достигать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to achieve this properly.",
      "ru": "Важно правильно сделать это (достигать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to achieve in daily life.",
      "ru": "Каждый старается (достигать) в повседневной жизни."
    },
    "quizOptions": [
      "достигать",
      "в конце концов",
      "ключевой, решающий"
    ]
  },
  {
    "id": 302,
    "tier": 1,
    "deck": 4,
    "word": "approach",
    "ipa": "",
    "translation": "подход, приближаться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to approach this properly.",
      "ru": "Важно правильно сделать это (подход, приближаться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to approach in daily life.",
      "ru": "Каждый старается (подход, приближаться) в повседневной жизни."
    },
    "quizOptions": [
      "подход, приближаться",
      "состоять из",
      "превышать"
    ]
  },
  {
    "id": 303,
    "tier": 1,
    "deck": 4,
    "word": "assume",
    "ipa": "",
    "translation": "предполагать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to assume this properly.",
      "ru": "Важно правильно сделать это (предполагать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to assume in daily life.",
      "ru": "Каждый старается (предполагать) в повседневной жизни."
    },
    "quizOptions": [
      "предполагать",
      "приличный, достойный",
      "обеспечивать, гарантировать"
    ]
  },
  {
    "id": 304,
    "tier": 1,
    "deck": 4,
    "word": "avoid",
    "ipa": "",
    "translation": "избегать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to avoid this properly.",
      "ru": "Важно правильно сделать это (избегать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to avoid in daily life.",
      "ru": "Каждый старается (избегать) в повседневной жизни."
    },
    "quizOptions": [
      "безумно уставший",
      "решено, улажено, готово",
      "избегать"
    ]
  },
  {
    "id": 305,
    "tier": 1,
    "deck": 4,
    "word": "aware",
    "ipa": "",
    "translation": "осведомлённый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to aware this properly.",
      "ru": "Важно правильно сделать это (осведомлённый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to aware in daily life.",
      "ru": "Каждый старается (осведомлённый) в повседневной жизни."
    },
    "quizOptions": [
      "осведомлённый",
      "влияние, удар",
      "утверждать, заявлять"
    ]
  },
  {
    "id": 306,
    "tier": 1,
    "deck": 4,
    "word": "benefit",
    "ipa": "",
    "translation": "выгода, польза",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to benefit this properly.",
      "ru": "Важно правильно сделать это (выгода, польза)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to benefit in daily life.",
      "ru": "Каждый старается (выгода, польза) в повседневной жизни."
    },
    "quizOptions": [
      "выгода, польза",
      "осматривать, изучать",
      "отчётливый, особый"
    ]
  },
  {
    "id": 307,
    "tier": 1,
    "deck": 4,
    "word": "beyond",
    "ipa": "",
    "translation": "за пределами",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to beyond this properly.",
      "ru": "Важно правильно сделать это (за пределами)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to beyond in daily life.",
      "ru": "Каждый старается (за пределами) в повседневной жизни."
    },
    "quizOptions": [
      "за пределами",
      "запрещать",
      "краткий"
    ]
  },
  {
    "id": 308,
    "tier": 1,
    "deck": 4,
    "word": "brief",
    "ipa": "",
    "translation": "краткий",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to brief this properly.",
      "ru": "Важно правильно сделать это (краткий)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to brief in daily life.",
      "ru": "Каждый старается (краткий) в повседневной жизни."
    },
    "quizOptions": [
      "совершать, посвящать",
      "обстоятельство",
      "краткий"
    ]
  },
  {
    "id": 309,
    "tier": 1,
    "deck": 4,
    "word": "capable",
    "ipa": "",
    "translation": "способный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to capable this properly.",
      "ru": "Важно правильно сделать это (способный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to capable in daily life.",
      "ru": "Каждый старается (способный) в повседневной жизни."
    },
    "quizOptions": [
      "достигать",
      "способный",
      "обеспечивать, гарантировать"
    ]
  },
  {
    "id": 310,
    "tier": 1,
    "deck": 4,
    "word": "challenge",
    "ipa": "",
    "translation": "вызов, сложная задача",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to challenge this properly.",
      "ru": "Важно правильно сделать это (вызов, сложная задача)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to challenge in daily life.",
      "ru": "Каждый старается (вызов, сложная задача) в повседневной жизни."
    },
    "quizOptions": [
      "полагать, считать",
      "зависеть",
      "вызов, сложная задача"
    ]
  },
  {
    "id": 311,
    "tier": 1,
    "deck": 4,
    "word": "circumstance",
    "ipa": "",
    "translation": "обстоятельство",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to circumstance this properly.",
      "ru": "Важно правильно сделать это (обстоятельство)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to circumstance in daily life.",
      "ru": "Каждый старается (обстоятельство) в повседневной жизни."
    },
    "quizOptions": [
      "расстраивать, злить",
      "обстоятельство",
      "доказательство, улика"
    ]
  },
  {
    "id": 312,
    "tier": 1,
    "deck": 4,
    "word": "claim",
    "ipa": "",
    "translation": "утверждать, заявлять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to claim this properly.",
      "ru": "Важно правильно сделать это (утверждать, заявлять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to claim in daily life.",
      "ru": "Каждый старается (утверждать, заявлять) в повседневной жизни."
    },
    "quizOptions": [
      "опыт, испытывать",
      "чушь, ерунда, мусор",
      "утверждать, заявлять"
    ]
  },
  {
    "id": 313,
    "tier": 1,
    "deck": 4,
    "word": "commit",
    "ipa": "",
    "translation": "совершать, посвящать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to commit this properly.",
      "ru": "Важно правильно сделать это (совершать, посвящать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to commit in daily life.",
      "ru": "Каждый старается (совершать, посвящать) в повседневной жизни."
    },
    "quizOptions": [
      "ключевой, решающий",
      "совершать, посвящать",
      "начальный"
    ]
  },
  {
    "id": 314,
    "tier": 1,
    "deck": 4,
    "word": "compare",
    "ipa": "",
    "translation": "сравнивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to compare this properly.",
      "ru": "Важно правильно сделать это (сравнивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to compare in daily life.",
      "ru": "Каждый старается (сравнивать) в повседневной жизни."
    },
    "quizOptions": [
      "поощрять, ободрять",
      "огромный",
      "сравнивать"
    ]
  },
  {
    "id": 315,
    "tier": 1,
    "deck": 4,
    "word": "complain",
    "ipa": "",
    "translation": "жаловаться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to complain this properly.",
      "ru": "Важно правильно сделать это (жаловаться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to complain in daily life.",
      "ru": "Каждый старается (жаловаться) в повседневной жизни."
    },
    "quizOptions": [
      "жаловаться",
      "исследовать",
      "оценивать"
    ]
  },
  {
    "id": 316,
    "tier": 1,
    "deck": 4,
    "word": "concern",
    "ipa": "",
    "translation": "беспокойство, касаться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to concern this properly.",
      "ru": "Важно правильно сделать это (беспокойство, касаться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to concern in daily life.",
      "ru": "Каждый старается (беспокойство, касаться) в повседневной жизни."
    },
    "quizOptions": [
      "подлинный, искренний",
      "беспокойство, касаться",
      "обеспечивать, гарантировать"
    ]
  },
  {
    "id": 317,
    "tier": 1,
    "deck": 4,
    "word": "confirm",
    "ipa": "",
    "translation": "подтверждать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to confirm this properly.",
      "ru": "Важно правильно сделать это (подтверждать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to confirm in daily life.",
      "ru": "Каждый старается (подтверждать) в повседневной жизни."
    },
    "quizOptions": [
      "вина, неисправность",
      "подтверждать",
      "вдохновлять"
    ]
  },
  {
    "id": 318,
    "tier": 1,
    "deck": 4,
    "word": "consequence",
    "ipa": "",
    "translation": "последствие",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to consequence this properly.",
      "ru": "Важно правильно сделать это (последствие)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to consequence in daily life.",
      "ru": "Каждый старается (последствие) в повседневной жизни."
    },
    "quizOptions": [
      "поощрять, ободрять",
      "последствие",
      "вызов, сложная задача"
    ]
  },
  {
    "id": 319,
    "tier": 1,
    "deck": 4,
    "word": "consider",
    "ipa": "",
    "translation": "рассматривать, считать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to consider this properly.",
      "ru": "Важно правильно сделать это (рассматривать, считать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to consider in daily life.",
      "ru": "Каждый старается (рассматривать, считать) в повседневной жизни."
    },
    "quizOptions": [
      "справляться",
      "расширять",
      "рассматривать, считать"
    ]
  },
  {
    "id": 320,
    "tier": 1,
    "deck": 4,
    "word": "consist",
    "ipa": "",
    "translation": "состоять из",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to consist this properly.",
      "ru": "Важно правильно сделать это (состоять из)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to consist in daily life.",
      "ru": "Каждый старается (состоять из) в повседневной жизни."
    },
    "quizOptions": [
      "состоять из",
      "беглый взгляд",
      "колебаться, медлить"
    ]
  },
  {
    "id": 321,
    "tier": 1,
    "deck": 4,
    "word": "constant",
    "ipa": "",
    "translation": "постоянный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to constant this properly.",
      "ru": "Важно правильно сделать это (постоянный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to constant in daily life.",
      "ru": "Каждый старается (постоянный) в повседневной жизни."
    },
    "quizOptions": [
      "постоянный",
      "требовать, спрос",
      "в самую точку"
    ]
  },
  {
    "id": 322,
    "tier": 1,
    "deck": 4,
    "word": "consume",
    "ipa": "",
    "translation": "потреблять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to consume this properly.",
      "ru": "Важно правильно сделать это (потреблять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to consume in daily life.",
      "ru": "Каждый старается (потреблять) в повседневной жизни."
    },
    "quizOptions": [
      "постепенный",
      "поощрять, ободрять",
      "потреблять"
    ]
  },
  {
    "id": 323,
    "tier": 1,
    "deck": 4,
    "word": "convince",
    "ipa": "",
    "translation": "убеждать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to convince this properly.",
      "ru": "Важно правильно сделать это (убеждать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to convince in daily life.",
      "ru": "Каждый старается (убеждать) в повседневной жизни."
    },
    "quizOptions": [
      "убеждать",
      "появляться, всплывать",
      "сомнение, сомневаться"
    ]
  },
  {
    "id": 324,
    "tier": 1,
    "deck": 4,
    "word": "cope",
    "ipa": "",
    "translation": "справляться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to cope this properly.",
      "ru": "Важно правильно сделать это (справляться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to cope in daily life.",
      "ru": "Каждый старается (справляться) в повседневной жизни."
    },
    "quizOptions": [
      "расширять",
      "справляться",
      "обнаруживать"
    ]
  },
  {
    "id": 325,
    "tier": 1,
    "deck": 4,
    "word": "crucial",
    "ipa": "",
    "translation": "ключевой, решающий",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to crucial this properly.",
      "ru": "Важно правильно сделать это (ключевой, решающий)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to crucial in daily life.",
      "ru": "Каждый старается (ключевой, решающий) в повседневной жизни."
    },
    "quizOptions": [
      "ключевой, решающий",
      "рассматривать, считать",
      "избегать"
    ]
  },
  {
    "id": 326,
    "tier": 1,
    "deck": 4,
    "word": "curious",
    "ipa": "",
    "translation": "любопытный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to curious this properly.",
      "ru": "Важно правильно сделать это (любопытный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to curious in daily life.",
      "ru": "Каждый старается (любопытный) в повседневной жизни."
    },
    "quizOptions": [
      "улучшать",
      "заслуживать",
      "любопытный"
    ]
  },
  {
    "id": 327,
    "tier": 1,
    "deck": 4,
    "word": "decade",
    "ipa": "",
    "translation": "десятилетие",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to decade this properly.",
      "ru": "Важно правильно сделать это (десятилетие)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to decade in daily life.",
      "ru": "Каждый старается (десятилетие) в повседневной жизни."
    },
    "quizOptions": [
      "десятилетие",
      "подразумевать",
      "полагать, считать"
    ]
  },
  {
    "id": 328,
    "tier": 1,
    "deck": 4,
    "word": "decent",
    "ipa": "",
    "translation": "приличный, достойный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to decent this properly.",
      "ru": "Важно правильно сделать это (приличный, достойный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to decent in daily life.",
      "ru": "Каждый старается (приличный, достойный) в повседневной жизни."
    },
    "quizOptions": [
      "разобраться, понять",
      "приличный, достойный",
      "обнаруживать"
    ]
  },
  {
    "id": 329,
    "tier": 1,
    "deck": 4,
    "word": "decline",
    "ipa": "",
    "translation": "снижаться, отклонять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to decline this properly.",
      "ru": "Важно правильно сделать это (снижаться, отклонять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to decline in daily life.",
      "ru": "Каждый старается (снижаться, отклонять) в повседневной жизни."
    },
    "quizOptions": [
      "появляться, всплывать",
      "осведомлённый",
      "снижаться, отклонять"
    ]
  },
  {
    "id": 330,
    "tier": 1,
    "deck": 4,
    "word": "define",
    "ipa": "",
    "translation": "определять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to define this properly.",
      "ru": "Важно правильно сделать это (определять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to define in daily life.",
      "ru": "Каждый старается (определять) в повседневной жизни."
    },
    "quizOptions": [
      "определять",
      "ужасно расстроенный",
      "вдохновлять"
    ]
  },
  {
    "id": 331,
    "tier": 1,
    "deck": 4,
    "word": "delay",
    "ipa": "",
    "translation": "задержка, откладывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to delay this properly.",
      "ru": "Важно правильно сделать это (задержка, откладывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to delay in daily life.",
      "ru": "Каждый старается (задержка, откладывать) в повседневной жизни."
    },
    "quizOptions": [
      "знакомый",
      "задержка, откладывать",
      "сравнивать"
    ]
  },
  {
    "id": 332,
    "tier": 1,
    "deck": 4,
    "word": "deliver",
    "ipa": "",
    "translation": "доставлять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to deliver this properly.",
      "ru": "Важно правильно сделать это (доставлять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to deliver in daily life.",
      "ru": "Каждый старается (доставлять) в повседневной жизни."
    },
    "quizOptions": [
      "доставлять",
      "требовать, спрос",
      "появляться, всплывать"
    ]
  },
  {
    "id": 333,
    "tier": 1,
    "deck": 4,
    "word": "demand",
    "ipa": "",
    "translation": "требовать, спрос",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to demand this properly.",
      "ru": "Важно правильно сделать это (требовать, спрос)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to demand in daily life.",
      "ru": "Каждый старается (требовать, спрос) в повседневной жизни."
    },
    "quizOptions": [
      "подход, приближаться",
      "ключевой, решающий",
      "требовать, спрос"
    ]
  },
  {
    "id": 334,
    "tier": 1,
    "deck": 4,
    "word": "deny",
    "ipa": "",
    "translation": "отрицать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to deny this properly.",
      "ru": "Важно правильно сделать это (отрицать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to deny in daily life.",
      "ru": "Каждый старается (отрицать) в повседневной жизни."
    },
    "quizOptions": [
      "отрицать",
      "расстраивать, злить",
      "расход, трата"
    ]
  },
  {
    "id": 335,
    "tier": 1,
    "deck": 4,
    "word": "depend",
    "ipa": "",
    "translation": "зависеть",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to depend this properly.",
      "ru": "Важно правильно сделать это (зависеть)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to depend in daily life.",
      "ru": "Каждый старается (зависеть) в повседневной жизни."
    },
    "quizOptions": [
      "весь, целый",
      "сомнение, сомневаться",
      "зависеть"
    ]
  },
  {
    "id": 336,
    "tier": 1,
    "deck": 4,
    "word": "deserve",
    "ipa": "",
    "translation": "заслуживать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to deserve this properly.",
      "ru": "Важно правильно сделать это (заслуживать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to deserve in daily life.",
      "ru": "Каждый старается (заслуживать) в повседневной жизни."
    },
    "quizOptions": [
      "постоянный",
      "заслуживать",
      "приличный, достойный"
    ]
  },
  {
    "id": 337,
    "tier": 1,
    "deck": 4,
    "word": "despite",
    "ipa": "",
    "translation": "несмотря на",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to despite this properly.",
      "ru": "Важно правильно сделать это (несмотря на)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to despite in daily life.",
      "ru": "Каждый старается (несмотря на) в повседневной жизни."
    },
    "quizOptions": [
      "нетерпеливый, стремящийся",
      "достигать",
      "несмотря на"
    ]
  },
  {
    "id": 338,
    "tier": 1,
    "deck": 4,
    "word": "determine",
    "ipa": "",
    "translation": "определять, решать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to determine this properly.",
      "ru": "Важно правильно сделать это (определять, решать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to determine in daily life.",
      "ru": "Каждый старается (определять, решать) в повседневной жизни."
    },
    "quizOptions": [
      "дерзкий, нагловатый (с шармом)",
      "определять, решать",
      "заслуживать"
    ]
  },
  {
    "id": 339,
    "tier": 1,
    "deck": 4,
    "word": "device",
    "ipa": "",
    "translation": "устройство",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to device this properly.",
      "ru": "Важно правильно сделать это (устройство)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to device in daily life.",
      "ru": "Каждый старается (устройство) в повседневной жизни."
    },
    "quizOptions": [
      "устройство",
      "предполагать",
      "расстраивать, злить"
    ]
  },
  {
    "id": 340,
    "tier": 1,
    "deck": 4,
    "word": "disappoint",
    "ipa": "",
    "translation": "разочаровывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to disappoint this properly.",
      "ru": "Важно правильно сделать это (разочаровывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to disappoint in daily life.",
      "ru": "Каждый старается (разочаровывать) в повседневной жизни."
    },
    "quizOptions": [
      "разочаровывать",
      "разобраться, понять",
      "отрицать"
    ]
  },
  {
    "id": 341,
    "tier": 1,
    "deck": 4,
    "word": "discover",
    "ipa": "",
    "translation": "обнаруживать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to discover this properly.",
      "ru": "Важно правильно сделать это (обнаруживать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to discover in daily life.",
      "ru": "Каждый старается (обнаруживать) в повседневной жизни."
    },
    "quizOptions": [
      "достигать",
      "осведомлённый",
      "обнаруживать"
    ]
  },
  {
    "id": 342,
    "tier": 1,
    "deck": 4,
    "word": "distinct",
    "ipa": "",
    "translation": "отчётливый, особый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to distinct this properly.",
      "ru": "Важно правильно сделать это (отчётливый, особый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to distinct in daily life.",
      "ru": "Каждый старается (отчётливый, особый) в повседневной жизни."
    },
    "quizOptions": [
      "необходимый, важный",
      "расстраивать, злить",
      "отчётливый, особый"
    ]
  },
  {
    "id": 343,
    "tier": 1,
    "deck": 4,
    "word": "disturb",
    "ipa": "",
    "translation": "беспокоить",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to disturb this properly.",
      "ru": "Важно правильно сделать это (беспокоить)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to disturb in daily life.",
      "ru": "Каждый старается (беспокоить) в повседневной жизни."
    },
    "quizOptions": [
      "продлевать, расширять",
      "опыт, испытывать",
      "беспокоить"
    ]
  },
  {
    "id": 344,
    "tier": 1,
    "deck": 4,
    "word": "doubt",
    "ipa": "",
    "translation": "сомнение, сомневаться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to doubt this properly.",
      "ru": "Важно правильно сделать это (сомнение, сомневаться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to doubt in daily life.",
      "ru": "Каждый старается (сомнение, сомневаться) в повседневной жизни."
    },
    "quizOptions": [
      "сомнение, сомневаться",
      "несмотря на",
      "совершать, посвящать"
    ]
  },
  {
    "id": 345,
    "tier": 1,
    "deck": 4,
    "word": "eager",
    "ipa": "",
    "translation": "нетерпеливый, стремящийся",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to eager this properly.",
      "ru": "Важно правильно сделать это (нетерпеливый, стремящийся)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to eager in daily life.",
      "ru": "Каждый старается (нетерпеливый, стремящийся) в повседневной жизни."
    },
    "quizOptions": [
      "нетерпеливый, стремящийся",
      "устанавливать, основывать",
      "утверждать, заявлять"
    ]
  },
  {
    "id": 346,
    "tier": 1,
    "deck": 4,
    "word": "efficient",
    "ipa": "",
    "translation": "эффективный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to efficient this properly.",
      "ru": "Важно правильно сделать это (эффективный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to efficient in daily life.",
      "ru": "Каждый старается (эффективный) в повседневной жизни."
    },
    "quizOptions": [
      "постепенный",
      "эффективный",
      "обеспечивать, гарантировать"
    ]
  },
  {
    "id": 347,
    "tier": 1,
    "deck": 4,
    "word": "emerge",
    "ipa": "",
    "translation": "появляться, всплывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to emerge this properly.",
      "ru": "Важно правильно сделать это (появляться, всплывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to emerge in daily life.",
      "ru": "Каждый старается (появляться, всплывать) в повседневной жизни."
    },
    "quizOptions": [
      "появляться, всплывать",
      "обстоятельство",
      "сомнение, сомневаться"
    ]
  },
  {
    "id": 348,
    "tier": 1,
    "deck": 4,
    "word": "emphasize",
    "ipa": "",
    "translation": "подчёркивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to emphasize this properly.",
      "ru": "Важно правильно сделать это (подчёркивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to emphasize in daily life.",
      "ru": "Каждый старается (подчёркивать) в повседневной жизни."
    },
    "quizOptions": [
      "обеспечивать, гарантировать",
      "подчёркивать",
      "опознавать, определять"
    ]
  },
  {
    "id": 349,
    "tier": 1,
    "deck": 4,
    "word": "enable",
    "ipa": "",
    "translation": "давать возможность",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to enable this properly.",
      "ru": "Важно правильно сделать это (давать возможность)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to enable in daily life.",
      "ru": "Каждый старается (давать возможность) в повседневной жизни."
    },
    "quizOptions": [
      "игнорировать",
      "давать возможность",
      "беспокойство, касаться"
    ]
  },
  {
    "id": 350,
    "tier": 1,
    "deck": 4,
    "word": "encourage",
    "ipa": "",
    "translation": "поощрять, ободрять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to encourage this properly.",
      "ru": "Важно правильно сделать это (поощрять, ободрять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to encourage in daily life.",
      "ru": "Каждый старается (поощрять, ободрять) в повседневной жизни."
    },
    "quizOptions": [
      "запрещать",
      "превышать",
      "поощрять, ободрять"
    ]
  },
  {
    "id": 351,
    "tier": 1,
    "deck": 4,
    "word": "ensure",
    "ipa": "",
    "translation": "обеспечивать, гарантировать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to ensure this properly.",
      "ru": "Важно правильно сделать это (обеспечивать, гарантировать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to ensure in daily life.",
      "ru": "Каждый старается (обеспечивать, гарантировать) в повседневной жизни."
    },
    "quizOptions": [
      "влияние, влиять",
      "обеспечивать, гарантировать",
      "последствие"
    ]
  },
  {
    "id": 352,
    "tier": 1,
    "deck": 4,
    "word": "entire",
    "ipa": "",
    "translation": "весь, целый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to entire this properly.",
      "ru": "Важно правильно сделать это (весь, целый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to entire in daily life.",
      "ru": "Каждый старается (весь, целый) в повседневной жизни."
    },
    "quizOptions": [
      "хотеть, испытывать симпатию",
      "весь, целый",
      "безумно уставший"
    ]
  },
  {
    "id": 353,
    "tier": 1,
    "deck": 4,
    "word": "environment",
    "ipa": "",
    "translation": "окружение, среда",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to environment this properly.",
      "ru": "Важно правильно сделать это (окружение, среда)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to environment in daily life.",
      "ru": "Каждый старается (окружение, среда) в повседневной жизни."
    },
    "quizOptions": [
      "краткий",
      "окружение, среда",
      "колебаться, медлить"
    ]
  },
  {
    "id": 354,
    "tier": 1,
    "deck": 4,
    "word": "essential",
    "ipa": "",
    "translation": "необходимый, важный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to essential this properly.",
      "ru": "Важно правильно сделать это (необходимый, важный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to essential in daily life.",
      "ru": "Каждый старается (необходимый, важный) в повседневной жизни."
    },
    "quizOptions": [
      "расширять",
      "необходимый, важный",
      "подлинный, искренний"
    ]
  },
  {
    "id": 355,
    "tier": 1,
    "deck": 4,
    "word": "establish",
    "ipa": "",
    "translation": "устанавливать, основывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to establish this properly.",
      "ru": "Важно правильно сделать это (устанавливать, основывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to establish in daily life.",
      "ru": "Каждый старается (устанавливать, основывать) в повседневной жизни."
    },
    "quizOptions": [
      "сравнивать",
      "неизбежный",
      "устанавливать, основывать"
    ]
  },
  {
    "id": 356,
    "tier": 1,
    "deck": 4,
    "word": "estimate",
    "ipa": "",
    "translation": "оценивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to estimate this properly.",
      "ru": "Важно правильно сделать это (оценивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to estimate in daily life.",
      "ru": "Каждый старается (оценивать) в повседневной жизни."
    },
    "quizOptions": [
      "ужасно расстроенный",
      "в самую точку",
      "оценивать"
    ]
  },
  {
    "id": 357,
    "tier": 1,
    "deck": 4,
    "word": "eventually",
    "ipa": "",
    "translation": "в конце концов",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to eventually this properly.",
      "ru": "Важно правильно сделать это (в конце концов)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to eventually in daily life.",
      "ru": "Каждый старается (в конце концов) в повседневной жизни."
    },
    "quizOptions": [
      "требовать, спрос",
      "расширять",
      "в конце концов"
    ]
  },
  {
    "id": 358,
    "tier": 1,
    "deck": 4,
    "word": "evidence",
    "ipa": "",
    "translation": "доказательство, улика",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to evidence this properly.",
      "ru": "Важно правильно сделать это (доказательство, улика)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to evidence in daily life.",
      "ru": "Каждый старается (доказательство, улика) в повседневной жизни."
    },
    "quizOptions": [
      "подразумевать",
      "доказательство, улика",
      "ужасно расстроенный"
    ]
  },
  {
    "id": 359,
    "tier": 1,
    "deck": 4,
    "word": "examine",
    "ipa": "",
    "translation": "осматривать, изучать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to examine this properly.",
      "ru": "Важно правильно сделать это (осматривать, изучать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to examine in daily life.",
      "ru": "Каждый старается (осматривать, изучать) в повседневной жизни."
    },
    "quizOptions": [
      "осматривать, изучать",
      "настаивать",
      "избегать"
    ]
  },
  {
    "id": 360,
    "tier": 1,
    "deck": 4,
    "word": "exceed",
    "ipa": "",
    "translation": "превышать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to exceed this properly.",
      "ru": "Важно правильно сделать это (превышать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to exceed in daily life.",
      "ru": "Каждый старается (превышать) в повседневной жизни."
    },
    "quizOptions": [
      "превышать",
      "доставлять",
      "дерзкий, нагловатый (с шармом)"
    ]
  },
  {
    "id": 361,
    "tier": 1,
    "deck": 4,
    "word": "exclude",
    "ipa": "",
    "translation": "исключать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to exclude this properly.",
      "ru": "Важно правильно сделать это (исключать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to exclude in daily life.",
      "ru": "Каждый старается (исключать) в повседневной жизни."
    },
    "quizOptions": [
      "запрещать",
      "частый",
      "исключать"
    ]
  },
  {
    "id": 362,
    "tier": 1,
    "deck": 4,
    "word": "expand",
    "ipa": "",
    "translation": "расширять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to expand this properly.",
      "ru": "Важно правильно сделать это (расширять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to expand in daily life.",
      "ru": "Каждый старается (расширять) в повседневной жизни."
    },
    "quizOptions": [
      "расширять",
      "огромный",
      "рассматривать, считать"
    ]
  },
  {
    "id": 363,
    "tier": 1,
    "deck": 4,
    "word": "expect",
    "ipa": "",
    "translation": "ожидать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to expect this properly.",
      "ru": "Важно правильно сделать это (ожидать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to expect in daily life.",
      "ru": "Каждый старается (ожидать) в повседневной жизни."
    },
    "quizOptions": [
      "благодарный",
      "ожидать",
      "сравнивать"
    ]
  },
  {
    "id": 364,
    "tier": 1,
    "deck": 4,
    "word": "expense",
    "ipa": "",
    "translation": "расход, трата",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to expense this properly.",
      "ru": "Важно правильно сделать это (расход, трата)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to expense in daily life.",
      "ru": "Каждый старается (расход, трата) в повседневной жизни."
    },
    "quizOptions": [
      "безумно уставший",
      "расход, трата",
      "вызов, сложная задача"
    ]
  },
  {
    "id": 365,
    "tier": 1,
    "deck": 4,
    "word": "experience",
    "ipa": "",
    "translation": "опыт, испытывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to experience this properly.",
      "ru": "Важно правильно сделать это (опыт, испытывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to experience in daily life.",
      "ru": "Каждый старается (опыт, испытывать) в повседневной жизни."
    },
    "quizOptions": [
      "увеличивать",
      "опыт, испытывать",
      "беспокойство, касаться"
    ]
  },
  {
    "id": 366,
    "tier": 1,
    "deck": 4,
    "word": "explore",
    "ipa": "",
    "translation": "исследовать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to explore this properly.",
      "ru": "Важно правильно сделать это (исследовать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to explore in daily life.",
      "ru": "Каждый старается (исследовать) в повседневной жизни."
    },
    "quizOptions": [
      "исследовать",
      "указывать",
      "отрицать"
    ]
  },
  {
    "id": 367,
    "tier": 1,
    "deck": 4,
    "word": "expose",
    "ipa": "",
    "translation": "разоблачать, подвергать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to expose this properly.",
      "ru": "Важно правильно сделать это (разоблачать, подвергать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to expose in daily life.",
      "ru": "Каждый старается (разоблачать, подвергать) в повседневной жизни."
    },
    "quizOptions": [
      "полагать, считать",
      "разоблачать, подвергать",
      "доказательство, улика"
    ]
  },
  {
    "id": 368,
    "tier": 1,
    "deck": 4,
    "word": "extend",
    "ipa": "",
    "translation": "продлевать, расширять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to extend this properly.",
      "ru": "Важно правильно сделать это (продлевать, расширять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to extend in daily life.",
      "ru": "Каждый старается (продлевать, расширять) в повседневной жизни."
    },
    "quizOptions": [
      "доказательство, улика",
      "беспокойство, касаться",
      "продлевать, расширять"
    ]
  },
  {
    "id": 369,
    "tier": 1,
    "deck": 4,
    "word": "extraordinary",
    "ipa": "",
    "translation": "необычайный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to extraordinary this properly.",
      "ru": "Важно правильно сделать это (необычайный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to extraordinary in daily life.",
      "ru": "Каждый старается (необычайный) в повседневной жизни."
    },
    "quizOptions": [
      "необычайный",
      "весь, целый",
      "огромный"
    ]
  },
  {
    "id": 370,
    "tier": 1,
    "deck": 4,
    "word": "familiar",
    "ipa": "",
    "translation": "знакомый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to familiar this properly.",
      "ru": "Важно правильно сделать это (знакомый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to familiar in daily life.",
      "ru": "Каждый старается (знакомый) в повседневной жизни."
    },
    "quizOptions": [
      "знакомый",
      "расширять",
      "мутный, сомнительный"
    ]
  },
  {
    "id": 371,
    "tier": 1,
    "deck": 4,
    "word": "fault",
    "ipa": "",
    "translation": "вина, неисправность",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to fault this properly.",
      "ru": "Важно правильно сделать это (вина, неисправность)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to fault in daily life.",
      "ru": "Каждый старается (вина, неисправность) в повседневной жизни."
    },
    "quizOptions": [
      "вина, неисправность",
      "получать, прирост",
      "совершать, посвящать"
    ]
  },
  {
    "id": 372,
    "tier": 1,
    "deck": 4,
    "word": "feature",
    "ipa": "",
    "translation": "особенность, черта",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to feature this properly.",
      "ru": "Важно правильно сделать это (особенность, черта)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to feature in daily life.",
      "ru": "Каждый старается (особенность, черта) в повседневной жизни."
    },
    "quizOptions": [
      "особенность, черта",
      "устанавливать, основывать",
      "безумно уставший"
    ]
  },
  {
    "id": 373,
    "tier": 1,
    "deck": 4,
    "word": "flexible",
    "ipa": "",
    "translation": "гибкий",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to flexible this properly.",
      "ru": "Важно правильно сделать это (гибкий)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to flexible in daily life.",
      "ru": "Каждый старается (гибкий) в повседневной жизни."
    },
    "quizOptions": [
      "гибкий",
      "неизбежный",
      "сила, заставлять"
    ]
  },
  {
    "id": 374,
    "tier": 1,
    "deck": 4,
    "word": "focus",
    "ipa": "",
    "translation": "фокусироваться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to focus this properly.",
      "ru": "Важно правильно сделать это (фокусироваться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to focus in daily life.",
      "ru": "Каждый старается (фокусироваться) в повседневной жизни."
    },
    "quizOptions": [
      "подход, приближаться",
      "разоблачать, подвергать",
      "фокусироваться"
    ]
  },
  {
    "id": 375,
    "tier": 1,
    "deck": 4,
    "word": "forbid",
    "ipa": "",
    "translation": "запрещать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to forbid this properly.",
      "ru": "Важно правильно сделать это (запрещать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to forbid in daily life.",
      "ru": "Каждый старается (запрещать) в повседневной жизни."
    },
    "quizOptions": [
      "краткий",
      "беспокоить",
      "запрещать"
    ]
  },
  {
    "id": 376,
    "tier": 1,
    "deck": 4,
    "word": "force",
    "ipa": "",
    "translation": "сила, заставлять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to force this properly.",
      "ru": "Важно правильно сделать это (сила, заставлять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to force in daily life.",
      "ru": "Каждый старается (сила, заставлять) в повседневной жизни."
    },
    "quizOptions": [
      "осматривать, изучать",
      "сила, заставлять",
      "доказательство, улика"
    ]
  },
  {
    "id": 377,
    "tier": 1,
    "deck": 4,
    "word": "frequent",
    "ipa": "",
    "translation": "частый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to frequent this properly.",
      "ru": "Важно правильно сделать это (частый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to frequent in daily life.",
      "ru": "Каждый старается (частый) в повседневной жизни."
    },
    "quizOptions": [
      "в самую точку",
      "частый",
      "доказательство, улика"
    ]
  },
  {
    "id": 378,
    "tier": 1,
    "deck": 4,
    "word": "frustrate",
    "ipa": "",
    "translation": "расстраивать, злить",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to frustrate this properly.",
      "ru": "Важно правильно сделать это (расстраивать, злить)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to frustrate in daily life.",
      "ru": "Каждый старается (расстраивать, злить) в повседневной жизни."
    },
    "quizOptions": [
      "влияние, удар",
      "постоянный",
      "расстраивать, злить"
    ]
  },
  {
    "id": 379,
    "tier": 1,
    "deck": 4,
    "word": "gain",
    "ipa": "",
    "translation": "получать, прирост",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to gain this properly.",
      "ru": "Важно правильно сделать это (получать, прирост)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to gain in daily life.",
      "ru": "Каждый старается (получать, прирост) в повседневной жизни."
    },
    "quizOptions": [
      "получать, прирост",
      "беспокоить",
      "мутный, сомнительный"
    ]
  },
  {
    "id": 380,
    "tier": 1,
    "deck": 4,
    "word": "genuine",
    "ipa": "",
    "translation": "подлинный, искренний",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to genuine this properly.",
      "ru": "Важно правильно сделать это (подлинный, искренний)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to genuine in daily life.",
      "ru": "Каждый старается (подлинный, искренний) в повседневной жизни."
    },
    "quizOptions": [
      "подлинный, искренний",
      "необычайный",
      "обстоятельство"
    ]
  },
  {
    "id": 381,
    "tier": 1,
    "deck": 4,
    "word": "glance",
    "ipa": "",
    "translation": "беглый взгляд",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to glance this properly.",
      "ru": "Важно правильно сделать это (беглый взгляд)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to glance in daily life.",
      "ru": "Каждый старается (беглый взгляд) в повседневной жизни."
    },
    "quizOptions": [
      "предполагать",
      "разоблачать, подвергать",
      "беглый взгляд"
    ]
  },
  {
    "id": 382,
    "tier": 1,
    "deck": 4,
    "word": "gradual",
    "ipa": "",
    "translation": "постепенный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to gradual this properly.",
      "ru": "Важно правильно сделать это (постепенный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to gradual in daily life.",
      "ru": "Каждый старается (постепенный) в повседневной жизни."
    },
    "quizOptions": [
      "постепенный",
      "расход, трата",
      "окружение, среда"
    ]
  },
  {
    "id": 383,
    "tier": 1,
    "deck": 4,
    "word": "grateful",
    "ipa": "",
    "translation": "благодарный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to grateful this properly.",
      "ru": "Важно правильно сделать это (благодарный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to grateful in daily life.",
      "ru": "Каждый старается (благодарный) в повседневной жизни."
    },
    "quizOptions": [
      "благодарный",
      "окружение, среда",
      "рассматривать, считать"
    ]
  },
  {
    "id": 384,
    "tier": 1,
    "deck": 4,
    "word": "handle",
    "ipa": "",
    "translation": "справляться, ручка",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to handle this properly.",
      "ru": "Важно правильно сделать это (справляться, ручка)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to handle in daily life.",
      "ru": "Каждый старается (справляться, ручка) в повседневной жизни."
    },
    "quizOptions": [
      "справляться, ручка",
      "исключать",
      "вина, неисправность"
    ]
  },
  {
    "id": 385,
    "tier": 1,
    "deck": 4,
    "word": "hesitate",
    "ipa": "",
    "translation": "колебаться, медлить",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to hesitate this properly.",
      "ru": "Важно правильно сделать это (колебаться, медлить)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to hesitate in daily life.",
      "ru": "Каждый старается (колебаться, медлить) в повседневной жизни."
    },
    "quizOptions": [
      "колебаться, медлить",
      "нетерпеливый, стремящийся",
      "подтверждать"
    ]
  },
  {
    "id": 386,
    "tier": 1,
    "deck": 4,
    "word": "highlight",
    "ipa": "",
    "translation": "выделять, главный момент",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to highlight this properly.",
      "ru": "Важно правильно сделать это (выделять, главный момент)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to highlight in daily life.",
      "ru": "Каждый старается (выделять, главный момент) в повседневной жизни."
    },
    "quizOptions": [
      "хотеть, испытывать симпатию",
      "обстоятельство",
      "выделять, главный момент"
    ]
  },
  {
    "id": 387,
    "tier": 1,
    "deck": 4,
    "word": "huge",
    "ipa": "",
    "translation": "огромный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to huge this properly.",
      "ru": "Важно правильно сделать это (огромный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to huge in daily life.",
      "ru": "Каждый старается (огромный) в повседневной жизни."
    },
    "quizOptions": [
      "огромный",
      "осведомлённый",
      "эффективный"
    ]
  },
  {
    "id": 388,
    "tier": 1,
    "deck": 4,
    "word": "identify",
    "ipa": "",
    "translation": "опознавать, определять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to identify this properly.",
      "ru": "Важно правильно сделать это (опознавать, определять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to identify in daily life.",
      "ru": "Каждый старается (опознавать, определять) в повседневной жизни."
    },
    "quizOptions": [
      "беглый взгляд",
      "опознавать, определять",
      "исключать"
    ]
  },
  {
    "id": 389,
    "tier": 1,
    "deck": 4,
    "word": "ignore",
    "ipa": "",
    "translation": "игнорировать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to ignore this properly.",
      "ru": "Важно правильно сделать это (игнорировать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to ignore in daily life.",
      "ru": "Каждый старается (игнорировать) в повседневной жизни."
    },
    "quizOptions": [
      "определять",
      "полагать, считать",
      "игнорировать"
    ]
  },
  {
    "id": 390,
    "tier": 1,
    "deck": 4,
    "word": "impact",
    "ipa": "",
    "translation": "влияние, удар",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to impact this properly.",
      "ru": "Важно правильно сделать это (влияние, удар)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to impact in daily life.",
      "ru": "Каждый старается (влияние, удар) в повседневной жизни."
    },
    "quizOptions": [
      "влияние, удар",
      "обеспечивать, гарантировать",
      "приличный, достойный"
    ]
  },
  {
    "id": 391,
    "tier": 1,
    "deck": 4,
    "word": "imply",
    "ipa": "",
    "translation": "подразумевать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to imply this properly.",
      "ru": "Важно правильно сделать это (подразумевать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to imply in daily life.",
      "ru": "Каждый старается (подразумевать) в повседневной жизни."
    },
    "quizOptions": [
      "подразумевать",
      "справляться",
      "ожидать"
    ]
  },
  {
    "id": 392,
    "tier": 1,
    "deck": 4,
    "word": "improve",
    "ipa": "",
    "translation": "улучшать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to improve this properly.",
      "ru": "Важно правильно сделать это (улучшать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to improve in daily life.",
      "ru": "Каждый старается (улучшать) в повседневной жизни."
    },
    "quizOptions": [
      "улучшать",
      "исследовать",
      "обеспечивать, гарантировать"
    ]
  },
  {
    "id": 393,
    "tier": 1,
    "deck": 4,
    "word": "include",
    "ipa": "",
    "translation": "включать в себя",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to include this properly.",
      "ru": "Важно правильно сделать это (включать в себя)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to include in daily life.",
      "ru": "Каждый старается (включать в себя) в повседневной жизни."
    },
    "quizOptions": [
      "безумно уставший",
      "влияние, удар",
      "включать в себя"
    ]
  },
  {
    "id": 394,
    "tier": 1,
    "deck": 4,
    "word": "increase",
    "ipa": "",
    "translation": "увеличивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to increase this properly.",
      "ru": "Важно правильно сделать это (увеличивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to increase in daily life.",
      "ru": "Каждый старается (увеличивать) в повседневной жизни."
    },
    "quizOptions": [
      "жаловаться",
      "требовать, спрос",
      "увеличивать"
    ]
  },
  {
    "id": 395,
    "tier": 1,
    "deck": 4,
    "word": "indicate",
    "ipa": "",
    "translation": "указывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to indicate this properly.",
      "ru": "Важно правильно сделать это (указывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to indicate in daily life.",
      "ru": "Каждый старается (указывать) в повседневной жизни."
    },
    "quizOptions": [
      "несмотря на",
      "осматривать, изучать",
      "указывать"
    ]
  },
  {
    "id": 396,
    "tier": 1,
    "deck": 4,
    "word": "inevitable",
    "ipa": "",
    "translation": "неизбежный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to inevitable this properly.",
      "ru": "Важно правильно сделать это (неизбежный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to inevitable in daily life.",
      "ru": "Каждый старается (неизбежный) в повседневной жизни."
    },
    "quizOptions": [
      "запрещать",
      "неизбежный",
      "сравнивать"
    ]
  },
  {
    "id": 397,
    "tier": 1,
    "deck": 4,
    "word": "influence",
    "ipa": "",
    "translation": "влияние, влиять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to influence this properly.",
      "ru": "Важно правильно сделать это (влияние, влиять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to influence in daily life.",
      "ru": "Каждый старается (влияние, влиять) в повседневной жизни."
    },
    "quizOptions": [
      "игнорировать",
      "влияние, влиять",
      "заслуживать"
    ]
  },
  {
    "id": 398,
    "tier": 1,
    "deck": 4,
    "word": "initial",
    "ipa": "",
    "translation": "начальный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to initial this properly.",
      "ru": "Важно правильно сделать это (начальный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to initial in daily life.",
      "ru": "Каждый старается (начальный) в повседневной жизни."
    },
    "quizOptions": [
      "определять, решать",
      "настаивать",
      "начальный"
    ]
  },
  {
    "id": 399,
    "tier": 1,
    "deck": 4,
    "word": "insist",
    "ipa": "",
    "translation": "настаивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to insist this properly.",
      "ru": "Важно правильно сделать это (настаивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to insist in daily life.",
      "ru": "Каждый старается (настаивать) в повседневной жизни."
    },
    "quizOptions": [
      "настаивать",
      "фокусироваться",
      "обстоятельство"
    ]
  },
  {
    "id": 400,
    "tier": 1,
    "deck": 4,
    "word": "inspire",
    "ipa": "",
    "translation": "вдохновлять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to inspire this properly.",
      "ru": "Важно правильно сделать это (вдохновлять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to inspire in daily life.",
      "ru": "Каждый старается (вдохновлять) в повседневной жизни."
    },
    "quizOptions": [
      "знакомый",
      "вдохновлять",
      "определять"
    ]
  },
  {
    "id": 401,
    "tier": 1,
    "deck": 5,
    "word": "achieve",
    "ipa": "",
    "translation": "достигать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to achieve this properly.",
      "ru": "Важно правильно сделать это (достигать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to achieve in daily life.",
      "ru": "Каждый старается (достигать) в повседневной жизни."
    },
    "quizOptions": [
      "поощрять, ободрять",
      "достигать",
      "несмотря на"
    ]
  },
  {
    "id": 402,
    "tier": 1,
    "deck": 5,
    "word": "approach",
    "ipa": "",
    "translation": "подход, приближаться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to approach this properly.",
      "ru": "Важно правильно сделать это (подход, приближаться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to approach in daily life.",
      "ru": "Каждый старается (подход, приближаться) в повседневной жизни."
    },
    "quizOptions": [
      "подход, приближаться",
      "совершать, посвящать",
      "окружение, среда"
    ]
  },
  {
    "id": 403,
    "tier": 1,
    "deck": 5,
    "word": "assume",
    "ipa": "",
    "translation": "предполагать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to assume this properly.",
      "ru": "Важно правильно сделать это (предполагать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to assume in daily life.",
      "ru": "Каждый старается (предполагать) в повседневной жизни."
    },
    "quizOptions": [
      "предполагать",
      "игнорировать",
      "подразумевать"
    ]
  },
  {
    "id": 404,
    "tier": 1,
    "deck": 5,
    "word": "avoid",
    "ipa": "",
    "translation": "избегать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to avoid this properly.",
      "ru": "Важно правильно сделать это (избегать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to avoid in daily life.",
      "ru": "Каждый старается (избегать) в повседневной жизни."
    },
    "quizOptions": [
      "запрещать",
      "избегать",
      "исследовать"
    ]
  },
  {
    "id": 405,
    "tier": 1,
    "deck": 5,
    "word": "aware",
    "ipa": "",
    "translation": "осведомлённый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to aware this properly.",
      "ru": "Важно правильно сделать это (осведомлённый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to aware in daily life.",
      "ru": "Каждый старается (осведомлённый) в повседневной жизни."
    },
    "quizOptions": [
      "огромный",
      "осведомлённый",
      "безумно уставший"
    ]
  },
  {
    "id": 406,
    "tier": 1,
    "deck": 5,
    "word": "benefit",
    "ipa": "",
    "translation": "выгода, польза",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to benefit this properly.",
      "ru": "Важно правильно сделать это (выгода, польза)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to benefit in daily life.",
      "ru": "Каждый старается (выгода, польза) в повседневной жизни."
    },
    "quizOptions": [
      "жаловаться",
      "выгода, польза",
      "необычайный"
    ]
  },
  {
    "id": 407,
    "tier": 1,
    "deck": 5,
    "word": "beyond",
    "ipa": "",
    "translation": "за пределами",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to beyond this properly.",
      "ru": "Важно правильно сделать это (за пределами)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to beyond in daily life.",
      "ru": "Каждый старается (за пределами) в повседневной жизни."
    },
    "quizOptions": [
      "сила, заставлять",
      "за пределами",
      "расширять"
    ]
  },
  {
    "id": 408,
    "tier": 1,
    "deck": 5,
    "word": "brief",
    "ipa": "",
    "translation": "краткий",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to brief this properly.",
      "ru": "Важно правильно сделать это (краткий)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to brief in daily life.",
      "ru": "Каждый старается (краткий) в повседневной жизни."
    },
    "quizOptions": [
      "краткий",
      "любопытный",
      "расширять"
    ]
  },
  {
    "id": 409,
    "tier": 1,
    "deck": 5,
    "word": "capable",
    "ipa": "",
    "translation": "способный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to capable this properly.",
      "ru": "Важно правильно сделать это (способный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to capable in daily life.",
      "ru": "Каждый старается (способный) в повседневной жизни."
    },
    "quizOptions": [
      "убеждать",
      "способный",
      "краткий"
    ]
  },
  {
    "id": 410,
    "tier": 1,
    "deck": 5,
    "word": "challenge",
    "ipa": "",
    "translation": "вызов, сложная задача",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to challenge this properly.",
      "ru": "Важно правильно сделать это (вызов, сложная задача)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to challenge in daily life.",
      "ru": "Каждый старается (вызов, сложная задача) в повседневной жизни."
    },
    "quizOptions": [
      "вызов, сложная задача",
      "совершать, посвящать",
      "увеличивать"
    ]
  },
  {
    "id": 411,
    "tier": 1,
    "deck": 5,
    "word": "circumstance",
    "ipa": "",
    "translation": "обстоятельство",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to circumstance this properly.",
      "ru": "Важно правильно сделать это (обстоятельство)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to circumstance in daily life.",
      "ru": "Каждый старается (обстоятельство) в повседневной жизни."
    },
    "quizOptions": [
      "обстоятельство",
      "исключать",
      "доказательство, улика"
    ]
  },
  {
    "id": 412,
    "tier": 1,
    "deck": 5,
    "word": "claim",
    "ipa": "",
    "translation": "утверждать, заявлять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to claim this properly.",
      "ru": "Важно правильно сделать это (утверждать, заявлять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to claim in daily life.",
      "ru": "Каждый старается (утверждать, заявлять) в повседневной жизни."
    },
    "quizOptions": [
      "знакомый",
      "утверждать, заявлять",
      "предполагать"
    ]
  },
  {
    "id": 413,
    "tier": 1,
    "deck": 5,
    "word": "commit",
    "ipa": "",
    "translation": "совершать, посвящать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to commit this properly.",
      "ru": "Важно правильно сделать это (совершать, посвящать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to commit in daily life.",
      "ru": "Каждый старается (совершать, посвящать) в повседневной жизни."
    },
    "quizOptions": [
      "вина, неисправность",
      "необходимый, важный",
      "совершать, посвящать"
    ]
  },
  {
    "id": 414,
    "tier": 1,
    "deck": 5,
    "word": "compare",
    "ipa": "",
    "translation": "сравнивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to compare this properly.",
      "ru": "Важно правильно сделать это (сравнивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to compare in daily life.",
      "ru": "Каждый старается (сравнивать) в повседневной жизни."
    },
    "quizOptions": [
      "особенность, черта",
      "сравнивать",
      "дерзкий, нагловатый (с шармом)"
    ]
  },
  {
    "id": 415,
    "tier": 1,
    "deck": 5,
    "word": "complain",
    "ipa": "",
    "translation": "жаловаться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to complain this properly.",
      "ru": "Важно правильно сделать это (жаловаться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to complain in daily life.",
      "ru": "Каждый старается (жаловаться) в повседневной жизни."
    },
    "quizOptions": [
      "жаловаться",
      "вдохновлять",
      "подтверждать"
    ]
  },
  {
    "id": 416,
    "tier": 1,
    "deck": 5,
    "word": "concern",
    "ipa": "",
    "translation": "беспокойство, касаться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to concern this properly.",
      "ru": "Важно правильно сделать это (беспокойство, касаться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to concern in daily life.",
      "ru": "Каждый старается (беспокойство, касаться) в повседневной жизни."
    },
    "quizOptions": [
      "десятилетие",
      "беспокойство, касаться",
      "за пределами"
    ]
  },
  {
    "id": 417,
    "tier": 1,
    "deck": 5,
    "word": "confirm",
    "ipa": "",
    "translation": "подтверждать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to confirm this properly.",
      "ru": "Важно правильно сделать это (подтверждать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to confirm in daily life.",
      "ru": "Каждый старается (подтверждать) в повседневной жизни."
    },
    "quizOptions": [
      "включать в себя",
      "опыт, испытывать",
      "подтверждать"
    ]
  },
  {
    "id": 418,
    "tier": 1,
    "deck": 5,
    "word": "consequence",
    "ipa": "",
    "translation": "последствие",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to consequence this properly.",
      "ru": "Важно правильно сделать это (последствие)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to consequence in daily life.",
      "ru": "Каждый старается (последствие) в повседневной жизни."
    },
    "quizOptions": [
      "в самую точку",
      "последствие",
      "запрещать"
    ]
  },
  {
    "id": 419,
    "tier": 1,
    "deck": 5,
    "word": "consider",
    "ipa": "",
    "translation": "рассматривать, считать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to consider this properly.",
      "ru": "Важно правильно сделать это (рассматривать, считать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to consider in daily life.",
      "ru": "Каждый старается (рассматривать, считать) в повседневной жизни."
    },
    "quizOptions": [
      "рассматривать, считать",
      "разоблачать, подвергать",
      "постепенный"
    ]
  },
  {
    "id": 420,
    "tier": 1,
    "deck": 5,
    "word": "consist",
    "ipa": "",
    "translation": "состоять из",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to consist this properly.",
      "ru": "Важно правильно сделать это (состоять из)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to consist in daily life.",
      "ru": "Каждый старается (состоять из) в повседневной жизни."
    },
    "quizOptions": [
      "беспокойство, касаться",
      "решено, улажено, готово",
      "состоять из"
    ]
  },
  {
    "id": 421,
    "tier": 1,
    "deck": 5,
    "word": "constant",
    "ipa": "",
    "translation": "постоянный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to constant this properly.",
      "ru": "Важно правильно сделать это (постоянный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to constant in daily life.",
      "ru": "Каждый старается (постоянный) в повседневной жизни."
    },
    "quizOptions": [
      "постоянный",
      "опознавать, определять",
      "получать, прирост"
    ]
  },
  {
    "id": 422,
    "tier": 1,
    "deck": 5,
    "word": "consume",
    "ipa": "",
    "translation": "потреблять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to consume this properly.",
      "ru": "Важно правильно сделать это (потреблять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to consume in daily life.",
      "ru": "Каждый старается (потреблять) в повседневной жизни."
    },
    "quizOptions": [
      "потреблять",
      "поощрять, ободрять",
      "обстоятельство"
    ]
  },
  {
    "id": 423,
    "tier": 1,
    "deck": 5,
    "word": "convince",
    "ipa": "",
    "translation": "убеждать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to convince this properly.",
      "ru": "Важно правильно сделать это (убеждать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to convince in daily life.",
      "ru": "Каждый старается (убеждать) в повседневной жизни."
    },
    "quizOptions": [
      "совершать, посвящать",
      "убеждать",
      "подчёркивать"
    ]
  },
  {
    "id": 424,
    "tier": 1,
    "deck": 5,
    "word": "cope",
    "ipa": "",
    "translation": "справляться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to cope this properly.",
      "ru": "Важно правильно сделать это (справляться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to cope in daily life.",
      "ru": "Каждый старается (справляться) в повседневной жизни."
    },
    "quizOptions": [
      "подтверждать",
      "справляться",
      "постепенный"
    ]
  },
  {
    "id": 425,
    "tier": 1,
    "deck": 5,
    "word": "crucial",
    "ipa": "",
    "translation": "ключевой, решающий",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to crucial this properly.",
      "ru": "Важно правильно сделать это (ключевой, решающий)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to crucial in daily life.",
      "ru": "Каждый старается (ключевой, решающий) в повседневной жизни."
    },
    "quizOptions": [
      "ключевой, решающий",
      "совершать, посвящать",
      "любопытный"
    ]
  },
  {
    "id": 426,
    "tier": 1,
    "deck": 5,
    "word": "curious",
    "ipa": "",
    "translation": "любопытный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to curious this properly.",
      "ru": "Важно правильно сделать это (любопытный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to curious in daily life.",
      "ru": "Каждый старается (любопытный) в повседневной жизни."
    },
    "quizOptions": [
      "превышать",
      "любопытный",
      "потреблять"
    ]
  },
  {
    "id": 427,
    "tier": 1,
    "deck": 5,
    "word": "decade",
    "ipa": "",
    "translation": "десятилетие",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to decade this properly.",
      "ru": "Важно правильно сделать это (десятилетие)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to decade in daily life.",
      "ru": "Каждый старается (десятилетие) в повседневной жизни."
    },
    "quizOptions": [
      "десятилетие",
      "частый",
      "достигать"
    ]
  },
  {
    "id": 428,
    "tier": 1,
    "deck": 5,
    "word": "decent",
    "ipa": "",
    "translation": "приличный, достойный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to decent this properly.",
      "ru": "Важно правильно сделать это (приличный, достойный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to decent in daily life.",
      "ru": "Каждый старается (приличный, достойный) в повседневной жизни."
    },
    "quizOptions": [
      "приличный, достойный",
      "в самую точку",
      "вина, неисправность"
    ]
  },
  {
    "id": 429,
    "tier": 1,
    "deck": 5,
    "word": "decline",
    "ipa": "",
    "translation": "снижаться, отклонять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to decline this properly.",
      "ru": "Важно правильно сделать это (снижаться, отклонять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to decline in daily life.",
      "ru": "Каждый старается (снижаться, отклонять) в повседневной жизни."
    },
    "quizOptions": [
      "постоянный",
      "снижаться, отклонять",
      "исследовать"
    ]
  },
  {
    "id": 430,
    "tier": 1,
    "deck": 5,
    "word": "define",
    "ipa": "",
    "translation": "определять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to define this properly.",
      "ru": "Важно правильно сделать это (определять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to define in daily life.",
      "ru": "Каждый старается (определять) в повседневной жизни."
    },
    "quizOptions": [
      "определять",
      "частый",
      "достигать"
    ]
  },
  {
    "id": 431,
    "tier": 1,
    "deck": 5,
    "word": "delay",
    "ipa": "",
    "translation": "задержка, откладывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to delay this properly.",
      "ru": "Важно правильно сделать это (задержка, откладывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to delay in daily life.",
      "ru": "Каждый старается (задержка, откладывать) в повседневной жизни."
    },
    "quizOptions": [
      "разочаровывать",
      "задержка, откладывать",
      "состоять из"
    ]
  },
  {
    "id": 432,
    "tier": 1,
    "deck": 5,
    "word": "deliver",
    "ipa": "",
    "translation": "доставлять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to deliver this properly.",
      "ru": "Важно правильно сделать это (доставлять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to deliver in daily life.",
      "ru": "Каждый старается (доставлять) в повседневной жизни."
    },
    "quizOptions": [
      "необходимый, важный",
      "последствие",
      "доставлять"
    ]
  },
  {
    "id": 433,
    "tier": 1,
    "deck": 5,
    "word": "demand",
    "ipa": "",
    "translation": "требовать, спрос",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to demand this properly.",
      "ru": "Важно правильно сделать это (требовать, спрос)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to demand in daily life.",
      "ru": "Каждый старается (требовать, спрос) в повседневной жизни."
    },
    "quizOptions": [
      "требовать, спрос",
      "способный",
      "поощрять, ободрять"
    ]
  },
  {
    "id": 434,
    "tier": 1,
    "deck": 5,
    "word": "deny",
    "ipa": "",
    "translation": "отрицать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to deny this properly.",
      "ru": "Важно правильно сделать это (отрицать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to deny in daily life.",
      "ru": "Каждый старается (отрицать) в повседневной жизни."
    },
    "quizOptions": [
      "отрицать",
      "любопытный",
      "опознавать, определять"
    ]
  },
  {
    "id": 435,
    "tier": 1,
    "deck": 5,
    "word": "depend",
    "ipa": "",
    "translation": "зависеть",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to depend this properly.",
      "ru": "Важно правильно сделать это (зависеть)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to depend in daily life.",
      "ru": "Каждый старается (зависеть) в повседневной жизни."
    },
    "quizOptions": [
      "указывать",
      "зависеть",
      "разочаровывать"
    ]
  },
  {
    "id": 436,
    "tier": 1,
    "deck": 5,
    "word": "deserve",
    "ipa": "",
    "translation": "заслуживать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to deserve this properly.",
      "ru": "Важно правильно сделать это (заслуживать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to deserve in daily life.",
      "ru": "Каждый старается (заслуживать) в повседневной жизни."
    },
    "quizOptions": [
      "необходимый, важный",
      "заслуживать",
      "расстраивать, злить"
    ]
  },
  {
    "id": 437,
    "tier": 1,
    "deck": 5,
    "word": "despite",
    "ipa": "",
    "translation": "несмотря на",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to despite this properly.",
      "ru": "Важно правильно сделать это (несмотря на)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to despite in daily life.",
      "ru": "Каждый старается (несмотря на) в повседневной жизни."
    },
    "quizOptions": [
      "состоять из",
      "несмотря на",
      "подчёркивать"
    ]
  },
  {
    "id": 438,
    "tier": 1,
    "deck": 5,
    "word": "determine",
    "ipa": "",
    "translation": "определять, решать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to determine this properly.",
      "ru": "Важно правильно сделать это (определять, решать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to determine in daily life.",
      "ru": "Каждый старается (определять, решать) в повседневной жизни."
    },
    "quizOptions": [
      "состоять из",
      "определять, решать",
      "исследовать"
    ]
  },
  {
    "id": 439,
    "tier": 1,
    "deck": 5,
    "word": "device",
    "ipa": "",
    "translation": "устройство",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to device this properly.",
      "ru": "Важно правильно сделать это (устройство)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to device in daily life.",
      "ru": "Каждый старается (устройство) в повседневной жизни."
    },
    "quizOptions": [
      "расстраивать, злить",
      "выгода, польза",
      "устройство"
    ]
  },
  {
    "id": 440,
    "tier": 1,
    "deck": 5,
    "word": "disappoint",
    "ipa": "",
    "translation": "разочаровывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to disappoint this properly.",
      "ru": "Важно правильно сделать это (разочаровывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to disappoint in daily life.",
      "ru": "Каждый старается (разочаровывать) в повседневной жизни."
    },
    "quizOptions": [
      "подразумевать",
      "эффективный",
      "разочаровывать"
    ]
  },
  {
    "id": 441,
    "tier": 1,
    "deck": 5,
    "word": "discover",
    "ipa": "",
    "translation": "обнаруживать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to discover this properly.",
      "ru": "Важно правильно сделать это (обнаруживать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to discover in daily life.",
      "ru": "Каждый старается (обнаруживать) в повседневной жизни."
    },
    "quizOptions": [
      "необычайный",
      "частый",
      "обнаруживать"
    ]
  },
  {
    "id": 442,
    "tier": 1,
    "deck": 5,
    "word": "distinct",
    "ipa": "",
    "translation": "отчётливый, особый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to distinct this properly.",
      "ru": "Важно правильно сделать это (отчётливый, особый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to distinct in daily life.",
      "ru": "Каждый старается (отчётливый, особый) в повседневной жизни."
    },
    "quizOptions": [
      "указывать",
      "отчётливый, особый",
      "мутный, сомнительный"
    ]
  },
  {
    "id": 443,
    "tier": 1,
    "deck": 5,
    "word": "disturb",
    "ipa": "",
    "translation": "беспокоить",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to disturb this properly.",
      "ru": "Важно правильно сделать это (беспокоить)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to disturb in daily life.",
      "ru": "Каждый старается (беспокоить) в повседневной жизни."
    },
    "quizOptions": [
      "беспокоить",
      "несмотря на",
      "опыт, испытывать"
    ]
  },
  {
    "id": 444,
    "tier": 1,
    "deck": 5,
    "word": "doubt",
    "ipa": "",
    "translation": "сомнение, сомневаться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to doubt this properly.",
      "ru": "Важно правильно сделать это (сомнение, сомневаться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to doubt in daily life.",
      "ru": "Каждый старается (сомнение, сомневаться) в повседневной жизни."
    },
    "quizOptions": [
      "выгода, польза",
      "оценивать",
      "сомнение, сомневаться"
    ]
  },
  {
    "id": 445,
    "tier": 1,
    "deck": 5,
    "word": "eager",
    "ipa": "",
    "translation": "нетерпеливый, стремящийся",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to eager this properly.",
      "ru": "Важно правильно сделать это (нетерпеливый, стремящийся)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to eager in daily life.",
      "ru": "Каждый старается (нетерпеливый, стремящийся) в повседневной жизни."
    },
    "quizOptions": [
      "нетерпеливый, стремящийся",
      "превышать",
      "подтверждать"
    ]
  },
  {
    "id": 446,
    "tier": 1,
    "deck": 5,
    "word": "efficient",
    "ipa": "",
    "translation": "эффективный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to efficient this properly.",
      "ru": "Важно правильно сделать это (эффективный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to efficient in daily life.",
      "ru": "Каждый старается (эффективный) в повседневной жизни."
    },
    "quizOptions": [
      "появляться, всплывать",
      "давать возможность",
      "эффективный"
    ]
  },
  {
    "id": 447,
    "tier": 1,
    "deck": 5,
    "word": "emerge",
    "ipa": "",
    "translation": "появляться, всплывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to emerge this properly.",
      "ru": "Важно правильно сделать это (появляться, всплывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to emerge in daily life.",
      "ru": "Каждый старается (появляться, всплывать) в повседневной жизни."
    },
    "quizOptions": [
      "появляться, всплывать",
      "расширять",
      "предполагать"
    ]
  },
  {
    "id": 448,
    "tier": 1,
    "deck": 5,
    "word": "emphasize",
    "ipa": "",
    "translation": "подчёркивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to emphasize this properly.",
      "ru": "Важно правильно сделать это (подчёркивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to emphasize in daily life.",
      "ru": "Каждый старается (подчёркивать) в повседневной жизни."
    },
    "quizOptions": [
      "подчёркивать",
      "знакомый",
      "в самую точку"
    ]
  },
  {
    "id": 449,
    "tier": 1,
    "deck": 5,
    "word": "enable",
    "ipa": "",
    "translation": "давать возможность",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to enable this properly.",
      "ru": "Важно правильно сделать это (давать возможность)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to enable in daily life.",
      "ru": "Каждый старается (давать возможность) в повседневной жизни."
    },
    "quizOptions": [
      "потреблять",
      "давать возможность",
      "полагать, считать"
    ]
  },
  {
    "id": 450,
    "tier": 1,
    "deck": 5,
    "word": "encourage",
    "ipa": "",
    "translation": "поощрять, ободрять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to encourage this properly.",
      "ru": "Важно правильно сделать это (поощрять, ободрять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to encourage in daily life.",
      "ru": "Каждый старается (поощрять, ободрять) в повседневной жизни."
    },
    "quizOptions": [
      "убеждать",
      "поощрять, ободрять",
      "отчётливый, особый"
    ]
  },
  {
    "id": 451,
    "tier": 1,
    "deck": 5,
    "word": "ensure",
    "ipa": "",
    "translation": "обеспечивать, гарантировать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to ensure this properly.",
      "ru": "Важно правильно сделать это (обеспечивать, гарантировать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to ensure in daily life.",
      "ru": "Каждый старается (обеспечивать, гарантировать) в повседневной жизни."
    },
    "quizOptions": [
      "обеспечивать, гарантировать",
      "влияние, удар",
      "заслуживать"
    ]
  },
  {
    "id": 452,
    "tier": 1,
    "deck": 5,
    "word": "entire",
    "ipa": "",
    "translation": "весь, целый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to entire this properly.",
      "ru": "Важно правильно сделать это (весь, целый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to entire in daily life.",
      "ru": "Каждый старается (весь, целый) в повседневной жизни."
    },
    "quizOptions": [
      "отрицать",
      "поощрять, ободрять",
      "весь, целый"
    ]
  },
  {
    "id": 453,
    "tier": 1,
    "deck": 5,
    "word": "environment",
    "ipa": "",
    "translation": "окружение, среда",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to environment this properly.",
      "ru": "Важно правильно сделать это (окружение, среда)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to environment in daily life.",
      "ru": "Каждый старается (окружение, среда) в повседневной жизни."
    },
    "quizOptions": [
      "подтверждать",
      "вдохновлять",
      "окружение, среда"
    ]
  },
  {
    "id": 454,
    "tier": 1,
    "deck": 5,
    "word": "essential",
    "ipa": "",
    "translation": "необходимый, важный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to essential this properly.",
      "ru": "Важно правильно сделать это (необходимый, важный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to essential in daily life.",
      "ru": "Каждый старается (необходимый, важный) в повседневной жизни."
    },
    "quizOptions": [
      "ужасно расстроенный",
      "необходимый, важный",
      "ожидать"
    ]
  },
  {
    "id": 455,
    "tier": 1,
    "deck": 5,
    "word": "establish",
    "ipa": "",
    "translation": "устанавливать, основывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to establish this properly.",
      "ru": "Важно правильно сделать это (устанавливать, основывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to establish in daily life.",
      "ru": "Каждый старается (устанавливать, основывать) в повседневной жизни."
    },
    "quizOptions": [
      "устанавливать, основывать",
      "обеспечивать, гарантировать",
      "подход, приближаться"
    ]
  },
  {
    "id": 456,
    "tier": 1,
    "deck": 5,
    "word": "estimate",
    "ipa": "",
    "translation": "оценивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to estimate this properly.",
      "ru": "Важно правильно сделать это (оценивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to estimate in daily life.",
      "ru": "Каждый старается (оценивать) в повседневной жизни."
    },
    "quizOptions": [
      "требовать, спрос",
      "безумно уставший",
      "оценивать"
    ]
  },
  {
    "id": 457,
    "tier": 1,
    "deck": 5,
    "word": "eventually",
    "ipa": "",
    "translation": "в конце концов",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to eventually this properly.",
      "ru": "Важно правильно сделать это (в конце концов)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to eventually in daily life.",
      "ru": "Каждый старается (в конце концов) в повседневной жизни."
    },
    "quizOptions": [
      "в конце концов",
      "колебаться, медлить",
      "поощрять, ободрять"
    ]
  },
  {
    "id": 458,
    "tier": 1,
    "deck": 5,
    "word": "evidence",
    "ipa": "",
    "translation": "доказательство, улика",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to evidence this properly.",
      "ru": "Важно правильно сделать это (доказательство, улика)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to evidence in daily life.",
      "ru": "Каждый старается (доказательство, улика) в повседневной жизни."
    },
    "quizOptions": [
      "окружение, среда",
      "доказательство, улика",
      "отрицать"
    ]
  },
  {
    "id": 459,
    "tier": 1,
    "deck": 5,
    "word": "examine",
    "ipa": "",
    "translation": "осматривать, изучать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to examine this properly.",
      "ru": "Важно правильно сделать это (осматривать, изучать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to examine in daily life.",
      "ru": "Каждый старается (осматривать, изучать) в повседневной жизни."
    },
    "quizOptions": [
      "неизбежный",
      "задержка, откладывать",
      "осматривать, изучать"
    ]
  },
  {
    "id": 460,
    "tier": 1,
    "deck": 5,
    "word": "exceed",
    "ipa": "",
    "translation": "превышать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to exceed this properly.",
      "ru": "Важно правильно сделать это (превышать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to exceed in daily life.",
      "ru": "Каждый старается (превышать) в повседневной жизни."
    },
    "quizOptions": [
      "утверждать, заявлять",
      "исключать",
      "превышать"
    ]
  },
  {
    "id": 461,
    "tier": 1,
    "deck": 5,
    "word": "exclude",
    "ipa": "",
    "translation": "исключать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to exclude this properly.",
      "ru": "Важно правильно сделать это (исключать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to exclude in daily life.",
      "ru": "Каждый старается (исключать) в повседневной жизни."
    },
    "quizOptions": [
      "превышать",
      "исключать",
      "требовать, спрос"
    ]
  },
  {
    "id": 462,
    "tier": 1,
    "deck": 5,
    "word": "expand",
    "ipa": "",
    "translation": "расширять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to expand this properly.",
      "ru": "Важно правильно сделать это (расширять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to expand in daily life.",
      "ru": "Каждый старается (расширять) в повседневной жизни."
    },
    "quizOptions": [
      "определять",
      "расширять",
      "игнорировать"
    ]
  },
  {
    "id": 463,
    "tier": 1,
    "deck": 5,
    "word": "expect",
    "ipa": "",
    "translation": "ожидать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to expect this properly.",
      "ru": "Важно правильно сделать это (ожидать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to expect in daily life.",
      "ru": "Каждый старается (ожидать) в повседневной жизни."
    },
    "quizOptions": [
      "ожидать",
      "подтверждать",
      "окружение, среда"
    ]
  },
  {
    "id": 464,
    "tier": 1,
    "deck": 5,
    "word": "expense",
    "ipa": "",
    "translation": "расход, трата",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to expense this properly.",
      "ru": "Важно правильно сделать это (расход, трата)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to expense in daily life.",
      "ru": "Каждый старается (расход, трата) в повседневной жизни."
    },
    "quizOptions": [
      "расход, трата",
      "предполагать",
      "состоять из"
    ]
  },
  {
    "id": 465,
    "tier": 1,
    "deck": 5,
    "word": "experience",
    "ipa": "",
    "translation": "опыт, испытывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to experience this properly.",
      "ru": "Важно правильно сделать это (опыт, испытывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to experience in daily life.",
      "ru": "Каждый старается (опыт, испытывать) в повседневной жизни."
    },
    "quizOptions": [
      "эффективный",
      "опыт, испытывать",
      "десятилетие"
    ]
  },
  {
    "id": 466,
    "tier": 1,
    "deck": 5,
    "word": "explore",
    "ipa": "",
    "translation": "исследовать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to explore this properly.",
      "ru": "Важно правильно сделать это (исследовать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to explore in daily life.",
      "ru": "Каждый старается (исследовать) в повседневной жизни."
    },
    "quizOptions": [
      "начальный",
      "утверждать, заявлять",
      "исследовать"
    ]
  },
  {
    "id": 467,
    "tier": 1,
    "deck": 5,
    "word": "expose",
    "ipa": "",
    "translation": "разоблачать, подвергать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to expose this properly.",
      "ru": "Важно правильно сделать это (разоблачать, подвергать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to expose in daily life.",
      "ru": "Каждый старается (разоблачать, подвергать) в повседневной жизни."
    },
    "quizOptions": [
      "разоблачать, подвергать",
      "фокусироваться",
      "настаивать"
    ]
  },
  {
    "id": 468,
    "tier": 1,
    "deck": 5,
    "word": "extend",
    "ipa": "",
    "translation": "продлевать, расширять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to extend this properly.",
      "ru": "Важно правильно сделать это (продлевать, расширять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to extend in daily life.",
      "ru": "Каждый старается (продлевать, расширять) в повседневной жизни."
    },
    "quizOptions": [
      "беспокоить",
      "продлевать, расширять",
      "опознавать, определять"
    ]
  },
  {
    "id": 469,
    "tier": 1,
    "deck": 5,
    "word": "extraordinary",
    "ipa": "",
    "translation": "необычайный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to extraordinary this properly.",
      "ru": "Важно правильно сделать это (необычайный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to extraordinary in daily life.",
      "ru": "Каждый старается (необычайный) в повседневной жизни."
    },
    "quizOptions": [
      "нетерпеливый, стремящийся",
      "необычайный",
      "дерзкий, нагловатый (с шармом)"
    ]
  },
  {
    "id": 470,
    "tier": 1,
    "deck": 5,
    "word": "familiar",
    "ipa": "",
    "translation": "знакомый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to familiar this properly.",
      "ru": "Важно правильно сделать это (знакомый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to familiar in daily life.",
      "ru": "Каждый старается (знакомый) в повседневной жизни."
    },
    "quizOptions": [
      "знакомый",
      "частый",
      "несмотря на"
    ]
  },
  {
    "id": 471,
    "tier": 1,
    "deck": 5,
    "word": "fault",
    "ipa": "",
    "translation": "вина, неисправность",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to fault this properly.",
      "ru": "Важно правильно сделать это (вина, неисправность)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to fault in daily life.",
      "ru": "Каждый старается (вина, неисправность) в повседневной жизни."
    },
    "quizOptions": [
      "вина, неисправность",
      "необычайный",
      "совершать, посвящать"
    ]
  },
  {
    "id": 472,
    "tier": 1,
    "deck": 5,
    "word": "feature",
    "ipa": "",
    "translation": "особенность, черта",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to feature this properly.",
      "ru": "Важно правильно сделать это (особенность, черта)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to feature in daily life.",
      "ru": "Каждый старается (особенность, черта) в повседневной жизни."
    },
    "quizOptions": [
      "подчёркивать",
      "особенность, черта",
      "состоять из"
    ]
  },
  {
    "id": 473,
    "tier": 1,
    "deck": 5,
    "word": "flexible",
    "ipa": "",
    "translation": "гибкий",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to flexible this properly.",
      "ru": "Важно правильно сделать это (гибкий)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to flexible in daily life.",
      "ru": "Каждый старается (гибкий) в повседневной жизни."
    },
    "quizOptions": [
      "гибкий",
      "эффективный",
      "расширять"
    ]
  },
  {
    "id": 474,
    "tier": 1,
    "deck": 5,
    "word": "focus",
    "ipa": "",
    "translation": "фокусироваться",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to focus this properly.",
      "ru": "Важно правильно сделать это (фокусироваться)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to focus in daily life.",
      "ru": "Каждый старается (фокусироваться) в повседневной жизни."
    },
    "quizOptions": [
      "фокусироваться",
      "подход, приближаться",
      "благодарный"
    ]
  },
  {
    "id": 475,
    "tier": 1,
    "deck": 5,
    "word": "forbid",
    "ipa": "",
    "translation": "запрещать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to forbid this properly.",
      "ru": "Важно правильно сделать это (запрещать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to forbid in daily life.",
      "ru": "Каждый старается (запрещать) в повседневной жизни."
    },
    "quizOptions": [
      "состоять из",
      "настаивать",
      "запрещать"
    ]
  },
  {
    "id": 476,
    "tier": 1,
    "deck": 5,
    "word": "force",
    "ipa": "",
    "translation": "сила, заставлять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to force this properly.",
      "ru": "Важно правильно сделать это (сила, заставлять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to force in daily life.",
      "ru": "Каждый старается (сила, заставлять) в повседневной жизни."
    },
    "quizOptions": [
      "сила, заставлять",
      "полагать, считать",
      "решено, улажено, готово"
    ]
  },
  {
    "id": 477,
    "tier": 1,
    "deck": 5,
    "word": "frequent",
    "ipa": "",
    "translation": "частый",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to frequent this properly.",
      "ru": "Важно правильно сделать это (частый)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to frequent in daily life.",
      "ru": "Каждый старается (частый) в повседневной жизни."
    },
    "quizOptions": [
      "частый",
      "полагать, считать",
      "разоблачать, подвергать"
    ]
  },
  {
    "id": 478,
    "tier": 1,
    "deck": 5,
    "word": "frustrate",
    "ipa": "",
    "translation": "расстраивать, злить",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to frustrate this properly.",
      "ru": "Важно правильно сделать это (расстраивать, злить)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to frustrate in daily life.",
      "ru": "Каждый старается (расстраивать, злить) в повседневной жизни."
    },
    "quizOptions": [
      "расстраивать, злить",
      "эффективный",
      "появляться, всплывать"
    ]
  },
  {
    "id": 479,
    "tier": 1,
    "deck": 5,
    "word": "gain",
    "ipa": "",
    "translation": "получать, прирост",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to gain this properly.",
      "ru": "Важно правильно сделать это (получать, прирост)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to gain in daily life.",
      "ru": "Каждый старается (получать, прирост) в повседневной жизни."
    },
    "quizOptions": [
      "зависеть",
      "необычайный",
      "получать, прирост"
    ]
  },
  {
    "id": 480,
    "tier": 1,
    "deck": 5,
    "word": "genuine",
    "ipa": "",
    "translation": "подлинный, искренний",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to genuine this properly.",
      "ru": "Важно правильно сделать это (подлинный, искренний)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to genuine in daily life.",
      "ru": "Каждый старается (подлинный, искренний) в повседневной жизни."
    },
    "quizOptions": [
      "разочаровывать",
      "игнорировать",
      "подлинный, искренний"
    ]
  },
  {
    "id": 481,
    "tier": 1,
    "deck": 5,
    "word": "glance",
    "ipa": "",
    "translation": "беглый взгляд",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to glance this properly.",
      "ru": "Важно правильно сделать это (беглый взгляд)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to glance in daily life.",
      "ru": "Каждый старается (беглый взгляд) в повседневной жизни."
    },
    "quizOptions": [
      "справляться",
      "превышать",
      "беглый взгляд"
    ]
  },
  {
    "id": 482,
    "tier": 1,
    "deck": 5,
    "word": "gradual",
    "ipa": "",
    "translation": "постепенный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to gradual this properly.",
      "ru": "Важно правильно сделать это (постепенный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to gradual in daily life.",
      "ru": "Каждый старается (постепенный) в повседневной жизни."
    },
    "quizOptions": [
      "весь, целый",
      "постепенный",
      "фокусироваться"
    ]
  },
  {
    "id": 483,
    "tier": 1,
    "deck": 5,
    "word": "grateful",
    "ipa": "",
    "translation": "благодарный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to grateful this properly.",
      "ru": "Важно правильно сделать это (благодарный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to grateful in daily life.",
      "ru": "Каждый старается (благодарный) в повседневной жизни."
    },
    "quizOptions": [
      "благодарный",
      "снижаться, отклонять",
      "последствие"
    ]
  },
  {
    "id": 484,
    "tier": 1,
    "deck": 5,
    "word": "handle",
    "ipa": "",
    "translation": "справляться, ручка",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to handle this properly.",
      "ru": "Важно правильно сделать это (справляться, ручка)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to handle in daily life.",
      "ru": "Каждый старается (справляться, ручка) в повседневной жизни."
    },
    "quizOptions": [
      "справляться, ручка",
      "беспокойство, касаться",
      "разоблачать, подвергать"
    ]
  },
  {
    "id": 485,
    "tier": 1,
    "deck": 5,
    "word": "hesitate",
    "ipa": "",
    "translation": "колебаться, медлить",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to hesitate this properly.",
      "ru": "Важно правильно сделать это (колебаться, медлить)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to hesitate in daily life.",
      "ru": "Каждый старается (колебаться, медлить) в повседневной жизни."
    },
    "quizOptions": [
      "весь, целый",
      "в конце концов",
      "колебаться, медлить"
    ]
  },
  {
    "id": 486,
    "tier": 1,
    "deck": 5,
    "word": "highlight",
    "ipa": "",
    "translation": "выделять, главный момент",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to highlight this properly.",
      "ru": "Важно правильно сделать это (выделять, главный момент)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to highlight in daily life.",
      "ru": "Каждый старается (выделять, главный момент) в повседневной жизни."
    },
    "quizOptions": [
      "выделять, главный момент",
      "гибкий",
      "определять"
    ]
  },
  {
    "id": 487,
    "tier": 1,
    "deck": 5,
    "word": "huge",
    "ipa": "",
    "translation": "огромный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to huge this properly.",
      "ru": "Важно правильно сделать это (огромный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to huge in daily life.",
      "ru": "Каждый старается (огромный) в повседневной жизни."
    },
    "quizOptions": [
      "огромный",
      "увеличивать",
      "исключать"
    ]
  },
  {
    "id": 488,
    "tier": 1,
    "deck": 5,
    "word": "identify",
    "ipa": "",
    "translation": "опознавать, определять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to identify this properly.",
      "ru": "Важно правильно сделать это (опознавать, определять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to identify in daily life.",
      "ru": "Каждый старается (опознавать, определять) в повседневной жизни."
    },
    "quizOptions": [
      "частый",
      "опознавать, определять",
      "отчётливый, особый"
    ]
  },
  {
    "id": 489,
    "tier": 1,
    "deck": 5,
    "word": "ignore",
    "ipa": "",
    "translation": "игнорировать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to ignore this properly.",
      "ru": "Важно правильно сделать это (игнорировать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to ignore in daily life.",
      "ru": "Каждый старается (игнорировать) в повседневной жизни."
    },
    "quizOptions": [
      "знакомый",
      "предполагать",
      "игнорировать"
    ]
  },
  {
    "id": 490,
    "tier": 1,
    "deck": 5,
    "word": "impact",
    "ipa": "",
    "translation": "влияние, удар",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to impact this properly.",
      "ru": "Важно правильно сделать это (влияние, удар)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to impact in daily life.",
      "ru": "Каждый старается (влияние, удар) в повседневной жизни."
    },
    "quizOptions": [
      "влияние, удар",
      "подтверждать",
      "за пределами"
    ]
  },
  {
    "id": 491,
    "tier": 1,
    "deck": 5,
    "word": "imply",
    "ipa": "",
    "translation": "подразумевать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to imply this properly.",
      "ru": "Важно правильно сделать это (подразумевать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to imply in daily life.",
      "ru": "Каждый старается (подразумевать) в повседневной жизни."
    },
    "quizOptions": [
      "безумно уставший",
      "подразумевать",
      "начальный"
    ]
  },
  {
    "id": 492,
    "tier": 1,
    "deck": 5,
    "word": "improve",
    "ipa": "",
    "translation": "улучшать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to improve this properly.",
      "ru": "Важно правильно сделать это (улучшать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to improve in daily life.",
      "ru": "Каждый старается (улучшать) в повседневной жизни."
    },
    "quizOptions": [
      "улучшать",
      "ожидать",
      "доказательство, улика"
    ]
  },
  {
    "id": 493,
    "tier": 1,
    "deck": 5,
    "word": "include",
    "ipa": "",
    "translation": "включать в себя",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to include this properly.",
      "ru": "Важно правильно сделать это (включать в себя)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to include in daily life.",
      "ru": "Каждый старается (включать в себя) в повседневной жизни."
    },
    "quizOptions": [
      "включать в себя",
      "определять",
      "появляться, всплывать"
    ]
  },
  {
    "id": 494,
    "tier": 1,
    "deck": 5,
    "word": "increase",
    "ipa": "",
    "translation": "увеличивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to increase this properly.",
      "ru": "Важно правильно сделать это (увеличивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to increase in daily life.",
      "ru": "Каждый старается (увеличивать) в повседневной жизни."
    },
    "quizOptions": [
      "увеличивать",
      "постоянный",
      "разобраться, понять"
    ]
  },
  {
    "id": 495,
    "tier": 1,
    "deck": 5,
    "word": "indicate",
    "ipa": "",
    "translation": "указывать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to indicate this properly.",
      "ru": "Важно правильно сделать это (указывать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to indicate in daily life.",
      "ru": "Каждый старается (указывать) в повседневной жизни."
    },
    "quizOptions": [
      "неизбежный",
      "указывать",
      "выгода, польза"
    ]
  },
  {
    "id": 496,
    "tier": 1,
    "deck": 5,
    "word": "inevitable",
    "ipa": "",
    "translation": "неизбежный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to inevitable this properly.",
      "ru": "Важно правильно сделать это (неизбежный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to inevitable in daily life.",
      "ru": "Каждый старается (неизбежный) в повседневной жизни."
    },
    "quizOptions": [
      "неизбежный",
      "сила, заставлять",
      "знакомый"
    ]
  },
  {
    "id": 497,
    "tier": 1,
    "deck": 5,
    "word": "influence",
    "ipa": "",
    "translation": "влияние, влиять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to influence this properly.",
      "ru": "Важно правильно сделать это (влияние, влиять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to influence in daily life.",
      "ru": "Каждый старается (влияние, влиять) в повседневной жизни."
    },
    "quizOptions": [
      "ключевой, решающий",
      "влияние, влиять",
      "избегать"
    ]
  },
  {
    "id": 498,
    "tier": 1,
    "deck": 5,
    "word": "initial",
    "ipa": "",
    "translation": "начальный",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to initial this properly.",
      "ru": "Важно правильно сделать это (начальный)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to initial in daily life.",
      "ru": "Каждый старается (начальный) в повседневной жизни."
    },
    "quizOptions": [
      "разоблачать, подвергать",
      "начальный",
      "подход, приближаться"
    ]
  },
  {
    "id": 499,
    "tier": 1,
    "deck": 5,
    "word": "insist",
    "ipa": "",
    "translation": "настаивать",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to insist this properly.",
      "ru": "Важно правильно сделать это (настаивать)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to insist in daily life.",
      "ru": "Каждый старается (настаивать) в повседневной жизни."
    },
    "quizOptions": [
      "эффективный",
      "настаивать",
      "беглый взгляд"
    ]
  },
  {
    "id": 500,
    "tier": 1,
    "deck": 5,
    "word": "inspire",
    "ipa": "",
    "translation": "вдохновлять",
    "vibe": "Частотное слово из ядра топ-500 английского языка.",
    "contextPrimary": {
      "source": "Современный диалог",
      "en": "It is important to inspire this properly.",
      "ru": "Важно правильно сделать это (вдохновлять)."
    },
    "contextReview": {
      "source": "Закрепление в речи",
      "en": "Everyone tries to inspire in daily life.",
      "ru": "Каждый старается (вдохновлять) в повседневной жизни."
    },
    "quizOptions": [
      "сомнение, сомневаться",
      "потреблять",
      "вдохновлять"
    ]
  }
];
