import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>navbar</div>
      <Outlet/>
    </>
  )
}

export default Layout