import { useState } from "react"
import {db } from "../firebase"
import { collection, addDoc } from "firebase/firestore"
 
function Addnewproduct(){
    const [formData, setFormData]=useState()
 
    function handleChange(e) {setFormData((prev) => ({...prev, [e.target.name]: e.target.value }))}

   async function handleSubmit(e){
e.preventDefault()
try {
  const docRef = await addDoc(collection(db, "products"), formData);
  console.log(docRef)
 
} catch (e) {
  console.error("Error adding document: ", e);
}
    }
    

    function handleImageUpload(e){
        // const file=e.target.files[0]
        // const reader=new FileReader()
        // reader.onload = ()=>{
        //     console.log(reader.result)            
        // }
        // reader.readAsDataURL(file)

        // Cloudinary

        const file=e.target.files[0]
        const url="https://api.cloudinary.com/v1_1/Ouma/image/upload"
        const bodyData=new FormData()
        bodyData.append("file",file)
        bodyData.append("upload_preset","products")
        fetch(url,{method:"POST",body:bodyData})
        .then(res => res.JSON())
        .then(data=>setFormData(prev=>({...prev,image:data.secure_url})))
        .catch(err=>console.log(err))
    }
    return(
        <div className="container mx-auto items-center ml-[40%] border">
<div>
    <h1 className="text-3xl font-bold">Add New Product</h1>
    <div className="flex flex-col gap-3 p-3">
        <input onChange={e=>handleChange(e)} type="text" name="productname" placeholder="Product Name" className="border-2 w-[500px] p-3 " />
        <input onChange={e=>handleChange(e)} type="number" name="price" placeholder="Price" className="border-2 w-[500px] p-3 " />
        <input onChange={e=>handleChange(e)} type="text" name="selectcategory" placeholder="Select Category"  className="border-2 w-[500px] p-3"/>
        <input onChange={e=>handleImageUpload(e)} type="file" name="imageupload" placeholder="Upload Product Image" className="border-2 w-[500px] p-3 "/>
        <input onChange={e=>handleChange(e)} type="text" name="productdescription" placeholder="Detailed Product Description"  className="border-2 w-[500px] h-[300px] p-3 "/>
    </div>
    <div className="items-center ml-[30%]">
    <button className="bg-[#45C9A1] w-[250px] rounded-full items-center p-3" onClick={handleSubmit}>Add Product</button>
    </div>
</div>
        </div>
    )
}
export default Addnewproduct