function Featuredcol(props) {
  function handleAddToCart(e, product) {
    if (e.target.textContent.toLowerCase() === "add to cart") {
      const cartItems = [...props.cart];
      cartItems.push(product);
      props.setCart(cartItems);
      e.target.textContent = "Added To Cart";
      e.target.style.background = "#928E8E"
    }
  }

  return (
    <div className="py-11  container mx-auto">
      {console.log(props.cart)}
      <div className="bg-[#F0EFEF] w-[100%] h-[600px] relative">
        <img
          src={props.img}
          alt={props.alt}
          className="w-[350px] items-center"
        />
        <div className=" font-bold text-white rounded-md absolute inset-1  opacity-0 hover:opacity-100 ml-[180px] ">
          <button
            className="mt-[500px] bg-[#45C9A1] py-[20px] px-[30px] rounded-md "
            onClick={(e) =>
              handleAddToCart(e, {
                price: props.price,
                name: props.name,
                img: props.img,
              })
            }
          >
            ADD TO CART
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="text-xl">
          <p>{props.name}</p>
          <p>Ksh. {props.price.toLocaleString()}</p>
        </div>
        <div className="w-7">
          <img src="src/assets/images/heart.png" alt="heart" />
        </div>
      </div>
    </div>
  );
}
export default Featuredcol;
