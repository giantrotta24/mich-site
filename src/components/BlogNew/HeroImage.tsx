import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import { urlForImage } from 'lib/sanity.image';

interface HeroImageProps {
  title: string;
  slug?: string;
  image: any;
  priority?: boolean;
}

const ImageComponent = (props: HeroImageProps) => {
  const { title, slug, image: source, priority } = props;

  if (!source?.asset?._ref) {
    return <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />;
  }

  return (
    <div
      className={cn('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': slug,
      })}
    >
      <Image
        className="h-auto w-full"
        width={2000}
        height={1000}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(1000).width(2000).url()}
        sizes="100vw"
        priority={priority}
      />
    </div>
  );
};

const HeroImage = (props: HeroImageProps) => {
  const { title, slug } = props;

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/blog/${slug}`} aria-label={title}>
          <ImageComponent {...props} />
        </Link>
      ) : (
        <ImageComponent {...props} />
      )}
    </div>
  );
};

export default HeroImage;
