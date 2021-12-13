import React, { useState } from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { SideByInput } from 'components/molecules/Input';
import { useForm } from 'react-hook-form';
import { DateSelect } from 'components/molecules/Input';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';
import { getSchema } from 'lib/validationSchema';

const defaultValues = {
  first_name: '',
  last_name: '',
  year: '',
  month: '',
  day: '',
};

const Sample: NextPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(getSchema(false, '日付')),
  });

  const [formData, setFormData] = useState('');

  const onSubmit = (data: any) => {
    setFormData(JSON.stringify(data));
  };

  return (
    <Layout pageTitle={'サンプル'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SideByInput label={'名前'} control={control} errors={errors} />
        <div style={{ margin: '30px' }}></div>
        <DateSelect control={control} type={'rounded'} label={'生年月日'} errors={errors} />
        <div style={{ margin: '30px' }}></div>
        <button>送信</button>
      </form>
      <p>{formData}</p>
    </Layout>
  );
};

export default Sample;
