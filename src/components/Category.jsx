function Category(props){
    return(
    
     
          <div className=" flex flex-col items-center  w-fit  ">
            <div className="items-center bg-[#F0EFEF] rounded-full w-[80px] p-4 ">
            <img
              src={props.img}
              alt="jacket"/>
            </div>
            <div>
           <p>{props.name}</p>
           </div>
             </div> 
               )
}
export default Category