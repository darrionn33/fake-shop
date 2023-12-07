import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading() {
  return (
    <div className="loading">
      <FontAwesomeIcon icon={faSpinner} size="3x" spin inverse />
    </div>
  );
}
