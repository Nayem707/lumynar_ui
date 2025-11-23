const Heading = ({ level = 1, children, className = '', ...props }) => {
  const Tag = `h${level}`;

  const sizes = {
    1: 'text-5xl font-semibold text-[#252525] sm:text-6xl md:text-[76px]',
    2: 'text-2xl font-extrabold text-[#252525] sm:text-[30px] md:text-[36px]',
    3: 'max-w-[639px] text-lg font-bold text-[#1F2937] sm:text-xl md:text-2xl',
    4: 'text-base font-bold text-[#505050] md:text-lg',
    5: 'text-base font-bold text-[#000000]',
    6: 'text-base',
  };

  const classes = `${sizes[level]} ${className}`;

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
