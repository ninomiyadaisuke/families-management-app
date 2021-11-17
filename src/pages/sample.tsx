import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { ImageArea } from 'components/atoms/Images';

const Sample: NextPage = () => {
  return (
    <Layout pageTitle={'サンプル'}>
      <ImageArea path={'/HeroSection.png'} height={871} width={1560} />
    </Layout>
  );
};

export default Sample;
