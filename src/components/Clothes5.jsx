function Clothes5(props){
    return(
        <div className="flex flex-col container mx-auto relative">
        <div className="bg-[#F0EFEF] w-[300px] p-10 h-[100%]">
<img src={props.img} alt="Ragged jeans" />
<div className=" font-bold text-white rounded-md absolute inset-1  opacity-0 hover:opacity-100 ml-[180px]">
    <button className="mt-[290px] bg-[#45C9A1] py-[20px] px-[30px] rounded-md ">ADD TO CART</button>
</div>
        </div>

        <div className="flex justify-between font-bold text-xl">
            <div>
            <p>{props.name}</p>
            <p className="text-[#45C9A1]">Ksh {props.price}</p>
            </div>

            <div className="w-6 mr-24">
                <img src="src/assets/images/heart.png" alt="heart" />
            </div>
        </div>
        </div>
    )
}
export default Clothes5