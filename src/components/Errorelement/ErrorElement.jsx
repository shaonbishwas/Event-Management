import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="">
      <p className="text-8xl text-center mb-4 font-semibold">Opps</p>
      <p className="text-2xl text-center">Please check your internet Connection</p>
      <p className="text-center font-semibold">Or</p>
      <p className="text-3xl text-center">Please check the path name carefully</p>
      <p className="text-4xl text-center">Learn more about the error in google</p>
      <p className="text-center text-6xl mt-2 font-extrabold">{error.status || error.message}</p>
      </div>
    </div>
  );
};

export default ErrorElement;
