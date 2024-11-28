import { BrowserRouter,Routes,Route} from "react-router-dom";
import Notfound from "../pages/Notfound";
import About from "../pages/About";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import {useState} from "react"
import { useEffect } from "react";


function Router() {
  const [cart,setCart] = useState([])


  useEffect (()=> {
   cart.length !==0 && localStorage.setItem("cart",JSON.stringify(cart))
    
  },[cart])

  console.log(cart)


  return (
    
  <BrowserRouter>
  

  <Routes>

    <Route path="/" element={<Layout  cart={cart} setCart={setCart}> <Home cart={cart} setCart={setCart} /> </Layout> }/>
    <Route path="/about" element={<Layout> <About/> </Layout>}/>
    <Route path="/shop" element={<Layout> <Shop/> </Layout>}/>
    <Route path="/cart" element={<Layout > <Cart cart={cart} setCart={setCart} /> </Layout>}/>
    <Route path="/signup" element={<Layout> <Signup/> </Layout>}/>
    <Route path="/login" element={<Layout> <Login/> </Layout>}/>
    <Route path="*" element={<Layout> <Notfound/> </Layout>}/>

    </Routes>
      
    </BrowserRouter>
    
  )
}

export default Router;
