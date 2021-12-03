import React, { useState } from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { RegiserButton } from 'components/atoms/Button';

const Sample: NextPage = () => {
  const [data, setData] = useState('');
  const test = () => {
    setData('test');
  };
  return (
    <Layout pageTitle={'サンプル'}>
      <div style={{ marginLeft: '30px' }}>
        <RegiserButton onClick={test} />
      </div>
      <p>{data}</p>
    </Layout>
  );
};

export default Sample;
