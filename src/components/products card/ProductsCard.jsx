import { useContext, useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import UseCarts from "../../Hooks/UseCarts";

const ProductsCard = ({ product }) => {
  const { _id, name, image, price, details } = product;
  const [scale, setScale] = useState(1.1);
  const { user} = useContext(AuthContext);
const [,loading]= UseCarts();

  const handelAddToCart = (product) => {
    console.log(product);
    if (user && user.email) {
      const cartItem = { orderId: _id, name, image, price, email: user?.email };
      fetch(`http://localhost:7700/carts`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            const Toast = Swal.mixin({
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: "success",
              title: "Product add to cart",
            });
            loading
          }
        });
    }
  };
  return (
    <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
      <div className="scale-no-tilt">
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-[600px] h-[300px]" src={image} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-[#00796B]">{name}</h2>
            <p>{details?.slice(0, 50)}...</p>
            <p className="font-bold text-[#689f38]">Price :${price}</p>
            <div className="card-actions">
              <button
                onClick={() => handelAddToCart(product)}
                className="btn btn-sm"
              >
                <FaShoppingBasket className="text-[#00796B]" /> add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default ProductsCard;
