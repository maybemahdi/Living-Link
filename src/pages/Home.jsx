import { useContext, useEffect, useState } from "react";
import HomeCard from "../Components/HomeCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../Components/Loader";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "../Components/Slider";
AOS.init({
  duration: 1200,
});

const Home = () => {
  const [estate, setEstate] = useState([]);
  const { loading } = useContext(AuthContext);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      setEstate(data);
    };
    fetchData();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <Helmet>
        <title>Living-Link | Home</title>
      </Helmet>
      {/* banner sliders */}
      <div data-aos="fade-right" className="carousel w-full my-5 rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/H44bsJx/img-1.jpg"
            className="w-full rounded-lg h-[560px]"
          />
          <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
          <div
            data-aos="zoom-in"
            className="flex absolute flex-col space-y-6 justify-center my-36 items-center text-white"
          >
            <h3 className="lg:text-6xl text-4xl text-center font-black text-green-500">
              Welcome to Your Next Home
            </h3>
            <h5 className="text-white text-center w-[80%] font-semibold text-2xl">
              Discover Your Ideal Residential Space
            </h5>
            <p className="text-center w-[90%] lg:w-[50%] mx-auto">
              Explore our listings for student housing, vacation rentals, and
              more. With a seamless search experience and comprehensive property
              details, finding your next home has never been easier.
            </p>
            <Link to={"/contact"}>
              <button className="rounded px-5 font-semibold cursor-pointer py-3 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:bg-black text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span>Contact Us</span>
              </button>
            </Link>
          </div>
          {/* Dark overlay */}
          <div className="absolute flex justify-between left-5 right-5 top-1/2 transform -translate-y-1/2">
            <a
              href="#slide5"
              className="btn bg-white hover:bg-slate-200 btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn bg-white hover:bg-slate-200 btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/KDRmtgK/img-2.jpg"
            className="w-full rounded-lg h-[560px]"
          />
          <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
          <div
            data-aos="zoom-in"
            className="flex absolute flex-col space-y-6 justify-center my-36 items-center text-white"
          >
            <h3 className="lg:text-6xl text-4xl text-center font-black text-green-500">
              Welcome to Your Next Home
            </h3>
            <h5 className="text-white text-center w-[80%] font-semibold text-2xl">
              Discover Your Ideal Residential Space
            </h5>
            <p className="text-center w-[90%] lg:w-[50%] mx-auto">
              Explore our listings for student housing, vacation rentals, and
              more. With a seamless search experience and comprehensive property
              details, finding your next home has never been easier.
            </p>
            <Link to={"/contact"}>
              <button className="rounded px-5 font-semibold cursor-pointer py-3 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:bg-black text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span>Contact Us</span>
              </button>
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn bg-white hover:bg-slate-200 btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn bg-white hover:bg-slate-200 btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/DD5fP4h/img-3.jpg"
            className="w-full rounded-lg h-[560px]"
          />
          <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
          <div
            data-aos="zoom-in"
            className="flex absolute flex-col space-y-6 justify-center my-36 items-center text-white"
          >
            <h3 className="lg:text-6xl text-4xl text-center font-black text-green-500">
              Welcome to Your Next Home
            </h3>
            <h5 className="text-white text-center w-[80%] font-semibold text-2xl">
              Start Your Search Today and Embrace the Comforts of Home
            </h5>
            <p className="text-center w-[90%] lg:w-[50%] mx-auto">
              Discover a diverse range of residential options tailored to your
              lifestyle. Whether you're seeking the warmth of a single-family
              home, the convenience of a townhouse, the modern comforts of an
              apartment, or the tranquility of senior living communities, we
              have it all.
            </p>
            <Link to={"/contact"}>
              <button className="rounded px-5 font-semibold cursor-pointer py-3 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:bg-black text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span>Contact Us</span>
              </button>
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn bg-white hover:bg-slate-200 btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn bg-white hover:bg-slate-200 btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/WVvyM1Z/img-4.jpg"
            className="w-full rounded-lg h-[560px]"
          />
          <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
          <div
            data-aos="zoom-in"
            className="flex absolute flex-col space-y-6 justify-center my-36 items-center text-white"
          >
            <h3 className="lg:text-6xl text-4xl text-center font-black text-green-500">
              Welcome to Your Next Home
            </h3>
            <h5 className="text-white text-center w-[80%] font-semibold text-2xl">
              Explore a World of Residential Possibilities
            </h5>
            <p className="text-center w-[90%] lg:w-[50%] mx-auto">
              Embark on a journey to find the perfect residential space that
              resonates with your lifestyle. From charming single-family homes
              to stylish townhouses, contemporary apartments to serene senior
              living communities.
            </p>
            <Link to={"/contact"}>
              <button className="rounded px-5 font-semibold cursor-pointer py-3 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:bg-black text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span>Contact Us</span>
              </button>
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn bg-white hover:bg-slate-200 btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn bg-white hover:bg-slate-200 btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/wCC9Bsj/img-5.jpg"
            className="w-full rounded-lg h-[560px]"
          />
          <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
          <div
            data-aos="zoom-in"
            className="flex absolute flex-col space-y-6 justify-center my-36 items-center text-white"
          >
            <h3 className="lg:text-6xl text-4xl text-center font-black text-green-500">
              Welcome to Your Next Home
            </h3>
            <h5 className="text-white text-center w-[80%] font-semibold text-2xl">
              Discover the Perfect Residential Haven
            </h5>
            <p className="text-center w-[90%] lg:w-[50%] mx-auto">
              Step into a world where comfort meets convenience, and explore a
              myriad of residential options tailored to your needs. Whether
              you're searching for a cozy apartment.
            </p>
            <Link to={"/contact"}>
              <button className="rounded px-5 font-semibold cursor-pointer py-3 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:bg-black text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span>Contact Us</span>
              </button>
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="btn bg-white hover:bg-slate-200 btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn bg-white hover:bg-slate-200 btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* estate section  */}
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-3 md:col-span-2 flex flex-col my-5 items-center">
          <h3 data-aos="zoom-in-right" className="text-3xl font-bold">
            Get Your Perfect Home
          </h3>
          <p data-aos="zoom-out-right" className="text-center my-5 md:w-[80%]">
            Discover diverse residential options from cozy single-family homes
            to luxurious senior living communities. Find your perfect retreat
            with our comprehensive listings and amenities. Start exploring
            today!
          </p>
        </div>
        {estate.map((singleEstate, idx) => (
          <HomeCard key={idx} singleEstate={singleEstate} />
        ))}
      </div>
      {/* features section with swiper slider  */}
      <div className="my-10">
        <div className="flex flex-col my-10 items-center">
          <h3
            data-aos="zoom-in-right"
            className="text-3xl text-center mt-10 font-bold"
          >
            Key Features of Our Rental House Listings
          </h3>
          <p data-aos="zoom-out-right" className="text-center my-5 md:w-[80%]">
            Explore the standout features that make our rental house listings a
            top choice for tenants:
          </p>
        </div>
        <div data-aos="fade-up">
          <Slider />
        </div>
      </div>
      {/* Testimonial; review section  */}
      <div className="my-10">
        <div className="flex flex-col my-10 items-center">
          <h3
            data-aos="zoom-in-left"
            className="text-3xl text-center mt-10 font-bold"
          >
            Tenant Testimonials: What Renters Are Saying
          </h3>
          <p data-aos="zoom-out-right" className="text-center my-5 md:w-[80%]">
            Explore firsthand experiences from tenants who have utilized our
            residential real estate renting house web app. Read authentic
            reviews to gain insights into the renting process, property quality,
            and overall user satisfaction
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="grid gap-8 grid-cols-1 lg:grid-cols-3"
        >
          <div
            data-aos="fade-left"
            className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-slate-200 dark:text-gray-800"
          >
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    data-aos="zoom-in"
                    src="https://source.unsplash.com/150x150/?portrait?1"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 data-aos="fade-down" className="font-bold">
                    Leroy Jenkins
                  </h4>
                  <span
                    data-aos="fade-up"
                    className="text-xs dark:text-gray-600"
                  >
                    3 days ago
                  </span>
                </div>
              </div>
              <div
                data-aos="fade-right"
                className="flex items-center space-x-2 dark:text-yellow-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span data-aos="fade-left" className="text-xl font-bold">
                  4.6
                </span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p data-aos="fade-in">
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
                finibus.
              </p>
              <p>
                Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
                mauris cursus venenatis. Maecenas gravida urna vitae accumsan
                feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-slate-200 dark:text-gray-800"
          >
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    data-aos="zoom-in"
                    src="https://source.unsplash.com/150x150/?portrait?2"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 data-aos="fade-down" className="font-bold">
                    Tahsin Hasan
                  </h4>
                  <span
                    data-aos="fade-up"
                    className="text-xs dark:text-gray-600"
                  >
                    2 days ago
                  </span>
                </div>
              </div>
              <div
                data-aos="fade-right"
                className="flex items-center space-x-2 dark:text-yellow-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span data-aos="fade-left" className="text-xl font-bold">
                  4.9
                </span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p data-aos="fade-in">
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
                finibus.
              </p>
              <p>
                Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
                mauris cursus venenatis. Maecenas gravida urna vitae accumsan
                feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-right"
            className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-slate-200 dark:text-gray-800"
          >
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    data-aos="zoom-in"
                    src="https://source.unsplash.com/150x150/?portrait?3"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 data-aos="fade-down" className="font-bold">
                    Tahmid Hasan
                  </h4>
                  <span
                    data-aos="fade-up"
                    className="text-xs dark:text-gray-600"
                  >
                    1 days ago
                  </span>
                </div>
              </div>
              <div
                data-aos="fade-right"
                className="flex items-center space-x-2 dark:text-yellow-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span data-aos="fade-left" className="text-xl font-bold">
                  4.7
                </span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p data-aos="fade-in">
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
                finibus.
              </p>
              <p>
                Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
                mauris cursus venenatis. Maecenas gravida urna vitae accumsan
                feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
