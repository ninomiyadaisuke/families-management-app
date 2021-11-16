import { VFC } from 'react';
import { useController, Control } from 'react-hook-form';

import { IconArea } from 'components/atoms/Images';

import styles from 'styles/components/atoms/rounded_input.module.scss';

type Props = {
  multiLine: boolean;
  rows?: number;
  placeholder: string;
  type?: string;
  name: string;
  control: Control<any, object>;
  errorMessage?: string;
  iconIncluded?: boolean;
  label?: string;
};

const RoundedInput: VFC<Props> = (props) => {
  const {
    multiLine = false,
    rows = 1,
    placeholder = '',
    type = '',
    name = '',
    control,
    errorMessage = '',
    iconIncluded = false,
    label = 'test',
  } = props;
  const { field } = useController({ name, control });
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label}</label>
      {multiLine ? (
        <textarea id={name} placeholder={placeholder} rows={rows} {...field} />
      ) : (
        <>
          <input
            id={name}
            className={!iconIncluded ? styles.input__icon_none : ''}
            type={type}
            placeholder={placeholder}
            {...field}
          />
          {iconIncluded && (
            <div className={styles.input__icon}>
              <IconArea path={'/user_icon.png'} height={16} width={16} />
            </div>
          )}
          {errorMessage && (
            <>
              <div className={styles.input__icon_error}>
                <IconArea path={'/error_icon.png'} height={16} width={16} />
              </div>
              <p>{errorMessage}</p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default RoundedInput;
