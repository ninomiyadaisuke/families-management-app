import { VFC, useState, useEffect } from 'react';
import Link from 'next/link';

import { IconArea } from 'components/atoms/Images';

import styles from 'styles/components/atoms/dropdown.module.scss';

type Props = {
  options: { label: string; path: string }[];
  type: 'text' | 'icon';
};

const Dropdown: VFC<Props> = (props) => {
  const { options, type } = props;
  const [spSize, setSpSize] = useState(false);
  const [isChange, setIsChange] = useState(false);

  //liタグを管理する
  const showListItem = (() => {
    switch (type) {
      case 'text':
        return true;
      case 'icon':
        if (!spSize || (spSize && isChange)) return true;
    }
  })();

  const widthCheck = (check: boolean) => {
    if (check) {
      setSpSize(false);
      setIsChange(false);
    } else {
      setSpSize(true);
    }
  };
  //widthをチェック
  useEffect(() => {
    widthCheck(window.innerWidth >= 768);
    window.addEventListener('resize', () => {
      widthCheck(window.innerWidth >= 768);
    });
  });

  return (
    <div className={styles.dropdown}>
      {type === 'text' ? (
        <p className={styles.dropdown__title}>記事一覧</p>
      ) : (
        <>
          {!isChange && (spSize || !spSize) && (
            <div
              onClick={spSize ? () => setIsChange(true) : () => setIsChange(false)}
              className={spSize ? styles.dropdown__icon_sp : styles.dropdown__icon}
            >
              <IconArea path={'/profile_user_icon.png'} height={58} width={52} />
            </div>
          )}
          {isChange && spSize && <span onClick={() => setIsChange(false)} className={styles.dropdown__batsu} />}
        </>
      )}
      <ul className={type === 'text' ? styles.dropdown__cormorant : styles.dropdown__profile}>
        {options.map((option) => (
          <Link key={option.label} href={option.path}>
            <a>{showListItem && <li>{option.label}</li>}</a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
