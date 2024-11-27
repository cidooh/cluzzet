import Clothes1 from "../components/Clothes1"
import Clothes2 from "../components/Clothes2"
import Clothes3 from "../components/Clothes3"
import Clothes4 from "./Clothes4"
import Clothes5 from "./Clothes5"

function Allclothes(){
    return (
        <div className="flex flex-col">
        <div className="flex container mx-auto mt-16">
<Clothes1 name="Blue Rageed Jeans" img="src/assets/shop-images/ragged-jeans.png" price="2,250" />
<Clothes1 name="Brown Leather Jacket" img="src/assets/images/sweatshirts.png" price="2,250"/>
<Clothes1 name="Slim Banquet Dress" img="src/assets/shop-images/slim-banquet-dress.png" price="10,250"/>
<Clothes1 name="Blue Denim Jacket" img="src/assets/shop-images/bomber.png" price="10,250"/>
</div>

<div className="flex container mx-auto mt-16">
<Clothes2 name="Brown Leather Jacket" img="src/assets/images/leather-jacket.png" price="2,250" />
<Clothes2 name="Quartz Men's Watch" img="src/assets/shop-images/quartz-watch.png" price="2,250" />
<Clothes2 name="Women Denim Jeans" img="src/assets/shop-images/denim-jeans.png" price="2,250" />
<Clothes2 name="Brown handbag" img="src/assets/shop-images/brown-handbag.png" price="2,250" />
        </div>

        <div className="flex container mx-auto mt-16">
<Clothes3 name="Unisex Graphic T-shirt" img="src/assets/shop-images/graphic-tshirts.png" price="2,250" />
<Clothes3 name="Black Bomber Jacket" img="src/assets/shop-images/bomber.png" price="2,250" />
<Clothes3 name="Pleated Pallazo Pants" img="src/assets/images/pallazo.png" price="2,250" />
<Clothes3 name="Pure Leather Shoes" img="src/assets/shop-images/leather-shoes.png" price="2,250" />
        </div>

        <div className="flex container mx-auto mt-16">
<Clothes4 name="Purple Serpenti purse" img="src/assets/shop-images/serpenti-forever.png" price="2,250" />
<Clothes4 name="Unisex Airforce Sneakers" img="src/assets/shop-images/unisex.png" price="2,250" />
<Clothes4 name="Blue Cocktail Dress" img="src/assets/shop-images/cocktail.png" price="2,250" />
<Clothes4 name="Off-Shoulder Crop Top" img="src/assets/shop-images/Off-The-Shoulder.png" price="2,250" />
        </div>

        <div className="flex container mx-auto mt-16">
<Clothes5 name="Airsense Pleated Pants" img="src/assets/shop-images/Airsense-pleated.png" price="2,250" />
<Clothes5 name="Classy Smart Watch" img="src/assets/shop-images/smartwatch.png" price="2,250" />
<Clothes5 name="Blue Platform Heels" img="src/assets/shop-images/ZOOSHI-COBALT.png" price="2,250" />
<Clothes5 name="Stripped Knitted Sweater" img="src/assets/shop-images/knitted-sweater.png" price="2,250" />
        </div>



         </div>
          
        
        
    )
}
export default Allclothes