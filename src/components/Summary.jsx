import { getTotals } from "../lib/lib";

function Summary({ cartCopy }) {
  return (
    <>
      <div className="bg-[#F0EFEF] p-10 text-xl mr-12">
        <div className="text-center">
          <h2 className="font-bold text-3xl">Cart Summary</h2>
          <p className="p-4">Have a promo code?Apply here</p>
        </div>
        <div className="flex gap-6 p-5">
          <input
            type="text"
            placeholder="Promo Code(optional)"
            className="rounded-sm"
          />
          <button className="bg-[#45C9A1] text-[white] p-4 h-15 rounded-sm w-28">
            Apply
          </button>
        </div>

        <div className="flex justify-between p-6">
          <div>
            <p>Subtotal</p>
            <p>Delivery Fee</p>
          </div>
          <div>
            <p>
              Ksh.{" "}
              {cartCopy &&
                cartCopy
                  .reduce((acc, curr) => acc + curr.price, 0)
                  .toLocaleString()}{" "}
            </p>
            <p>Ksh 450</p>
          </div>
        </div>
        <div>
          <hr />
        </div>

        <div className="flex justify-between font-bold">
          <div>
            <p>Total</p>
          </div>
          <div>
            <p>
              Ksh{" "}
              {cartCopy &&
                cartCopy
                  .reduce((acc, curr) => acc + curr.price, 450)
                  .toLocaleString()}
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <button className="items-center bg-[#45C9A1] text-white w-36 font-bold h-15 p-4 rounded-sm">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
export default Summary;
