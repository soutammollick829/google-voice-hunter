import { Outlet } from "react-router-dom";
import Navbar from "../Shared page/Navbar/Navbar";
import Logobar from "../Shared page/Navbar/Logobar/Logobar";

const Main = () => {
    return (
        <div>
            <Logobar/>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;