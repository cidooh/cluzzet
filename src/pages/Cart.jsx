import Namecart from "../components/Namecart";
import Cartitem from "../components/Cartitem";
import Summary from "../components/Summary";
import { useState, useEffect } from "react";
import { BsFillCartXFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {
  const [cartCopy, setCartCopy] = useState([]);

  useEffect(() => {
    const copy = [...cart];
    setCartCopy(copy);
  }, []);
  return (
    <div className="flex justify-between">
      <div>
        {cart && cart.length === 0 ? (
          <div className=" ml-[900px] mt-20">
            <div className="ml-20 ">
            < BsFillCartXFill />
            </div>
            <p className=" text-3xl font-bold">The Cart is Empty</p>
           <Link to="/shop"> <button className="bg-[#45C9A1] text-white rounded-lg p-3 ml-16 hover:bg-black">
              Shop Now
            </button></Link>
          </div>
        ) : (
          <div className="flex justify-between">
            <div>
            <Namecart />
            {cart &&
              cart.map((item) => {
                return (
                  <Cartitem
                    name={item.name}
                    img={item.img}
                    Size={item.size}
                    price={item.price}
                    cartCopy={cartCopy}
                    setCartCopy={setCartCopy}
                  />
                );
              })}
              </div>

            <div>
              <Summary cartCopy={cartCopy} setCartCopy={setCartCopy} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Cart;
