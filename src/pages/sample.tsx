import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { PrimaryInput, PrimarySelect } from 'components/atoms/Input';
import { useForm } from 'react-hook-form';

const options = [
  { label: '世帯主', value: '世帯主' },
  { label: '配偶者', value: '配偶者' },
  { label: '子供', value: '子供' },
  { label: '同居人', value: '同居人' },
];

const defaultValues = {
  type: '',
};

const Sample: NextPage = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: defaultValues,
  });
  return (
    <Layout pageTitle={'サンプル'}>
      <PrimarySelect options={options} name={'type'} register={register} label={'役割'} mandatory={true} />
    </Layout>
  );
};

export default Sample;
