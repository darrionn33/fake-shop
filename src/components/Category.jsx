import CategoryItem from "./CategoryItem";

export default function Category(props) {
  return (
    <div id={props.category} className="category">
      <h1>{props.category}</h1>
      <div className="items">
        {props.products.map((item) => (
          <CategoryItem item={item} key={item.title} />
        ))}
      </div>
    </div>
  );
}
