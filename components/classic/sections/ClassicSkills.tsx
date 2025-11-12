import { MotionDiv, MotionH1, MotionSection } from "@/components/motion";
import styles from "../ClassicMode.module.css";
import { SkillCategory } from "../types";

interface ClassicSkillsProps {
  title: string;
  categories: SkillCategory[];
}

export async function ClassicSkills({ title, categories }: ClassicSkillsProps) {
  return (
    <MotionSection className={styles.section}>
      <div className={styles.sectionContent}>
        <MotionH1 className={styles.sectionTitle}>{title}</MotionH1>
        <div className={styles.skillsGrid}>
          {categories.map((category: SkillCategory, idx: number) => (
            <MotionDiv
              key={idx}
              className={styles.skillCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className={styles.categoryName}>{category.name}</h3>
              <div className={styles.itemsList}>
                {category.items.map((item: string, i: number) => (
                  <div key={i} className={styles.item}>
                    <div className={styles.dot} />
                    <span className={styles.itemText}>{item}</span>
                  </div>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
