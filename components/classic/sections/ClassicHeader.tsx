import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "../ClassicMode.module.css";

interface ClassicHeaderProps {
  backButtonLabel: string;
}

export async function ClassicHeader({ backButtonLabel }: ClassicHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.backButton}>
          <ArrowLeft className={styles.icon} />
          <span>{backButtonLabel}</span>
        </Link>
      </div>
    </header>
  );
}
