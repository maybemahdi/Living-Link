import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import Loader from "../Components/Loader";
import toast from "react-hot-toast";
//AOS BELOW:
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
});
import "animate.css";
const UpdateProfile = () => {
  const { user, loading, setUpdate, update } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photoURL.value;
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        // window.location.reload();
        setUpdate(!update);
        toast.success("Profile Updated");
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.photoURL.value = "";
      })
      .catch((err) => console.log(err));
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="flex items-center flex-col md:flex-row justify-center mt-10 gap-10">
      <Helmet>
        <title>Living-Link | Update profile</title>
      </Helmet>
      <div
        data-aos="zoom-in"
        className="flex w-full md:basis-1/2 flex-col justify-center p-6 shadow-md rounded-xl dark:bg-gray-50 dark:text-gray-800"
      >
        <img
          src={user.photoURL}
          alt=""
          className="w-32 object-cover mb-5 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
          <div className="my-2 flex flex-col items-center justify-center space-y-5">
            <h2 className="text-xl animate__animated animate__fadeInLeft flex items-center gap-2 font-semibold sm:text-2xl">
              Name:{" "}
              <span className="animate__animated animate__fadeInRight text-green-500">
                {user.displayName}
              </span>
            </h2>
            <p className="px-5 animate__animated animate__fadeInDown flex flex-col items-center gap-1 text-xs text-black font-semibold sm:text-base dark:text-gray-600">
              Email:{" "}
              <span className="text-blue-500 font-semibold">{user.email}</span>
            </p>
            <p className="px-5 animate__animated animate__fadeInRight text-black font-semibold flex flex-col text-xs sm:text-base dark:text-gray-600">
              User PhotoURL:{" "}
            </p>
            <a
              target="_blank"
              href={user.photoURL}
              className="text-blue-500 text-center  no-underline mx-auto font-semibold"
            >
              {user.photoURL?.slice(0, 30)}.....
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full md:basis-1/2 flex-col gap-5 text-black">
        <h3 data-aos="zoom-in" className="text-xl font-bold mb-5">
          Want to Update your{" "}
          <span className="animate__animated animate__bounceIn text-green-500">
            Profile?
          </span>
        </h3>
        <form data-aos="zoom-in-right" onSubmit={handleSubmit}>
          <label className="text-[14px] font-bold" htmlFor="fullName">
            Full Name*
          </label>
          <input
            type="text"
            className="block mt-2 bg-gray-100 border border-grey-light w-full p-3 rounded mb-4"
            name="name"
            placeholder={user.displayName}
            required
          />
          <label className="text-[14px] font-bold" htmlFor="email">
            User Email{" "}
            <span className="text-red-500">
              (Disabled, however because of requirements there is no method
              implemented in the app that could verify email for updating it.)
            </span>
          </label>
          <input
            type="email"
            className="block mt-2 bg-gray-100 border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder={user.email}
            disabled
          />
          <label className="text-[14px] font-bold" htmlFor="photoUrl">
            Photo URL*
          </label>
          <input
            type="text"
            className="block mt-2 bg-gray-100 border border-grey-light w-full p-3 rounded mb-4"
            name="photoURL"
            placeholder={user.photoURL}
            required
          />
          <button
            className="bg-green-500 py-3 text-white font-semibold w-full px-4 rounded-md hover:bg-black transition cursor-pointer duration-500"
            type="submit"
          >
            Update profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
