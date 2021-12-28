import { VFC } from 'react';
import { IconArea } from 'components/atoms/Images';
import styles from 'styles/components/molecules/media_icons.module.scss';

const MediaIcons: VFC = () => {
  return (
    <div className={styles.icons}>
      <IconArea path={'/facebook_icon.png'} width={19} height={36} />
      <IconArea path={'/twitter_icon.png'} width={40} height={32} />
      <IconArea path={'/instagram_icon.png'} width={36} height={36} />
    </div>
  );
};

export default MediaIcons;
