import { VFC } from 'react';
import { Control, useController } from 'react-hook-form';

import styles from 'styles/components/atoms/under_line_select.module.scss';

type Props = {
  options: { value: string }[];
  id?: string;
  name: 'year' | 'month' | 'day';
  control: Control<any, object>;
};

const UnderLineSelect: VFC<Props> = (props) => {
  const { options, id = '', name = '', control } = props;
  const { field } = useController({ name, control });

  return (
    <div className={styles.select}>
      <select id={id} name={name} {...field}>
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
