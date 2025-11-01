'use client';

import { useState, useEffect } from 'react';

interface TypingEffectProps {
  texts: string[];
  speed?: number;
  delay?: number;
  className?: string;
}

export default function TypingEffect({ 
  texts, 
  speed = 100, 
  delay = 2000,
  className = '' 
}: TypingEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < targetText.length) {
          setCurrentText(targetText.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, delay]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
}