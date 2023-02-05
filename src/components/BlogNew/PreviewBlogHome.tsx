import { usePreview } from 'lib/sanity.preview';
import { type Post, indexQuery } from 'lib/sanity.queries';

import BlogHome from 'components/BlogNew';

const PreviewBlogHome = ({ token }: { token: null | string }) => {
  const posts: Post[] = usePreview(token, indexQuery) || [];

  return <BlogHome preview posts={posts} />;
};

export default PreviewBlogHome;
