import { MotionH1, MotionSection } from "@/components/motion";
import styles from "../ClassicMode.module.css";

interface ClassicAboutProps {
  title: string;
  text: string;
}

export async function ClassicAbout({ title, text }: ClassicAboutProps) {
  return (
    <MotionSection className={styles.section}>
      <div className={styles.sectionContent}>
        <MotionH1 className={styles.sectionTitle}>{title}</MotionH1>
        <div className={styles.card}>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </MotionSection>
  );
}
