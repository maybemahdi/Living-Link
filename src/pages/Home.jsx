import { useContext, useEffect, useState } from "react";
// import img1 from "https://i.ibb.co/H44bsJx/img-1.jpg";
// import img2 from "https://i.ibb.co/KDRmtgK/img-2.jpg";
// import img3 from "https://i.ibb.co/DD5fP4h/img-3.jpg";
// import img4 from "https://i.ibb.co/WVvyM1Z/img-4.jpg";
// import img5 from "https://i.ibb.co/wCC9Bsj/img-5.jpg";
import HomeCard from "../Components/HomeCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../Components/Loader";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
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
      <div data-aos="fade-right" className="carousel w-full mb-5 rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/H44bsJx/img-1.jpg" className="w-full rounded-lg h-[560px]" />
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
          <img src="https://i.ibb.co/KDRmtgK/img-2.jpg" className="w-full rounded-lg h-[560px]" />
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
          <img src="https://i.ibb.co/DD5fP4h/img-3.jpg" className="w-full rounded-lg h-[560px]" />
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
          <img src="https://i.ibb.co/WVvyM1Z/img-4.jpg" className="w-full rounded-lg h-[560px]" />
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
          <img src="https://i.ibb.co/wCC9Bsj/img-5.jpg" className="w-full rounded-lg h-[560px]" />
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
    </div>
  );
};

export default Home;
