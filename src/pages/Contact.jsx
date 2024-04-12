import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
});
import "animate.css";

const Contact = () => {
  const [name, setName] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("my_modal_5").showModal();
    const name = e.target.name.value;
    setName(name);
  };
  return (
    <div data-aos="fade-up">
      <Helmet>
        <title>Living-Link | Contact</title>
      </Helmet>
      <div className="grid my-10 grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-[#c5c3c3] dark:text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="animate__animated animate__fadeInDown text-4xl text-black font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="animate__animated animate__fadeInUp animate__delay-.5s text-[#111]">
              Want to know more info or support from us? <br /> Don't Hesitate
              to Contact.
            </div>
          </div>
          <img
            src="https://mambaui.com/assets/svg/doodle.svg"
            alt=""
            className="animate__animated animate__bounceIn animate__delay-.8s p-6 h-52 md:h-64"
          />
        </div>
        <form data-aos="zoom-in" onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded dark:bg-gray-100"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded dark:bg-gray-100"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 cursor-pointer text-sm font-bold tracking-wide uppercase rounded dark:bg-green-500 hover:bg-black transition-all duration-500 dark:text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Hello {name && name}!</h3>
          <p className="py-4">
            We will Notify you as soon as possible. Thanks For being connected.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to={"/"}>
                <button className="bg-green-500 font-semibold text-white cursor-pointer py-3 px-4 rounded-md hover:bg-black">
                  Go Home
                </button>
              </Link>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Contact;
