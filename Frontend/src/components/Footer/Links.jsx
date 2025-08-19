import React from 'react';

const Links = () => {
  return (
    <>
      <div>
        <img src="/blisslogo1.png" alt="Bliss Logo" height={200} width={200} />
        <p className="mt-2">
          LET'S MAKE YOUR SKIN FLOURISH WITH OUR PRODUCTS
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Quick Links</h2>
        <ul className="mt-2 space-y-2">
          <li>
            <a href="/" className="hover:underline">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:underline">About Us</a>
          </li>
          <li>
            <a href="/shop" className="hover:underline">Shop</a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="w-full md:w-1/3">
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <p className="mt-2">123 BeautyBliss Ave, City, Country</p>
        <p className="mt-2">Phone: (123) 456 789</p>
        <p className="mt-2">Email: info@BeautyBliss.com</p>
      </div>
    </>
  );
};

export default Links;