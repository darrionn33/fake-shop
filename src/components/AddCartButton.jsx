import { useContext } from "react";
import Context from "../context";

export default function AddCartButton(props) {
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
  if (index === -1) {
    return <button onClick={add}>ADD TO CART</button>;
  } else {
    return (
      <button onClick={addMore} style={{ backgroundColor: "darkblue" }}>
        ADD MORE ({cart[index].quantity})
      </button>
    );
  }
}
