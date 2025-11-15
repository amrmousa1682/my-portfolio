'use client';

import { motion } from 'motion/react';
import styles from '../StoryMode.module.css';

interface CharacterPortraitProps {
  characterName: string;
  fontFamily: string;
}

export function CharacterPortrait({
  characterName,
  fontFamily,
}: CharacterPortraitProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className={styles.characterPortrait}
    >
      <div className={styles.portraitContainer}>
        <div className={styles.portraitGlow} />

        <div className={styles.portraitFrame}>
          <div className={styles.portraitLines}>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={styles.portraitLine}
                style={{ top: `${(i + 1) * 12.5}%` }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          <div className={styles.portraitCore}>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
              className={styles.coreRing}
            />
            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
              className={styles.coreRingInner}
            />
            <div className={styles.coreCenter} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={styles.characterName}
        >
          <p style={{ fontFamily }}>{characterName}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
