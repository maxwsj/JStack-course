import PropTypes from "prop-types";
import { Container } from "./styles";

import xCircleIcon from "../../../assets/images/icons/x-circle.svg";
import checkCircleIcon from "../../../assets/images/icons/check-circle.svg";
import { useEffect } from "react";

export default function ToastMessage({
  message,
  onRemoveMessage,
  isLeaving,
  animatedRef,
}) {
  const { id, text, type, duration } = message;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(id);
    }, duration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [id, onRemoveMessage, duration]);

  function handleRemoveToast() {
    onRemoveMessage(id);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      onRemoveMessage(id);
    }
  }

  return (
    <Container
      type={type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      onKeyDown={handleKeyDown}
      isLeaving={isLeaving}
      ref={animatedRef}
    >
      {type === "danger" && <img src={xCircleIcon} alt="X" />}
      {type === "success" && <img src={checkCircleIcon} alt="Check" />}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["default", "success", "danger"]),
    duration: PropTypes.number,
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
  isLeaving: PropTypes.bool.isRequired,
  animatedRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};
