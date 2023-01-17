import Layout from 'components/BlogNew/BlogLayout';

import type { Post, Settings } from 'lib/sanity.queries';

export interface BlogHomeProps {
  preview?: boolean;
  loading?: boolean;
  posts: Post[];
  settings: Settings;
}

const BlogHome = (props: BlogHomeProps) => {
  const { preview, loading, posts, settings } = props;
  console.log('🚀 ~ file: index.tsx:14 ~ BlogHome ~ settings', settings);
  const [heroPost, ...morePosts] = posts || [];

  return (
    <>
      <Layout preview={preview} loading={loading}>
        Hello World
      </Layout>
    </>
  );
};

export default BlogHome;
