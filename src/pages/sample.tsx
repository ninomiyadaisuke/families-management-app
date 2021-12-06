import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { RegiserButton } from 'components/atoms/Button';

const Sample: NextPage = () => {
  const test = () => {};
  return (
    <Layout pageTitle={'サンプル'}>
      <RegiserButton onClick={test} />
    </Layout>
  );
};

export default Sample;
