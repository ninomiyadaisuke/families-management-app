import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';

import { PrimaryButton } from 'components/atoms/Button';
import { Spacer } from 'components/atoms/Utilities';

const Sample: NextPage = () => {
  const test = () => {};
  return (
    <Layout pageTitle={'サンプル'}>
      <div style={{ width: '164px', height: '65px', fontSize: '20px' }}>
        <PrimaryButton lable={'送信'} type={'navy'} onClick={test} />
      </div>
      <Spacer size={'md'} />
      <div style={{ width: '162px', height: '65px', fontSize: '20px' }}>
        <PrimaryButton lable={'送信'} type={'wine_red'} onClick={test} />
      </div>
      <Spacer size={'md'} />
      <div style={{ width: '162px', height: '65px', fontSize: '20px' }}>
        <PrimaryButton lable={'送信'} type={'light_blue'} onClick={test} />
      </div>
      <Spacer size={'md'} />
      <div style={{ width: '162px', height: '65px', fontSize: '20px' }}>
        <PrimaryButton lable={'送信'} type={'outline'} onClick={test} />
      </div>
    </Layout>
  );
};

export default Sample;
