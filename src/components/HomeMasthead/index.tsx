import Logo from '../common/Logo';
import ImageMasthead from './ImageMasthead';

const HomeMasthead: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <ImageMasthead />
      <Logo />
    </div>
  );
};

export default HomeMasthead;
