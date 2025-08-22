import styles from './styles.module.scss';
import Link from 'next/link';
import { Button } from '@/shared/ui';
import { Icon, LoginIcon, LogoutIcon } from '@/shared/icons';
import Avatar from './Avatar';

interface UserMenuProps {
  userName: string;
  onLogout: () => void;
}

export const UserMenu = (props: UserMenuProps) => {
  const { onLogout, userName } = props;

  return (
    <div className={styles.userInfo}>
      <div className={styles.userWrapper}>
        <Avatar userName={userName} />
        <span>{userName}</span>
      </div>
      <Button onClick={onLogout}>
        <Icon html={LogoutIcon} />
        Logout
      </Button>
    </div>
  );
};

export const GuestMenu = () => (
  <div className={styles.userInfo}>
    <Link href="/login" className={styles.link}>
      <Icon html={LoginIcon} />
      Login
    </Link>
  </div>
);

const HeaderItems = {
  GuestMenu,
  UserMenu,
};

export default HeaderItems;
