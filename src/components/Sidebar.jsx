export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <h2>Categories</h2>
      {props.categories.map((category) => (
        <a href={"#" + category} key={category}>
          <h3>
            {category} <span>({Math.floor(Math.random() * 30) + 9})</span>
          </h3>
        </a>
      ))}
    </div>
  );
}
