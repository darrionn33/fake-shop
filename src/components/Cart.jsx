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
          <table>
            <tbody>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total Price</th>
              </tr>
              {cart.map((item, index) => {
                if (item.quantity > 0) {
                  return <CartItem item={item} key={item.id} index={index} />;
                }
              })}
              <tr>
                <td colSpan="3">TOTAL</td>
                <td>
                  $
                  {cart.reduce((total, item) => {
                    return total + item.price * item.quantity;
                  }, 0)}
                </td>
              </tr>
            </tbody>
          </table>
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
