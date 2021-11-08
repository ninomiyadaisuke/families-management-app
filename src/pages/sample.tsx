import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { PrimarySelect } from 'components/atoms/Input';
import { useForm } from 'react-hook-form';

export const options = [
  { label: '世帯主', value: '世帯主' },
  { label: '配偶者', value: '配偶者' },
  { label: '同居人', value: '同居人' },
  { label: '子供', value: '子供' },
  { label: '親', value: '親' },
];

const defaultValues = {
  relationship: '',
};
const Sample: NextPage = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = (data: any) => {};

  return (
    <Layout pageTitle={'サンプル'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PrimarySelect name={'relationship'} control={control} options={options} />
        <button type="submit">送信</button>
      </form>
    </Layout>
  );
};

export default Sample;
