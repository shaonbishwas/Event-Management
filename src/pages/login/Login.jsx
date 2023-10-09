import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";



const Login = () => {
  const { logIn, logInWithGoogle, setLoading, notify, lerror, setLerror } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    setLerror('')
    logIn(email, password)
      .then(() => {
        notify("Successfully Loged In with email and password")
        navigate(location?.state ? location.state : "/");
      })
      .catch((lerror) => {
        setLerror(lerror.message)
        setLoading(false);
      });
  };
  const handleGoogleLogin = () => {
    setLerror('')
    logInWithGoogle()
      .then(() => {
        notify("Successfully Loged In with Google")
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setLerror(error.message)
        navigate(location?.state ? location.state : "/");
        setLoading(false);
      });
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse w-[30%] ">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 h-full">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <button
                className="btn border border-blue-600 mt-5 mb-1 text-blue-600"
                onClick={handleGoogleLogin}
              >
                Google
              </button>
              <p>
                Dont have account ?{" "}
                <Link to="/register" className="text-blue-700 hover:underline">
                  Register Now
                </Link>
              </p>
              {
                lerror && <p className="text-red-600">{lerror}</p>
              }
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
