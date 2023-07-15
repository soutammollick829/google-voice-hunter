import bannerImage from '../../../assets/banner/maxresdefault.jpg';

const Banner = () => {
    return (
        <div className='lg:mt-10 space-y-3'>
            <img src={bannerImage} alt="img" />
        </div>
    );
};

export default Banner;