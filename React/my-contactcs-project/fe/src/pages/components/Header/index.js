import { Link } from "react-router-dom";
import { Container } from "./styles";
import PropTypes from "prop-types";

export default function Header({
  hasError = false,
  qtyOfContacts = 0,
  qtyOfFilteredContacts = 0,
}) {
  const alignment = hasError
    ? "flex-end"
    : qtyOfContacts > 0
    ? "space-between"
    : "center";

  return (
    <Container justifyContent={alignment}>
      {!hasError && qtyOfContacts > 0 && (
        <strong>
          {qtyOfFilteredContacts}{" "}
          {qtyOfFilteredContacts === 1 ? "contato" : "contatos"}
        </strong>
      )}
      <Link to="/new">Novo contato</Link>
    </Container>
  );
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  qtyOfContacts: PropTypes.number.isRequired,
  qtyOfFilteredContacts: PropTypes.number.isRequired,
};
