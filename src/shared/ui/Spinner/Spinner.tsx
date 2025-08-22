import styles from './Spinner.module.scss';
import clsx from 'clsx';

interface IProps {
  size?: string;
}

const Spinner = (props: IProps) => {
  const { size = 'bg' } = props;

  return <div className={clsx(styles[size], styles.loader)} role="status" />;
};

export default Spinner;
