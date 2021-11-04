import { FC } from 'react';

import styles from 'styles/components/atoms/loading.module.scss';

type Props = {
  isLoading: boolean
};

const Loading: FC<Props> = (props) => {
  const { isLoading = false } = props;

  return <>{isLoading && <div className={styles.spinner}></div>}</>;
};

export default Loading;
