import { useEffect, useState } from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Loading from "./Loading";

function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("https://fakestoreapi.com/products/categories"),
      fetch("https://fakestoreapi.com/products"),
    ])
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) => {
        setCategories(data[0]);
        setProducts(data[1]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Main categories={categories} products={products} />
          <Sidebar categories={categories} products={products} />
        </>
      )}
    </div>
  );
}

export default Home;
