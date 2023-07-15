import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 space-x-9 lg:mt-10">
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
        <ul className="menu menu-horizontal px-1 space-x-5 mx-10 text-white font-bold">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Google voice</Link>
          </li>
          <li>
            <Link>Text Now IDs</Link>
          </li>
          <li>
            <Link>USA Gmail ID</Link>
          </li>
          <li>
            <Link>Chat Gpt</Link>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
