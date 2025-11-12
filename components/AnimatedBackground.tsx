import styles from './AnimatedBackground.module.css';

export function AnimatedBackground() {
  return (
    <div className={styles.container}>
      {/* Dark gradient background */}
      <div className={styles.gradient} />
      
      {/* Grid pattern */}
      <div className={styles.grid} />
      
      {/* Animated light lines */}
      <div className={styles.linesContainer}>
        <div className={styles.cyanLine} />
        <div className={styles.violetLine} />
      </div>
      
      {/* Ambient glow spots */}
      <div className={styles.cyanGlow} />
      <div className={styles.violetGlow} />
    </div>
  );
}
