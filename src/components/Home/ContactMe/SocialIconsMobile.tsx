import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

const SocialIconsMobile = () => {
  return (
    <div className="grid justify-center items-center gap-3 md:hidden">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <AiFillFacebook
          className="h-10 w-10 hover:text-blue-600"
          aria-hidden="true"
        />
        <span className="sr-only">Join Fresh Beginnings on Facebook</span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram
          className="h-10 w-10 hover:text-blue-600"
          aria-hidden="true"
        />
        <span className="sr-only">Follow Fresh Beginnings on Instagram</span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <AiFillYoutube
          className="h-10 w-10 hover:text-blue-600"
          aria-hidden="true"
        />
        <span className="sr-only">
          Subscribe to Fresh Beginnings on YouTube
        </span>
      </a>
    </div>
  );
};

export default SocialIconsMobile;
