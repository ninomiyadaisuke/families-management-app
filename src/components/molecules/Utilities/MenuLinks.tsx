import { VFC, memo } from 'react';
import { MenuLink, Dropdown } from 'components/atoms/Utilities';

import styles from 'styles/components/molecules/menu_links.module.scss';

const options = [
  { label: 'お年玉一覧', path: '/list/otosidamas' },
  { label: 'プレゼント一覧', path: '/list/presents' },
];

const MenuLinks: VFC = memo(() => {
  return (
    <div className={styles.links}>
      <div className={styles.links__link}>
        <MenuLink path={'/contacts'} name={'家族一覧'} active={true} />
      </div>
      <div className={styles.links__link}>
        <MenuLink path={'/contacts'} name={'お年玉・プレゼント登録'} active={true} />
      </div>
      <Dropdown options={options} type={'text'} />
    </div>
  );
});

export default MenuLinks;
