import { useContext } from "react";
import { FaCheckCircle, FaFacebook, FaHome, FaInstagram, FaRegPaperPlane, FaShoppingBasket, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useCart from "../Hooks/UseCarts";

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const [carts] = useCart()
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content justify-center">
        {/* Page content here */}
        <Outlet/>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu space-y-4 p-4 w-52 h-full bg-base-300 text-base-content">
          {/* Sidebar content here */}
          <li className="font-bold text-[#689f38]">
            <Link to='/'><FaHome/> Home</Link>
          </li>
          <li className="font-bold text-[#689f38]">
            <Link to='/dashboard/mycart'><FaShoppingBasket/> My Cart</Link>
            {
          user && <div className=" absolute -top-2 lg:right-1 font-bold px-2">
          +{carts?.length || 0}
        </div>
        }
          </li>
          <li className="font-bold text-[#689f38]">
            <Link to="order"><FaCheckCircle/> Confirm order</Link>
          </li>
          <li className="font-bold text-[#689f38]">
            <Link to="payment"><FaWallet/> Payment</Link>
          </li>
        <div className="divider">OR</div>
        <div className="mt-5 ml-3 space-y-5 text-4xl">
          <div className="tooltip tooltip-right tooltip-open" data-tip="Facebook">
          <a href="https://www.facebook.com/profile.php?id=100029163254747&mibextid=ZbWKwL" target="blank"><FaFacebook className="text-blue-600" /></a>
          </div>
          <br />
          <div className="tooltip tooltip-right tooltip-open" data-tip="Telegram">
          <a href="https://t.me/GoogleVoiceHunter" target="blank"><FaRegPaperPlane className="text-cyan-500" /></a>
          </div>
          <br />
          <div className="tooltip tooltip-right tooltip-open" data-tip="Instagram">
          <a href="https://instagram.com/nguraju?igshid=ZDc4ODBmNjlmNQ=="><FaInstagram className="text-red-800" target="blank"/></a>
          </div>
          <h4 className="text-lg text-[#689f38]">+8801611975125</h4>
          <h4 className="text-sm font-semibold text-[#689f38]">rajuofficial247@gmail.com</h4>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
