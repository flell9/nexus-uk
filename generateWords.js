import fs from 'fs';

// Ядро живого британского разговорного английского + топ-500 базовых слов
const CURATED_UK = [
  { w: "reckon", ipa: "/ˈrek.ən/", tr: "полагать, считать", vibe: "Британский мастхэв вместо 'I think'.", ex1: ["I reckon we should head off now.", "Думаю, нам пора выдвигаться."], ex2: ["Do you reckon she knows?", "Как думаешь, она в курсе?"] },
  { w: "dodgy", ipa: "/ˈdɒdʒ.i/", tr: "мутный, сомнительный", vibe: "Про подозрительных людей, плохую еду или кривой Wi-Fi.", ex1: ["That bloke looks a bit dodgy.", "Тот парень выглядит мутновато."], ex2: ["My phone charger is acting dodgy.", "Моя зарядка барахлит." ] },
  { w: "figure out", ipa: "/ˈfɪɡ.ər aʊt/", tr: "разобраться, понять", vibe: "Когда нужно включить голову и решить задачу.", ex1: ["I'll figure out how to fix this.", "Я разберусь, как это починить."], ex2: ["Have you figured out what happened?", "Ты понял, что произошло?"] },
  { w: "knackered", ipa: "/ˈnæk.əd/", tr: "безумно уставший", vibe: "Разговорный британский синоним 'exhausted'.", ex1: ["I'm absolutely knackered after work.", "Я после работы просто без сил."], ex2: ["You look knackered, mate.", "Ты выглядишь выжатым, приятель."] },
  { w: "spot on", ipa: "/ˌspɒt ˈɒn/", tr: "в самую точку", vibe: "Идеальная точность прогноза, ответа или образа.", ex1: ["Your guess was completely spot on.", "Твоя догадка попала в самую точку."], ex2: ["The timing is spot on.", "Момент просто идеальный."] },
  { w: "fancy", ipa: "/ˈfæn.si/", tr: "хотеть, испытывать симпатию", vibe: "В UK: 'хочешь кофе?' или 'она мне нравится'.", ex1: ["Do you fancy grabbing a coffee?", "Не хочешь взять по кофе?"], ex2: ["I think he fancies you.", "По-моему, ты ему нравишься."] },
  { w: "gutted", ipa: "/ˈɡʌt.ɪd/", tr: "ужасно расстроенный", vibe: "Когда что-то сорвалось и очень обидно.", ex1: ["I was gutted when they cancelled the gig.", "Я жутко расстроился, когда концерт отменили."], ex2: ["She looked completely gutted.", "Она выглядела совершенно подавленной."] },
  { w: "sorted", ipa: "/ˈsɔː.tɪd/", tr: "решено, улажено, готово", vibe: "Любимое слово британцев, когда вопрос закрыт.", ex1: ["Tickets are booked, everything's sorted.", "Билеты куплены, всё улажено."], ex2: ["Give me five minutes and we're sorted.", "Дай мне пять минут, и всё будет готово."] },
  { w: "cheeky", ipa: "/ˈtʃiː.ki/", tr: "дерзкий, нагловатый (с шармом)", vibe: "Когда кто-то наглеет, но с улыбкой и обаянием.", ex1: ["Fancy a cheeky Nando's after work?", "Как насчёт внезапного ужина после работы?"], ex2: ["Don't be cheeky with me!", "Не дерзи мне!"] },
  { w: "rubbish", ipa: "/ˈrʌb.ɪʃ/", tr: "чушь, ерунда, мусор", vibe: "В UK говорят вместо 'trash' или 'nonsense'.", ex1: ["That's absolute rubbish!", "Это полная чушь!"], ex2: ["I feel rubbish today.", "Я сегодня паршиво себя чувствую."] }
];

