import React, { useState } from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { SearchInput } from 'components/atoms/Input';
import { useForm } from 'react-hook-form';

const defaulteValues = {
  test: '',
};

type Search = {
  text: string;
};

const Sample: NextPage = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: defaulteValues,
  });

  const [formData, setFormData] = useState('');

  const onSubmit = (data: Search) => {
    setFormData(JSON.stringify(data));
  };
  return (
    <Layout pageTitle={'サンプル'}>
      <SearchInput control={control} name={'test'} placeholder={'test'} onClick={handleSubmit(onSubmit)} />
      <p>{formData}</p>
    </Layout>
  );
};

export default Sample;
