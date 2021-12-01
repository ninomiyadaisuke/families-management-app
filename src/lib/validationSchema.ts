import * as yup from 'yup';
//後々消します
export const testSchema = yup.object({
  present_type: yup.string().required('必須項目です'),
});
