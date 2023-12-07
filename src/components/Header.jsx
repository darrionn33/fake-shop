import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header(params) {
  return (
    <header>
      <h1>FAKE SHOP</h1>
      <FontAwesomeIcon
        icon={faCartShopping}
        color="red"
        inverse
        size="2xl"
        className="cart"
      />
      <p className="count">{0}</p>
    </header>
  );
}
