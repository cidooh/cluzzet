import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import {Link} from "react-router-dom"

function Nav({cart,setCart}) {
  return (
    <>
      <div>
        <nav>
          <div className="container mx-auto flex justify-between">
            <div className="flex gap-9">
            <Link to="/"> <img src="./src/assets/images/logo.svg" alt="home logo" /> </Link>
              <ul className="hidden lg:flex gap-20 pt-7">
              <Link to="/"> <li>Home</li> </Link>
                <Link to="/about"> <li>About Us</li> </Link>
                <Link to="/shop"> <li>Shop</li> </Link>
              </ul>
            </div>

            <div className="flex gap-10 pt-8">

<div className="flex ">
              <div>
            <Link to="/cart"> <IoCartOutline className="w-[20px]" /> </Link>
              </div>
              <div className="bg-[#45C9A1] w-[19px] h-[19px] rounded-full -mt-4">
                <p className="text-center">{cart && cart.length}</p>
                </div>
                </div>
           <Link to="/signup"> <p>Sign up</p> </Link>
           <Link to="/login"> <button className="rounded-xl ">Login</button></Link>
              <FaBars className="lg:hidden" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Nav;
