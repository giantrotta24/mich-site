import type { NextPage } from 'next';

import ComingSoon from '../../components/common/ComingSoon';

const Blog: NextPage = () => {
  return (
    <div className="lg:container lg:mx-auto min-h-screen flex flex-col items-center justify-center">
      <ComingSoon />
    </div>
  );
};

export default Blog;
