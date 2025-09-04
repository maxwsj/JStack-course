import Spinner from "components/Spinner";
import { Overlay } from "./styles";
import PropTypes from "prop-types";
import ReactPortal from "components/ReactPortal";
import useAnimatedUnmount from "hooks/useAnimatedUnmount";

export default function Loader({ isLoading }) {
  const { animatedElementRef, shouldRender } = useAnimatedUnmount(isLoading);

  if (!shouldRender) return null;

  return (
    <ReactPortal containerId="loader-root">
      <Overlay isLeaving={!isLoading} ref={animatedElementRef}>
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
