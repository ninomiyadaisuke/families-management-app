import { VFC, ChangeEvent } from 'react';
import { Control, useController } from 'react-hook-form';

import styles from 'styles/components/atoms/rounded_select.module.scss';

type Props = {
  options: { value: string }[];
  disabled?: boolean;
  id?: string;
  name: 'year' | 'month' | 'day';
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  control: Control<any, object>;
};

const RoundedSelect: VFC<Props> = (props) => {
  const { options, disabled = false, id = '', onChange, name, control } = props;
  const { field } = useController({ name, control });

  return (
    <div className={styles.select}>
      <i />
      <select id={id} onChange={onChange} disabled={disabled} {...field}>
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

export default RoundedSelect;
