import { VFC, useState, ChangeEvent } from 'react';

import styles from 'styles/components/atoms/under_line_select.module.scss';

type Props = {
  options: { value: string; label: string }[];
  id?: string;
};

const UnderLineSelect: VFC<Props> = (props) => {
  const { options, id = '' } = props;
  const [selected, setSelected] = useState(false);
  const changeItem = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      setSelected(true);
    }
  };

  return (
    <div className={styles.select}>
      <select id={id} onChange={changeItem} className={selected ? '' : styles.select__initial}>
        <option hidden>{options[0].label}</option>
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UnderLineSelect;
