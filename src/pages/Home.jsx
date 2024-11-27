import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import Collection from "../components/Collection";

function Home({cart,setCart}) {

  return (
  <>
<Hero/>
<Categories/>
<Featured cart={cart} setCart={setCart}/>

<Collection/>



  </>
  )
}

export default Home;
