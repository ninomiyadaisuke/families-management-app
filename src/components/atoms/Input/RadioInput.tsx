import { VFC } from 'react';
import { UseFormRegister } from 'react-hook-form';

import styles from 'styles/components/atoms/radio_input.module.scss';

type Props = {
  inputName: string;
  label: 'お年玉' | 'プレゼント' | '貰った' | '渡した';
  name: string;
  register: UseFormRegister<{ [key: string]: string }>;
  id: string;
  disabled: boolean;
};

const RadioInput: VFC<Props> = (props) => {
  const { inputName = '', label = '', id = '', name = '', disabled = false, register } = props;

  return (
    <div className={styles.input}>
      <input type="radio" name={inputName} value={label} disabled={disabled} id={id} {...register(name)} />
      <label className={disabled ? styles.input__label_disabled : styles.input__label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
