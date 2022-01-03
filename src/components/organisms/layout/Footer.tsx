import { VFC } from 'react';
import { useRouter } from 'next/router';

import { LogoArea } from 'components/atoms/Images';
import { Spacer } from 'components/atoms/Utilities';
import { MediaIcons } from 'components/molecules/Images';

import styles from 'styles/components/organisms/footer.module.scss';

const Footer: VFC = () => {
  const router = useRouter();
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__links}>
          <p onClick={() => router.push('/about')}>このサイトについて</p>
          <p onClick={() => router.push('/terms')}>利用規約</p>
          <p onClick={() => router.push('/policies')}>プライバシーポリシー</p>
        </div>
        <div className={styles.footer__icons}>
          <MediaIcons />
        </div>
        <div>
          <div className={styles.footer__logo}>
            <LogoArea path={'/f_logo.png'} logoType={'footer'} width={115} height={115} url={'/'} />
          </div>
          <Spacer size={'md'} />
          <p className={styles.footer__copyright}>&copy; Families' Friends 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
