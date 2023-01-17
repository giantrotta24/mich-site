import { GetStaticProps } from 'next';

import type { NextPage } from 'next';
import { Post, Settings } from 'lib/sanity.queries';
import { getAllPosts, getSettings } from 'lib/sanity.client';

import BlogHome from 'components/BlogNew';

interface PageProps {
  posts: Post[];
  settings: Settings;
  preview: boolean;
  token: string | null;
}

interface Query {
  [key: string]: string;
}

interface PreviewData {
  token?: string;
}

const Blog: NextPage = (props: PageProps) => {
  const { posts, settings, preview, token } = props;
  console.log('🚀 ~ file: index.tsx:26 ~ settings', settings);

  return <BlogHome posts={posts} settings={settings} />;
};

export default Blog;

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async ctx => {
  const { preview = false, previewData = {} } = ctx;

  const [settings, posts = []] = await Promise.all([
    getSettings(),
    getAllPosts(),
  ]);
  console.log('🚀 ~ file: index.tsx:44 ~ settings', settings);

  return {
    props: {
      posts,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  };
};
