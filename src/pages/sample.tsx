import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { MenuLinks } from 'components/molecules/Utilities';

const Sample: NextPage = () => {
  return (
    <Layout pageTitle={'サンプル'}>
      <div style={{ height: '82px', borderTop: '1px solid', borderBottom: '1px solid' }}>
        <MenuLinks />
      </div>
    </Layout>
  );
};

export default Sample;
