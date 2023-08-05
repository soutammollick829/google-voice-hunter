
import { FaAngleRight, FaMoneyBillAlt} from 'react-icons/fa';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import paymentImg1 from '../../../assets/Payment/307737508_468589261952791_4326392600231191200_n.png';
import paymentImg2 from '../../../assets/Payment/1d94dc60f621ba75939151a28233db9b.webp';
import paymentImg3 from '../../../assets/Payment/tether-usdt-vpn-trustzone.png';
import paymentImg4 from '../../../assets/Payment/money-7578738_1280.webp';
import useCart from '../../../Hooks/UseCarts';

export default function PaymentInputs() {
    const [carts] = useCart();
    const total = carts.reduce((sum, item) => item.price + sum, 0);
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();

  return (
    <div className='mb-10'>
        <h2 className="inline-flex items-center lg:text-2xl font-bold ml-5 lg:ml-16 mt-10">
        SHOPPING CART <FaAngleRight />{" "}
        <span className="text-slate-400">CHECKOUT DETAILS </span>
        <FaAngleRight /> <span className="text-slate-300">ORDER COMPLETE</span>
      </h2>
        <img className='w-48 mx-auto' src={paymentImg4} alt="img" />
        <div className='mx-auto w-80 mb-10'>
            <div className='flex justify-evenly mb-2 text-[#689f38]'>
            <h2>Total products : {carts?.length}</h2>
            <h2>Total price :${total}</h2>
            </div>
        <PaymentInputsWrapper {...wrapperProps}>
      <svg {...getCardImageProps({ images })} />
      <input {...getCardNumberProps()} />
      <input {...getExpiryDateProps()} />
      <input {...getCVCProps()} />
    </PaymentInputsWrapper>
    <button className='btn btn-sm w-60 ml-12 mt-5 bg-warning'>pay <FaMoneyBillAlt className='text-xl'/></button>
    <div className="divider mt-10">OR</div>
    <div className="flex lg:flex-none justify-center gap-6 mt-10">
            <img className="w-24" src={paymentImg1} alt="Logo" />
            <img className="w-24 rounded-full" src={paymentImg2} alt="Logo" />
            <img className="w-24" src={paymentImg3} alt="Logo" />
          </div>
    </div>
    <div className='w-full text-center text-red-400 font-bold'>
    <p>[ Please contact directly before making payment +8801611975125 ]</p>
    </div>
    </div>
  );
}