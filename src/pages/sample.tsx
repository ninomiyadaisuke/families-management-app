import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { useForm } from 'react-hook-form';
import { RoundedInput } from 'components/atoms/Input';
import { SideByInput } from 'components/molecules/Input';

const Sample: NextPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <Layout pageTitle={'サンプル'}>
      <RoundedInput
        iconIncluded={true}
        placeholder={'姓'}
        mandatory={true}
        size={'full'}
        label={'名前'}
        path={'/user_icon.png'}
        type={'text'}
        name={'first_name'}
        control={control}
      />
      <div style={{ margin: '30px' }}></div>
      <RoundedInput
        iconIncluded={true}
        placeholder={'姓'}
        mandatory={true}
        size={'midule'}
        label={'名前'}
        path={'/user_icon.png'}
        type={'text'}
        name={'first_name'}
        control={control}
        errorMessage={'tew'}
      />
      <div style={{ margin: '30px' }}></div>
      <SideByInput control={control} errors={errors} label={'名前'} />
    </Layout>
  );
};

export default Sample;
