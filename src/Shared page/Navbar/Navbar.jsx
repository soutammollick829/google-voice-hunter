import { useContext } from "react";
import { FaCogs, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handelLogOut = () => {
    logOut()
    if(logOut){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Are you sure log out',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }
  return (
    <div className="navbar bg-base-100 space-x-7 lg:mt-10">
      <div>
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
            <li>
              <Link>Home</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex bg-[#689f38]">
        <ul className="menu menu-horizontal px-1 space-x-4 text-white font-bold">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link to='/voice'>Google voice</Link>
          </li>
          <li>
            <Link to="/text">Text Now IDs</Link>
          </li>
          <li>
            <Link to="/gmail">USA Gmail ID</Link>
          </li>
          <li>
            <Link to="/gpt">Chat Gpt</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          {
            user ? <><li onClick={handelLogOut} className="tooltip" data-tip="hello">
            <Link to="/login"><FaCogs className="text-2xl"/>Log-out</Link>
          </li></>:
            <><li className="tooltip" data-tip="hello">
            <Link to="/login"><FaUserCircle className="text-2xl"/>Login</Link>
          </li></>
          }
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
