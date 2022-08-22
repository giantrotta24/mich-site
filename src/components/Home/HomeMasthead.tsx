import ComingSoon from '../common/ComingSoon';

const HomeMasthead: React.FC = () => {
  return (
    <section id="home">
      <div className="lg:container lg:mx-auto min-h-screen flex flex-col items-center justify-center">
        <ComingSoon />
      </div>
    </section>
  );
};

export default HomeMasthead;
