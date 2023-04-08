import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Header from "./Header.jsx";

import 'react-toastify/dist/ReactToastify.css';


const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <ToastContainer newestOnTop={false} rtl={false} pauseOnFocusLoss/>
    </>
  )
}

export default Layout