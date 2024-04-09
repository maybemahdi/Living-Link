import Footer from "../shared/Footer";
import Nav from "../shared/Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="font-poppins w-[90%] md:w-[85%] mx-auto">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
