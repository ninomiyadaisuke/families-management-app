import React, { useState } from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { PrimaryInput } from 'components/atoms/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';
import { testSchema } from 'lib/validationSchema';

const defaultValues = {
  first_name: '',
  last_name: '',
  hobby: '',
};

const Sample: NextPage = () => {
  const [inputData, setInputData] = useState('');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(testSchema),
  });

  const onSubmit = (data: any) => {
    setInputData(JSON.stringify(data));
  };
  return (
    <Layout pageTitle={'サンプル'}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '500px' }}>
        <PrimaryInput
          placeholder={'苗字'}
          type={'text'}
          mandatory={true}
          error={errors.first_name && errors.first_name.message}
          control={control}
          name={'first_name'}
        />
        <div style={{ margin: '30px' }} />
        <PrimaryInput
          placeholder={'名前'}
          type={'text'}
          control={control}
          name={'last_name'}
          mandatory={true}
          error={errors.last_name && errors.last_name.message}
        />
        <div style={{ margin: '30px' }} />
        <PrimaryInput placeholder={'趣味'} type={'text'} control={control} name={'hobby'} />
        <div style={{ margin: '30px' }} />
        <button>送信</button>
      </form>
      <p>{inputData}</p>
    </Layout>
  );
};

export default Sample;
