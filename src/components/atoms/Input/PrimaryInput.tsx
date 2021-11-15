import { VFC } from 'react';
import { useController, Control } from 'react-hook-form';

import { IconArea } from 'components/atoms/Images';

import styles from 'styles/components/atoms/primary_input.module.scss';

type Props = {
  placeholder: string;
  path: string;
  type: string;
  name: string;
  control: Control<any, object>;
  error?: string;
  status?: 'mandatory' | 'error' | 'none';
};

const PrimaryInput: VFC<Props> = (props) => {
  const { placeholder, path, type, error = '', status = 'none', name, control } = props;

  const { field } = useController({ name, control });

  return (
    <div className={styles.input}>
      <input type={type} placeholder={placeholder} {...field} />
      <div className={styles.input__icon}>
        <IconArea path={path} height={16} width={16} />
      </div>
      <div className={styles.input__icon_status}>
        {status !== 'none' && (
          <IconArea
            path={status === 'error' ? '/error_icon.png' : '/mandatory_icon.png'}
            height={status === 'error' ? 16 : 12}
            width={status === 'error' ? 16 : 20}
          />
        )}
      </div>
      <p>{error}</p>
    </div>
  );
};

export default PrimaryInput;
