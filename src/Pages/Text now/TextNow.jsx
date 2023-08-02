import useProducts from "../../Hooks/useProducts";

import productImage1 from "../../assets/banner/Google-Voice-International-Calling-Feature.jpg";
import productImage2 from "../../assets/product images/1682949272965.png";
import productImage3 from "../../assets/product images/627bd37f8f41d500187ac93b.webp";
import productImage4 from "../../assets/product images/c940f438e5fc087a5cdd65dfe8319174dbf8d34e.webp";
import productImage5 from "../../assets/product images/TextNow-768x432.webp";


import { FaFacebookSquare, FaInstagramSquare, FaRegPaperPlane, FaShoppingBasket } from "react-icons/fa";
import RelatedProduct from "../../components/Related product/RelatedProduct";


const TextNow = () => {
    const [products] = useProducts();
  const voice = products.filter((text) => text.name === "TextNow Messenger ID");
  const relatedProduct = products.filter(product => product.name !== "TextNow Messenger ID");
    return (
        <div>
            <>
      <h1 className="text-center uppercase underline text-2xl mt-10">
        Single product
      </h1>
      <div className="grid lg:grid-cols-3 gap-6 mt-10 mb-10">
        <div>
          <img src={voice[0]?.image} alt="" />
        </div>
        <div>
          <h2 className="text-3xl text-center text-[#00796B]">
            {voice[0]?.name}
          </h2>
          <p className="text-center font-bold text-xl">${voice[0]?.price}</p>
          <p className="font-semibold text-[#689f38]">
            {voice[0]?.description}
          </p>
          <div className="text-center mt-6">
            <h1 className="text-xl font-bold text-red-400">Special note: if you want to buy bulk you have a discount price. for the discount please message our live chat.</h1>
            <button className="btn mt-2 bg-[#689f38] hover:bg-[#6db82d] border-0 text-white mb-2"><FaShoppingBasket className=" text-xl" />add to cart</button><br />
            <div className="inline-flex gap-2 mt-2 text-3xl">
            <a href="https://www.facebook.com/profile.php?id=100029163254747&mibextid=ZbWKwL" target="blank"><FaFacebookSquare className="text-blue-600" /></a>
            <a href="https://t.me/GoogleVoiceHunter" target="blank"><FaRegPaperPlane className="text-cyan-500" /></a>
            <a href="https://instagram.com/nguraju?igshid=ZDc4ODBmNjlmNQ=="><FaInstagramSquare className="text-red-800" target="blank"/></a>
          </div>
          </div>
        </div>
        <div className="space-y-5">
          <div className="lg:flex gap-5 mx-14 lg:mx-0">
            <img
              className="lg:w-28 rounded-lg"
              src={productImage5}
              alt="image"
            />
            <div className="text-base font-bold">
              <h1 className="text-[#00796B] hover:text-[#689f38]">
                Text Now Messenger ID
              </h1>
              <p>$ 1.00</p>
            </div>
          </div>
          <div className="lg:flex gap-5 mx-14 lg:mx-0">
            <img
              className="lg:w-28 rounded-lg"
              src={productImage1}
              alt="image"
            />
            <div className="text-base font-bold">
              <h1 className="text-[#00796B] hover:text-[#689f38]">
                Google voice ID
              </h1>
              <p>$ 5.00</p>
            </div>
          </div>
          <div className="lg:flex gap-5 mx-14 lg:mx-0">
            <img
              className="lg:w-28 rounded-lg"
              src={productImage2}
              alt="image"
            />
            <div className="text-base font-bold">
              <h1 className="text-[#00796B] hover:text-[#689f38]">
                Chat Gpt ID
              </h1>
              <p>$ 2.00</p>
            </div>
          </div>
          <div className="lg:flex gap-5 mx-14 lg:mx-0">
            <img
              className="lg:w-28 rounded-lg"
              src={productImage3}
              alt="image"
            />
            <div className="text-base font-bold">
              <h1 className="text-[#00796B] hover:text-[#689f38]">USA Gmail</h1>
              <p>$ 1.00</p>
            </div>
          </div>
          <div className="lg:flex gap-5 mx-14 lg:mx-0">
            <img
              className=" lg:w-28 rounded-lg"
              src={productImage4}
              alt="image"
            />
            <div className="text-base font-bold">
              <h1 className="text-[#00796B] hover:text-[#689f38]">
                AI marketing tools
              </h1>
              <p>$ 1.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-5 lg:mx-20">
        <h3 className="ml-5 mt-2 text-3xl font-bold text-[#00796B]">Description</h3>
        <div className="lg:flex items-center">
        <p className="text-xl p-5">{voice[0]?.details}</p>
        <img className="lg:w-80 lg:h-[580px]" src={voice[0]?.image} alt="image" />
        </div>
      </div>
      <h1 className="ml-24 mt-20 text-3xl font-bold text-[#00796B]">Related Product</h1>
      <div className="lg:flex justify-center lg:gap-14 mx-10">
        {
            relatedProduct.map(item => <RelatedProduct
            key={item._id}
            item={item}
            ></RelatedProduct>)
        }
      </div>
    </>
        </div>
    );
};

export default TextNow;