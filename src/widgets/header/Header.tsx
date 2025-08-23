'use client';
import styles from './styles.module.scss';
import HeaderItems from '@/widgets/header/HeaderItems';
import { useAuthStore } from '@/features/auth/store/use-auth-store';

const Header = () => {
  const { isAuthorized, user, logout } = useAuthStore();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        {isAuthorized === null ? null : isAuthorized && user ? (
          <HeaderItems.UserMenu
            userName={`${user?.firstName ?? ''} ${user?.lastName ?? ''}`}
            onLogout={logout}
          />
        ) : (
          <HeaderItems.GuestMenu />
        )}
      </div>
    </header>
  );
};

export default Header;
