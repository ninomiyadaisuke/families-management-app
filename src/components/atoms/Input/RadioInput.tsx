import { VFC } from 'react';
import { UseFormRegister } from 'react-hook-form';

import styles from 'styles/components/atoms/radio_input.module.scss';

type Props = {
  value: 'お年玉' | 'プレゼント' | '貰った' | '渡した' | '';
  name: string;
  register: UseFormRegister<{ [key: string]: string }>;
  id: string;
  disabled?: boolean;
  test?: boolean;
};

const RadioInput: VFC<Props> = (props) => {
  const { value = '', id = '', name = '', disabled = false, register } = props;

  return (
    <div className={styles.input}>
      <input
        type={'radio'}
        name={name}
        value={value}
        id={id}
        disabled={disabled}
        {...register(name, {
          disabled: disabled,
        })}
      />
      <label className={disabled ? styles.input__label_disabled : styles.input__label} htmlFor={id}>
        {value}
      </label>
    </div>
  );
};

export default RadioInput;
