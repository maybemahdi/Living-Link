import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
});
const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border focus:bg-[#fff] focus:text-[#23BE0A] text-[#23BE0A] border-[#23BE0A] no-underline bg-white"
              : "text-black no-underline"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border focus:bg-[#fff] focus:text-[#23BE0A] text-[#23BE0A] border-[#23BE0A] no-underline bg-white"
              : "text-black no-underline"
          }
          to={"/contact"}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border focus:bg-[#fff] focus:text-[#23BE0A] text-[#23BE0A] border-[#23BE0A] no-underline bg-white"
              : "text-black no-underline"
          }
          to={"/update-profile"}
        >
          Update Profile
        </NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged Out Successfully"))
      .catch((err) => console.log(err));
  };
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
    document.getElementById("mainDiv").removeAttribute("data-aos")
  };

  // const toggleAvatarDropdown = () => {
  //   setOpenAvatarDropdown(!openAvatarDropdown);
  // };
  return (
    <div
    id="mainDiv"
      data-aos="zoom-in"
      className={`navbar transition-all duration-500 p-0 my-5 bg-base-100 ${
        openNav ? "mb-[140px]" : ""
      }`}
    >
      <div className={`navbar-start relative ${openNav ? "mb-5": ""}`}>
        {/* <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn -ml-5 btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu fixed menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div> */}
        <button
          onClick={toggleNav}
          className="block md:hidden cursor-pointer -ml-2 mr-3 border bg-white border-gray-600 p-2 rounded text-gray-600 hover:bg-gray-200 focus:outline-none"
        >
          <svg
            className={`w-7 h-7 ${openNav ? "hidden" : "block"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
          <svg
            className={`w-7 h-7 ${openNav ? "block" : "hidden"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            openNav ? "" : "hidden"
          } mt-4 bg-slate-200 w-full absolute top-10 flex flex-col gap-4 p-2 rounded-md`}
        >
          <ul className="menu">
            {navLinks}
          </ul>
        </div>
{/* 
        <div
          onClick={toggleAvatarDropdown}
          className="relative transition-all duration-500"
        >
          <div
            className={`absolute ${
              openAvatarDropdown ? "block" : "hidden"
            } bg-slate-300 rounded shadow-md mt-2 space-y-2`}
          >
            <div className="p-4 flex flex-col ">
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </div>
          </div>
        </div> */}
        <Link
          to={"/"}
          className="font-bold no-underline text-green-500 text-[18px] md:text-2xl"
        >
          Living-Link
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-[#131313CC] font-semibold gap-3 text-base px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <div id="rel" className="relative flex justify-center items-center">
          {/* {console.log(user.photoURL)} */}
          {user?.photoURL && (
            <img
              className="w-11 h-11 rounded-full cursor-pointer"
              src={user?.photoURL}
              alt=""
            />
          )}
          {user?.displayName && (
            <div className="absolute text-center z-10 w-[130px] hidden top-12 -left-10 bg-gray-800 text-white px-2 py-1 rounded">
              {user?.displayName}
            </div>
          )}
        </div>

        {user ? (
          <button
            onClick={handleLogOut}
            className="bg-green-500 no-underline px-3 py-3 cursor-pointer transition-all duration-300 text-white border-0 hover:bg-[#232323]"
          >
            Log Out
          </button>
        ) : (
          <Link
            to={"/login"}
            className="bg-green-500 no-underline px-3 py-2 cursor-pointer transition-all duration-300 text-white hover:bg-[#232323]"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
