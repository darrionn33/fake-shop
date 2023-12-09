import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../context";

export default function Header(props) {
  const { cart } = useContext(Context);

  const showSideBar = () => {
    document.querySelector(".sidebar").style.transform = "translateX(0%)";
  };
  return (
    <header>
      <Link to="/fake-shop/">
        <h1>FAKE SHOP</h1>
      </Link>
      <FontAwesomeIcon
        icon={faBars}
        className="hamburger"
        onClick={showSideBar}
      />
      <Link to="cart">
        <FontAwesomeIcon
          icon={faCartShopping}
          color="red"
          inverse
          size="2xl"
          className="cart_icon"
        />
        <p className="count">{cart.length}</p>
      </Link>
    </header>
  );
}
