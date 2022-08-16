import type { NextPage } from 'next';
import ImageMasthead from '../components/common/ImageMasthead'
import ComingSoon from '../components/common/ComingSoon';

const Home: NextPage = () => {
  return (
    <div className="antialiased min-h-[80vh] flex flex-col items-center justify-center">
      <ImageMasthead
        alt />
    </div>
  );
};

export default Home;
