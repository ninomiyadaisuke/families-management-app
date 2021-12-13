import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { useForm } from 'react-hook-form';
import { SideByInput } from 'components/molecules/Input';

const Sample: NextPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <Layout pageTitle={'サンプル'}>
      <SideByInput control={control} errors={errors} label={'名前'} />
    </Layout>
  );
};

export default Sample;
