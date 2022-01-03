import { VFC, memo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from 'styles/components/atoms/logo.module.scss';

type Props = {
  path: string;
  logoType?: string;
  height: number;
  width: number;
  url?: string;
};

const LogoArea: VFC<Props> = memo((props) => {
  const { path = '', height = 0, width = 0, logoType = '', url } = props;
  const router = useRouter();

  const className = (() => {
    switch (logoType) {
      case 'footer':
        return `${styles.logo__footer}`;
      default:
        return `${styles.logo__base}`;
    }
  })();

  return (
    <div className={className}>
      <Image
        src={path}
        height={height}
        width={width}
        objectFit="scale-down"
        onClick={() => {
          router.push(url);
        }}
      />
    </div>
  );
});

export default LogoArea;
