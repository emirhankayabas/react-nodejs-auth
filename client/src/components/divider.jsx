import PropTypes from "prop-types";

export default function Dividers({ text }) {
  return (
    <div className="flex items-center justify-center gap-x-4 text-white text-opacity-75 text-sm font-semibold">
      <span className="w-full h-[1px] bg-[#555555]"></span>
      <span>{text}</span>
      <span className="w-full h-[1px] bg-[#555555]"></span>
    </div>
  );
}

Dividers.propTypes = {
  text: PropTypes.string,
};
