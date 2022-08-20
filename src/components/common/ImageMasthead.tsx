import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ImageMastheadProps { 
  alt: string;
  className: string;
  height: number;
  src: string;
  width: number;
}

const ImageMasthead: React.FC = ( props: ImageMastheadProps ) => {
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full my-8">
      <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
        <Link href='/blog'>
          <Image
            alt="Michelle's Blog"
            className="object-cover w-full h-48"
            src='/images/blog-placeholder.jpg'
            height='800'
            width='500'
          />
        </Link>
      </div>

      <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
        <Link href='/about'>
          <Image
            alt="About Michelle"
            className="object-cover w-full h-48"
            src='/images/michelle-placeholder.jpg'
            height='800'
            width='500'
          />
        </Link>
      </div>

      <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
        <Link href='/books'>
          <Image
            alt="Michelle's Books"
            className="object-cover w-full h-48"
            src='/images/books-placeholder.jpg'
            height='800'
            width='500'
          />
        </Link>
      </div>
    </div>
  )
}

export default ImageMasthead;