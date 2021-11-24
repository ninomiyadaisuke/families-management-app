import React, { useState } from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { useForm } from 'react-hook-form';
import { RadioInput } from 'components/atoms/Input';
import { WidthSpacer } from 'components/atoms/Utilities';

const defaultValues = {
  transaction_type: '',
};

const Sample: NextPage = () => {
  const [formData, setFormData] = useState('');
  const { handleSubmit, register } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = (data: any) => {
    setFormData(JSON.stringify(data));
  };

  return (
    <Layout pageTitle={'サンプル'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex' }}>
          <RadioInput
            label={'お年玉'}
            id={'otosidama'}
            inputName={'test'}
            disabled={false}
            register={register}
            name={'transaction_type'}
          />
          <WidthSpacer size={'lg'} />
          <RadioInput
            label={'プレゼント'}
            id={'present'}
            inputName={'test'}
            disabled={false}
            register={register}
            name={'transaction_type'}
          />
          <RadioInput
            label={'プレゼント'}
            id={'test'}
            inputName={'test'}
            disabled={true}
            register={register}
            name={'transaction_type'}
          />
        </div>
        <div style={{ margin: '50px' }} />
        <button>送信</button>
      </form>
      <p>{formData}</p>
    </Layout>
  );
};

export default Sample;
