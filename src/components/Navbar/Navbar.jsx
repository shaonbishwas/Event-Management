import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.error(error);
      });
  };
  const links = (
    <>
      <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active lg:mt-2 underline text-red-700" : "lg:mt-2 "
  } to="/">
        Home
      </NavLink>
      <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active lg:ml-5 mt-2 underline text-red-700" : "lg:ml-5 mt-2"
  } to='/projects'>Projects</NavLink>
      <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active lg:ml-5 mt-2 underline text-red-700" : "lg:ml-5 mt-2 "
  } to='/contact'>Contact Us</NavLink>
    </>
  );

  return (
    <div className="navbar bg-white top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        {user ? (
          <div className="flex gap-2 h-12 items-center">
            <div className="h-full">
              {
                user.photoURL ? <img className="h-full rounded-full" src={user.photoURL} alt="" /> : <FaCircleUser className="h-full rounded-full text-4xl"></FaCircleUser>
              }
            </div>
            <div className="text-sm">
              <p>{user.displayName || 'User Name'}</p>
              <p>{user.email}</p>
            </div>
          </div>
        ) : (
          <div className="flex gap-2 h-12 items-center">
            <div className="h-full">
              <FaCircleUser className="h-full rounded-full text-4xl"></FaCircleUser>
            </div>
            <div className="text-sm">
              <p>Guest User</p>
            </div>
          </div>
        )}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link className="btn" onClick={handleSignOut}>
            Sign Out
          </Link>
        ) : (
          <Link className="btn" to="/login">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
