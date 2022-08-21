type Props = {
  children: React.ReactNode;
  className?: string;
};

const Heading: React.FC<Props> = ({ children, className }) => {
  return (
    <h2
      className={
        className
          ? `${className} text-xl font-bold pt-2 md:pt-4`
          : 'text-xl font-bold pt-2 md:pt-4'
      }
    >
      {children}
    </h2>
  );
};
export default Heading;
