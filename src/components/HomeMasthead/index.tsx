import Logo from '../common/Logo';
import ImageMasthead from './ImageMasthead';

const HomeMasthead: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div>
        <ImageMasthead />
        <Logo />
      </div>
    </div>
  );
};

export default HomeMasthead;
