import { useState, useMemo, useEffect } from 'react';
import { useWatch, Control } from 'react-hook-form';

export const useSelectedDate = (control: Control<any, object>) => {
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
  const options = [];
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
  return { yearsData, monthData, dayData };
};
