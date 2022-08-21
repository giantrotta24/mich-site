import Link from 'next/link';
import Post from './Post';

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

const LatestPosts: React.FC = () => {
  return (
    <div className="border-t border-stone-200 grid text-center mb-6">
      <h2 className="text-xl font-bold pt-2 md:pt-4">My Latest Posts</h2>
      <div className="block md:grid md:grid-cols-3">
        {latestPosts.map(post => (
          <Post
            key={post.id}
            title={post.title}
            date={post.date}
            image={post.image}
          />
        ))}
      </div>
      <Link href="#">
        <button className="border border-stone-400 mx-auto px-8 py-2">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default LatestPosts;
