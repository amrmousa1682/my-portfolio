'use client';

import { ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import styles from './BackButton.module.css';

interface BackButtonProps {
  label: string;
  href?: string;
  className?: string;
}

export function BackButton({ label, href = '/', className = '' }: BackButtonProps) {
  return (
    <Link href={href} className={`${styles.backButton} ${className}`}>
      <ArrowLeft className={styles.icon} />
      <span>{label}</span>
    </Link>
  );
}
