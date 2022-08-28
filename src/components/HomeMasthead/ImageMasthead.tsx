import Image from 'next/image';
import blogPlaceholder from '/public/images/blog-placeholder.jpg';
import LogoImage from '/public/images/fresh-beginnings-logo.png';
import michelleHome from '/public/images/michelle-home-min.jpg';
import booksPlaceholderLg from '/public/images/books-placeholder-lg.jpg';

const ImageMasthead: React.FC = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:mb-44 sm:mb-26 sm:mt-0 md:mt-8 md:mb-36 mb-40'>
      <div className='flex md:flex-col xl:flex-row md:w-full bg-white hidden md:block rounded-lg'>
        <Image
          alt='Michelle&apos;s Blog'
          className='object-cover w-full h-48'
          src={blogPlaceholder}
          placeholder='blur'
        />
      </div>

      <div className='relative w-full rounded-lg md:block'>
        <div className='md:flex flex-col xl:flex-row w-full rounded-lg bg-white-lg z-0'>
          <Image
            alt='About Michelle'
            className='object-cover w-full z-10'
            src={michelleHome}
            placeholder='blur'
          />

        <div className='flex justify-center items-center z-10 absolute sm:relative md:absolute xl:top-96 2xl:mt-36 lg:top-72 lg:mt-14 lg:pt-0  md:top-full md:bottom-0 sm:bottom-24 sm:m-auto sm:left-0 sm:right-0 drop-shadow-lg -bottom-20'>
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

      <div className='flex md:flex-col xl:flex-row md:w-full bg-white hidden md:block rounded-lg'>
        <Image
          alt='Michelle&apos;s Books'
          className='object-cover w-full h-48'
          src={booksPlaceholderLg}
          placeholder='blur'
        />
      </div>
    </div>
  );
};

export default ImageMasthead;