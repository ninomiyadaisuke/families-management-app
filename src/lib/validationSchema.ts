import * as yup from 'yup';
//後々消します

export const testSchema = yup.object({
  present_type: yup.string().nullable().required('必須項目です'),
  transaction_type: yup.string().nullable().required('必須項目です'),
});

export const getSchema = (otosidama: boolean, label: string) => {
  const dataSchema = yup.object({
    year: otosidama
      ? yup.string().required('年を記入してください')
      : label === '日付' && yup.string().required(`${label}を全て記入してください`),
    month: label === '日付' && yup.string().required(`${label}を全て記入してください`),
    day: label === '日付' && yup.string().required(`${label}を全て記入してください`),
    first_name: yup.string().required('苗字は必須です'),
    last_name: yup.string().required('名前は必須です'),
  });
  return dataSchema;
};
