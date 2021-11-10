import React, { VFC } from 'react';
import { useController, Control } from 'react-hook-form';

import styles from 'styles/components/atoms/primary_select.module.scss';

type Props = {
  label: string;
  name: 'relationship';
  control: Control<any, object>;
  options: { label: string; value: string }[];
};

const PrimarySelect: VFC<Props> = (props) => {
  const { name, control, options, label } = props;
  const { field } = useController({ name, control });

  return (
    <div className={styles.select}>
      <input className={'test'} type="radio" name="option" />
      <i className={styles.arrowup} />
      <i className={styles.arrowdown} />
      <span className={styles.label}>{label}</span>
      {options.map((option) => (
        <label className={styles.option} key={option.label} {...field}>
          <input type="radio" value={option.value} name="option" />
          <span className={styles.title}>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default PrimarySelect;
