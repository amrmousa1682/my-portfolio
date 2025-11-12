import { Mail, Github, Linkedin } from "lucide-react";
import { MotionH1, MotionSection } from "@/components/motion";
import styles from "../ClassicMode.module.css";

interface ClassicContactProps {
  title: string;
  subtitle: string;
  email: string;
  emailValue: string;
  github: string;
  githubValue: string;
  linkedin: string;
  linkedinValue: string;
}

export async function ClassicContact({
  title,
  subtitle,
  email,
  emailValue,
  github,
  githubValue,
  linkedin,
  linkedinValue,
}: ClassicContactProps) {
  return (
    <MotionSection className={styles.section}>
      <div className={styles.sectionContent}>
        <MotionH1 className={styles.sectionTitle}>{title}</MotionH1>
        <div className={styles.card}>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.contactGrid}>
            <a href={`mailto:${emailValue}`} className={styles.contactLink}>
              <Mail className={styles.contactIcon} />
              <span>{email}</span>
            </a>
            <a
              href={githubValue}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <Github className={styles.contactIcon} />
              <span>{github}</span>
            </a>
            <a
              href={linkedinValue}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <Linkedin className={styles.contactIcon} />
              <span>{linkedin}</span>
            </a>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
