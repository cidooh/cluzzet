import Featuredcol from "./Featuredcol"

function Featured({cart,setCart}){
    
    return(
        <div className="flex gap-12 container mx-auto mt-10">
<Featuredcol cart={cart} setCart={setCart} img="src/assets/images/leather-jacket.png" name="Brown Leather Jacket" price={2200} alt="jacket" />
<Featuredcol  cart={cart} setCart={setCart} img="src/assets/images/sweatshirts.png" name="Round Neck Sweatshirts" price={2000} alt="sweatshirts" />
<Featuredcol  cart={cart} setCart={setCart} img="src/assets/images/pallazo.png" name="Pleated Pallazo Trousers" price={1800} alt="pallazo" />
<Featuredcol  cart={cart} setCart={setCart} img="src/assets/images/denim.png" name="Brown M-22 Denim Jacket Jacket" price={2250} alt="denim jacket" />
        </div>
    )
}
export default Featured
