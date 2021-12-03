import { VFC, memo } from 'react';

import styles from 'styles/components/atoms/regiser_button.module.scss';

type Props = {
  onClick: () => void;
};

const RegiserButton: VFC<Props> = memo((props) => {
  const { onClick } = props;

  return (
    <a onClick={onClick} className={styles.button}>
      <span>Regiser now</span>
      <span>登録</span>
    </a>
  );
});

export default RegiserButton;