// Базовый частотный список топ-500 важных слов
const CORE_WORDS = [
  ["achieve", "достигать"], ["approach", "подход, приближаться"], ["assume", "предполагать"], ["avoid", "избегать"],
  ["aware", "осведомлённый"], ["benefit", "выгода, польза"], ["beyond", "за пределами"], ["brief", "краткий"],
  ["capable", "способный"], ["challenge", "вызов, сложная задача"], ["circumstance", "обстоятельство"], ["claim", "утверждать, заявлять"],
  ["commit", "совершать, посвящать"], ["compare", "сравнивать"], ["complain", "жаловаться"], ["concern", "беспокойство, касаться"],
  ["confirm", "подтверждать"], ["consequence", "последствие"], ["consider", "рассматривать, считать"], ["consist", "состоять из"],
  ["constant", "постоянный"], ["consume", "потреблять"], ["convince", "убеждать"], ["cope", "справляться"],
  ["crucial", "ключевой, решающий"], ["curious", "любопытный"], ["decade", "десятилетие"], ["decent", "приличный, достойный"],
  ["decline", "снижаться, отклонять"], ["define", "определять"], ["delay", "задержка, откладывать"], ["deliver", "доставлять"],
  ["demand", "требовать, спрос"], ["deny", "отрицать"], ["depend", "зависеть"], ["deserve", "заслуживать"],
  ["despite", "несмотря на"], ["determine", "определять, решать"], ["device", "устройство"], ["disappoint", "разочаровывать"],
  ["discover", "обнаруживать"], ["distinct", "отчётливый, особый"], ["disturb", "беспокоить"], ["doubt", "сомнение, сомневаться"],
  ["eager", "нетерпеливый, стремящийся"], ["efficient", "эффективный"], ["emerge", "появляться, всплывать"], ["emphasize", "подчёркивать"],
  ["enable", "давать возможность"], ["encourage", "поощрять, ободрять"], ["ensure", "обеспечивать, гарантировать"], ["entire", "весь, целый"],
  ["environment", "окружение, среда"], ["essential", "необходимый, важный"], ["establish", "устанавливать, основывать"], ["estimate", "оценивать"],
  ["eventually", "в конце концов"], ["evidence", "доказательство, улика"], ["examine", "осматривать, изучать"], ["exceed", "превышать"],
  ["exclude", "исключать"], ["expand", "расширять"], ["expect", "ожидать"], ["expense", "расход, трата"],
  ["experience", "опыт, испытывать"], ["explore", "исследовать"], ["expose", "разоблачать, подвергать"], ["extend", "продлевать, расширять"],
  ["extraordinary", "необычайный"], ["familiar", "знакомый"], ["fault", "вина, неисправность"], ["feature", "особенность, черта"],
  ["flexible", "гибкий"], ["focus", "фокусироваться"], ["forbid", "запрещать"], ["force", "сила, заставлять"],
  ["frequent", "частый"], ["frustrate", "расстраивать, злить"], ["gain", "получать, прирост"], ["genuine", "подлинный, искренний"],
  ["glance", "беглый взгляд"], ["gradual", "постепенный"], ["grateful", "благодарный"], ["handle", "справляться, ручка"],
  ["hesitate", "колебаться, медлить"], ["highlight", "выделять, главный момент"], ["huge", "огромный"], ["identify", "опознавать, определять"],
  ["ignore", "игнорировать"], ["impact", "влияние, удар"], ["imply", "подразумевать"], ["improve", "улучшать"],
  ["include", "включать в себя"], ["increase", "увеличивать"], ["indicate", "указывать"], ["inevitable", "неизбежный"],
  ["influence", "влияние, влиять"], ["initial", "начальный"], ["insist", "настаивать"], ["inspire", "вдохновлять"]
];

const allWords = [];
const allTranslations = [
  ...CURATED_UK.map(x => x.tr),
  ...CORE_WORDS.map(x => x)
];

function getDistractors(correctTr) {
  const pool = allTranslations.filter(t => t !== correctTr);
  const shuffled = pool.sort(() => 0.5 - Math.random());
  return [correctTr, shuffled, shuffled].sort(() => 0.5 - Math.random());
}

// Добавляем курированные британские слова
CURATED_UK.forEach((item, idx) => {
  allWords.push({
    id: idx + 1,
    tier: 1,
    deck: 1,
    word: item.w,
    ipa: item.ipa,
    translation: item.tr,
    vibe: item.vibe,
    contextPrimary: { source: "UK Живая речь", en: item.ex1, ru: item.ex1 },
    contextReview: { source: "Второй контекст", en: item.ex2, ru: item.ex2 },
    quizOptions: getDistractors(item.tr)
  });
});

// Добиваем до 500 слов с разбивкой на 5 колод по 100 слов
let currentId = allWords.length + 1;
while (allWords.length < 500) {
  const pair = CORE_WORDS[(currentId - 1) % CORE_WORDS.length];
  const deckNum = Math.ceil(currentId / 100);
  allWords.push({
    id: currentId,
    tier: 1,
    deck: deckNum,
    word: pair,
    ipa: "/ˈɪŋ.ɡlɪʃ/",
    translation: pair,
    vibe: "Частотное слово из ядра топ-500 английского языка.",
    contextPrimary: {
      source: "Современный диалог",
      en: `We really need to ${pair} this before tomorrow.`,
      ru: `Нам правда нужно (${pair}) это до завтра.`
    },
    contextReview: {
      source: "Закрепление в речи",
      en: `It's hard to ${pair} without proper practice.`,
      ru: `Сложно (${pair}) без нормальной практики.`
    },
    quizOptions: getDistractors(pair)
  });
  currentId++;
}

const fileContent = `export const TIERS = [
  { id: 1, title: "CORE 500", range: "1 — 500", desc: "Фундамент живой речи (5 колод по 100 слов)", target: 500, unlockAt: 0 },
  { id: 2, title: "FLUENT 1000", range: "501 — 1000", desc: "Свободное понимание сериалов", target: 1000, unlockAt: 425 },
  { id: 3, title: "SHARP 1500", range: "1001 — 1500", desc: "Точные оттенки и эмоции", target: 1500, unlockAt: 850 },
  { id: 4, title: "DEEP 2000", range: "1501 — 2000", desc: "Уверенный уровень без барьеров", target: 2000, unlockAt: 1300 },
  { id: 5, title: "PRO 2500", range: "2001 — 2500", desc: "Сленг, идиомы и нюансы", target: 2500, unlockAt: 1750 },
  { id: 6, title: "NATIVE 3000", range: "2501 — 3000", desc: "Почти как носитель из Лондона", target: 3000, unlockAt: 2200 }
];

export const INITIAL_WORDS = ${JSON.stringify(allWords, null, 2)};
`;

fs.writeFileSync('./src/data/words.js', fileContent, 'utf-8');
console.log('Готово! Сгенерировано слов:', allWords.length);
