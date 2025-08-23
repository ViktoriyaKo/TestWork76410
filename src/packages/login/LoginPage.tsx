import { BackgroundVideo } from './ui';
import styles from './LoginPage.module.scss';
import { SignInForm } from '@/features/auth';

const LoginPage = async () => {
  return (
    <div className={styles.container}>
      <SignInForm />
      <BackgroundVideo />
    </div>
  );
};

export default LoginPage;
