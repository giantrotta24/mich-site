import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { HiMenuAlt2, HiX } from 'react-icons/hi';

type LinkProps = {
  href: string;
  className: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
  isHome: boolean;
};

const DynamicLink: React.FC<LinkProps> = props => {
  const { href, className, onClick, children, isHome } = props;

  const route = isHome ? href : `/${href}`;

  return (
    <>
      {isHome ? (
        <a href={route} className={className} onClick={onClick}>
          {children}
        </a>
      ) : (
        <Link href={route}>
          <a className={className}>{children}</a>
        </Link>
      )}
    </>
  );
};

const Header: React.FC = () => {
  const router = useRouter();

  const isHome = router.pathname === '/';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLElement;
    const anchor = target?.getAttribute('href') as string;

    const location = document!.querySelector<HTMLElement>(anchor)!.offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 78,
      behavior: 'smooth',
    });
  };

  return (
    <Popover className="sticky top-0 z-50 bg-[#f4cea5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-stone-200 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="font-['Dancing_Script'] hover:text-orange-700 text-xl">
                Michelle Trotta
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <HiMenuAlt2 className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <nav className="hidden md:flex space-x-12">
            <DynamicLink
              href={isHome ? '#home' : ''}
              className="text-base font-medium hover:text-orange-700"
              onClick={handleClick}
              isHome={isHome}
            >
              Home
            </DynamicLink>
            <DynamicLink
              href="#about"
              className="text-base font-medium hover:text-orange-700"
              onClick={handleClick}
              isHome={isHome}
            >
              About
            </DynamicLink>
            <Link href="/blog">
              <a className="text-base font-medium hover:text-orange-700">
                Blog
              </a>
            </Link>
            <Link href="/books">
              <a className="text-base font-medium hover:text-orange-700">
                Books
              </a>
            </Link>
            <DynamicLink
              href="#contact"
              className="text-base font-medium hover:text-orange-700"
              onClick={handleClick}
              isHome={isHome}
            >
              Contact Me
            </DynamicLink>
          </nav>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-end">
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <HiX className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid gap-8">
                <DynamicLink
                  href={isHome ? '#home' : ''}
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  onClick={handleClick}
                  isHome={isHome}
                >
                  Home
                </DynamicLink>
                <DynamicLink
                  href="#about"
                  onClick={handleClick}
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  isHome={isHome}
                >
                  About
                </DynamicLink>
                <Link href="/blog">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Blog
                  </a>
                </Link>
                <Link href="/books">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Books
                  </a>
                </Link>
                <DynamicLink
                  href="#contact"
                  className="text-base font-medium"
                  onClick={handleClick}
                  isHome={isHome}
                >
                  Contact Me
                </DynamicLink>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
