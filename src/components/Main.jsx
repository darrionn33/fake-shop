import Category from "./Category";
import Carousel from "./Carousel";

export default function Main(props) {
  return (
    <main>
      <Carousel products={props.products} />
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
