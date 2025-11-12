import Link from "next/link";
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
  description,
  quickLinksTitle,
  quickLinksItems,
  socialTitle,
  socialItems,
  copyright,
  madeWith,
}: ClassicFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <p className={styles.footerDescription}>{description}</p>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>{quickLinksTitle}</h3>
          <div className={styles.footerLinks}>
            {quickLinksItems.map((link: QuickLink, idx: number) => (
              <Link key={idx} href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>{socialTitle}</h3>
          <div className={styles.footerSocial}>
            {socialItems.map((social: SocialLink, idx: number) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocialLink}
                title={social.label}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>{copyright}</p>
        <p className={styles.madeWith}>{madeWith}</p>
      </div>
    </footer>
  );
}
