import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

import Heading from '../../common/Heading';
import ContactMeForm from './ContactMeForm';

const ContactMe: React.FC = () => {
  return (
    <section id="contact" className="">
      <div className="grid lg:container lg:mx-auto text-center">
        <div className="flex flex-col md:flex-row-reverse md:justify-around">
          <div className="md:px-10 flex-grow mb-10">
            <Heading>
              Want to Chat?<span className="sr-only"> Contact me</span>
            </Heading>
            <div className="text-stone-400 text-sm">
              Reach out to me if you have any questions!
            </div>
            <ContactMeForm />
          </div>
          <div className="bg-[#f6e3ce45] px-4">
            <h3 className="font-['Dancing_Script'] text-3xl lg:text-4xl font-bold pt-2 md:pt-4">
              Let&apos;s Keep in Touch
            </h3>
            <div className="my-4 px-2">
              <div className="grid justify-center items-center gap-4 md:gap-8">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center md:p-4 md:border border-[#f4cea5] hover:text-orange-700"
                >
                  <AiFillFacebook className="h-10 w-10" aria-hidden="true" />
                  <span className="hidden md:inline">
                    Join Fresh Beginnings on Facebook
                  </span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center md:p-4 md:border border-[#f4cea5] hover:text-orange-700"
                >
                  <AiFillInstagram className="h-10 w-10" aria-hidden="true" />
                  <span className="hidden md:inline">
                    Follow Fresh Beginnings on Instagram
                  </span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center md:p-4 md:border border-[#f4cea5] hover:text-orange-700"
                >
                  <AiFillYoutube className="h-10 w-10" aria-hidden="true" />
                  <span className="hidden md:inline">
                    Subscribe to Fresh Beginnings on YouTube
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
