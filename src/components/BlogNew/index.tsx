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
  const [heroPost, ...morePosts] = posts || [];

  return (
    <>
      <Layout preview={preview} loading={loading}></Layout>
    </>
  );
};
