import Category from "../components/Category";
import jacket from "../assets/images/jacket.png";
import handbags from "../assets/images/handbag.png";
import shirts from "../assets/images/tshirt.png";
import dresses from "../assets/images/dress.png";
import jeans from "../assets/images/jeans.png";
import shoes from "../assets/images/shoe.png";
import sweater from "../assets/images/sweater.png";


function Categories() {
  return (
      <div className="container mx-auto">
        <div className=" text-center font-bold text-3xl">
          <h2>Top Categories</h2>
        </div>
        <div className="flex justify-between">
          <Category name="jacket" img="src/assets/images/jacket.png" />
          <Category name="handbags" img="src/assets/images/handbag.png"/>
          <Category name="shirts" img="src/assets/images/tshirt.png"/>
          <Category name="dresses" img="src/assets/images/dress.png"/>
          <Category name="jeans" img="src/assets/images/jeans.png"/>
          <Category name="shoes" img="src/assets/images/shoe.png"/>
          <Category name="sweater" img="src/assets/images/sweater.png"/>
        </div>
      </div>

  );
}
export default Categories;
