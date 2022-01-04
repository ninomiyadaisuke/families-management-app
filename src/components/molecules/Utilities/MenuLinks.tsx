import { VFC, memo, useState } from 'react';
import { MenuLink, Dropdown } from 'components/atoms/Utilities';
import { useRouter } from 'next/router';

import styles from 'styles/components/molecules/menu_links.module.scss';

const options = [
  { label: 'お年玉一覧', path: '/list/otosidamas' },
  { label: 'プレゼント一覧', path: '/list/presents' },
];

const initialState = {
  familyList: false,
  register: false,
};

const MenuLinks: VFC = memo(() => {
  const [active, setActive] = useState(initialState);
  const router = useRouter();

  const handleClick = () => {
    if (router.pathname === '/contacts') {
      return setActive({ familyList: true, register: false });
    }
    if (router.pathname === '/contacts/register') {
      return setActive({ familyList: false, register: true });
    }
    return setActive(initialState);
  };

  return (
    <div className={styles.links}>
      <div className={active.familyList ? styles.links__link_active : styles.links__link}>
        <MenuLink path={'/contacts'} name={'家族一覧'} active={active.familyList} onClick={handleClick} />
      </div>
      <div className={active.register ? styles.links__link_active : styles.links__link}>
        <MenuLink
          path={'/contacts/register'}
          name={'お年玉・プレゼント登録'}
          active={active.register}
          onClick={handleClick}
        />
      </div>
      <Dropdown options={options} type={'text'} />
    </div>
  );
});

export default MenuLinks;
