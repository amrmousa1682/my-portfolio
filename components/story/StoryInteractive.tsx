'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useRouter } from '@/i18n/navigation';
import { Scene } from './types';
import { CharacterPortrait, DialogueBox } from './scenes';
import styles from './StoryMode.module.css';

interface StoryInteractiveProps {
  scenes: Record<string, Scene>;
  skipText: string;
  fontHeading: string;
  fontBody: string;
  fontMono: string;
  isRTL: boolean;
  initialScene?: string;
}

export function StoryInteractive({
  scenes,
  skipText,
  fontHeading,
  fontBody,
  fontMono,
  isRTL,
  initialScene = 'intro',
}: StoryInteractiveProps) {
  const router = useRouter();
  const [currentSceneId, setCurrentSceneId] = useState(initialScene);
  const [sceneTransition, setSceneTransition] = useState(false);

  const currentScene = scenes[currentSceneId];

  const handleChoice = (nextScene: string) => {
    if (nextScene === 'exit') {
      router.push('/');
      return;
    }

    setSceneTransition(true);
    setTimeout(() => {
      setCurrentSceneId(nextScene);
      setSceneTransition(false);
    }, 500);
  };

  return (
    <>
      {/* Scene Background */}
      <motion.div
        key={`bg-${currentSceneId}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.sceneBackground}
        style={{ background: currentScene.background }}
      />

      {/* Grid Overlay */}
      <div className={styles.gridOverlay} />

      {/* Scene Transition */}
      <AnimatePresence>
        {sceneTransition && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.sceneTransition}
          />
        )}
      </AnimatePresence>

      {/* Character Portrait */}
      <CharacterPortrait
        key={`portrait-${currentSceneId}`}
        characterName={currentScene.characterName}
        fontFamily={fontHeading}
      />

      {/* Dialogue Box */}
      <DialogueBox
        key={`dialogue-${currentSceneId}`}
        characterName={currentScene.characterName}
        dialogue={currentScene.dialogue}
        choices={currentScene.choices}
        skipText={skipText}
        fontHeading={fontHeading}
        fontBody={fontBody}
        fontMono={fontMono}
        isRTL={isRTL}
        onChoiceSelect={handleChoice}
      />
    </>
  );
}
