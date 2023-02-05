import Link from 'next/link';

import type { Post } from 'lib/sanity.queries';

import HeroImage from './HeroImage';
import Date from 'components/Blog/PostDate';

const Hero = (
  props: Pick<
    Post,
    'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug'
  >
) => {
  const { title, coverImage, date, excerpt, author, slug } = props;

  return (
    <div className=" p-2 bg-stone-100">
      <div className="mb-8">
        <HeroImage slug={slug} title={title} image={coverImage} priority />
      </div>
      <div>
        <h2 className="mb-2 text-2xl lg:text-4xl font-bold">
          <Link href={`/blog/${slug}`} className="hover:underline">
            {title || 'Untitled'}
          </Link>
        </h2>
        <div className="text-md md:text-sm text-stone-600 mb-1">
          <Date dateString={date} />
        </div>
        <div>
          {excerpt && <p className="mb-2 text-lg leading-relaxed">{excerpt}</p>}
          {author && (
            <div className="text-stone-600 text-sm">
              By <span className="font-bold">{author.name}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
