import Heading from '../common/Heading';

const ContactMe: React.FC = () => {
  return (
    <section id="contact" className="">
      <div className="grid lg:container lg:mx-auto text-center">
        <div className="border border-yellow-600">
          <Heading>
            Want to Chat?<span className="sr-only"> Contact me</span>
          </Heading>
          <div className="border border-red-600">
            <div>Reach out to me if you have any questions!</div>
            <div>name</div>
            <div>email</div>
            <div>subject</div>
            <div>message</div>
          </div>
          <div className="border border-blue-600">
            <div>Lets connect</div>
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
