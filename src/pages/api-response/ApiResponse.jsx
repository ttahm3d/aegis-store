import Mockman from "mockman-js";
import { useDocumentTitle } from "../../hooks";

export default function () {
  useDocumentTitle("Mockman");

  return (
    <div className="MockAPI">
      <Mockman />
    </div>
  );
}
