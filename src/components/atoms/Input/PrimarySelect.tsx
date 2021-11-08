import React, { VFC } from 'react';
import { useController, Control } from 'react-hook-form';

type Props = {
  name: 'relationship';
  control: Control<any, object>;
  options: { label: string; value: string }[];
};

const PrimarySelect: VFC<Props> = (props) => {
  const { name, control, options } = props;
  const { field } = useController({ name, control });

  return (
    <div>
      <input type="radio" name="option" />
      <span>続柄を選択</span>
      {options.map((option) => (
        <label key={option.label} {...field}>
          <input value={option.value} type="radio" name="option" />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default PrimarySelect;
