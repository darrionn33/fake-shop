import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Layout(params) {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
