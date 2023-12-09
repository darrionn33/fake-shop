import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import Context from "../context";

export default function CartItem(props) {
  const { setCart } = useContext(Context);
  const item = props.item;
  return (
    <div className="product">
      <div
        className="image"
        style={{ backgroundImage: 'url("' + item.image + '")' }}
      ></div>
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <div className="quantity">
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
        <p>{item.quantity}</p>
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
      </div>
    </div>
  );
}
