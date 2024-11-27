import Loginimage from "./Loginimage"
import Logincontent from "./Logincontent"

function Loginhero(){
    return(
        <div className="flex justify-between container mx-auto">
        <div>
        <Loginimage/>
        </div>
        <div>
        <Logincontent/>
        </div>
        </div>
    )
}
export default Loginhero