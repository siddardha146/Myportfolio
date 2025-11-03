import { useState, useEffect } from "react";

export const useTypingEffect = (words: string[], typingSpeed = 100, pause = 1500) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentWord.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed / 2);
    } else if (!isDeleting && charIndex === currentWord.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex === 0) {
      // Move to next word
      setIsDeleting(false);
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, words, wordIndex, typingSpeed, pause]);

  return text;
};
