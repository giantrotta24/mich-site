import type { NextPage } from 'next';

import HomeMasthead from '../components/HomeMasthead';
import LatestPosts from '../components/Home/LatestPosts/index';
import Contact from '../components/Home/ContactMe'

const Home: NextPage = () => {
  return (
    <>
      <HomeMasthead />
      <LatestPosts />
      <Contact />
    </>
  );
};

export default Home;
