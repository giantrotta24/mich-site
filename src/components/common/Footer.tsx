import Link from 'next/link';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-stone-400 p-4 text-center shadow md:flex md:justify-center md:p-6 ">
      <span className="text-sm text-center">
        © {year}{' '}
        <Link href="/">
          <a className="hover:underline">Michelle Trotta</a>
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
