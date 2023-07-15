import { Outlet } from "react-router-dom";
import Navbar from "../Shared page/Navbar/Navbar";
import Logobar from "../Shared page/Navbar/Logobar/Logobar";
import Footer from "../Shared page/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Logobar/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;