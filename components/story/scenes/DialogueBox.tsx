"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";
import { Choice } from "../types";
import styles from "../StoryMode.module.css";

interface DialogueBoxProps {
  characterName: string;
  dialogue: string;
  choices: Choice[];
  skipText: string;
  isRTL: boolean;
  onChoiceSelect: (nextScene: string) => void;
}

export function DialogueBox({
  characterName,
  dialogue,
  choices,
  skipText,
  isRTL,
  onChoiceSelect,
}: DialogueBoxProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showChoices, setShowChoices] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsTyping(true);
    setShowChoices(false);

    let index = 0;
    const timer = setInterval(() => {
      if (index < dialogue.length) {
        setDisplayedText(dialogue.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        setShowChoices(true);
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [dialogue]);

  const skipTyping = () => {
    if (isTyping) {
      setDisplayedText(dialogue);
      setIsTyping(false);
      setShowChoices(true);
    }
  };

  // Parse text and convert URLs to clickable links
  const renderTextWithLinks = (text: string) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlPattern);
    
    return parts.map((part, index) => {
      if (part.match(urlPattern)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.dialogueLink}
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className={styles.dialogueContainer}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.dialogueWrapper}
      >
        <div className={styles.dialogueGlow} />

        <div className={styles.dialogueBox} onClick={skipTyping}>
          <div className={styles.dialogueContent}>
            <motion.div
              className={`${styles.speakerName} ${isRTL ? styles.speakerNameRtl : ""}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Sparkles className={styles.sparkleIcon} />
              <h3>{characterName}</h3>
            </motion.div>

            <div className={`${styles.dialogueText} ${isRTL ? styles.textRtl : ""}`}>
              {renderTextWithLinks(displayedText)}
              {isTyping && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className={styles.cursor}
                />
              )}
            </div>

            <AnimatePresence>
              {showChoices && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className={styles.choicesGrid}
                >
                  {choices.map((choice, idx) => {
                    const handleClick = (e: React.MouseEvent) => {
                      if (choice.link) {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(choice.link, "_blank", "noopener,noreferrer");
                      } else {
                        onChoiceSelect(choice.nextScene);
                      }
                    };

                    return (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.05, x: isRTL ? -5 : 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleClick}
                        className={styles.choice}
                      >
                        <div className={styles.choiceHover} />
                        <span className={isRTL ? styles.textRtl : ""}>{choice.text}</span>
                      </motion.button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {isTyping && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                className={styles.skipIndicator}
              >
                {skipText}
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
