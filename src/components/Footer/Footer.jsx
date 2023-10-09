import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { SiIndeed } from "react-icons/si";

const Footer = () => {
  return (
    <div className="h-[200px] bg-black flex justify-center items-center flex-col text-white">
      <div className="flex justify-between mb-5 gap-3">
        <div className=" p-4 rounded-full hover:bg-blue-700 hover:text-black border border-blue-700 flex items-center ">
          <AiFillLinkedin></AiFillLinkedin>
        </div>
        <div className=" p-4 rounded-full hover:bg-white hover:text-black border border-white flex items-center ">
          <SiIndeed></SiIndeed>
        </div>
        <div className=" p-4 rounded-full hover:bg-blue-700 hover:text-black border border-blue-700 flex items-center ">
          <BsFacebook></BsFacebook>
        </div>
        <div className=" p-4 rounded-full hover:bg-pink-700  border border-pink-600 flex items-center ">
          <AiFillInstagram></AiFillInstagram>
        </div>

        <div className=" p-4 rounded-full hover:bg-sky-400 hover:text-black border border-sky-500 flex items-center ">
          <AiFillTwitterCircle></AiFillTwitterCircle>
        </div>
      </div>
      <span
        className="lg:w-full lg:text-center w-4/5 mx-auto"
      >
        © 2023 Tech and Gaming event — site made with passion by{" "}
        <a href="#" className="text-blue-600">
          Shaon Bishwas
        </a>
      </span>
    </div>
  );
};

export default Footer;
