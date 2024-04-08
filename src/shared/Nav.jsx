import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import "../App.css";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
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
          to={"/login"}
        >
          Login
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
          to={"/register"}
        >
          Register
        </NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged Out Successfully"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="navbar my-5 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn -ml-8 btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
            className="menu menu-md dropdown-content -ml-8 mt-3 z-[1] p-2 shadow bg-white rounded-box w-40"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to={"/"}
          className="font-bold no-underline text-green-500 text-2xl"
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
        <div className="relative top-[3px]">
          {user?.photoURL ? (
            <img
              className="w-11 rounded-full cursor-pointer"
              src={user.photoURL}
              alt=""
            />
          ) : (
            <FaUserCircle className="cursor-pointer" size={45} />
          )}
          {user?.displayName && (
            <div className="absolute text-center w-[130px] hidden -bottom-8 -left-12 bg-gray-800 text-white px-2 py-1 rounded">
              {user.displayName}
            </div>
          )}
        </div>

        {user ? (
          <button
            onClick={handleLogOut}
            className="bg-black no-underline px-3 py-3 cursor-pointer transition-all duration-300 text-white border-0 hover:bg-[#232323]"
          >
            Log Out
          </button>
        ) : (
          <Link
            to={"/login"}
            className="bg-black no-underline px-3 py-2 cursor-pointer transition-all duration-300 text-white hover:bg-[#232323]"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
