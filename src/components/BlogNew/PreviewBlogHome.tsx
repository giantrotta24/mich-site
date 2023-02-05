import { usePreview } from 'lib/sanity.preview';
import {
  type Post,
  type Settings,
  indexQuery,
  settingsQuery,
} from 'lib/sanity.queries';

import BlogHome from 'components/BlogNew';

const PreviewBlogHome = ({ token }: { token: null | string }) => {
  const posts: Post[] = usePreview(token, indexQuery) || [];
  const settings: Settings = usePreview(token, settingsQuery) || {};

  return <BlogHome preview posts={posts} settings={settings} />;
};

export default PreviewBlogHome;
