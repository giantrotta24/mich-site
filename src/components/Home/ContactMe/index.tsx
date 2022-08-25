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
          <div className="bg-stone-200 flex-grow px-4">
            <h3 className="font-['Dancing_Script'] text-3xl lg:text-4xl font-bold pt-2 md:pt-4">
              Let&apos;s Keep in Touch
            </h3>
            <div className="my-4 px-6">
              <div className="grid justify-center items-center">
                <div>
                  <AiFillFacebook className="h-10 w-10" aria-hidden="true" />
                  <span className="sr-only">
                    Join Fresh Beginnings on Facebook
                  </span>
                </div>
                <div>
                  <AiFillInstagram className="h-10 w-10" aria-hidden="true" />
                  <span className="sr-only">
                    Follow Fresh Beginnings on Instagram
                  </span>
                </div>
                <div>
                  <AiFillYoutube className="h-10 w-10" aria-hidden="true" />
                  <span className="sr-only">
                    Subscribe to Fresh Beginnings on YouTube
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
