import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';
import { UpcommingEvents } from 'components/atoms/Utilities';

const eventArray = ['井上さんの誕生日がもうすぐです', '山田さんの誕生日がもうすぐです'];
const eventArray0 = [];

const Sample: NextPage = () => {
  return (
    <Layout pageTitle={'サンプル'}>
      <div style={{ margin: '30px' }}></div>
      <div style={{ marginLeft: '20px' }}>
        <UpcommingEvents events={eventArray} />
        <div style={{ margin: '40px' }}></div>
        <UpcommingEvents events={eventArray0} />
      </div>
    </Layout>
  );
};

export default Sample;
