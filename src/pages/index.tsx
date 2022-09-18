import type { NextPage } from 'next';

import HomeMasthead from '../components/HomeMasthead';
import AboutMe from '../components/Home/AboutMe';
import LatestPosts from '../components/Home/LatestPosts/index';
import Contact from '../components/Home/ContactMe'

const Home: NextPage = () => {
  return (
    <>
      <HomeMasthead />
      <AboutMe />
      <LatestPosts />
      <Contact />
    </>
  );
};

export default Home;
