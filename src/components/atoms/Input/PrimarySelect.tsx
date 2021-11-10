import React, { VFC, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import styles from 'styles/components/atoms/primary_select.module.scss';

type Props = {
  register: UseFormRegister<{ relationship: string }>;
  label: string;
  name: 'relationship';
  options: { label: string; value: string }[];
};

const PrimarySelect: VFC<Props> = (props) => {
  const { name, options, label, register } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(label);

  return (
    <div className={styles.select}>
      <div onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? styles.select_arrowup : styles.select_arrowdown} />
        <span className={styles.label}>{selected}</span>
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
            <span className={styles.title}>{option.label}</span>
          </label>
        ))}
    </div>
  );
};

export default PrimarySelect;
