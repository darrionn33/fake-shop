import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Context from "./context";
import Loading from "./components/Loading";

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

  const [cart, setCart] = useState([]);
  
  return (
    <div className="home">
      <Context.Provider value={{ cart, setCart }}>
        <Header cart={cart} />
        {loading ? (
          <Loading />
        ) : (
          <>
            <Main categories={categories} products={products} />
            <Sidebar categories={categories} products={products} />
          </>
        )}
      </Context.Provider>
    </div>
  );
}

export default Home;
