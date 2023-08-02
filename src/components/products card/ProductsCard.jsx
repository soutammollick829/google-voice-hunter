import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  console.log(product);
  const { _id, name, image, price, details } = product;
  const [scale, setScale] = useState(1.1);
  return (
    <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
      <div className="scale-no-tilt">
      <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className="w-[600px] h-[300px]" src={image} alt="Album"/></figure>
  <div className="card-body ">
    <h2 className="card-title text-[#00796B]">{name}</h2>
    <p>{details?.slice(0,50)}...</p>
    <p className="font-bold text-[#689f38]">Price :${price}</p>
    <div className="card-actions">
      <Link to="/voice"><button className="btn btn-sm">more info</button></Link>
    </div>
  </div>
</div>
      </div>
    </Tilt>
  );
};

export default ProductsCard;
