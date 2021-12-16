import { VFC } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { IconArea } from 'components/atoms/Images';
import { RadioInput } from 'components/atoms/Input';
import { WidthSpacer } from 'components/atoms/Utilities';

import styles from 'styles/components/molecules/side_by_radio_input.module.scss';

type Props = {
  label: string;
  name: string;
  register: UseFormRegister<{ [key: string]: string }>;
  relationship?: '世帯主' | '配偶者' | '子供' | '親' | '同居人';
  type?: string; //useWatchを使用する
  errorMessage: string;
};

const SideByRadioInput: VFC<Props> = (props) => {
  const { register, label = '', name = '', relationship = '', type = '', errorMessage = '' } = props;

  return (
    <div className={styles.input}>
      <label>{label}</label>
      <div className={styles.input__icon}>
        <IconArea path={'/mandatory_icon.png'} width={16} height={12} />
      </div>
      <div className={styles.input__container}>
        <RadioInput
          register={register}
          label={label === '登録タイプ' ? 'お年玉' : '貰った'}
          disabled={
            (relationship === '世帯主' ||
              relationship === '同居人' ||
              relationship === '親' ||
              relationship === '配偶者') &&
            type === 'お年玉'
          }
          id={`${name}1`}
          name={name}
        />
        <WidthSpacer size={'lg'} />
        <WidthSpacer size={'sm'} />
        <RadioInput
          register={register}
          label={label === '記録タイプ' ? '渡した' : 'プレゼント'}
          disabled={relationship === '子供' && type === 'お年玉'}
          id={name}
          name={name}
        />
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default SideByRadioInput;
