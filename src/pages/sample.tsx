import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';

import { RoundedSelect } from 'components/atoms/Input';

const yearData = [
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
  { value: '2019', label: '2019' },
];

const monthData = [
  { value: '1', label: '01' },
  { value: '2', label: '02' },
  { value: '3', label: '03' },
  { value: '4', label: '04' },
  { value: '5', label: '05' },
  { value: '6', label: '06' },
  { value: '7', label: '07' },
  { value: '8', label: '08' },
  { value: '9', label: '09' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
];

const dayData = [
  { value: '1', label: '01' },
  { value: '2', label: '02' },
  { value: '3', label: '03' },
  { value: '4', label: '04' },
  { value: '5', label: '05' },
  { value: '6', label: '06' },
  { value: '7', label: '07' },
  { value: '8', label: '08' },
  { value: '9', label: '09' },
];

const Sample: NextPage = () => {
  return (
    <Layout pageTitle={'サンプル'}>
      <div style={{ width: '100px', height: '50px' }}>
        <RoundedSelect options={yearData} />
      </div>
      <div style={{ margin: '30px' }}></div>
      <div style={{ width: '68px', height: '50px' }}>
        <RoundedSelect options={monthData} />
      </div>
      <div style={{ margin: '30px' }}></div>
      <div style={{ width: '68px', height: '50px' }}>
        <RoundedSelect options={dayData} />
      </div>
    </Layout>
  );
};

export default Sample;
