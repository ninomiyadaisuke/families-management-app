import { FC } from 'react';
import styles from 'styles/components/atoms/loading.module.scss';

type Props = {
  isLoading: boolean
};

const Loading: FC<Props> = (props) => {
  const { isLoading } = props;
  if (isLoading) {
    return <div className={styles.spinner}></div>;
  } else {
    return <></>;
  }
};

export default Loading;
