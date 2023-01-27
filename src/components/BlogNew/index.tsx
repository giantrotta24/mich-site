import Layout from 'components/BlogNew/BlogLayout';
import Hero from 'components/BlogNew/Hero';

import type { Post, Settings } from 'lib/sanity.queries';

export interface BlogHomeProps {
  preview?: boolean;
  loading?: boolean;
  posts: Post[];
  settings: Settings;
}

const BlogHome = (props: BlogHomeProps) => {
  const { preview, loading, posts, settings } = props;
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
      <div className="border border-red-700 my-6">
        <h3>Posts</h3>
      </div>
    </Layout>
  );
};

export default BlogHome;
