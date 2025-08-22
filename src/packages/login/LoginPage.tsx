import { BackgroundVideo, SignInForm } from './ui';
import styles from './LoginPage.module.scss';

const LoginPage = async () => {
  return (
    <div className={styles.container}>
      <SignInForm />
      <BackgroundVideo />
    </div>
  );
};

export default LoginPage;
