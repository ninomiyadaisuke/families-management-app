import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { Footer } from 'components/organisms/layout';

const Sample: NextPage = () => {
  return (
    <Layout pageTitle={'サンプル'}>
      <Footer />
    </Layout>
  );
};

export default Sample;
