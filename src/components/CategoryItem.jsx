import { useContext } from "react";
import Context from "../context";

export default function CategoryItem(props) {
  const ctx = useContext(Context);

  return (
    <div className="item">
      <img src={props.item.image} alt="product-image" />
      <h2>{props.item.title}</h2>
      <p>${props.item.price}</p>
      <button
        onClick={() => {
          ctx.setCart((cart) => [...cart, props.item]);
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
}
