import PropTypes from "prop-types";

export default function Button({ type = "button", children, icon, ...props }) {
  const Icon = icon;
  return (
    <button
      type={type}
      className="w-full h-16 flex items-center justify-center font-semibold text-2xl bg-[#cf0710] rounded-md hover:bg-red-800 transition-colors duration-200 text-white relative"
      {...props}
    >
      <span className="absolute top-1/2 left-4 -translate-y-1/2">
        <Icon />
      </span>
      <span className="-mt-0.5">{children}</span>
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "button"]),
  children: PropTypes.node,
  icon: PropTypes.elementType,
};
