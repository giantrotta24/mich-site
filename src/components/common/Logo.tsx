import Image from 'next/image';
import Link from 'next/link';

import LogoImage from '/public/images/fresh-beginnings-logo.png';

const Logo = () => {
  return (
    <div className="mt-4">
      <Image
        alt="My Life. My Blog."
        className="object-contain w-full"
        src={LogoImage}
        height="200"
        width="500"
      />
    </div>
  );
};

export default Logo;
