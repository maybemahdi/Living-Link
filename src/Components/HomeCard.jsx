import { Link } from "react-router-dom";

const HomeCard = ({ singleEstate }) => {
  const {
    id,
    segment_name,
    estate_title,
    image,
    description,
    price,
    status,
    area,
    location,
    facilities,
    other_information,
  } = singleEstate;
  return (
    <div className="mx-auto w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover object-center"
        src={image}
        alt="estate_image"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 truncate">
          {estate_title}
        </h2>
        <span className="font-semibold text-green-500">{segment_name}</span>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-700 font-semibold">Price: {price}</p>
          <p className="text-gray-700 font-semibold text-red-500">Status: {status}</p>
        </div>
        <div className="flex flex-col justify-between mt-2">
          <p className="text-gray-700">Area: {area}</p>
          <p className="text-gray-700">Location: {location}</p>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 font-semibold text-lg">Facilities:</p>
          <ul className="list-disc list-inside text-gray-700">
            {facilities.map((singleFacilities, idx) => (
              <li className="list-inside list-disc" key={idx}>{singleFacilities}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <Link to={`property-details/${id}`} className="bg-green-500 no-underline cursor-pointer transition-all duration-300 text-white py-2 px-4 rounded hover:bg-black">
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
