import { VFC, useState, useEffect } from 'react';
import Link from 'next/link';

import { IconArea } from 'components/atoms/Images';

import styles from 'styles/components/atoms/dropdown.module.scss';

type Props = {
  options: { label: string; path: string }[];
  type: '記録一覧' | 'icon';
};

const Dropdown: VFC<Props> = (props) => {
  const { options, type } = props;
  const [spSize, setSpSize] = useState(false);
  const [isChange, setIsChange] = useState(false);

  const showListItem = (() => {
    switch (type) {
      case '記録一覧':
        return true;
      case 'icon':
        if (!spSize || (spSize && isChange)) return true;
      case 'icon':
        if (!isChange) return false;
    }
  })();

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        setSpSize(false);
        setIsChange(false);
      } else {
        setSpSize(true);
      }
    });
  });

  return (
    <div className={styles.dropdown}>
      {type === '記録一覧' ? (
        <p className={styles.dropdown__title}>{type}</p>
      ) : (
        <>
          {!isChange && (spSize || !spSize) && (
            <div
              onClick={spSize ? () => setIsChange(true) : () => setIsChange(false)}
              className={styles.dropdown__icon}
            >
              <IconArea path={'/profile_user_icon.png'} height={58} width={52} />
            </div>
          )}
          {isChange && spSize && <span onClick={() => setIsChange(false)} className={styles.dropdown__batsu} />}
        </>
      )}
      <ul className={type === '記録一覧' ? styles.dropdown__cormorant : styles.dropdown__profile}>
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
