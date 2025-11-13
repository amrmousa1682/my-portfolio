import Image from "next/image";
import { MotionDiv, MotionH1, MotionSection } from "@/components/motion";
import { ExternalLink } from "lucide-react";
import styles from "../ClassicMode.module.css";
import { Project } from "../types";

interface ClassicProjectsProps {
  title: string;
  items: Project[];
}

export async function ClassicProjects({ title, items }: ClassicProjectsProps) {
  return (
    <MotionSection className={styles.section}>
      <div className={styles.sectionContent}>
        <MotionH1 className={styles.sectionTitle}>{title}</MotionH1>
        <div className={styles.projectsGrid}>
          {items.map((project: Project, idx: number) => (
            <MotionDiv
              key={idx}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                {project.gif && (
                  <div className={styles.projectGif}>
                    <Image
                      src={project.gif}
                      alt={project.title}
                      width={400}
                      height={220}
                      className={styles.gifImage}
                      priority={idx < 2}
                      unoptimized
                    />
                  </div>
                )}
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <ExternalLink className={styles.linkIcon} />
                </div>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <div className={styles.techStack}>
                  {project.tech.map((tech: string, i: number) => (
                    <span key={i} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
