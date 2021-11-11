import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { IconArea } from 'components/atoms/Images';

const Sample: NextPage = () => {
  return (
    <Layout pageTitle={'サンプル'}>
      <IconArea path={'/user_icon.png'} height={16} width={16} />
    </Layout>
  );
};

export default Sample;
