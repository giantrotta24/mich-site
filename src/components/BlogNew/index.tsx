import Layout from 'components/BlogNew/BlogLayout';
import Hero from 'components/BlogNew/Hero';

import type { Post } from 'lib/sanity.queries';

import AllPosts from './AllPosts';

export interface BlogHomeProps {
  preview?: boolean;
  loading?: boolean;
  posts: Post[];
}

const BlogHome = (props: BlogHomeProps) => {
  const { preview, loading, posts } = props;
  const [heroPost, ...morePosts] = posts || [];

  return (
    <Layout preview={preview} loading={loading}>
      {heroPost && (
        <Hero
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <AllPosts posts={morePosts} />}
    </Layout>
  );
};

export default BlogHome;
