import PropTypes from "prop-types";
import Button from "components/Button";
import { Overlay, Container, Footer } from "./styles";
import ReactDOM from "react-dom";

export default function Modal({
  danger,
  title,
  children,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
}) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>
        <div className="modal-body">{children}</div>

        <Footer>
          <button type="button" className="cancel-button" onClick={onCancel}>
            {cancelLabel}
          </button>
          <Button type="button" danger={danger} onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById("modal-root")
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
};

Modal.defaultProps = {
  danger: false,
  cancelLabel: "Cancelar",
  confirmLabel: "Confirmar",
};
