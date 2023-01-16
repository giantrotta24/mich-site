import Image from "next/image";
import blogPlaceholder from '/public/images/blog-placeholder.jpg';
import logoImage from '/public/images/fresh-beginnings-logo.png';
import michelleHome from '/public/images/michelle-home-min.jpg';
import booksPlaceholderLg from '/public/images/books-placeholder-lg.jpg';

const ImageMasthead: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:mb-30 sm:mb-2 sm:mt-0 md:mt-8 md:mb-20 mb-28">
      <div className="lg:flex md:flex-col xl:flex-row md:w-full bg-white hidden md:block rounded-lg">
        <Image
          alt="Michelle's Blog"
          className="object-cover w-full h-48 sm-hidden"
          src={blogPlaceholder}
          placeholder="blur"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>

      <div className="relative w-full rounded-lg md:block">
        <div className="md:flex flex-col xl:flex-row w-full rounded-lg bg-white-lg z-0">
          <Image
            alt="About Michelle"
            className="object-cover w-full z-10"
            src={michelleHome}
            placeholder="blur"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />

          <div className="flex justify-center items-center z-10 absolute sm:relative md:absolute 2xl:mt-50 xl:top-96 xl:mt-32 lg:top-72 lg:mt-32 lg:pt-0 md:top-full md:bottom-0 sm:bottom-24 m-auto left-0 right-0 drop-shadow-lg -bottom-8">
            <div className="bg-orange-700 text-center p-4 text-white">
              <h1 className="lg:text-3xl md:text-2xl">Fresh Beginnings</h1>
              <p className="lg:text-xl md:text-lg">
                Journey to Living a Toxin-Free Life
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex md:flex-col xl:flex-row md:w-full bg-white hidden md:block rounded-lg">
        <Image
          alt="Michelle's Books"
          className="object-cover w-full h-48 sm-hidden"
          src={booksPlaceholderLg}
          placeholder="blur"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
    </div>
  );
};

export default ImageMasthead;
