import { FaAngleRight, FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/UseCarts";

import paymentLogo1 from "../../../assets/Payment/1d94dc60f621ba75939151a28233db9b.webp";
import paymentLogo2 from "../../../assets/Payment/307737508_468589261952791_4326392600231191200_n.png";
import paymentLogo3 from "../../../assets/Payment/tether-usdt-vpn-trustzone.png";
import Swal from "sweetalert2";

const MyCart = () => {
  const [carts, refetch] = useCart();
  const total = carts.reduce((sum, item) => item.price + sum, 0);

  const handelDelate = item =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://google-voice-hunter-server.vercel.app/carts/${item._id}`, {
            method:'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
            if(data.deletedCount >0 ){
                refetch()
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            }
          })

        }
      })
  }
  return (
    <div>
      <h2 className="inline-flex items-center lg:text-2xl font-bold ml-5 lg:ml-16 mt-10">
        SHOPPING CART <FaAngleRight />{" "}
        <span className="text-slate-400">CHECKOUT DETAILS </span>
        <FaAngleRight /> <span className="text-slate-300">ORDER COMPLETE</span>
      </h2>
      <div className="ml-5 lg:flex justify-around mt-10 items-center">
        <h3 className="text-xl font-bold font-mono text-[#00796B]">
          Total items: {carts?.length}
        </h3>
        <h3 className="text-xl font-bold font-mono text-[#00796B]">
          Total price: ${total}
        </h3>

        <div className="flex lg:flex-none">
          <img className="w-12 rounded-full" src={paymentLogo1} alt="Logo" />
          <img className="w-12" src={paymentLogo2} alt="Logo" />
          <img className="w-12" src={paymentLogo3} alt="Logo" />
        </div>
      </div>
      <div className="">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Image & Product Name</th>
        <th>User email</th>
        <th>$ Price</th>
        <th>Delate</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        carts.map((item , index)=> <tr key={item._id}>
            <th>{index + 1}</th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-14 h-12">
                    <img src={item.image} />
                  </div>
                </div>
                <div>
                  <h2 className="font-bold text-[#689f38]">{item.name}</h2>
                </div>
              </div>
            </td>
            <td>Email: {item.email} 
            <br />
            <span className="bg-yellow-200">Order id : {item._id}</span>
            </td>
            <td>${item.price}</td>
            <th>
              <button onClick={() => handelDelate(item)} className="btn btn-circle "><FaTrashAlt className="text-red-400 text-xl"/></button>
            </th>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyCart;
