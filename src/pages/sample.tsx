import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { MenuLink } from 'components/atoms/Utilities';

const Sample: NextPage = () => {
  return (
    <Layout pageTitle={'サンプル'}>
      <div style={{ height: '150px' }}>
        <MenuLink name={'家族一覧'} path={'/contacts'} active={true} />
      </div>
    </Layout>
  );
};

export default Sample;
