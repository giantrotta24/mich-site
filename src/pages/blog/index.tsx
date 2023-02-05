import { lazy } from 'react';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import { PreviewSuspense } from '@sanity/preview-kit';

import { Post, Settings } from 'lib/sanity.queries';
import { getAllPosts, getSettings } from 'lib/sanity.client';

import BlogHome from 'components/BlogNew';

const PreviewBlogHome = lazy(
  () => import('components/BlogNew/PreviewBlogHome')
);

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

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <BlogHome loading preview posts={posts} settings={settings} />
        }
      >
        <PreviewBlogHome token={token} />
      </PreviewSuspense>
    );
  }

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

  return {
    props: {
      posts,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  };
};
