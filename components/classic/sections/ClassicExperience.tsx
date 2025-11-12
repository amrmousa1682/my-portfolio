import { MotionDiv, MotionH1, MotionSection } from "@/components/motion";
import styles from "../ClassicMode.module.css";
import { ExperienceItem } from "../types";

interface ClassicExperienceProps {
  title: string;
  items: ExperienceItem[];
}

export async function ClassicExperience({
  title,
  items,
}: ClassicExperienceProps) {
  return (
    <MotionSection className={styles.section}>
      <div className={styles.sectionContent}>
        <MotionH1 className={styles.sectionTitle}>{title}</MotionH1>
        <div className={styles.timeline}>
          {items.map((item: ExperienceItem, idx: number) => (
            <MotionDiv
              key={idx}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <div className={styles.experienceHeader}>
                  <h3 className={styles.position}>{item.position}</h3>
                  <span className={styles.period}>{item.period}</span>
                </div>
                <p className={styles.company}>{item.company}</p>
                <p className={styles.description}>{item.description}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
