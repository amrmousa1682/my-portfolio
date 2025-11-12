import styles from "../ClassicMode.module.css";
import { QuickLink, SocialLink } from "../types";

interface ClassicFooterProps {
  description: string;
  quickLinksTitle: string;
  quickLinksItems: QuickLink[];
  socialTitle: string;
  socialItems: SocialLink[];
  copyright: string;
  madeWith: string;
}

export async function ClassicFooter({
  copyright,
  madeWith,
}: ClassicFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>{copyright}</p>
        <p className={styles.madeWith}>{madeWith}</p>
      </div>
    </footer>
  );
}
