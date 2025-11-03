import { useState, useEffect } from "react";

export const useTypingEffect = (words, speed = 1000) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
      setDisplayText(words[(index + 1) % words.length]);
    }, speed);

    return () => clearInterval(interval);
  }, [index]);

  return displayText;
};
