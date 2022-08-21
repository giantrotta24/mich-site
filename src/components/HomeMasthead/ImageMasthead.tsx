import Image from 'next/image';
import Link from 'next/link';

import blogPlaceholder from '/public/images/blog-placeholder.jpg';
import michellePlaceholderLg from '/public/images/michelle-placeholder-lg.jpg';
import booksPlaceholderLg from '/public/images/books-placeholder-lg.jpg';

const ImageMasthead: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full my-8">
      <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
        <Link href="/blog">
          <Image
            alt="Michelle's Blog"
            className="object-cover w-full h-48"
            src={blogPlaceholder}
            height="800"
            width="500"
          />
        </Link>
      </div>

      <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
        <Link href="/about">
          <Image
            alt="About Michelle"
            className="object-cover w-full h-48"
            src={michellePlaceholderLg}
            height="800"
            width="500"
          />
        </Link>
      </div>

      <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
        <Link href="/books">
          <Image
            alt="Michelle's Books"
            className="object-cover w-full h-48"
            src={booksPlaceholderLg}
            height="800"
            width="500"
          />
        </Link>
      </div>
    </div>
  );
};

export default ImageMasthead;
