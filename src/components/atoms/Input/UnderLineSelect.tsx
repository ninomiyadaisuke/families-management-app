import { VFC, useState, ChangeEvent } from 'react';

import styles from 'styles/components/atoms/under_line_select.module.scss';

type Props = {
  options: { value: string }[];
  id?: string;
  name: 'year' | 'month' | 'day';
  onChange: (e: ChangeEvent<HTMLSelectElement>, name: string) => void;
};

const UnderLineSelect: VFC<Props> = (props) => {
  const { options, id = '', name = '', onChange } = props;

  return (
    <div className={styles.select}>
      <select id={id} onChange={(e) => onChange(e, name)} name={name}>
        <option hidden></option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UnderLineSelect;
