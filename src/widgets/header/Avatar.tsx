import styles from './styles.module.scss';

type TypeAvatar = {
  userName: string;
};

const Avatar = (props: TypeAvatar) => {
  return <div className={styles.avatar}>{props.userName[0]}</div>;
};

export default Avatar;
