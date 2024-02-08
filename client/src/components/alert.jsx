import PropTypes from "prop-types";

export default function Alert({ children, ...props }) {
  return (
    <div className="text-white text-sm font-semibold" {...props}>
      {children}
    </div>
  );
}

Alert.propTypes = {
  children: PropTypes.node.isRequired,
};
