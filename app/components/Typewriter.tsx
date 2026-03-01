"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "talent managers.",
  "writers.",
  "film makers.",
  "content creators.",
  "creating.",
];

const TYPING_SPEED = 60;
const ERASING_SPEED = 35;
const DISPLAY_DURATION = 1000;

export function Typewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  const currentPhrase = phrases[phraseIndex];
  const isLastPhrase = phraseIndex === phrases.length - 1;

  const typeNextChar = useCallback(() => {
    setDisplayedText((prev) => {
      const nextLen = prev.length + 1;
      return currentPhrase.slice(0, nextLen);
    });
  }, [currentPhrase]);

  const eraseChar = useCallback(() => {
    setDisplayedText((prev) => prev.slice(0, -1));
  }, []);

  useEffect(() => {
    if (isComplete) return;

    if (isTyping) {
      if (displayedText.length < currentPhrase.length) {
        const timeout = setTimeout(typeNextChar, TYPING_SPEED);
        return () => clearTimeout(timeout);
      }

      if (isLastPhrase) {
        setIsComplete(true);
        return;
      }

      const pauseTimeout = setTimeout(() => setIsTyping(false), DISPLAY_DURATION);
      return () => clearTimeout(pauseTimeout);
    }

    if (displayedText.length > 0) {
      const timeout = setTimeout(eraseChar, ERASING_SPEED);
      return () => clearTimeout(timeout);
    }

    setPhraseIndex((prev) => prev + 1);
    setIsTyping(true);
  }, [displayedText, isTyping, isComplete, currentPhrase, isLastPhrase, typeNextChar, eraseChar]);

  return (
    <span className="inline-flex items-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={phraseIndex}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          className="italic"
        >
          {displayedText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: isComplete ? 3 : Infinity, repeatType: "reverse" }}
        className="ml-[1px] inline-block w-[2px] self-stretch"
        style={{ backgroundColor: "#2D1B4E", minHeight: "1em" }}
      />
    </span>
  );
}
