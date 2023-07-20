import { FaFacebook, FaRegPaperPlane, FaWhatsappSquare } from "react-icons/fa";
import productImage1 from "../../assets/product images/TextNow-768x432.webp";
import productImage2 from "../../assets/product images/0_aBN1UjXOF07G9Lw1.webp";
import productImage3 from "../../assets/product images/1682949272965.png";
import productImage4 from "../../assets/product images/627bd37f8f41d500187ac93b.webp";

import paymentLogo1 from "../../assets/Payment/1d94dc60f621ba75939151a28233db9b.webp";
import paymentLogo2 from "../../assets/Payment/307737508_468589261952791_4326392600231191200_n.png";
import paymentLogo3 from "../../assets/Payment/tether-usdt-vpn-trustzone.png";

import Logo from "../../assets/Logo/buy-google-voice-accounts.webp";
import qrcode from "../../assets/Logo/362293611_596150325997627_n.jpg";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div className="space-y-2">
          <span className="footer-title">24/7 Live support</span>
          <h3 className="inline-flex items-center text-base font-bold text-[#00796B] hover:text-[#689f38]">
            <FaWhatsappSquare className="text-4xl text-green-600" /> :
            +8801611975125
          </h3>
          <h3 className="text-base font-bold text-[#00796B] hover:text-[#689f38] inline-flex">
            <a href="https://t.me/GoogleVoiceHunter" target="blank">
              <FaRegPaperPlane className="text-cyan-500 text-4xl" />
            </a>
            @GoogleVoiceHunter
          </h3>

          <h3>
            <a href="https://www.facebook.com/profile.php?id=100029163254747&mibextid=ZbWKwL">
              <FaFacebook className="text-4xl text-blue-600" />
            </a>
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
                <h1 className="text-[#00796B] hover:text-[#689f38]">
                  Text Now Messenger ID
                </h1>
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
                <h1 className="text-[#00796B] hover:text-[#689f38]">
                  Google voice ID
                </h1>
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
                <h1 className="text-[#00796B] hover:text-[#689f38]">
                  Chat Gpt ID
                </h1>
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
                <h1 className="text-[#00796B] hover:text-[#689f38]">
                  USA Gmail
                </h1>
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
      <footer className="footer px-10 py-4 border-t bg-[#689f38] text-base-content border-base-300 grid-flow-col">
        <div className="items-center grid-flow-col">
          <img className="w-28 rounded-full" src={Logo} alt="logo" />
          <p>
            Copyright 2023 © Google Voice Hunter <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <img className="w-16 rounded-lg" src={qrcode} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
