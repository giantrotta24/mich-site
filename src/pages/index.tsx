import type { NextPage } from 'next';

import ComingSoon from '../components/common/ComingSoon';

const Home: NextPage = () => {
  return (
    <div className="antialiased min-h-[80vh] flex flex-col items-center justify-center">
      <ComingSoon />
    </div>
  );
};

export default Home;
