import { VFC } from 'react';

import styles from 'styles/components/atoms/primary_button.module.scss';

type Props = {
  onClick: () => void;
  lable: string;
  type: 'navy' | 'wine_red' | 'light_blue' | 'outline';
};

const PrimaryButton: VFC<Props> = (props) => {
  const { onClick, lable = '', type = '' } = props;
  const className = (() => {
    switch (type) {
      case 'navy':
        return `${styles.button__navy}`;
      case 'wine_red':
        return `${styles.button__wine_red}`;
      case 'light_blue':
        return `${styles.button__light_blue}`;
      case 'outline':
        return `${styles.button__outline}`;
    }
  })();
  return (
    <button className={className} onClick={onClick}>
      {lable}
    </button>
  );
};

export default PrimaryButton;
