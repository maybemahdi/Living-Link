import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photoURL.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    console.log(name, email, password, terms, photo);
    if (password.length < 6) {
      return toast.error("Password must be 6 characters or long");
    }
    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password must contain one Uppercase and one Lowercase Letter"
      );
    }
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Account created successfully");
        updateUserProfile(name, photo);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="bg-grey-lighter min-h-[80vh] flex flex-col">
        <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-4 rounded shadow-xl text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="name"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                required
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="photoURL"
                placeholder="Your Photo URL"
              />

              <div className="relative flex">
                <input
                  type={showPassword ? "text" : "password"}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 cursor-pointer top-[21%]"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>

              <div className="flex items-center mb-1 gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className=""
                  name="terms"
                  required
                />
                <label htmlFor="terms">
                  Accept with our terms and condition?
                </label>
              </div>

              <button
                type="submit"
                className="w-full text-center py-3 rounded border-0 cursor-pointer bg-black text-white font-semibold hover:bg-green-dark my-1"
              >
                Create Account
              </button>
            </form>
            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline ml-1 border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline ml-1 border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link
              to={"/login"}
              className="ml-1 font-bold text-blue-500 border-b border-blue text-blue"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
