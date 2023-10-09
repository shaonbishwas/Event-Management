import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import { ToastContainer } from "react-toastify";

const Register = () => {
  const {createUser, notify, setError, error, setLoading} = useContext(AuthContext);
  const handleSubmit = e =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const password = form.get('password')
    const email = form.get('email')
    setError('')
    createUser(email, password)
    .then(()=>{
      notify("Successfully Account Created")
    })
    .catch(error => {
        console.error(error)
        setLoading(false)
        setError(error.message)
    })
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse w-[30%] ">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 h-full">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
              <p className="mt-1">
                Already have account ?{" "}
                <Link to="/login" className="text-blue-700 hover:underline">
                  Login Now
                </Link>
              </p>
              {
                error && <p className="text-red-600">{error}</p>
              }
            </form>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default Register;
