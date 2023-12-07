export default function Main(props) {
  return (
    <main>
      <div className="carousel"></div>
      {props.categories.map((category) => (
        <div id={category} className="category" key={category}>
          <h1>{category}</h1>
          <div className="items">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
        </div>
      ))}
    </main>
  );
}
