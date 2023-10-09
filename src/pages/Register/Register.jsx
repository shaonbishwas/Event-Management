import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import { ToastContainer } from "react-toastify";
import Footer from "../../components/Footer/Footer";
import './register.css'

const Register = () => {
  const { createUser, notify, setRerror, rerror, setLoading } =
    useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const password = form.get("password");
    const email = form.get("email");
    setRerror("");
    if (password.length < 6) {
      setRerror("Password should be 6 character or above");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setRerror("Password should have one capital latter");
      return;
    }
    if (!/[!@#$%^&*()_+{}/:;<>,.?~\\]/.test(password)) {
      setRerror("Password should have one spacial character");
      return;
    }
    createUser(email, password)
      .then(() => {
        notify("Successfully Account Created");
      })
      .catch((error) => {
        setLoading(false);
        setRerror(error.message);
      });
  };
  return (
    <>
      <Navbar></Navbar>
      <ToastContainer></ToastContainer>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse lg:w-[30%] ">
          <div className="registerCart card flex-shrink-0 w-full shadow-2xl bg-base-100 h-full">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="registerCart input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className=" label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="registerCart input input-bordered"
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
                  className="registerCart input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="button py-3 rounded-lg text-white">
                  Register
                </button>
              </div>
              <p className="mt-1">
                Already have account ?{" "}
                <Link to="/login" className="text-blue-700 hover:underline">
                  Login Now
                </Link>
              </p>
              {rerror && <p className="text-red-600">{rerror}</p>}
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Register;
