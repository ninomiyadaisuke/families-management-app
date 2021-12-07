import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { DateSelect } from 'components/molecules/Input';

const Sample: NextPage = () => {
  return (
    <Layout pageTitle={'サンプル'}>
      <div>
        <DateSelect type={'rounded'} label={'日付'} />
        <div style={{ margin: '30px' }}></div>
        <DateSelect type={'underLine'} label={'生年月日'} />
      </div>
    </Layout>
  );
};

export default Sample;
