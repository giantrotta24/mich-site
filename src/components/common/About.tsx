import Image from "next/image";
import Link from "next/link";
import React from "react";


const AboutSection: React.FC = () => {
  return(
    <div id='about' className='about-section w-full'>
      <div className="w-full my-8">
        <div className="w-1/3 content-center text-center">
          <Image 
            src='/images/michelle-placeholder.jpg'
            height='500'
            width='400'
            alt='About Michelle'
          />
          <p className="my-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
          <div className='bg-white hover:bg-black hover:text-white hover:shadow-md border-2 py-2 px-4 text-center my-4 w-2/5 content-center'>
            <Link href='#' className="content-center">Read More</Link>
          </div>
        </div>
        <div className="w-2/3">

        </div>
      </div>
    </div>
  )
}
 export default AboutSection;