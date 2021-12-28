import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { MediaIcons } from 'components/molecules/Images';

const Sample: NextPage = () => {
  return (
    <Layout pageTitle={'サンプル'}>
      <MediaIcons />
    </Layout>
  );
};

export default Sample;
