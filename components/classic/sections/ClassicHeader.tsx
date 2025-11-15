import { BackButton } from "@/components/shared";
import styles from "../ClassicMode.module.css";

interface ClassicHeaderProps {
  backButtonLabel: string;
}

export async function ClassicHeader({ backButtonLabel }: ClassicHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <BackButton label={backButtonLabel} className={styles.backButton} />
      </div>
    </header>
  );
}
