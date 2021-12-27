import { VFC } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { IconArea } from 'components/atoms/Images';
import { RadioInput } from 'components/atoms/Input';
import { WidthSpacer } from 'components/atoms/Utilities';

import styles from 'styles/components/molecules/side_by_radio_input.module.scss';

type Props = {
  label: '登録タイプ' | '記録タイプ';
  name: string;
  register: UseFormRegister<{ present_type: string }>;
  errorMessage: string;
  typeArray?: string[]; //transaction_type: '',present_type: '',relationship: '', //useWatch使用
};

const SideByRadioInput: VFC<Props> = (props) => {
  const { register, label = '', name = '', errorMessage = '', typeArray = ['', '', ''] } = props;

  const radioDisabled = (arry: string[], check: string) => {
    if (arry[0] === 'お年玉' && arry[2] === '子供') {
      if ((arry[1] === '' || arry[1] === '渡した') && check === '渡した') {
        return true;
      } else {
        return false;
      }
    }
    if (arry[0] === 'お年玉' && arry[2] === '世帯主') {
      if ((arry[1] === '' || arry[1] === '貰った') && check === '貰った') {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <div className={styles.input}>
      <label htmlFor={`${name}1`}>{label}</label>
      <div className={styles.input__icon}>
        <IconArea path={'/mandatory_icon.png'} width={16} height={12} />
      </div>
      <div className={styles.input__container}>
        <RadioInput
          register={register}
          value={label === '登録タイプ' ? 'お年玉' : '貰った'}
          disabled={radioDisabled(typeArray, '貰った')}
          id={`${name}1`}
          name={name}
        />
        <WidthSpacer size={'lg'} />
        <WidthSpacer size={'sm'} />
        <RadioInput
          register={register}
          value={label === '記録タイプ' ? '渡した' : 'プレゼント'}
          disabled={radioDisabled(typeArray, '渡した')}
          id={name}
          name={name}
        />
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default SideByRadioInput;
