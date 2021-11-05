import React, { useState } from 'react';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';

import { Layout } from 'components/layout';
import { CheckBox } from 'components/atoms/Input';

const Sample: NextPage = () => {
  const [checkData, setCheckData] = useState('');
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    setCheckData(JSON.stringify(data));
  };

  return (
    <Layout pageTitle={'サンプル'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CheckBox name="login_type" control={control} />
        <button type="submit">送信</button>
      </form>
      <div>{checkData}</div>
    </Layout>
  );
};

export default Sample;
