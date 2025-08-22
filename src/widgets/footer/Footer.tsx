'use client';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { useUserStore } from '@/entities/user';

const Footer = () => {
  const { user } = useUserStore();

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        {user?.email ? <span>Logged as {user?.email}</span> : null}
        <div className={styles.caption}>
          Powered by{' '}
          <Link href={'https://portfolio-avsievich.vercel.app/'} target="_blank">
            Avsievich Viktoriia{' - '}
          </Link>
          {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
