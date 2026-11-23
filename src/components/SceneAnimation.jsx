import React from 'react';
import { motion } from 'framer-motion';

export function SceneAnimation({ type = 'think' }) {
  return (
    <div className="relative w-full h-28 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/5 overflow-hidden flex items-center justify-center my-3">
      {/* Фоновая неоновая сетка */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(34,211,238,0.4) 1px, transparent 0)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* СЦЕНА 1: Полагать / Думать (reckon) */}
      {type === 'think' && (
        <svg viewBox="0 0 200 100" className="w-44 h-24">
          <motion.circle
            cx="80" cy="42" r="14"
            fill="none" stroke="#22d3ee" strokeWidth="2.5"
            animate={{ y: -3 }}
            transition={{ duration: 1.4, repeat: Infinity, repeatType: "reverse" }}
          />
          <path d="M55 88 C55 66, 105 66, 105 88" fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" />
          <motion.path
            d="M65 82 L75 58 L84 56"
            fill="none" stroke="#e879f9" strokeWidth="2.5" strokeLinecap="round"
            animate={{ rotate: 4 }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.circle
            cx="110" cy="34" r="3" fill="#e879f9"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0.2 }}
            transition={{ duration: 0.9, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.circle
            cx="122" cy="25" r="5" fill="#22d3ee"
            animate={{ opacity: 1, scale: 1.2 }}
            initial={{ opacity: 0.2, scale: 0.8 }}
            transition={{ duration: 0.9, delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M136 18 L142 24 L152 12"
            fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round"
            animate={{ opacity: 1, scale: 1.15 }}
            initial={{ opacity: 0.1, scale: 0.8 }}
            transition={{ duration: 1.1, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      )}

      {/* СЦЕНА 2: Мутный / Подозрительный (dodgy) */}
      {type === 'dodgy' && (
        <svg viewBox="0 0 200 100" className="w-44 h-24">
          <motion.g
            initial={{ x: -5 }}
            animate={{ x: 5 }}
            transition={{ duration: 1.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            <ellipse cx="100" cy="34" rx="26" ry="5" fill="none" stroke="#e879f9" strokeWidth="2.5" />
            <path d="M84 34 L88 20 L112 20 L116 34" fill="none" stroke="#e879f9" strokeWidth="2.5" />
            <path d="M70 88 L80 46 L120 46 L130 88" fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinejoin="round" />
            <motion.circle
              cx="94" cy="40" r="2.2" fill="#22d3ee"
              initial={{ x: -2 }}
              animate={{ x: 2 }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.circle
              cx="106" cy="40" r="2.2" fill="#22d3ee"
              initial={{ x: -2 }}
              animate={{ x: 2 }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            />
          </motion.g>
        </svg>
      )}

      {/* СЦЕНА 3: Разобраться / Пазл сложился (figure out) */}
      {type === 'solve' && (
        <svg viewBox="0 0 200 100" className="w-44 h-24">
          <circle cx="70" cy="45" r="13" fill="none" stroke="#34d399" strokeWidth="2.5" />
          <path d="M48 88 C48 68, 92 68, 92 88" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
          <motion.rect
            x="110" y="30" width="16" height="16" rx="3"
            fill="none" stroke="#22d3ee" strokeWidth="2.5"
            animate={{ x: 10 }}
            transition={{ duration: 1.1, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.rect
            x="146" y="30" width="16" height="16" rx="3"
            fill="none" stroke="#e879f9" strokeWidth="2.5"
            animate={{ x: -10 }}
            transition={{ duration: 1.1, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      )}

      {/* СЦЕНА 4: Выжатый как лимон (knackered) */}
      {type === 'tired' && (
        <svg viewBox="0 0 200 100" className="w-44 h-24">
          <motion.circle
            cx="85" cy="52" r="13"
            fill="none" stroke="#fbbf24" strokeWidth="2.5"
            animate={{ y: 6 }}
            transition={{ duration: 1.4, repeat: Infinity, repeatType: "reverse" }}
          />
          <path d="M58 88 C62 72, 105 72, 112 88" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="125" y="32" width="32" height="16" rx="3" fill="none" stroke="#f43f5e" strokeWidth="2" />
          <rect x="157" y="36" width="3" height="8" fill="#f43f5e" />
          <motion.rect
            x="128" y="35" width="6" height="10" rx="1" fill="#f43f5e"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      )}

      {/* СЦЕНА 5: В самую точку (spot on) */}
      {type === 'target' && (
        <svg viewBox="0 0 200 100" className="w-44 h-24">
          <circle cx="125" cy="50" r="24" fill="none" stroke="#a78bfa" strokeWidth="2" opacity="0.5" />
          <circle cx="125" cy="50" r="14" fill="none" stroke="#22d3ee" strokeWidth="2" />
          <circle cx="125" cy="50" r="4" fill="#34d399" />
          <motion.line
            x1="40" y1="50" x2="122" y2="50"
            stroke="#34d399" strokeWidth="3" strokeLinecap="round"
            initial={{ x: -35, opacity: 0.2 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.1, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      )}

      {/* СЦЕНА 6: Нравиться / Хотеть (fancy) */}
      {type === 'fancy' && (
        <svg viewBox="0 0 200 100" className="w-44 h-24">
          <circle cx="75" cy="46" r="13" fill="none" stroke="#f472b6" strokeWidth="2.5" />
          <path d="M52 88 C52 68, 98 68, 98 88" fill="none" stroke="#f472b6" strokeWidth="2.5" strokeLinecap="round" />
          <motion.path
            d="M130 42 C130 34, 118 34, 118 44 C118 54, 130 62, 130 62 C130 62, 142 54, 142 44 C142 34, 130 34, 130 42 Z"
            fill="none" stroke="#22d3ee" strokeWidth="2.5"
            initial={{ scale: 0.85 }}
            animate={{ scale: 1.18 }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      )}
    </div>
  );
}

