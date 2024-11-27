function Footer() {
  return (
    <div className="bg-[#F0EFEF] w-full">
      <div className="text-center p-7 flex flex-col items-center sm:flex-row sm:justify-center">
        <p className="text-xl sm:text-3xl lg:text-5xl p-4 sm:p-12">
          Subscribe and get upto 30% off
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-[#45C9A1] border-solid border-2 rounded-3xl h-12 w-60 lg:w-80 p-4"
          />
          <button className="bg-[#45C9A1] h-12 w-24 lg:w-32 rounded-3xl text-white font-bold text-md lg:text-xl">
            Subscribe
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto p-5">
        <div>
          <img
            src="src/assets/images/logo.svg"
            alt="logo"
            className="w-28 lg:w-32 max-w-full h-auto"
          />
          <p className="text-wrap pt-7">
            Offering a unique and <br /> stylish perspective on
            <br />
            fashion is our number <br />
            one priority. Confuse
            <br />
            your mirror by our
            <br />
            trendy outfits.
          </p>
        </div>

        <div>
          <ul>
            <li className="font-bold">Store</li>
            <li>Women's Fashion</li>
            <li>Men's Fashion</li>
            <li>Store sale</li>
            <li>Collection</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="font-bold">Help</li>
            <li>Customer support</li>
            <li>Terms and conditions</li>
            <li>Privacy Policy</li>
            <li>Track your order</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="font-bold">Contact Us</li>
            <li className="flex justify-start gap-4">
              <img
                src="src/assets/images/email.png"
                alt="mail"
                className="w-6 h-6"
              />
              Contact@clozzet.com
            </li>
            <li className="flex justify-start gap-4">
              <img
                src="src/assets/images/phone.png"
                alt="phone"
                className="w-6 h-6"
              />
              254-700-333-333
            </li>
            <li>Follow Us</li>
            <div className="flex gap-4 justify-center sm:justify-start">
              <img
                src="src/assets/images/facebook.png"
                alt="Fb"
                className="w-8 h-8"
              />
              <img
                src="src/assets/images/instagram.png"
                alt="IG"
                className="w-8 h-8"
              />
              <img
                src="src/assets/images/twitter.png"
                alt="X"
                className="w-8 h-8"
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
