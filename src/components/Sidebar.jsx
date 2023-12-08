export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <h2>CATEGORIES</h2>
      {props.categories.map((category) => (
        <a href={"#" + category} key={category}>
          <h3>
            {category}{" "}
            <span>
              (
              {
                props.products.filter(
                  (product) => product.category === category
                ).length
              }
              )
            </span>
          </h3>
        </a>
      ))}
    </div>
  );
}
