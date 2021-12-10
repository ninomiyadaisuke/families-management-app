import { useState } from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { DateSelect } from 'components/molecules/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';
import { getSchema } from 'lib/validationSchema';

const defaultValues = {
  year: '',
  month: '',
  day: '',
};

const Sample: NextPage = () => {
  const [formData, setFormData] = useState('');
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(getSchema(false, '日付')),
  });

  const onSubmit = (data: any) => {
    const date = { date: `${data.year}/${data.month}/${data.day}` };
    setFormData(JSON.stringify(data));
    const DateType = new Date(date.date);
  };

  const errorMeassage = () => {
    if (errors.year) return errors.year.message;
    if (errors.month) return errors.month.message;
    if (errors.day) return errors.day.message;
  };

  return (
    <Layout pageTitle={'サンプル'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div>
          <DateSelect type={'rounded'} label={'日付'} control={control} errorMeassage={errorMeassage()} />
        </div> */}
        <div style={{ margin: '30px' }}></div>
        <div>
          <DateSelect type={'underLine'} label={'生年月日'} control={control} errorMeassage={errorMeassage()} />
        </div>
        <button type="submit">送信</button>
      </form>
      <p>{formData}</p>
    </Layout>
  );
};

export default Sample;
