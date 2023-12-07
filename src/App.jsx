import { useState } from "react";
import Router from "./Router";
import Context from "./context";
import "./App.scss";

export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Context.Provider value={{ cart, setCart }}>
        <Router />
      </Context.Provider>
    </>
  );
}
