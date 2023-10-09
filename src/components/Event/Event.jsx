import { Tilt } from "react-tilt";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Event.css";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Event = ({ event }) => {
  const { id, name, banner, description } = event;
  return (
    <Tilt
      options={defaultOptions}
      className="textBody bg-transparent card w-80 bg-base-100 shadow-xl mx-auto my-10"
    >
      <figure className=" h-44">
        <img src={banner} alt="Shoes" className="h-full w-full" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <p>{description.slice(0, 100)}....</p>
        <div className="card-actions justify-end w-full">
          <Link
            to={`/eventDetails/${id}`}
            className=" text-center py-2 rounded-full text-white cardBtn w-[50%] hover:bg-black "
          >
            Details
          </Link>
        </div>
      </div>
    </Tilt>
  );
};
Event.propTypes = {
  event: PropTypes.object,
};
export default Event;
