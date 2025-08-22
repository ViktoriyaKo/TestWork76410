import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';
import Spinner from '../Spinner/Spinner';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
}

const Button = (props: IProps) => {
  const { children, isLoading, ...rest } = props;
  return (
    <button className={styles.button} {...rest}>
      {isLoading ? <Spinner size={'sm'} /> : children}
    </button>
  );
};

export default Button;
