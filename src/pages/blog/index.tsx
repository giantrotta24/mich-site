import type { NextPage } from 'next';

import Post from 'components/Home/LatestPosts/Post';

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
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    date: 'Aug 24, 2022',
    image: 'https://via.placeholder.com/250x150',
  },
];

const Blog: NextPage = () => {
  return (
    <div className="lg:container lg:mx-auto min-h-screen flex flex-col items-center border border-red-500">
      <h1 className="font-['Dancing_Script'] text-3xl lg:text-4xl font-bold mt-6">
        Blog
      </h1>
      <div className="border border-blue-500 w-full">
        Filter and search bar here
      </div>
      <div className="border border-green-500 w-full block md:grid md:grid-cols-3">
        {latestPosts.map(post => (
          <Post
            key={post.id}
            title={post.title}
            date={post.date}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
