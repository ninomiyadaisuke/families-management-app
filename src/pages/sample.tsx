import React, { useState } from 'react';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { Layout } from 'components/layout';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';
import { RoundedInput } from 'components/atoms/Input';
import { testSchema } from 'lib/validationSchema';

const defaultValues = {
  first_name: '',
  last_name: '',
  hobby: '',
};

const Sample: NextPage = () => {
  const [formData, setFormData] = useState('');
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(testSchema),
  });
  const onSumit = (data: any) => {
    setFormData(JSON.stringify(data));
  };
  return (
    <Layout pageTitle={'サンプル'}>
      <form onSubmit={handleSubmit(onSumit)}>
        <div style={{ width: '350px' }}>
          <RoundedInput
            maultiLine={false}
            iconIncluded={true}
            type={'text'}
            placeholder={'姓'}
            name={'first_name'}
            control={control}
            errorMessage={errors.first_name && errors.first_name.message}
          />
          <div style={{ margin: '30px' }} />
          <RoundedInput
            maultiLine={false}
            placeholder={'名'}
            type={'text'}
            name={'last_name'}
            control={control}
            errorMessage={errors.last_name && errors.last_name.message}
          />
          <div style={{ margin: '30px' }} />
          <RoundedInput maultiLine={true} rows={5} placeholder={'趣味'} name="hobby" control={control} />
          <button type="submit">送信</button>
        </div>
      </form>
      <p>{formData}</p>
    </Layout>
  );
};

export default Sample;
