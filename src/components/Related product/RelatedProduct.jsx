import { FaShoppingCart } from "react-icons/fa";

const RelatedProduct = ({item}) => {
    console.log(item);
    const {name, image, price,description}= item;
  return (
    <div className="mt-10">
      <div className="card lg:w-60 rounded-none image-full lg:mb-32">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <p>{description.slice(0,100)}...</p>
          <div className="card-actions">
            <button className="btn btn-sm bg-[#689f38] hover:bg-[#6db82d] border-0 text-white">add to cart <FaShoppingCart/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
