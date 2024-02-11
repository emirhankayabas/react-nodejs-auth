import PropTypes from "prop-types";

export default function Title({ children, ...props }) {
  return (
    <h1 className="text-4xl font-semibold" {...props}>
      {children}
    </h1>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};
