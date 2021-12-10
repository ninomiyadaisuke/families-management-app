import { VFC, useState, useEffect } from 'react';
import { Control, FieldError, useWatch } from 'react-hook-form';

import { RoundedSelect, UnderLineSelect } from 'components/atoms/Input';
import { WidthSpacer } from 'components/atoms/Utilities';
import { IconArea } from 'components/atoms/Images';

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
  const [maxDay, setMaxDay] = useState(31);

  const selectedYear = useWatch({ control, name: 'year' });
  const selectedMonth = useWatch({ control, name: 'month' });
  const isLeapYear = new Date(`${selectedYear}/2/29`).getMonth() + 1 === 2;

  useEffect(() => {
    if (selectedMonth === '04' || selectedMonth === '06' || selectedMonth === '09' || selectedMonth === '11') {
      setMaxDay(30);
    } else {
      setMaxDay(31);
    }
    if (isLeapYear && selectedMonth === '02') setMaxDay(29);
    if (!isLeapYear && selectedMonth === '02') setMaxDay(28);
  }, [selectedYear, selectedMonth]);

  const thisYear = new Date().getFullYear(); //今年
  const yearsData = []; // 年の配列
  const monthData = []; // 月の配列
  const dayData = []; // 日の配列
  for (let i = 0; i <= 100; i++) {
    const year = thisYear - i;
    const stringYear = String(year);
    yearsData.push({ value: stringYear });
  }
  for (let i = 1; i <= maxDay; i++) {
    const day = String(i);
    if (Number(day) < 10) {
      const modifiedDay = `0${day}`;
      dayData.push({ value: modifiedDay });
    }
    if (Number(day) >= 10) {
      dayData.push({ value: day });
    }
  }
  for (let i = 1; i <= 12; i++) {
    const month = String(i);
    if (Number(month) < 10) {
      const modifiedMonth = `0${month}`;
      monthData.push({ value: modifiedMonth });
    }
    if (Number(month) >= 10) {
      monthData.push({ value: month });
    }
  }

  return (
    <div className={styles.select}>
      <label htmlFor="id">{label}</label>
      {label === '日付' && (
        <div className={styles.select__rounded_icon}>
          <IconArea path={'/mandatory_icon.png'} width={16} height={12} />
        </div>
      )}

      {type === 'rounded' ? (
        <>
          {errors.year && <p className={styles.select__error}>{errors.year.message}</p>}
          {errors.month && <p className={styles.select__error}>{errors.month.message}</p>}
          {errors.day && <p className={styles.select__error}>{errors.day.message}</p>}

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
          <WidthSpacer size={'xs'} />
          <div className={styles.select__line_xs}>
            <UnderLineSelect options={monthData} name={'month'} control={control} />
          </div>
          <p className={styles.select__line_month}>月</p>
          <WidthSpacer size={'xl'} />
          <WidthSpacer size={'sm'} />
          <WidthSpacer size={'xs'} />
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
