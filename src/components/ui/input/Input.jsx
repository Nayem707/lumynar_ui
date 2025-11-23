const Input = ({
  title,
  type,
  name,
  placeholder,
  TClassName,
  className,
  value,
  onChange,
}) => {
  return (
    <div className="my-3.5 sm:my-5 md:my-5">
      {title && (
        <label
          className={`text-base font-semibold text-[#252525] ${TClassName}`}
        >
          {title}
        </label>
      )}
      <input
        type={type}
        name={name || 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`mt-3 w-full rounded-lg border border-gray-200 bg-[#F1F9F6] px-4 py-3 text-gray-900 placeholder-gray-400 transition duration-200 focus:border-transparent focus:ring-[3px] focus:ring-[#c5e2d7] focus:outline-none ${className}`}
      />
    </div>
  );
};

export default Input;
