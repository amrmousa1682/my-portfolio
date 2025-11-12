import { MotionDiv, MotionH1, MotionSection } from "@/components/motion";
import styles from "../ClassicMode.module.css";

interface ClassicHeroProps {
  name: string;
  title: string;
  subtitle: string;
}

export async function ClassicHero({ name, title, subtitle }: ClassicHeroProps) {
  return (
    <MotionSection className={styles.heroSection}>
      <div className={styles.heroContent}>
        <MotionDiv className={styles.avatar}>
          <div className={styles.avatarInner}>
            <div className={styles.avatarGlow} />
          </div>
        </MotionDiv>

        <MotionH1 className={styles.heroTitle}>{name}</MotionH1>

        <MotionDiv className={styles.heroMeta}>
          <p className={styles.heroJob}>{title}</p>
          <p className={styles.heroSubtitle}>{subtitle}</p>
        </MotionDiv>

        <MotionDiv className={styles.divider}> </MotionDiv>
      </div>
    </MotionSection>
  );
}
