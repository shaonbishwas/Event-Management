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
    <div className="">
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <div id="banner" className="h-[500px]"></div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  w-4/5 mx-auto  lg:my-10">
        {events.map((event) => (
          <Event key={event.id} event={event}></Event>
        ))}
      </div>
      <OwnEvent></OwnEvent>
      <div className="text-center my-5 text-4xl font-bold">
        <h1>Our Location</h1>
      </div>
      <SimpleMap></SimpleMap>
      <Footer></Footer>
    </div>
  );
};

export default Home;
