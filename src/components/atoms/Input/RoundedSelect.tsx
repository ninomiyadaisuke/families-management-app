import { VFC, useState, ChangeEvent } from 'react';

import styles from 'styles/components/atoms/rounded_select.module.scss';

type Props = {
  options: { value: string; label: string }[];
  disabled?: boolean;
};

const RoundedSelect: VFC<Props> = (props) => {
  const { options, disabled = false } = props;
  const [selected, setSelected] = useState(false);

  const changeItem = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      setSelected(true);
    }
  };

  return (
    <div className={styles.select}>
      <i />
      <select id={'id'} onChange={changeItem} disabled={disabled} className={selected ? '' : styles.select__initial}>
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

export default RoundedSelect;
