function Cartitem(props) {
  function handleCartItems(action, product) {
    if (action === "increment") {
      const copy = [...props.cartCopy];
      copy.push(product);
      props.setCartCopy(copy);
    }

    if (action === "decrement") {
      const copy = [...props.cartCopy];
      let productIndex;
      copy.find((item, index) => {
        if (item.name === props.name) {
          productIndex = index;
        }
      });
      copy.splice(productIndex, 1);
      props.setCartCopy(copy);
    }
  }

  return (
    <div className="flex gap-32 p-9 border-[#928E8E] border-2 w-[950px] ml-16 ">
      <div className="flex">
        <div className="w-[100%]">
          {console.log(props.cartCopy)}

          <img src={props.img} alt="knitted sweater" />
        </div>
        <div className="mt-10">
          <p className="text-3xl font-bold">
            {" "}
            {props.name} <br />
          </p>
          <p className="text-2xl text-[#928E8E] ">Size: {props.size} </p>
        </div>
      </div>
      <div className="flex gap--1 items-center">
        <div className="text-3xl w-10 h-10 border-[#928E8E] border-2 text-center">
          <button
            onClick={() =>
              handleCartItems("decrement", {
                name: props.name,
                size: props.size,
                img: props.img,
                price: props.price,
              })
            }
            disabled={
              props.cartCopy &&
              props.cartCopy.filter((item) => item.name === props.name)
                .length === 1
            }
          >
            -
          </button>
        </div>
        <div className="text-3xl w-10 h-10 border-[#928E8E] border-2 text-center">
          <p>
            {" "}
            {props.cartCopy &&
              props.cartCopy.filter((item) => item.name === props.name).length}
          </p>
        </div>
        <div className="text-3xl w-10 h-10 border-[#928E8E] border-2 text-center">
          <button
            onClick={() =>
              handleCartItems("increment", {
                img: props.img,
                size: props.size,
                price: props.price,
                name: props.name,
              })
            }
          >
            +
          </button>
        </div>
      </div>

      <div className="text-2xl font-bold mt-16">
        <p>
          Ksh.{" "}
          {props.cartCopy &&
            props.cartCopy
              .filter((item) => item.name === props.name)
              .reduce((acc, curr) => acc + curr.price, 0)
              .toLocaleString()}{" "}
        </p>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
}
export default Cartitem;
