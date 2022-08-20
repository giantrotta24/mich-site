import ComingSoon from './common/ComingSoon';

const LatestPosts: React.FC = () => {
  return (
    <div className="border border-red-500 grid text-center">
      <h2 className="text-xl ">My Latest Posts</h2>
      <div>post 1</div>
      <div>post 2</div>
      <div>post 3</div>
      <div className="border border-blue-500">Button</div>
    </div>
  );
};

export default LatestPosts;
