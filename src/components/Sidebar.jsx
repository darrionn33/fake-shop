import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
export default function Sidebar(props) {
  const hideSideBar = () => {
    document.querySelector(".sidebar").style.transform = "translateX(-100%)";
  };
  return (
    <div className="sidebar">
      <FontAwesomeIcon icon={faClose} className="close" onClick={hideSideBar} />
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
