import { useContext } from "react";
import { useParams, useLoaderData, Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../Components/Loader";

const PropertyDetails = () => {
  const estates = useLoaderData();
  const {loading} = useContext(AuthContext);
  const { id } = useParams();
  const selected = estates.find((single) => single.id == id);
  const {
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
  } = selected;
  if(loading){
    return <Loader/>;
  }
  return (
    <div>
      <section className="relative dark:bg-gray-100 rounded-md dark:text-gray-800">
        <div className="w-full rounded-md h-full">
          <img
            className="w-full h-[380px] md:h-[570px] rounded-t-md"
            src={image}
            alt=""
          />
        </div>
        <div className="flex flex-col px-4 py-16 md:py-32 md:px-10 lg:px-32">
          <h1 className="text-4xl font-bold leading-[50px] sm:text-5xl">
            {estate_title}
          </h1>
          <span className="font-semibold mt-5 text-xl text-green-500">
            {segment_name}
          </span>
          <p className="mt-4 mb-4 text-lg">{description}</p>
          <div className="flex flex-col justify-between mt-4">
            <p className="text-gray-700 text-xl font-semibold">
              Price: {price}
            </p>
            <p className="font-semibold text-red-500">Status: {status}</p>
          </div>
          <div className="flex flex-col text-xl first-letter:justify-between mt-2">
            <p className="text-gray-700">Area: {area}</p>
            <p className="text-gray-700 h-10">Location: {location}</p>
          </div>
          <div className="flex gap-10 flex-col mt-8 justify-between">
            <div>
              <p className="text-gray-600 flex flex-col font-semibold text-[30px]">
                Facilities:
              </p>
              <ul className="mt-5 text-gray-700">
                {facilities.map((singleFacilities, idx) => (
                  <li key={idx} className="list-disc list-inside">
                    {singleFacilities}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-gray-600 flex flex-col font-semibold text-[30px]">
                Extra Benifits:
              </p>
              <ul className="mt-5 text-gray-700">
                {other_information.map((single, idx) => (
                  <li key={idx} className="list-disc list-inside ">
                    {single}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <Link
              to={"/"}
              className=" bg-green-500 no-underline cursor-pointer transition-all duration-300 text-white py-3 px-4 rounded hover:bg-black"
            >
              Go Back
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetails;
