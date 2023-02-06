import type { Post } from 'lib/sanity.queries';

import PostPreview from './PostPreview';

const AllPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="my-6">
      <h3 className="font-['Dancing_Script'] mt-2 mb-4 text-3xl lg:text-4xl font-bold text-center">
        More Posts
      </h3>
      <div className="mb-32 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 md:gap-y-22 lg:gap-x-28">
        {posts.map(post => (
          <PostPreview
            key={post._id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
