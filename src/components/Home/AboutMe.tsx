import Image from 'next/image';

import Heading from '../common/Heading';

import michAboutMe from '/public/images/about-me/mich-about-me.jpeg';
import michAboutMeBg from '/public/images/about-me/mich-about-me-couple-bg.jpeg';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="bg-[#f6e3ceaf] border-t border-stone-300">
      <div className="grid lg:container lg:mx-auto mb-6 px-6 pb-6 text-center">
        <Heading className="mb-12 font-['Dancing_Script'] md:text-3xl lg:text-4xl">
          About Michelle
        </Heading>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="hidden md:block ">
            <Image
              alt="Michelle and her husband"
              className="object-center object-cover bg-cover bg-no-repeat bg-center max-h-[500px] lg:max-h-[900px] opacity-80"
              layout="responsive"
              placeholder="blur"
              src={michAboutMeBg}
            />
          </div>
          <div>
            <div className="md:px-28 md:pt-20">
              <Image
                alt="a smiling headshot of Michelle Trotta holding a non-alcoholic drink"
                className="object-contain object-center w-full h-500 md:object-cover shadow-md rounded-sm opacity-90"
                placeholder="blur"
                src={michAboutMe}
                width="634"
                height="725"
              />
            </div>
            <div className="pt-5 px-4 gap-4 grid">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                voluptas, aliquam asperiores quisquam facilis dignissimos aut
                debitis aliquid non mollitia aspernatur eum. Ad sed accusantium
                mollitia architecto atque libero dolorum. Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Cum voluptas, aliquam
                asperiores quisquam facilis dignissimos aut debitis aliquid non
                mollitia aspernatur eum. Ad sed accusantium mollitia architecto
                atque libero dolorum.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                voluptas, aliquam asperiores quisquam facilis dignissimos aut
                debitis aliquid non mollitia aspernatur eum. Ad sed accusantium
                mollitia architecto atque libero dolorum. Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Cum voluptas, aliquam
                asperiores quisquam facilis dignissimos aut debitis aliquid non
                mollitia aspernatur eum. Ad sed accusantium mollitia architecto
                atque libero dolorum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
