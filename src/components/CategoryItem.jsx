import AddCartButton from "./AddCartButton";

export default function CategoryItem(props) {
  return (
    <div className="item">
      <img src={props.item.image} alt="product-image" />
      <h2>{props.item.title}</h2>
      <p>${props.item.price}</p>
      <AddCartButton item={props.item} />
    </div>
  );
}
