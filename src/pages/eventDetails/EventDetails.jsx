import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { FaLocationDot } from "react-icons/fa6";
import { BiTime } from "react-icons/bi";
import { ToastContainer } from "react-toastify";

const EventDetails = () => {
  const datas = useLoaderData();
  const param = useParams();
  const {
    name,
    banner,
    description,
    event_price,
    location,
    organizing_time,
    participants_amount,
  } = datas.find((d) => d.id === param.id);
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <div
        className="w-4/5 mx-auto flex gap-5 mt-10"
        style={{ backdropFilter: `blur(20px)`, height: `calc(100vh - 200px)` }}
      >
        <div className="w-[50%] flex items-center">
          <img src={banner} alt="" />
        </div>
        <div className="w-[50%] flex flex-col justify-center ">
          <h1 className="text-6xl font-bold">{name}</h1>
          <p className="my-3">{description}</p>
          <p className="flex items-center mb-1"><FaLocationDot className="mr-1"></FaLocationDot>{location}</p>
          <p className="flex items-center gap-1 mb-1"><BiTime></BiTime>{organizing_time}</p>
          <p className="my-3">
            <span className="bg-blue-400 py-2 px-4 mr-1 rounded-s-lg ">
              Event Fee
            </span>
            <span className="bg-gray-400 p-2 rounded-e-lg">{event_price}</span>
          </p>
          <p className="my-3">
            <span className="bg-blue-400 p-2 mr-1 rounded-s-lg ">
              Acpected Participants
            </span>
            <span className="bg-gray-400 p-2 rounded-e-lg">
              {participants_amount}
            </span>
          </p>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default EventDetails;
