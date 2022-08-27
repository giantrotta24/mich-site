import Image from 'next/image';
import blogPlaceholder from '/public/images/blog-placeholder.jpg';
import LogoImage from '/public/images/fresh-beginnings-logo.png';
import michelleHome from '/public/images/michelle-home-min.jpg';
import booksPlaceholderLg from '/public/images/books-placeholder-lg.jpg';

const ImageMasthead: React.FC = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:mb-44 sm:mb-26 sm:mt-0 md:mt-8'>
      <div className='flex flex-col xl:flex-row w-full bg-white sm:hidden md:block rounded-lg'>
        <Image
          alt='Michelle&apos;s Blog'
          className='object-cover w-full h-48 sm-hidden'
          src={blogPlaceholder}
          placeholder='blur'
        />
      </div>

      <div className='relative w-full rounded-lg'>
        <div className='flex flex-col xl:flex-row w-full rounded-lg bg-white-lg z-0'>
          <Image
            alt='About Michelle'
            className='object-cover w-full z-10'
            src={michelleHome}
            placeholder='blur'
          />

        <div className='flex justify-center items-center z-10 absolute sm:relative md:absolute 2xl:top-96 2xl:mt-36 lg:top-72 lg:mt-14 lg:pt-0 md:pt-2 md:left-0 md:top-36 sm:bottom-24 drop-shadow-lg'>
          <Image
              alt='Fresh beginnings logo'
              className='object-contain w-full'
              src={LogoImage}
              height='200'
              width='500'
            />
          </div>
        </div>
        
      </div>

      <div className='flex flex-col xl:flex-row w-full bg-white sm:hidden md:block rounded-lg'>
        <Image
          alt='Michelle&apos;s Books'
          className='object-cover w-full h-48 sm-hidden'
          src={booksPlaceholderLg}
          placeholder='blur'
        />
      </div>
    </div>
  );
};

export default ImageMasthead;
