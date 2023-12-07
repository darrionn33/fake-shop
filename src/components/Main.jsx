import Category from "./Category";

export default function Main(props) {
  return (
    <main>
      <div className="carousel"></div>
      {props.categories.map((category) => (
        <Category
          key={category}
          category={category}
          products={props.products.filter(
            (product) => product.category === category
          )}
        />
      ))}
    </main>
  );
}
