import React, { useState } from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { useForm } from 'react-hook-form';
import { SecondarySelect } from 'components/atoms/Input';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';
import { testSchema } from 'lib/validationSchema';

const defaultValues = {
  present_type: '',
};

const options = [
  {
    label: '渡した',
    value: '渡した',
  },
  {
    label: '貰った',
    value: '貰った',
  },
];

const Sample: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(testSchema),
  });
  const [formData, setFormData] = useState('');
  const onSubmit = (data: any) => {
    setFormData(JSON.stringify(data));
  };
  return (
    <Layout pageTitle={'サンプル'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ width: '153px' }}>
          <SecondarySelect
            options={options}
            label={'記録タイプ'}
            register={register}
            name={'present_type'}
            errorMessage={errors.present_type && errors.present_type.message}
          />
        </div>
        <button type="submit">送信</button>
      </form>
      <p>{formData}</p>
    </Layout>
  );
};

export default Sample;
