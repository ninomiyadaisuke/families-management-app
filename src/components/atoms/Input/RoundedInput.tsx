import { VFC } from 'react';
import { useController, Control } from 'react-hook-form';

import { IconArea } from 'components/atoms/Images';

import styles from 'styles/components/atoms/rounded_input.module.scss';

type Props = {
  maultiLine: boolean;
  rows?: number;
  placeholder: string;
  type?: string;
  name: string;
  control: Control<any, object>;
  errorMessage?: string;
  iconIncluded?: boolean;
};

const RoundedInput: VFC<Props> = (props) => {
  const {
    maultiLine = false,
    rows = 1,
    placeholder = '',
    type = '',
    name = '',
    control,
    errorMessage = '',
    iconIncluded = false,
  } = props;
  const { field } = useController({ name, control });
  return (
    <div className={styles.input}>
      {maultiLine ? (
        <textarea placeholder={placeholder} rows={rows} {...field} />
      ) : (
        <>
          <div>
            <input
              className={!iconIncluded ? styles.input__icon_none : ''}
              type={type}
              placeholder={placeholder}
              {...field}
            />
          </div>
          {iconIncluded && (
            <div className={styles.input__icon}>
              <IconArea path={'/user_icon.png'} height={16} width={16} />
            </div>
          )}
          {errorMessage && (
            <div className={styles.input__icon_error}>
              <IconArea path={'/error_icon.png'} height={16} width={16} />
            </div>
          )}
          {errorMessage && <p>{errorMessage}</p>}
        </>
      )}
    </div>
  );
};

export default RoundedInput;
