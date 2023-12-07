import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../context";

export default function Header(props) {
  const { cart } = useContext(Context);
  return (
    <header>
      <h1>FAKE SHOP</h1>
      <Link to="cart">
        <FontAwesomeIcon
          icon={faCartShopping}
          color="red"
          inverse
          size="2xl"
          className="cart"
        />
        <p className="count">{cart.length}</p>
      </Link>
    </header>
  );
}
