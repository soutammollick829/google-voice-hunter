import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import About from "../Pages/About";
import Contact from "../Pages/contact us/Contact";
import Login from "../Pages/Login page/Login";
import Register from "../Pages/Register/Register";
import GoogleVoice from "../Pages/Google Voice/GoogleVoice";
import TextNow from "../Pages/Text now/TextNow";
import UsaGmail from "../Pages/Usa gmail/UsaGmail";
import ChatGpt from "../Pages/Chat GPT/ChatGpt";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/myCart/MyCart";
import PaymentInputs from "../Pages/Dashboard/myCart/Payment";
import ConfirmOrder from "../Pages/Dashboard/ConfirmOrder";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/voice",
          element:<GoogleVoice/>
        },
        {
          path:"/text",
          element:<TextNow/>
        },
        {
          path:"/gmail",
          element:<UsaGmail/>
        },
        {
          path:"/gpt",
          element:<ChatGpt/>
        }
      ]
    },
    {
      path: "dashboard",
      element:<Dashboard/>,
      children:[
        {
          path:"mycart",
          element:<MyCart/>
        },
        {
          path:"payment",
          element:<PaymentInputs/>
        },
        {
          path:"order",
          element:<ConfirmOrder/>
        }
      ]
    }
  ]);

  export default router;