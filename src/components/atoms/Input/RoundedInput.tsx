import { VFC } from 'react';
import { useController, Control } from 'react-hook-form';

import { IconArea } from 'components/atoms/Images';

import styles from 'styles/components/atoms/rounded_input.module.scss';

type Props = {
  iconIncluded?: boolean;
  placeholder: string;
  mandatory: boolean;
  size?: 'full' | 'midule';
  path?: string;
  label?: string;
  type?: string;
  rows?: number;
  name: string;
  control: Control<any, object>;
  errorMessage?: string;
};

const RoundedInput: VFC<Props> = (props) => {
  const {
    iconIncluded = false,
    placeholder = '',
    mandatory = false,
    size = '',
    path = '',
    label = '',
    type = '',
    name = '',
    control,
    errorMessage = '',
  } = props;

  const className = (() => {
    switch (size) {
      case 'full':
        return `${styles.input__container_full}`;
      case 'midule':
        return `${styles.input__container_midule}`;
      default:
        return `${styles.input__container}`;
    }
  })();

  const { field } = useController({ name, control });
  return (
    <div className={styles.input}>
      {label && <label htmlFor={name}>{label}</label>}
      {mandatory && (
        <div className={styles.input__icon_mandatory}>
          <IconArea path={'/mandatory_icon.png'} width={16} height={12} />
        </div>
      )}
      <div className={className}>
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
              <IconArea path={path} height={16} width={16} />
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
      </div>
    </div>
  );
};

export default RoundedInput;
