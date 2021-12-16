import React, { useState } from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { SideByRadioInput } from 'components/molecules/Input';
import { PrimarySelect } from 'components/atoms/Input';
import { useForm, useWatch } from 'react-hook-form';
import { Spacer } from 'components/atoms/Utilities';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';
import { testSchema } from 'lib/validationSchema';
import { errorMessage } from 'lib/helper';

const defaultValues = {
  transaction_type: '',
  present_type: '',
};

const options = [
  { label: '大輔', value: '世帯主' },
  { label: 'しゅん', value: '配偶者' },
  { label: 'さとし', value: '子供' },
];

const Sample: NextPage = () => {
  const [formData, setFormData] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = useForm({ defaultValues: defaultValues, resolver: yupResolver(testSchema) });
  const wacth = useWatch({ control, name: 'transaction_type' });

  const onSubmit = (data: any) => {
    setFormData(JSON.stringify(data));
  };
  return (
    <Layout pageTitle={'サンプル'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SideByRadioInput
          register={register}
          label={'登録タイプ'}
          name={'transaction_type'}
          errorMessage={errorMessage(errors.transaction_type)}
        />
        <Spacer size={'lg'} />
        <PrimarySelect register={register} label={'誰が'} name={'test'} mandatory={true} options={options} />
        <Spacer size={'lg'} />
        <SideByRadioInput
          register={register}
          label={'記録タイプ'}
          name={'present_type'}
          relationship={'子供'}
          type={wacth}
          errorMessage={errorMessage(errors.present_type)}
        />
        <button type={'submit'}>送信</button>
      </form>
      <p>{formData}</p>
    </Layout>
  );
};

export default Sample;
