import { VFC, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { IconArea } from 'components/atoms/Images';

import styles from 'styles/components/atoms/secondary_select.module.scss';

type Props = {
  register: UseFormRegister<{ [key: string]: string }>;
  label: string;
  name: string;
  options: { label: string; value: string }[];
  errorMessage?: string;
};

const SecondarySelect: VFC<Props> = (props) => {
  const { register, label = '', name = '', options = [{ label: '', value: '' }], errorMessage = '' } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(label);
  return (
    <div className={styles.select}>
      <div onClick={() => setIsOpen(!isOpen)}>
        <div className={isOpen ? styles.select__triangle_up : styles.select__triangle}>
          <IconArea path={'/triangle_icon.png'} width={11} height={10} />
        </div>
        <span className={styles.select__label}>{selected}</span>
      </div>
      {isOpen &&
        options.map((option) => (
          <label key={option.label}>
            <input
              onClick={() => {
                setSelected(option.label);
                setIsOpen(false);
              }}
              type="radio"
              value={option.value}
              name="option"
              {...register(name)}
            />
            <span className={styles.select__title}>{option.label}</span>
          </label>
        ))}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default SecondarySelect;
