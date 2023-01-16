import Head from 'next/head';
import Footer from './Footer';

import { useRouter } from 'next/router';

import Header from './Header';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  const isHome = router.pathname === '/';

  return (
    <>
      <Head>
        <title>Michelle Trotta</title>
        <meta
          name="description"
          content="Michelle Trotta, M.S., CCC-SLP, and author."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Header />
      <main
        className={`${
          isHome ? '' : 'bg-[#f6e3ceaf]'
        } antialiased h-auto m-w-screen`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
