import { useContext } from "react";
import Context from "../context";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="cart">
      {cart.length > 0 ? (
        <div className="container">
          <h1>Cart</h1>
          {cart.map((item, index) => {
            if (item.quantity > 0) {
              return <CartItem item={item} key={item.id} index={index} />;
            }
          })}
          <div className="total">
            <h2>TOTAL</h2>
            <p>
              $
              {Math.floor(
                cart.reduce((total, item) => {
                  return total + item.price * item.quantity;
                }, 0)
              )}
            </p>
          </div>
        </div>
      ) : (
        <div className="empty">
          <h1>No Items Yet!</h1>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Shop
          </button>
        </div>
      )}
    </div>
  );
}
