import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TripleImageProps { 
  alt: string;
  className?: string;
  height: number;
  src: string;
  width: number;

}


const TripleImage: React.FC = ( props: TripleImageProps ) => {
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
        <Image
          className="object-cover w-full h-48"
          src=""
          alt="Flower and sky"
        />
      </div>

      <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
        <Image
          className="object-cover w-full h-48"
          src=""
          alt="Flower and sky"
        />
      </div>

  <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
    <Image
      className="object-cover w-full h-48"
      src=""
      alt="Flower and sky"
    />
  </div>
</div>
  )
}

export default TripleImage;