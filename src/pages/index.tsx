import type { NextPage } from 'next';
import ImageMasthead from '../components/common/ImageMasthead'
import Logo from '../components/common/Logo';

const Home: NextPage = () => {
  return (
    <div className="antialiased min-h-[80vh] flex flex-col items-center justify-center">
      <ImageMasthead />
      <Logo />
    </div>
  );
};

export default Home;
