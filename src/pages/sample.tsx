import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { AddButton } from 'components/atoms/Button';

const Sample: NextPage = () => {
  const test = () => {};
  return (
    <Layout pageTitle={'サンプル'}>
      <AddButton type={'outline'} onClick={test} />
      <AddButton type={'normal'} onClick={test} />
    </Layout>
  );
};

export default Sample;
