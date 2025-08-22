import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';
import Spinner from '../Spinner/Spinner';
import clsx from 'clsx';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button = (props: IProps) => {
  const { children, isLoading, fullWidth, ...rest } = props;
  return (
    <button className={clsx(styles.button, { [styles.fullWidth]: fullWidth })} {...rest}>
      {isLoading ? <Spinner size={'sm'} /> : children}
    </button>
  );
};

export default Button;
