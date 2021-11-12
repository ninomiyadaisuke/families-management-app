import { VFC } from 'react';
import { useController, Control } from 'react-hook-form';

import { IconArea } from 'components/atoms/Images';

import styles from 'styles/components/atoms/primary_input.module.scss';

type Props = {
  placeholder: string;
  type: string;
  name: string;
  control: Control<any, object>;
  error?: string;
  mandatory?: boolean;
};

const PrimaryInput: VFC<Props> = (props) => {
  const { placeholder, type, error = '', mandatory = false, name, control } = props;

  const { field } = useController({ name, control });

  return (
    <div className={styles.input}>
      <input type={type} placeholder={placeholder} {...field} />
      <div className={styles.input__icon}>
        <IconArea path={'/user_icon.png'} height={16} width={16} />
      </div>
      {mandatory && !error ? (
        <div className={styles.input__icon_mandatory}>
          <IconArea path={'/mandatory_icon.png'} height={12} width={20} />
        </div>
      ) : (
        error && (
          <>
            <div className={styles.input__icon_error}>
              <IconArea path={'/error_icon.png'} height={16} width={16} />
            </div>
            <p>{error}</p>
          </>
        )
      )}
    </div>
  );
};

export default PrimaryInput;
