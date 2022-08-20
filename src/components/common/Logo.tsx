import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return(
    <div className='m-8'>
      <Link href='/'>
        <Image
          alt="My Life. My Blog."
          className="object-cover w-full h-48"
          src='/images/logo.png'
          height='200'
          width='500'
        />
      </Link>
    </div>
  )
}

export default Logo;