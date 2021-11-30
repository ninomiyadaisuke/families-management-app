import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { Dropdown } from 'components/atoms/Utilities';

const presentOptions = [
  { label: 'お年玉一覧', path: '/sample' },
  { label: 'プレゼント一覧', path: '/sample' },
];

const profileOptions = [
  { label: 'マイページ', path: '/sample' },
  { label: 'プロフィール編集', path: '/sample' },
  { label: 'ログアウト', path: '/sample' },
];

const Sample: NextPage = () => {
  return (
    <Layout pageTitle={'サンプル'}>
      <div style={{ height: '82px', borderBottom: '1px solid', borderTop: '1px solid' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
          <Dropdown options={profileOptions} type={'icon'} />
        </div>
      </div>
    </Layout>
  );
};

export default Sample;
