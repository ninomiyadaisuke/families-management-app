import { VFC } from 'react';
import { Control, useController } from 'react-hook-form';

import styles from 'styles/components/atoms/rounded_select.module.scss';

type Props = {
  options: { value: string }[];
  disabled?: boolean;
  id?: string;
  name: 'year' | 'month' | 'day';
  control: Control<any, object>;
};

const RoundedSelect: VFC<Props> = (props) => {
  const { options, disabled = false, id = '', name, control } = props;
  const { field } = useController({ name, control });

  return (
    <div className={styles.select}>
      <i className={disabled ? styles.select__disabled : styles.select__valid} />
      <select id={id} disabled={disabled} {...field}>
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
