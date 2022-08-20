/* eslint-disable @next/next/no-img-element */
// we'll want to use the native image component when we have actual images coming from the server or from the filesystem
import Image from 'next/image';

const latestPosts = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    date: 'Aug 24, 2022',
    image: 'https://via.placeholder.com/250x150',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet',
    date: 'Aug 24, 2022',
    image: 'https://via.placeholder.com/250x150',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet',
    date: 'Aug 24, 2022',
    image: 'https://via.placeholder.com/250x150',
  },
];

const LatestPosts: React.FC = () => {
  return (
    <div className="border border-red-500 grid text-center">
      <h2 className="text-xl font-bold pt-2 md:pt-4">My Latest Posts</h2>
      <div className="bg-[#f4cea5] my-8 mx-8 text-left flex flex-col">
        <img src="https://via.placeholder.com/250x150" alt="placeholder" />
        <p className="p-3 text-sm text-stone-600">Aug 24, 2022</p>
        <h3 className="px-3 mb-3 font-bold text-stone-700">Title</h3>
      </div>

      <div className="border border-blue-500">Button</div>
    </div>
  );
};

export default LatestPosts;
