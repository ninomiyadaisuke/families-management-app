import React, { VFC, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { IconArea } from 'components/atoms/Images';

import styles from 'styles/components/atoms/primary_select.module.scss';

type Props = {
  register: UseFormRegister<{ [key: string]: string }>;
  label: string;
  name: string;
  mandatory: boolean;
  options: { label: string; value: string }[];
};

const PrimarySelect: VFC<Props> = (props) => {
  const { name = '', options, label = '', mandatory = false, register } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(label);

  return (
    <div className={styles.select}>
      <label className={styles.select__label}>{label}</label>
      {mandatory && (
        <div className={styles.select__icon}>
          <IconArea path={'/mandatory_icon.png'} width={16} height={12} />
        </div>
      )}
      <div className={styles.select__container}>
        <div onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? styles.select__arrow : styles.select__arrow_down} />
          <span className={styles.select__container}>{selected}</span>
        </div>
        {isOpen &&
          options.map((option) => (
            <label key={option.label}>
              <input
                id={name}
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
    </div>
  );
};

export default PrimarySelect;
