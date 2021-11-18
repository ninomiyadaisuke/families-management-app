import React from 'react';
import { NextPage } from 'next';
import { Layout } from 'components/layout';

import { LogoArea } from 'components/atoms/Images';
import { Spacer } from 'components/atoms/Utilities';
import styles from 'styles/test.module.scss';

const beforeLogin = false;
const afterLogin = true;

const Sample: NextPage = () => {
  return (
    <Layout pageTitle={'サンプル'}>
      <p>ヘッダーlogin前</p>
      <Spacer size={'xs'} />
      <div className={styles.test__header}>
        <LogoArea path={'/main_logo_pc.png'} height={55} width={266} />
      </div>
      <div className={styles.test__header_sp}>
        {beforeLogin ? (
          <LogoArea path={'/f_logo.png'} height={48} width={48} />
        ) : (
          <LogoArea path={'/main_logo_sp.png'} height={55} width={145} />
        )}
      </div>
      <Spacer size={'lg'} />
      <p>ヘッダーlogin後</p>
      <Spacer size={'xs'} />
      <div className={styles.test__header}>
        <LogoArea path={'/main_logo_pc.png'} height={55} width={266} />
      </div>
      <div className={styles.test__header_sp}>
        {afterLogin ? (
          <LogoArea path={'/f_logo.png'} height={48} width={48} />
        ) : (
          <LogoArea path={'/main_logo_sp.png'} height={55} width={145} />
        )}
      </div>
      <Spacer size={'lg'} />
      <p>footer</p>
      <Spacer size={'xs'} />
      <LogoArea path={'/f_logo.png'} logoType={'footer'} height={90} width={90} />
      <Spacer size={'lg'} />
      <p>login & signup</p>
      <Spacer size={'xs'} />
      <div className={styles.test__other_pc}>
        <LogoArea path={'/main_logo_pc.png'} height={55} width={266} />
      </div>
      <div className={styles.test__other_sp}>
        <LogoArea path={'/main_logo_sp_other.png'} height={66} width={280} />
      </div>
    </Layout>
  );
};

export default Sample;
