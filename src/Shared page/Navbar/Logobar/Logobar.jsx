import logo from "../../../assets/Logo/Google_Voice_icon_(2018-2020).svg.png";
import { FaFacebook, FaRegEnvelope, FaShoppingBasket, FaSkype, FaWhatsappSquare} from 'react-icons/fa';
const Logobar = () => {
  return (
    <div className="lg:flex justify-around items-center mt-5 space-y-5">
      <div className="flex items-center gap-3 ml-10 lg:ml-0">
        <img className="w-16" src={logo} alt="logo" />
        <h2 className="text-4xl font-bold text-[#00796B]">
          Google voice <br /> <span className="text-lg uppercase ml-16 text-[#00796B]">H u n t e r</span>
        </h2>
      </div>
      <div className="lg:flex gap-6 ml-28 lg:ml-0 space-y-5 lg:space-y-0">
        <div>
            <h2 className="flex gap-2 items-center"><FaWhatsappSquare className="text-2xl text-green-600"/> +8801911666960</h2>
        </div>
        <div>
            <h2 className="flex gap-2 items-center "><FaRegEnvelope className="text-2xl text-red-400"/> rajumandal@gmail.com</h2>
        </div>
        <div className="inline-flex gap-3 text-2xl">
            <FaFacebook className="text-sky-400"/> <FaSkype className="text-sky-500"/>
        </div>
      </div>
      <div className="relative ml-24 lg:ml-0">
        <button className="btn rounded-none"><FaShoppingBasket className="text-[#00796B] text-xl"/> My cart</button>
        <div className="badge bg-[#00796B] absolute -top-2 right-44 lg:-right-1 text-white font-bold">+99</div>
      </div>
    </div>
  );
};

export default Logobar;
