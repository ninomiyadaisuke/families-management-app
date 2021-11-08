import { VFC } from 'react';
import { useController, Control } from 'react-hook-form';

import styles from 'styles/components/atoms/checkbox.module.scss';

type Props = {
  name: 'login_type';
  control: Control<any, object>;
};

const CheckBox: VFC<Props> = (props) => {
  const { name, control } = props;
  const { field } = useController({ name, control });
  return (
    <div className={styles.checkbox}>
      <input id="id" type="checkbox" {...field} />
      <label htmlFor="id" />
    </div>
  );
};

export default CheckBox;
