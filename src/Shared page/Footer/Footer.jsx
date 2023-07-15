import { FaFacebook, FaRegPaperPlane, FaWhatsappSquare } from "react-icons/fa";
import productImage1 from "../../assets/product images/TextNow-768x432.webp";
import productImage2 from "../../assets/product images/0_aBN1UjXOF07G9Lw1.webp";
import productImage3 from "../../assets/product images/1682949272965.png";
import productImage4 from "../../assets/product images/627bd37f8f41d500187ac93b.webp";

import paymentLogo1 from "../../assets/Payment/1d94dc60f621ba75939151a28233db9b.webp";
import paymentLogo2 from "../../assets/Payment/307737508_468589261952791_4326392600231191200_n.png";
import paymentLogo3 from "../../assets/Payment/tether-usdt-vpn-trustzone.png";

import Logo from "../../assets/Logo/buy-google-voice-accounts.webp";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div className="space-y-5">
          <span className="footer-title">24/7 Live support</span>
          <h3 className="text-2xl text-cyan-500">
            <FaRegPaperPlane />
          </h3>
          <h3>
            <FaWhatsappSquare className="text-2xl text-green-600" />
          </h3>
          <h3>
            <FaFacebook className="text-2xl text-blue-600" />
          </h3>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="flex gap-5">
              <img
                className="w-28 rounded-lg"
                src={productImage1}
                alt="image"
              />
              <div className="text-base font-bold">
                <h1 className="text-[#00796B] hover:text-[#689f38]">Text Now Messenger ID</h1>
                <p>$ 1.00</p>
              </div>
            </div>
            <div className="flex gap-5">
              <img
                className="w-28 rounded-lg"
                src={productImage2}
                alt="image"
              />
              <div className="text-base font-bold">
                <h1 className="text-[#00796B] hover:text-[#689f38]">Google voice ID</h1>
                <p>$ 5.00</p>
              </div>
            </div>
            <div className="flex gap-5">
              <img
                className="w-28 rounded-lg"
                src={productImage3}
                alt="image"
              />
              <div className="text-base font-bold">
                <h1 className="text-[#00796B] hover:text-[#689f38]">Chat Gpt ID</h1>
                <p>$ 2.00</p>
              </div>
            </div>
            <div className="flex gap-5">
              <img
                className="w-28 rounded-lg"
                src={productImage4}
                alt="image"
              />
              <div className="text-base font-bold">
                <h1 className="text-[#00796B] hover:text-[#689f38]">USA Gmail</h1>
                <p>$ 1.00</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="footer-title">Payment Method</span>
          <div className="flex lg:flex-none">
            <img className="w-14" src={paymentLogo1} alt="Logo" />
            <img className="w-14" src={paymentLogo2} alt="Logo" />
            <img className="w-14" src={paymentLogo3} alt="Logo" />
          </div>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-[#689f38] text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <img className="w-28 rounded-full" src={Logo} alt="logo" />
          <p>
            Copyright 2023 © Google Voice Hunter <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
