import * as yup from 'yup';
//後々消します
export const testSchema = yup.object({
  present_type: yup.string().required('必須項目です'),
});

export const getSchema = (otosidama: boolean, label: string) => {
  const dataSchema = yup.object({
    year: otosidama
      ? yup.string().required('年を記入してください')
      : label === '日付' && yup.string().required(`${label}を全て記入してください`),
    month: label === '日付' && yup.string().required(`${label}を全て記入してください`),
    day: label === '日付' && yup.string().required(`${label}を全て記入してください`),
    name: yup.string().required('名前は必須です'),
  });
  return dataSchema;
};

export const DateSchema = yup.object({
  year: yup.string().required(''),
  month: yup.string().required(''),
  day: yup.string().required(''),
});

// react-hook-form trigger
