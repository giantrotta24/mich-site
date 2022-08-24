import { PaperAirplaneIcon } from '@heroicons/react/outline';

import Heading from '../common/Heading';

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
            <form>
              <div className="text-left my-4 px-6 grid gap-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="p-1 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="Your full name here"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="p-1 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="youremail@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="p-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="What is your go to for toxin-free detergent? I'm looking for a new product that is safe for pets and people."
                    />
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="border border-stone-400 mx-auto py-1 flex hover:bg-stone-200 hover:border-black"
              >
                Send!{' '}
                <PaperAirplaneIcon
                  className="h-5 w-5 ml-2"
                  aria-hidden="true"
                />
              </button>
            </form>
          </div>
          <div className="bg-stone-200 md:px-40 flex-grow">
            <Heading>Lets connect</Heading>
            <div>Want to collaborate? Shoot me an email at</div>
            <div>my email here</div>
            <div>
              <div>social links</div>
              <div>
                <div>Facebook</div>
                <div>Instagram</div>
                <div>YouTube</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
