import type { NextPage } from 'next';

import HomeMasthead from '../components/Home/HomeMasthead';
import LatestPosts from '../components/Home/LatestPosts';
import AboutMe from '../components/Home/AboutMe';
import ContactMe from '../components/Home/ContactMe';

const Home: NextPage = () => {
  return (
    <>
      <HomeMasthead />
      <LatestPosts />
      <AboutMe />
      <ContactMe />
    </>
  );
};

export default Home;
