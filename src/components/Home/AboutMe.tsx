import Image from 'next/image';

import Heading from '../common/Heading';

import michAboutMe from '/public/images/about-me/mich-about-me.jpeg';

const AboutMe: React.FC = () => {
  return (
    <section className="bg-stone-300 border-t border-[#f6e3ce]">
      <div className="grid lg:container lg:mx-auto mb-6 px-6 pb-6 text-center">
        <Heading className="mb-5">About me</Heading>
        <div className="grid md:grid-cols-2 gap-6">
          <div
            className="hidden md:block object-center object-cover bg-cover bg-no-repeat bg-center max-h-[500px] lg:max-h-[900px]"
            style={{
              backgroundImage: `url('/images/about-me/mich-about-me-couple-bg.jpeg')`,
            }}
          />
          <div>
            <div className="md:px-28 md:pt-20">
              <Image
                alt="a smiling headshot of Michelle Trotta holding a non-alcoholic drink"
                src={michAboutMe}
                placeholder="blur"
                className="object-contain object-center w-full md:object-cover  shadow-md rounded-sm"
              />
            </div>
            <div className="pt-5 px-4 text-left gap-4 grid">
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
