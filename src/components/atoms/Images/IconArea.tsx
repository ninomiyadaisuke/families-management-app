import { VFC, memo } from 'react';
import Image from 'next/image';

import styles from 'styles/components/atoms/icon.module.scss';

type Props = {
  path: string;
  width: number;
  height: number;
};

const IconArea: VFC<Props> = memo((props) => {
  const { path, width, height } = props;

  return (
    <div className={styles.icon__base}>
      <Image src={path} height={height} width={width} objectFit={'scale-down'} />
    </div>
  );
});

export default IconArea;
