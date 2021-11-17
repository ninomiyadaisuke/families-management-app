import * as yup from 'yup';
//後々消します
export const testSchema = yup.object({
  first_name: yup.string().required('苗字は必須です'),
  // last_name: yup.string().required('名前は必須です'),
});
