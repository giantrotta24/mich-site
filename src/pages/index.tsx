import type { NextPage } from 'next';
import AboutMe from '../components/Home/AboutMe';

import HomeMasthead from '../components/Home/HomeMasthead';
import LatestPosts from '../components/Home/LatestPosts';

const Home: NextPage = () => {
  return (
    <>
      <HomeMasthead />
      <LatestPosts />
      <AboutMe />
    </>
  );
};

export default Home;
