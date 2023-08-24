import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../AuthProvider/AuthContext/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthProvider);
  // const user = null;
  return (
    <div className="navbar bg-base-100">
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
            <li className="">
              <Link to="/" className="font-semibold  text-base">
                Home
              </Link>
            </li>
            {user ? (
              <>
                <li className="font-semibold mx-3 text-base">
                  Welcome, {user.name}
                </li>
                <li>
                  <Link onClick={logOut} className="font-semibold text-base">
                    Log Out
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="font-semibold  text-base">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="font-semibold text-base">
                    Registration
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl font-semibold hidden lg:inline-block pt-2"
          >
            Hotels
          </Link>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 mx-3">
          <li className="mx-3">
            <Link to="/" className="font-semibold  text-base">
              Home
            </Link>
          </li>

          {user ? (
            <>
              <li className="font-semibold mx-3 mt-2 text-base">
                Welcome, {user.name}
              </li>
              <li>
                <Link onClick={logOut} className="font-semibold mx-3 text-base">
                  Log Out
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="font-semibold  text-base">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="font-semibold mx-3 text-base">
                  Registration
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end lg:hidden">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl font-semibold"
        >
          Hotels
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
