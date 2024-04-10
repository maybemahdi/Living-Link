import { useContext, useState, useRef } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa"; // Import Eye icons
import toast from "react-hot-toast";
import "../App.css";

const Login = () => {
  const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(); // Add useRef for email input
  const navigate = useNavigate();
  const location = useLocation();
 
  const handleFirebaseError = (errorCode) => {
    switch (errorCode) {
      case "Firebase: Error (auth/invalid-credential).":
        return "Wrong email or password. Please try again.";
      // Add more cases for other error codes as needed
      default:
        return "An error occurred. Please try again later.";
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Logged in successfully");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        const errorMessage = handleFirebaseError(err.message);
        toast.error(errorMessage);
      });
  };
  const loginWithGoogle = () => {
    googleLogin()
      .then((res) => {
        console.log(res);
        toast.success("Logged in successfully");
      })
      .catch((err) => console.log(err));
  };
  const loginWithGithub = () => {
    githubLogin()
      .then((res) => {
        console.log(res);
        toast.success("Logged in successfully");
      })
      .catch((error) => {
        setLoading(false);
        // Check if the error is due to invalid credentials
        if (error.code === "auth/invalid-credential") {
          // Display toast for wrong password
          toast.error("Wrong password. Please enter correct credentials.");
        } else {
          // For other errors, display a generic error message
          toast.error("An error occurred. Please try again later.");
        }
        toast.error("Error signing in: ", error);
      });
  };

  return (
    <div className="bg-grey-lighter min-h-[80vh] flex flex-col">
      <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-4 rounded shadow-xl text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Log in</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              ref={emailRef}
              className="block border bg-gray-100 border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              required
            />

            <div className="relative flex">
              <input
                type={showPassword ? "text" : "password"}
                className="block border bg-gray-100 border-grey-light w-full p-3 rounded mb-4"
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
            <button
              type="submit"
              className="w-full text-center py-3 rounded border-0 cursor-pointer bg-black text-white font-semibold hover:bg-green-dark focus:outline-none my-1"
            >
              Login
            </button>
          </form>
          <div className="flex justify-center gap-5 items-center my-5">
            <button
              onClick={loginWithGoogle}
              className="inline-flex overflow-hidden cursor-pointer text-white bg-gray-900 rounded group"
            >
              <span className="px-3.5 py-2 text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
                <FaGoogle size={20} />
              </span>
              <span className="pl-4 pr-5 py-2.5">Google</span>
            </button>
            <button
              onClick={loginWithGithub}
              className="inline-flex overflow-hidden cursor-pointer text-white bg-gray-900 rounded group"
            >
              <span className="px-3.5 py-2 text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
                <FaGithub size={20} />
              </span>
              <span className="pl-4 pr-5 py-2.5">Github</span>
            </button>
          </div>
        </div>
        <div className="text-grey-dark mt-6">
          New to our Website?
          <Link
            to={"/register"}
            className="ml-1 font-bold text-blue-500 border-b border-blue text-blue"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
