const TextArea = ({
  title,
  name,
  placeholder,
  TClassName,
  className,
  value,
  onChange,
}) => {
  return (
    <div className="my-3 sm:my-4 md:my-5 lg:my-6">
      <label
        className={`mb-2 block text-base font-normal text-[#6B7280] ${TClassName}`}
      >
        {title}
      </label>
      <textarea
        name={name ? name : 'text'}
        placeholder={placeholder}
        rows={4}
        value={value}
        onChange={onChange}
        className={`max-h-28 min-h-28 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition duration-200 focus:border-transparent focus:ring-[3px] focus:ring-[#c5e2d7] focus:outline-none ${className}`}
      />
    </div>
  );
};

export default TextArea;
