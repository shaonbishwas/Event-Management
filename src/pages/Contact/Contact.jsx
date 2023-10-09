import Navbar from "../../components/Navbar/Navbar";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa6";
import Footer from "../../components/Footer/Footer";


const Contact = () => {
    return (
        <div className="min-h-screen">
            <Navbar></Navbar>
            <div className="flex w-4/5 justify-evenly mx-auto items-center min-h-screen">
                <div>
                    <h1 className="text-6xl font-bold mb-4">GET IN TOUCH</h1>
                    <p className="text-3xl mb-10">Drop us a message for <br /> your future project</p>
                    <p className="flex items-center gap-1 my-1"><AiFillInstagram></AiFillInstagram> <span>ig_NeonOrganizer</span></p>
                    <p className="flex items-center gap-1 my-1"><AiFillYoutube></AiFillYoutube><span>Neon Events</span></p>
                    <p className="flex items-center gap-1 my-1"><FaDiscord></FaDiscord> <span>Event Management Neon</span></p>
                    <p className="flex items-center gap-1 my-1"><AiFillLinkedin></AiFillLinkedin> <span>Neon Events Organizer</span></p>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                    <input className="px-3 py-2 w-[60%] mx-auto" type="text" placeholder="Full Name"/>
                    <input className="px-3 py-2 w-[60%] mx-auto" type="email" name="" placeholder="Email" id="" />
                    <input className="px-3 py-2 w-[60%] mx-auto" type="number" name="" placeholder="Phone Number" id="" />
                    <textarea className="px-3 py-2 w-[60%] mx-auto h-32" name="" placeholder="Message" id="" cols="30" rows="10"></textarea>
                    <input type="Submit" className="bg-black text-white px-10 py-3 rounded-full hover:border-blue-700 hover:border  mx-auto" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;