import Link from 'next/link';

import type { Post } from 'lib/sanity.queries';

const Hero = (
  props: Pick<
    Post,
    'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug'
  >
) => {
  const { title, coverImage, date, excerpt, author, slug } = props;
  return (
    <div className="border border-blue-700 p-2">
      <div>
        <div>Hero Image Element</div>
      </div>
      <div>
        <h2>
          <Link href={`/blog/${slug}`}>{title || 'Untitled'}</Link>
        </h2>
        <div>
          <div>Date</div>
        </div>
        <div>
          <div>Excerpt</div>
          <div>Author</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
