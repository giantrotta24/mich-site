import Head from 'next/head';

import Header from './Header';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Michelle Trotta</title>
        <meta
          name="description"
          content="Michelle Trotta, M.S., CCC-SLP, and author."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container antialiased mx-auto h-auto m-w-screen">
        {children}
      </main>
    </>
  );
};

export default Layout;
