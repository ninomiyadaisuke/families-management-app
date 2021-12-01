import { FC } from 'react';
import Head from 'next/head';
import styles from 'styles/layout/layout.module.scss';

type Props = {
  pageTitle: string;
};

const Layout: FC<Props> = (props) => {
  const { pageTitle, children } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap"
        />
      </Head>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
