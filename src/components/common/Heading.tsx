type Props = {
  children: React.ReactNode;
  className?: string;
};

const Heading: React.FC<Props> = ({ children, className }) => {
  const defaultStyles =
    "font-['Dancing_Script'] text-3xl lg:text-4xl font-bold pt-2 md:pt-4";

  return (
    <h2 className={className ? `${defaultStyles} ${className}` : defaultStyles}>
      {children}
    </h2>
  );
};
export default Heading;
