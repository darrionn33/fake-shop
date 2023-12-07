import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function Home() {
  const categories = ["Clothes", "Shoes", "Accessories", "Food", "Cosmetics"];

  return (
    <div className="home">
      <Header />
      <Main categories={categories} />
      <Sidebar categories={categories} />
    </div>
  );
}

export default Home;
