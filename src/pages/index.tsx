import type { NextPage } from 'next';

import HomeMasthead from '../components/HomeMasthead';
import LatestPosts from '../components/LatestPosts';

const Home: NextPage = () => {
  return (
    <>
      <HomeMasthead />
      <LatestPosts />
    </>
  );
};

export default Home;
