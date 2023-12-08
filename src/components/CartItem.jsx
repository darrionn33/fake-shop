import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import Context from "../context";

export default function CartItem(props) {
  const { setCart } = useContext(Context);
  const item = props.item;
  return (
    <tr>
      <td>
        <div className="item_div">
          <img src={item.image} alt="product-image" />
          <h3>{item.title}</h3>
        </div>
      </td>
      <td>
        <div className="total_price">
          <button
            onClick={() => {
              setCart((items) => {
                let tmp = [...items];
                if (tmp[props.index].quantity > 1) {
                  tmp[props.index].quantity = tmp[props.index].quantity - 1;
                  return tmp;
                }
                return items;
              });
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <p>{item.quantity}</p>
          <button
            onClick={() => {
              setCart((items) => {
                let tmp = [...items];
                tmp[props.index].quantity = tmp[props.index].quantity + 1;
                return tmp;
              });
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </td>
      <td>${item.price}</td>
      <td>${item.price * item.quantity}</td>
    </tr>
  );
}
