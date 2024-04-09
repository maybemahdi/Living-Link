import img1 from "../assets/img_1.jpg";
import img2 from "../assets/img_2.jpg";
import img3 from "../assets/img_3.jpg";
import img4 from "../assets/img_4.jpg";
import img5 from "../assets/img_5.jpg";

const Home = () => {
  return (
    <div>
      <div className="carousel w-full my-5 rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full h-[560px]" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="flex absolute flex-col space-y-6 justify-center my-36 items-center text-white">
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
            <button className="rounded px-5 font-semibold cursor-pointer py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Get Started</span>
            </button>
          </div>
          {/* Dark overlay */}
          <div className="absolute flex justify-between left-5 right-5 top-1/2 transform -translate-y-1/2">
            <a
              href="#slide4"
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
          <img src={img2} className="w-full h-[560px]" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="flex absolute flex-col space-y-6 justify-center my-36 items-center text-white">
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
            <button className="rounded px-5 font-semibold cursor-pointer py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Get Started</span>
            </button>
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
          <img src={img3} className="w-full h-[560px]" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="flex absolute flex-col space-y-6 justify-center my-36 items-center text-white">
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
            <button className="rounded px-5 font-semibold cursor-pointer py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Get Started</span>
            </button>
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
          <img src={img4} className="w-full h-[560px]" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="flex absolute flex-col space-y-6 justify-center my-36 items-center text-white">
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
            <button className="rounded px-5 font-semibold cursor-pointer py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Get Started</span>
            </button>
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
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full h-[560px]" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="flex absolute flex-col space-y-6 justify-center my-36 items-center text-white">
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
            <button className="rounded px-5 font-semibold cursor-pointer py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Get Started</span>
            </button>
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
      </div>
    </div>
  );
};

export default Home;
