import Image from 'next/image';

import blogPlaceholder from '/public/images/blog-placeholder.jpg';
import michelleHome from '/public/images/michelle-home-min.jpg';
import booksPlaceholderLg from '/public/images/books-placeholder-lg.jpg';

const ImageMasthead: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full my-8">
      <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden">
        <Image
          alt="Michelle's Blog"
          className="object-cover w-full h-48"
          src={blogPlaceholder}
          placeholder="blur"
        />
      </div>

      <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden">
        <Image
          alt="About Michelle"
          className="object-cover w-full h-48"
          src={michelleHome}
          placeholder="blur"
        />
      </div>

      <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden">
        <Image
          alt="Michelle's Books"
          className="object-cover w-full h-48"
          src={booksPlaceholderLg}
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default ImageMasthead;
