import { useLoaderData } from "react-router-dom";
import "./projects.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Project from "./Project";
import { ToastContainer } from "react-toastify";
const Projects = () => {
  const data = useLoaderData();
  return (
    <div id="mainDiv" className="h-full">
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <div className="text-center pt-24 pb-10">
        <h1 id="project" className="text-6xl lg:text-8xl font-bold">
          PROJECTS
        </h1>
        <p className="text-4xl font-bold">We made possible</p>
      </div>
      <div className=" grid lg:grid-cols-2 w-4/5 mx-auto gap-10 my-10">
        {data.map((d, idx) => (
          <Project key={idx} projectData={d}></Project>
        ))}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Projects;
