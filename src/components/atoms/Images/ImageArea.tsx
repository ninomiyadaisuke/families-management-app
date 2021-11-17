import { VFC, memo } from 'react';
import Image from 'next/image';

import styles from 'styles/components/atoms/image.module.scss';

type Props = {
  path: string;
  height: number;
  width: number;
};

const ImageArea: VFC<Props> = memo((props) => {
  const { path, height, width } = props;
  return (
    <div className={styles.image__base}>
      <Image src={path} height={height} width={width} objectFit="cover" />
    </div>
  );
});

export default ImageArea;
