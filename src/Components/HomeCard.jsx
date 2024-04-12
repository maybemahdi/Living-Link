/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
});
const HomeCard = ({ singleEstate }) => {
  const { id, segment_name, estate_title, image, price, status, facilities } =
    singleEstate;
  return (
    <div
      data-aos="zoom-in"
      className="w-full mx-auto bg-white shadow-lg overflow-hidden rounded-lg"
    >
      <img
        className="w-full rounded-t-lg h-48 object-cover object-center"
        src={image}
        alt="estate_image"
      />
      <div className="p-6 animate__animated animate__fadeInUp">
        <h2 className="text-xl font-semibold text-gray-800 truncate">
          {estate_title}
        </h2>
        <span className="font-semibold text-green-500">{segment_name}</span>
        {/* <p className="text-gray-600 mt-2 text-sm">{description}</p> */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-700 font-semibold">Price: {price}</p>
          <p className="font-semibold text-red-500">Status: {status}</p>
        </div>
        {/* <div className="flex flex-col first-letter:justify-between mt-2">
          <p className="text-gray-700">Area: {area}</p>
          <p className="text-gray-700 h-10">Location: {location}</p>
        </div> */}
        <div className="flex flex-col mt-4 items-start justify-center">
          <div>
            <p className="text-gray-600 flex flex-col font-semibold text-lg">
              Facilities:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              {facilities.map((singleFacilities, idx) => (
                <li key={idx} className="list-inside list-disc">
                  {singleFacilities}
                </li>
              ))}
            </ul>
          </div>
          {/* <div>
            <p className="text-gray-600 flex flex-col font-semibold text-lg">
              Extra Benifits:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              {other_information.map((single, idx) => (
                <li key={idx} className="list-inside list-disc">
                  {single}
                </li>
              ))}
            </ul>
          </div> */}
        </div>
        <div className="mt-4">
          <Link
            to={`property-details/${id}`}
            className="bg-green-500 no-underline cursor-pointer transition-all duration-300 text-white py-2 px-4 rounded hover:bg-black"
          >
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
