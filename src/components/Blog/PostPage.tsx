import * as demo from 'lib/demo.data';
import type { Post, Settings } from 'lib/sanity.queries';
import Head from 'next/head';
import { notFound } from 'next/navigation';

import Container from 'components/Blog/BlogContainer';
import BlogHeader from 'components/Blog/BlogHeader';
import Layout from 'components/Blog/BlogLayout';
import MoreStories from 'components/Blog/MoreStories';
import PostBody from 'components/Blog/PostBody';
import PostHeader from 'components/Blog/PostHeader';
import PostTitle from 'components/Blog/PostTitle';
import SectionSeparator from 'components/Blog/SectionSeparator';

import PostPageHead from './PostPageHead';

export interface PostPageProps {
  preview?: boolean;
  loading?: boolean;
  post: Post;
  morePosts: Post[];
  settings: Settings;
}

const NO_POSTS: Post[] = [];

export default function PostPage(props: PostPageProps) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props;
  const { title = demo.title } = settings || {};

  const slug = post?.slug;

  if (!slug && !preview) {
    notFound();
  }

  return (
    <>
      <Head>
        <PostPageHead settings={settings} post={post} />
      </Head>

      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} level={2} />
          {preview && !post ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <PostBody content={post.content} />
              </article>
              <SectionSeparator />
              {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}
