import PropTypes from "prop-types";

export default function Input({ type = "text", name, placeholder, ...props }) {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        {...props}
        className="w-full h-14 bg-transparent font-medium border-2 border-gray-700 px-4 rounded-md outline-none hover:border-red-600 focus:border-red-600 transition-colors duration-[275ms]"
      />
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
