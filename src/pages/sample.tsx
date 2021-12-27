import React, { useState } from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { SideByRadioInput } from 'components/molecules/Input';
import { useForm, useWatch } from 'react-hook-form';
import { Spacer } from 'components/atoms/Utilities';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';
import { testSchema } from 'lib/validationSchema';
import { errorMessage } from 'lib/helper';
import { PrimarySelect } from 'components/atoms/Input';

const defaultValues = {
  transaction_type: '',
  present_type: '',
  relationship: '',
};

const options = [
  { label: '子供', value: '子供' },
  { label: '世帯主', value: '世帯主' },
];

const Sample: NextPage = () => {
  const [formData, setFormData] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ defaultValues: defaultValues, resolver: yupResolver(testSchema) });

  const transactionTypeWatched = useWatch({
    control,
    name: 'transaction_type',
    defaultValue: '',
  });
  const presentTypeWatched = useWatch({
    control,
    name: 'present_type',
    defaultValue: '',
  });
  const relationshipWatched = useWatch({
    control,
    name: 'relationship',
    defaultValue: '',
  });

  const typeArray = [transactionTypeWatched, presentTypeWatched, relationshipWatched];

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
        <PrimarySelect register={register} label={'続柄'} name={'relationship'} mandatory={true} options={options} />
        <Spacer size={'lg'} />
        <Spacer size={'lg'} />
        <SideByRadioInput
          register={register}
          label={'記録タイプ'}
          name={'present_type'}
          typeArray={typeArray}
          errorMessage={errorMessage(errors.present_type)}
        />
        <Spacer size={'lg'} />
        <button type={'submit'}>送信</button>
        <Spacer size={'lg'} />
      </form>
      <p>{formData}</p>
    </Layout>
  );
};

export default Sample;
