import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Event from "../../components/Event/Event";
import "./home.css";
import Footer from "../../components/Footer/Footer";
import OwnEvent from "../../components/OwnEvent/OwnEvent";
import { ToastContainer } from "react-toastify";
import SimpleMap from "../../components/GoogleMap/GoogleMap";

const Home = () => {
  const events = useLoaderData();
  return (
    <div className="relative text-white">
      <ToastContainer></ToastContainer>
      <div className="absolute w-full">
        <Navbar></Navbar>
      </div>

      <div
        id="banner"
        className="relative mx-auto h-[600px]  w-full mb-10 flex lg:flex-row flex-col justify-center items-center"
      >
        <div className=" h-full w-full  flex items-center flex-col justify-center z-40 text-white">
          <h1 className="text-6xl lg:text-8xl font-bold">
            <span id="e" className="">
              E
            </span>
            vent Agency
          </h1>
          <p className="text-2xl font-semibold text-center mt-4">
            We help people to make their events enjoyable with low cost
          </p>
          <button className="mt-5  text-white px-4 py-3 rounded-full button">
            Get a free consultancy
          </button>
        </div>
        <div className="h-full w-full bg-black absolute opacity-60"></div>
      </div>

      {/* <div className="mx-auto h-[600px]  w-full lg:w-4/5 flex lg:flex-row flex-col justify-center items-center">
        <div className=" h-full lg:w-[50%]  flex items-left flex-col justify-center">
          <h1 className="text-6xl font-bold">
            <span id="e" className="">E</span>vent Agency
          </h1>
          <p className="text-2xl font-semibold mt-4">
            We help people to make their events <br /> enjoyable with low cost
          </p>
          <button className="mt-5  text-white lg:w-[40%] py-3 rounded-full button">Get a free consultancy</button>
        </div>
        <div id="banner" className="flex items-center flex-col justify-center h-[70%] w-full lg:w-[35%] lg:rounded-full ">
          
        </div>
      </div> */}
      <div className="text-center text-6xl font-extrabold lg:py-0 py-5">
        <h1 id="services">Our Services</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  w-4/5 mx-auto  lg:my-10">
        {events.map((event) => (
          <Event key={event.id} event={event}></Event>
        ))}
      </div>
      <OwnEvent></OwnEvent>
      <div className="text-center my-10 text-6xl font-bold">
        <h1>Our Location</h1>
      </div>
      <SimpleMap></SimpleMap>
      <Footer></Footer>
    </div>
  );
};

export default Home;
