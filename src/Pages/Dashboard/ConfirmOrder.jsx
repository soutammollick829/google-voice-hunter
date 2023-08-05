import { FaAngleRight, FaBullhorn, FaTruck } from "react-icons/fa";
import useCart from "../../Hooks/UseCarts";

import paymentLogo1 from '../../assets/Payment/1d94dc60f621ba75939151a28233db9b.webp';
import paymentLogo2 from '../../assets/Payment/307737508_468589261952791_4326392600231191200_n.png';
import paymentLogo3 from '../../assets/Payment/tether-usdt-vpn-trustzone.png';
import { useForm } from "react-hook-form";

const ConfirmOrder = () => {
    const [carts] = useCart();
    const total = carts.reduce((sum, item) => item.price + sum, 0);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data);

  return (
    <div className="mb-20">
      <h2 className="inline-flex items-center lg:text-2xl font-bold ml-5 lg:ml-16 mt-10">
        <span className="text-slate-300">SHOPPING CART </span><FaAngleRight />{" "}
        <span className="text-slate-400">CHECKOUT DETAILS </span>
        <FaAngleRight /> <span>ORDER COMPLETE</span>
      </h2>
      <div className="flex justify-evenly mt-20 mx-4">
        <div className="w-full">
            
            <div className="hero min-h-screen">
      <div className="flex-col">
        <div className="text-center lg:text-left">
        </div>
        <div className="flex-shrink-0 w-[500px] border-2 bg-base-100 mb-20 p-2 border-[#689f38]">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h2 className="text-2xl underline text-[#00796B]">BILLING DETAILS</h2>
            <div className="flex gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First name</span>
                </label>
                <input
                  type="text"
                  {...register("firstName", { required: true })}
                  placeholder="First name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-48">
                <label className="label">
                  <span className="label-text">Last name</span>
                </label>
                <input
                  type="text"
                  {...register("last name", { required: true })}
                  placeholder="Last name"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Town / City</span>
                </label>
                <input
                  type="text"
                  {...register("City", { required: true })}
                  placeholder="Your City"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-48">
                <label className="label">
                  <span className="label-text">ZIP Code</span>
                </label>
                <input
                  type="number"
                  {...register("ZIPCode")}
                  placeholder="ZIP Code"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.exampleRequired && <span>Email address is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone number</span>
              </label>
              <input
                type="number"
                {...register("number", { required: true, minLength: 15 })}
                placeholder="phone number"
                className="input input-bordered"
              />
            </div>
            <label className="label">
                <span className="label-text">Order notes (optional)</span>
              </label>
            <textarea placeholder="Note about your order..." className="textarea textarea-bordered textarea-sm w-full"></textarea>
          </form>
        </div>
      </div>
    </div>
        </div>
        <div className="w-1/2 border-2 h-[608px] pl-4 space-y-5 border-[#689f38]">
            <h1 className="text-2xl uppercase underline text-[#00796B] mt-2">your order</h1>
            <h2 className="font-semibold text-[#689f38]">Total products : {carts.length}</h2>
            <h2 className="font-semibold text-[#689f38]">Subtotal Cost : ${total}</h2>
            <h2 className="font-semibold text-[#689f38] inline-flex items-center gap-3">Shipping : Free shipping <FaBullhorn/></h2>
            <hr />
            <h2 className="font-bold text-[#689f38]">Total cost : ${total}</h2>
            <hr />
            <h2 className="font-semibold">USDT,BTC,Binance Pay</h2>
            <div className="flex lg:flex-none gap-5">
          <img className="w-10 rounded-full" src={paymentLogo1} alt="Logo" />
          <img className="w-10" src={paymentLogo2} alt="Logo" />
          <img className="w-10" src={paymentLogo3} alt="Logo" />
        </div>
        <p>Crypto payment by ABC Crypto Checkout (Payerurl)</p>
        <button className="btn bg-[#689f38] hover:bg-[#6db82d] border-0 text-white">proceed to payurl <FaTruck className="text-xl text-yellow-500"/></button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
