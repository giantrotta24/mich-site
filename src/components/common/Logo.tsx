import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps { 
  alt: string;
  className: string;
  height: number;
  src: string;
  url: string;
  width: number;
}

const Logo: React.FC = (props: LogoProps) => {
  return(
    <div className='m-6'>
      <Image
        alt="My Life. My Blog."
        className="object-cover w-full h-48"
        src='/images/logo.png'
        height='200'
        width='500'
      />
    </div>
  )
}

export default Logo;