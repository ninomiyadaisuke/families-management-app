import { VFC, memo } from 'react';

import styles from 'styles/components/atoms/add_button.module.scss';

type Props = {
  type: 'normal' | 'outline';
  onClick: () => void;
};

const AddButton: VFC<Props> = memo((props) => {
  const { type = '', onClick } = props;

  const className = (() => {
    switch (type) {
      case 'normal':
        return `${styles.button__normal}`;
      case 'outline':
        return `${styles.button__outline}`;
    }
  })();
  return <button className={className} onClick={onClick} />;
});

export default AddButton;
