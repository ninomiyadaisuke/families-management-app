import { useState } from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { DateSelect } from 'components/molecules/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';
import { getSchema } from 'lib/validationSchema';
import { RoundedInput } from 'components/atoms/Input';

const defaultValues = {
  year: '',
  month: '',
  day: '',
  name: '',
};

const Sample: NextPage = () => {
  const [formData, setFormData] = useState('');
  const {
    handleSubmit,
    control,
    getValues,
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

  return (
    <Layout pageTitle={'サンプル'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <DateSelect type={'rounded'} label={'日付'} control={control} errors={errors} />
        </div>
        <div style={{ margin: '30px' }}></div>
        {/* <div>
          <DateSelect type={'rounded'} label={'日付'} control={control} errors={errors} otosidama={true} />
        </div> */}
        <div style={{ margin: '30px' }}></div>
        <div style={{ width: '500px' }}>
          <RoundedInput
            multiLine={false}
            label={'名前'}
            name={'name'}
            control={control}
            placeholder={'test'}
            errorMessage={errors.name && errors.name.message}
          />
        </div>
        <button type="submit">送信</button>
      </form>
      <p>{formData}</p>
    </Layout>
  );
};

export default Sample;
