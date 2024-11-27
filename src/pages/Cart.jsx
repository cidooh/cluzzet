import Namecart from "../components/Namecart";
import Cartitem from "../components/Cartitem";
import Summary from "../components/Summary";
import { useState, useEffect } from "react";


function Cart({ cart, setCart }) {

    const [cartCopy, setCartCopy] = useState([]);

    useEffect(() => {
        const copy = [...cart]
        setCartCopy(copy)
    }, []);
  return (
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
  );
}
export default Cart;
