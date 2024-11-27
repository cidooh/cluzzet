
import Collectionlist from "./Collectionlist"

function Collection(){
    return(
<div className="grid grid-row-3 grid-cols-2 gap-5 p-4">
<Collectionlist className="bg-slate-500 row-start-1 row-end-3 col-start-1 col-end-2" title="Men's Collection" img="src/assets/images/mens.png" subtitle="Casual Collection" shop="Shop Now"/>
<Collectionlist className="bg-[#FFF1F1]  row-start-3 row-end-4 col-start-1 col-end-2" title="Designer Handbads" img="src/assets/images/hbags.png" subtitle="Casual Collection" shop="Shop Now"/>
<Collectionlist className="bg-[#E3F9FB] row-start-1 row-end-2 col-start-2 col-end-3" title="Luxury Watches" img="src/assets/images/watches.png" subtitle="Casual Collection" shop="Shop Now"/>
<Collectionlist className="bg-[#FEDBDB] row-start-2 row-end-4 col-start-2 col-end-3" title="Ladies Collection" img="src/assets/images/ladies.png" subtitle="Casual Collection" shop="Shop Now"/>

</div>
    )
}
export default Collection