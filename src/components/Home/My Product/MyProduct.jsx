import image from '../../../assets/banner/monetize_bar.png';
const MyProduct = () => {
    return (
        <div className="text-center mt-10">
            <h1 className="text-4xl font-bold text-[#00796B] uppercase">Our Product</h1>
            <img className='h-20 lg:h-28 w-full' src={image} alt="img" />
        </div>
    );
};

export default MyProduct;