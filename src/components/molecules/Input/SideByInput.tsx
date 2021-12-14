import { VFC } from 'react';
import { Control, FieldError } from 'react-hook-form';

import { WidthSpacer } from 'components/atoms/Utilities';
import { RoundedInput } from 'components/atoms/Input';
import { IconArea } from 'components/atoms/Images';

import { errorMessage } from 'lib/helper';

import styles from 'styles/components/molecules/side_by_input.module.scss';

type Props = {
  label: string;
  control: Control<any, object>;
  errors: {
    first_name?: FieldError;
    last_name?: FieldError;
  };
};

const SideByInput: VFC<Props> = (props) => {
  const { label, control, errors } = props;
  return (
    <div className={styles.input}>
      <div className={styles.input__icon}>
        <IconArea path={'/mandatory_icon.png'} width={16} height={12} />
      </div>
      <label htmlFor="id">{label}</label>
      <div className={styles.input__container}>
        <div className={styles.input__container_size}>
          <RoundedInput
            iconIncluded={true}
            placeholder={'姓'}
            mandatory={false}
            path={'/user_icon.png'}
            type={'text'}
            name={'first_name'}
            control={control}
            errorMessage={errorMessage(errors.first_name)}
          />
        </div>
        <WidthSpacer size={'lg'} />
        <div className={styles.input__container_size}>
          <RoundedInput
            iconIncluded={false}
            placeholder={'名'}
            mandatory={false}
            type={'text'}
            name={'last_name'}
            control={control}
            errorMessage={errorMessage(errors.last_name)}
          />
        </div>
      </div>
    </div>
  );
};

export default SideByInput;
