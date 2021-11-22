import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { UploadButton } from 'components/atoms/Button';

const Sample: NextPage = () => {
  const test = () => {};
  return (
    <Layout pageTitle={'サンプル'}>
      <UploadButton type={'file'} id={'selectedId'} buttonType={'selected'} label={'ファイルを選択'} onClick={test} />

      <div style={{ margin: '100px' }} />
      <UploadButton type={'button'} id={'uploadId'} buttonType={'upload'} label={'アップロード'} onClick={test} />
    </Layout>
  );
};

export default Sample;
