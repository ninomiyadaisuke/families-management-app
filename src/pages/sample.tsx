import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { UploadButton } from 'components/atoms/Button';

const Sample: NextPage = () => {
  const test = () => {};
  return (
    <Layout pageTitle={'サンプル'}>
      <UploadButton type={'file'} buttonType={'upload'} label={'アップロード'} onClick={test} />

      <div style={{ margin: '100px' }} />
      <UploadButton type={'button'} buttonType={'upload'} label={'アップロード'} onClick={test} />
    </Layout>
  );
};

export default Sample;
