import { VFC } from 'react';
import Link from 'next/link';

import styles from 'styles/components/atoms/menu_link.module.scss';

type Props = {
  path: string;
  name: string;
  active: boolean;
  onClick?: () => void;
};

const MenuLink: VFC<Props> = (props) => {
  const { path = '', name = '', active = false, onClick } = props;

  return (
    <li onClick={onClick} className={styles.link}>
      <Link href={path}>
        <a>{name}</a>
      </Link>
      {active && <div className={styles.link__underline} />}
    </li>
  );
};

export default MenuLink;
