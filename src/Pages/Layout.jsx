import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;
