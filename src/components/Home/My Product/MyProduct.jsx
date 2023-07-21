import { Zoom } from 'react-awesome-reveal';
import image from '../../../assets/banner/monetize_bar.png';
import useProducts from '../../../Hooks/useProducts';
import ProductsCard from '../../products card/ProductsCard';
const MyProduct = () => {
    const [products] = useProducts();

    return (
        <>
        <div className="text-center mt-10">
            <Zoom><h1 className="text-4xl font-bold text-[#00796B] uppercase">Our Product</h1></Zoom>
            <img className='h-20 lg:h-28 w-full' src={image} alt="img" />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-10 lg:mx-20 gap-10 mt-20 mb-32'>
        {
            products.map(product => <ProductsCard
            key={product._id}
            product={product}
            ></ProductsCard>)
        }
        </div>
        </>
    );
};

export default MyProduct;