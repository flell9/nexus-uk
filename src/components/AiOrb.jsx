import React from 'react';
import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';

export function AiOrb({ isSpeaking, onSpeak, gradient = "from-cyan-500 to-blue-600" }) {
  return (
    <button
      onClick={onSpeak}
      className="relative flex items-center justify-center w-20 h-20 rounded-full group focus:outline-none active:scale-95 transition-transform"
      aria-label="Озвучить слово"
    >
      {/* Внешнее неоновое гало */}
      <motion.div
        animate={
          isSpeaking
            ? { scale: [1, 1.45, 1.15, 1.5, 1], opacity: [0.5, 0.9, 0.6, 0.95, 0.5], rotate: 180 }
            : { scale: [1, 1.12, 1], opacity: [0.3, 0.55, 0.3], rotate: 0 }
        }
        transition={{
          duration: isSpeaking ? 1.2 : 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute inset-0 rounded-full bg-gradient-to-tr ${gradient} blur-xl`}
      />

      {/* Вращающееся плазменное кольцо */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: isSpeaking ? 2 : 10, repeat: Infinity, ease: "linear" }}
        className={`absolute inset-1 rounded-full bg-gradient-to-r ${gradient} p-[2px] opacity-80`}
      >
        <div className="w-full h-full rounded-full bg-[#090910]" />
      </motion.div>

      {/* Внутреннее ядро */}
      <motion.div
        animate={isSpeaking ? { scale: [1, 0.88, 1.08, 0.92, 1] } : { scale: 1 }}
        transition={{ duration: 0.6, repeat: isSpeaking ? Infinity : 0 }}
        className={`relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${gradient} shadow-[0_0_25px_rgba(6,182,212,0.5)]`}
      >
        <Volume2 className="w-6 h-6 text-white drop-shadow" />
      </motion.div>
    </button>
  );
}
