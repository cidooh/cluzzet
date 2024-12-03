import Signupcontent from "../components/Signupcontent"
import Signupimage from "../components/Signupimage"

function Signup(){

  

    return(
        <div className="flex justify-between container mx-auto">
<div>
    <Signupcontent/>
</div>

<div>
    <Signupimage/>
</div>

</div>
    )
}
export default Signup