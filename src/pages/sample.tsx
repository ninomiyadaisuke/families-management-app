import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { Loading } from 'components/atoms/Utilities';

const Sample: NextPage = () => {
  return (
    <Layout pageTitle={'サンプル'}>
      <Loading isLoading={true} />
    </Layout>
  );
};

export default Sample;
