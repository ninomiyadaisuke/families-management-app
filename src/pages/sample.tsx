import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { RegiserButton } from 'components/atoms/Button';

const Sample: NextPage = () => {
  return (
    <Layout pageTitle={'サンプル'}>
      <RegiserButton />
    </Layout>
  );
};

export default Sample;
