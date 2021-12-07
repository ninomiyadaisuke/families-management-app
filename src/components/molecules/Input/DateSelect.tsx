import { VFC } from 'react';

import { RoundedSelect, UnderLineSelect } from 'components/atoms/Input';
import { WidthSpacer } from 'components/atoms/Utilities';

import styles from 'styles/components/molecules/date_select.module.scss';

const yearData = [
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
  { value: '2019', label: '2019' },
];

const monthData = [
  { value: '1', label: '01' },
  { value: '2', label: '02' },
  { value: '3', label: '03' },
  { value: '4', label: '04' },
  { value: '5', label: '05' },
  { value: '6', label: '06' },
  { value: '7', label: '07' },
  { value: '8', label: '08' },
  { value: '9', label: '09' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
];

const dayData = [
  { value: '1', label: '01' },
  { value: '2', label: '02' },
  { value: '3', label: '03' },
  { value: '4', label: '04' },
  { value: '5', label: '05' },
  { value: '6', label: '06' },
  { value: '7', label: '07' },
  { value: '8', label: '08' },
  { value: '9', label: '09' },
];

type Props = {
  type: 'rounded' | 'underLine';
  label?: string;
};

const DateSelect: VFC<Props> = (props) => {
  const { type = '', label = '' } = props;
  return (
    <div className={styles.select}>
      <label htmlFor="id">{label}</label>
      {type === 'rounded' ? (
        <div className={styles.select__rounded}>
          <div className={styles.select__rounded_md}>
            <RoundedSelect options={yearData} />
          </div>
          <p className={styles.select__rounded_year}>年</p>
          <WidthSpacer size={'lg'} />
          <WidthSpacer size={'xs'} />
          <div className={styles.select__rounded_xs}>
            <RoundedSelect options={monthData} />
          </div>
          <WidthSpacer size={'lg'} />
          <WidthSpacer size={'xs'} />
          <p className={styles.select__rounded_month}>月</p>
          <div className={styles.select__rounded_xs}>
            <RoundedSelect options={dayData} />
          </div>
          <p className={styles.select__rounded_day}>日</p>
        </div>
      ) : (
        <div className={styles.select__line}>
          <div className={styles.select__line_md}>
            <UnderLineSelect options={yearData} />
          </div>
          <p className={styles.select__line_year}>年</p>
          <WidthSpacer size={'xl'} />
          <WidthSpacer size={'sm'} />
          <WidthSpacer size={'xs'} />
          <div className={styles.select__line_xs}>
            <UnderLineSelect options={monthData} />
          </div>
          <p className={styles.select__line_month}>月</p>
          <WidthSpacer size={'xl'} />
          <WidthSpacer size={'sm'} />
          <WidthSpacer size={'xs'} />

          <div className={styles.select__line_xs}>
            <UnderLineSelect options={dayData} />
          </div>
          <p className={styles.select__line_day}>日</p>
        </div>
      )}
    </div>
  );
};

export default DateSelect;
