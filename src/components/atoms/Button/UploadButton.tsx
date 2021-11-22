import { VFC, memo } from 'react';

import { IconArea } from 'components/atoms/Images';

import styles from 'styles/components/atoms/upload_button.module.scss';

type Props = {
  onClick: () => void;
  label: string;
  type: 'file' | 'button';
  buttonType: 'selected' | 'upload';
  id: 'selectedId' | 'uploadId';
};

const UploadButton: VFC<Props> = memo((props) => {
  const { label, buttonType, type, onClick, id } = props;

  const className = (() => {
    switch (buttonType) {
      case 'selected':
        return `${styles.button__selected}`;
      case 'upload':
        return `${styles.button__upload}`;
    }
  })();

  return (
    <div className={className}>
      <label htmlFor={id}>
        <input onClick={onClick} id={id} type={type} hidden />
        {label}
      </label>
      <div className={styles.button__icon}>
        <IconArea path={buttonType === 'selected' ? '/plus_icon.png' : '/upload_icon.png'} height={14} width={14} />
      </div>
    </div>
  );
});

export default UploadButton;
