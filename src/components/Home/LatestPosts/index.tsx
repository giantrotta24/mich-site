import Link from 'next/link';
import Heading from '../../common/Heading';
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
    <section className="border-t border-stone-200">
      <div className="lg:container lg:mx-auto grid text-center mb-6">
        <Heading>My Latest Posts</Heading>
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
          <button
            type="button"
            className="border border-stone-400 mx-auto px-8 py-2 hover:bg-stone-200 hover:text-black hover:border-black"
          >
            Read More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default LatestPosts;
