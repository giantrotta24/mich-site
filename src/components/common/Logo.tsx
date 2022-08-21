import Image from 'next/image';

import LogoImage from '/public/images/fresh-beginnings-logo.png';

const Logo = () => {
  return (
    <div className="relative bottom-36 lg:left-96 md:left-0">
      <Image
        alt="Fresh beginnings logo"
        className="object-contain w-full"
        src={LogoImage}
        height="200"
        width="500"
      />
    </div>
  );
};

export default Logo;
