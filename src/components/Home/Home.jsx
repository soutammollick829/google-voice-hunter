import MyProduct from "./My Product/MyProduct";
import News from "./News/News";
import Banner from "./banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyProduct></MyProduct>
            <News/>
        </div>
    );
};

export default Home;