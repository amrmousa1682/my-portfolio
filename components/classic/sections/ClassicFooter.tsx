import styles from "../ClassicMode.module.css";

interface ClassicFooterProps {
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
