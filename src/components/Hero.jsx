import { IoMdSearch } from "react-icons/io";


function Hero(){
    return(
        <>
<div className="flex justify-between mx-auto">
    <div className="p-10">
        <h1 className="text-6xl font-bold ">Choose the look<br/> that suits you best</h1>
        <p>Every day is a fashion show & the world is your runway.<br/>
Clozzet will elevate your wardrobe with the best collections.<br/>
Be exclusive, Be Devine, Be yourself. Explore outfits that will<br/>
make you comfortably beautiful.True style never dies.
</p>
<div className="flex gap-20 pt-11">
<button className="bg-[#45C9A1] text-white font-extrabold rounded-full  w-44 h-16">Shop Now</button>
<button className="text-[#45C9A1] rounded-full font-extrabold w-40 h-16 shadow-[rgba(0,0.1,0,0.25) text-xl shadow-2xl ">About Us</button>
</div>
<form className='w-[500px] relative'>
    <div className="relative">
        <input type="search" placeholder="Search" className="w-full p-4 rounded-full mt-8"/>
        <IoMdSearch />
    </div>
     
</form>
    </div>

    <div className="bg-[url('/src/assets/images/hero-background.png')]">
    <img src="src/assets/images/hero-image.png" alt="im bg" />
        
        
        </div>
</div>

        </>
    )
}
export default Hero