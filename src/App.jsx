import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, RotateCcw, BrainCircuit, CheckCircle2, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { INITIAL_WORDS, TIERS } from './data/words';
import { pickNextCard } from './utils/srsEngine';

const TARGET_REPS = 10;

export default function App() {
  const [progressMap, setProgressMap] = useState(() => {
    const saved = localStorage.getItem('nexus_srs_progress');
    return saved ? JSON.parse(saved) : {};
  });

  const [activeTab, setActiveTab] = useState('cards');
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);
  const [exitDirection, setExitDirection] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const ukVoiceRef = useRef(null);

  useEffect(() => {
    if (!('speechSynthesis' in window)) return;
    const loadBritishVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices.length) return;
      ukVoiceRef.current =
        voices.find(v => v.lang === 'en-GB' && v.name.includes('Google UK English Male')) ||
        voices.find(v => v.lang === 'en-GB' && (v.name.includes('Daniel') || v.name.includes('Arthur') || v.name.includes('Martha'))) ||
        voices.find(v => v.lang === 'en-GB') ||
        voices.find(v => v.lang.includes('GB'));
    };
    loadBritishVoice();
    window.speechSynthesis.onvoiceschanged = loadBritishVoice;
  }, []);

  useEffect(() => {
    localStorage.setItem('nexus_srs_progress', JSON.stringify(progressMap));
  }, [progressMap]);

  const activeDeck = INITIAL_WORDS.slice(0, 100);
  const masteredCount = Object.values(progressMap).filter(lvl => lvl >= TARGET_REPS).length;

  useEffect(() => {
    if (!currentCard) {
      setCurrentCard(pickNextCard(activeDeck, progressMap, null));
    }
  }, []);

  const speakUK = useCallback((text, e) => {
    if (e) e.stopPropagation();
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB';
      utterance.rate = 0.92;
      if (ukVoiceRef.current) {
        utterance.voice = ukVoiceRef.current;
      }
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }, 40);
  }, []);

  const handleSwipeDecision = (known) => {
    if (!currentCard) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);

    const currentLvl = progressMap[currentCard.id] || 0;
    const nextLvl = known ? Math.min(TARGET_REPS, currentLvl + 1) : Math.max(0, currentLvl - 1);
    const updatedMap = { ...progressMap, [currentCard.id]: nextLvl };
    setProgressMap(updatedMap);
    setExitDirection(known ? 1 : -1);
    setIsFlipped(false);

    setTimeout(() => {
      setCurrentCard(pickNextCard(activeDeck, updatedMap, currentCard.id));
    }, 180);
  };

  const resetAll = () => {
    localStorage.removeItem('nexus_srs_progress');
    setProgressMap({});
    setIsFlipped(false);
    setCurrentCard(pickNextCard(activeDeck, {}, null));
  };
  const currentLevel = currentCard ? (progressMap[currentCard.id] || 0) : 0;
  const probabilityPercent = Math.max(5, Math.round(Math.pow(10 - currentLevel, 2)));

  return (
    <div
      style={{
        paddingTop: 'max(1.25rem, env(safe-area-inset-top))',
        paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))',
      }}
      className="h-[100dvh] bg-zinc-950 text-white flex flex-col justify-between max-w-md mx-auto px-4 relative overflow-hidden select-none"
    >
      <div className="pointer-events-none fixed -top-32 -left-32 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl" />
      <div className="pointer-events-none fixed -bottom-32 -right-32 w-80 h-80 bg-fuchsia-600/15 rounded-full blur-3xl" />

      <header className="flex items-center justify-between z-10 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <BrainCircuit className="w-5 h-5 text-black" />
          </div>
          <div>
            <span className="font-bold tracking-wider text-sm text-white">NEXUS UK</span>
            <p className="text-xs text-cyan-400 font-medium">Выучено: {masteredCount} / 3000</p>
          </div>
        </div>

        <button
          onClick={() => setActiveTab(activeTab === 'cards' ? 'tiers' : 'cards')}
          className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 hover:border-cyan-400/50 transition"
        >
          {activeTab === 'cards' ? 'Уровни (500–3000)' : 'К карточкам'}
        </button>
      </header>

      {activeTab === 'tiers' ? (
        <div className="flex-1 flex flex-col gap-3 overflow-y-auto py-2 z-10">
          {TIERS.map((tier) => {
            const progress = Math.min(100, Math.round((masteredCount / tier.target) * 100));
            return (
              <div key={tier.id} className="p-4 rounded-2xl border bg-white/5 border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-cyan-400">{tier.range}</span>
                  <span className="text-xs text-emerald-400 font-semibold">{progress}%</span>
                </div>
                <div className="font-bold text-base">{tier.title}</div>
                <p className="text-xs text-zinc-400 mt-0.5">{tier.desc}</p>
                <div className="w-full h-1.5 bg-white/10 rounded-full mt-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <main className="flex-1 flex flex-col justify-center z-10">
          {currentCard ? (
            <>
              <div className="mb-3 px-1">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1.5">
                  <span>Закрепление слова: <strong className="text-cyan-400">{currentLevel} / {TARGET_REPS}</strong></span>
                  <span>Шанс выпадения: <strong className="text-fuchsia-400">{probabilityPercent}%</strong></span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: TARGET_REPS }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 flex-1 rounded-full transition-all ${
                        i < currentLevel ? 'bg-gradient-to-r from-cyan-400 to-emerald-400' : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="relative h-96 w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCard.id + '-' + currentLevel}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.7}
                    onDragEnd={(e, info) => {
                      if (info.offset.x > 95) handleSwipeDecision(true);
                      else if (info.offset.x < -95) handleSwipeDecision(false);
                    }}
                    initial={{ opacity: 0, scale: 0.92, x: 0 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, x: exitDirection * 220, rotate: exitDirection * 12 }}
                    transition={{ duration: 0.22 }}
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="w-full h-full rounded-3xl bg-zinc-900/95 border border-white/15 p-6 shadow-2xl flex flex-col justify-between cursor-pointer active:cursor-grabbing"
                  >
                    {!isFlipped ? (
                      <div className="flex-1 flex flex-col items-center justify-center text-center">
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-zinc-400 border border-white/10 mb-6">
                          Свайп влево — учу • Вправо — помню
                        </span>

                        <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2">
                          {currentCard.word}
                        </h1>
                        <p className="text-sm font-mono text-zinc-400 mb-6">{currentCard.ipa}</p>

                        <button
                          onClick={(e) => speakUK(currentCard.word, e)}
                          className={`w-16 h-16 rounded-full flex items-center justify-center transition active:scale-90 ${
                            isSpeaking
                              ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/50 scale-105'
                              : 'bg-white/10 text-cyan-300 border border-cyan-500/30 hover:bg-white/15'
                          }`}
                        >
                          <Volume2 className="w-7 h-7" />
                        </button>

                        <p className="text-xs text-zinc-500 mt-8">Нажми на карточку, чтобы перевернуть</p>
                      </div>
                    ) : (
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between border-b border-white/10 pb-3">
                            <div>
                              <h2 className="text-2xl font-bold text-white">{currentCard.word}</h2>
                              <p className="text-lg font-bold text-cyan-300 mt-0.5">{currentCard.translation}</p>
                            </div>
                            <button
                              onClick={(e) => speakUK(currentCard.word, e)}
                              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-cyan-300"
                            >
                              <Volume2 className="w-5 h-5" />
                            </button>
                          </div>

                          <div className="mt-4 p-3 rounded-2xl bg-white/5 border border-white/5">
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-fuchsia-400 mb-1">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>Когда так говорят</span>
                            </div>
                            <p className="text-xs text-zinc-300 leading-relaxed">{currentCard.vibe}</p>
                          </div>

                          <div
                            onClick={(e) => speakUK(currentCard.contextPrimary.en, e)}
                            className="mt-3 p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20"
                          >
                            <div className="flex items-center justify-between text-xs text-cyan-300 font-medium mb-1">
                              <span>Пример в речи</span>
                              <span className="flex items-center gap-1"><Volume2 className="w-3.5 h-3.5" /> Озвучить</span>
                            </div>
                            <p className="text-sm font-medium text-white">"{currentCard.contextPrimary.en}"</p>
                            <p className="text-xs text-zinc-400 mt-1">{currentCard.contextPrimary.ru}</p>
                          </div>
                        </div>

                        <p className="text-center text-xs text-zinc-500">Нажми, чтобы вернуть лицевую сторону</p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-5">
                <button
                  onClick={() => handleSwipeDecision(false)}
                  className="py-4 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-300 font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Ещё учу</span>
                </button>

                <button
                  onClick={() => handleSwipeDecision(true)}
                  className="py-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition"
                >
                  <span>Помню</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </>
          ) : (
            <div className="bg-zinc-900/90 border border-cyan-500/30 rounded-3xl p-8 text-center">
              <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto mb-3" />
              <h2 className="text-2xl font-extrabold">Колода пройдена!</h2>
              <p className="text-sm text-zinc-400 mt-2">Все слова в этой пачке закреплены на 10 из 10.</p>
              <button
                onClick={resetAll}
                className="mt-6 w-full py-3.5 rounded-2xl bg-white/10 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Сбросить и начать заново</span>
              </button>
            </div>
          )}
        </main>
      )}
    </div>
  );
}

