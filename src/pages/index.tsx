import type { NextPage } from 'next';
import About from '../components/common/About';
import ImageMasthead from '../components/common/ImageMasthead'
import Logo from '../components/common/Logo';

const Home: NextPage = () => {
  return (
    <div className="antialiased min-h-[80vh] flex flex-col items-center justify-center">
      <ImageMasthead />
      <Logo />
      <About />
    </div>
  );
};

export default Home;
