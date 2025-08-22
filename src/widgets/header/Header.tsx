'use client';
import styles from './styles.module.scss';
import { useUserStore } from '@/entities/user';
import HeaderItems from '@/widgets/header/HeaderItems';

const Header = () => {
  const { user, setUser } = useUserStore();

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        {user ? (
          <HeaderItems.UserMenu userName={user?.email} onLogout={handleLogout} />
        ) : (
          <HeaderItems.GuestMenu />
        )}
      </div>
    </header>
  );
};

export default Header;
