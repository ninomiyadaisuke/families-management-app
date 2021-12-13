import { VFC } from 'react';
import { Control, FieldError } from 'react-hook-form';

import { RoundedSelect, UnderLineSelect } from 'components/atoms/Input';
import { WidthSpacer } from 'components/atoms/Utilities';
import { IconArea } from 'components/atoms/Images';

import { useSelectedDate } from 'hooks/useSelectedDate';
import { errorMessage } from 'lib/helper';

import styles from 'styles/components/molecules/date_select.module.scss';

type Props = {
  type: 'rounded' | 'underLine';
  label?: string;
  otosidama?: boolean;
  control: Control<any, object>;
  errors: {
    year?: FieldError;
    month?: FieldError;
    day?: FieldError;
  };
};

const DateSelect: VFC<Props> = (props) => {
  const { type = '', label = '', otosidama = false, control, errors } = props;
  const { yearsData, monthData, dayData } = useSelectedDate(control);

  return (
    <div className={styles.select}>
      <label htmlFor="id">{label}</label>
      {label === '日付' && (
        <div className={styles.select__rounded_icon}>
          <IconArea path={'/mandatory_icon.png'} width={16} height={12} />
        </div>
      )}
      {errorMessage(errors.year) && <p className={styles.select__error}>{errorMessage(errors.year)}</p>}
      {type === 'rounded' ? (
        <>
          <div className={styles.select__rounded}>
            <div className={styles.select__rounded_md}>
              <RoundedSelect options={yearsData} id={'id'} control={control} name={'year'} />
            </div>
            <p className={styles.select__rounded_year}>年</p>
            <WidthSpacer size={'lg'} />
            <WidthSpacer size={'xs'} />
            <div className={styles.select__rounded_xs}>
              <RoundedSelect options={monthData} control={control} name={'month'} disabled={otosidama} />
            </div>
            <WidthSpacer size={'lg'} />
            <WidthSpacer size={'xs'} />
            <p className={styles.select__rounded_month}>月</p>
            <div className={styles.select__rounded_xs}>
              <RoundedSelect options={dayData} control={control} name={'day'} disabled={otosidama} />
            </div>
            <p className={styles.select__rounded_day}>日</p>
          </div>
        </>
      ) : (
        <div className={styles.select__line}>
          <div className={styles.select__line_md}>
            <UnderLineSelect options={yearsData} id={'id'} name={'year'} control={control} />
          </div>
          <p className={styles.select__line_year}>年</p>
          <WidthSpacer size={'xl'} />
          <WidthSpacer size={'sm'} />
          <div className={styles.select__line_xs}>
            <UnderLineSelect options={monthData} name={'month'} control={control} />
          </div>
          <p className={styles.select__line_month}>月</p>
          <WidthSpacer size={'xl'} />
          <WidthSpacer size={'sm'} />
          <div className={styles.select__line_xs}>
            <UnderLineSelect options={dayData} name={'day'} control={control} />
          </div>
          <p className={styles.select__line_day}>日</p>
        </div>
      )}
    </div>
  );
};

export default DateSelect;
