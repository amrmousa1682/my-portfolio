import Image from "next/image";
import { MotionDiv, MotionH1, MotionSection } from "@/components/motion";
import styles from "../ClassicMode.module.css";
import { Testimonial } from "../types";

interface ClassicTestimonialsProps {
  title: string;
  items: Testimonial[];
}

export async function ClassicTestimonials({
  title,
  items,
}: ClassicTestimonialsProps) {
  return (
    <MotionSection className={styles.section}>
      <div className={styles.sectionContent}>
        <MotionH1 className={styles.sectionTitle}>{title}</MotionH1>
        <div className={styles.testimonialsGrid}>
          {items.map((testimonial: Testimonial, idx: number) => (
            <MotionDiv
              key={idx}
              className={styles.testimonialCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.testimonialAuthor}>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className={styles.testimonialAvatar}
                />
                <div className={styles.testimonialInfo}>
                  <p className={styles.testimonialName}>{testimonial.name}</p>
                  <p className={styles.testimonialRole}>{testimonial.role}</p>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
