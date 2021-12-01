import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { TextArea } from 'components/atoms/Texts';

const Sample: NextPage = () => {
  return (
    <Layout pageTitle={'サンプル'}>
      <TextArea text={'test<br/>です'} />
    </Layout>
  );
};

export default Sample;
