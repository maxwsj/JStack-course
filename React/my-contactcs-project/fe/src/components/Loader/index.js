import ReactDOM from "react-dom";
import Spinner from "components/Spinner";
import { Overlay } from "./styles";

export default function Loader() {
  return ReactDOM.createPortal(
    <Overlay>
      <Spinner size={90} />
    </Overlay>,
    document.getElementById("loader-root")
  );
}
