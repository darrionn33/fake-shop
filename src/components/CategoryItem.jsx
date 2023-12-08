import { useContext } from "react";
import Context from "../context";

export default function CategoryItem(props) {
  const { cart, setCart } = useContext(Context);
  const index = cart.findIndex((item) => item.id === props.item.id);
  const add = () => {
    setCart((cart) => [...cart, { ...props.item, quantity: 1 }]);
  };
  const addMore = () => {
    setCart((items) => {
      let tmp = [...items];
      tmp[index].quantity = tmp[index].quantity + 1;
      return tmp;
    });
  };
  return (
    <div className="item">
      <img src={props.item.image} alt="product-image" />
      <h2>{props.item.title}</h2>
      <p>${props.item.price}</p>
      {index === -1 ? (
        <button onClick={add}>ADD TO CART</button>
      ) : (
        <button onClick={addMore} style={{ backgroundColor: "darkblue" }}>
          ADD MORE ({cart[index].quantity})
        </button>
      )}
    </div>
  );
}
