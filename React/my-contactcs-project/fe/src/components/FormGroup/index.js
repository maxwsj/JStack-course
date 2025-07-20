import PropTypes from "prop-types";

import { Container } from "./styles";

export default function FormGroup({ children, error }) {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}

FormGroup.prototype = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
};

FormGroup.defaultProps = {
  error: null,
};
