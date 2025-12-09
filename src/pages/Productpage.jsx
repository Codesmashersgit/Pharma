import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products, navbarImages } from "../data/data";
import "../App.css";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [mainImage, setMainImage] = useState(product?.image);

  if (!product) return <p className="text-center mt-20">Product not found!</p>;

  const sameCategoryProducts = products.filter(
    (p) => p.category === product.category
  );

  return (
    <div className="w-full relative pb-20">
      {/* Banner + Search + Cart */}
      <div className="w-full bg-[#FFF7E2] flex flex-col items-center relative">
        <div className="py-0 relative w-full">
          <img
            src={navbarImages.storeBanner}
            className="h-[202px] object-cover w-full"
          />
          <p className="absolute inset-0 top-5 flex justify-center text-black text-3xl font-semibold">
            Store
          </p>

          <div className="absolute inset-x-0 bottom-10 flex items-center gap-7 justify-center">
            <div className="relative w-[50%] md:w-[40%]">
              <input
                type="search"
                placeholder="Search for Kuntal Care"
                className="w-full p-3 pl-10 border border-gray-300 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[20px]">
                <CiSearch />
              </span>
            </div>
            <div className="bg-white px-2 py-2 rounded-md">
              <FiShoppingBag className="text-[30px] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-7 mt-[-10px]">
          {navbarImages.categories.map((img, i) => (
            <img key={i} src={img} className="w-[84px] h-[201px]" />
          ))}
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="flex mt-10 mx-40 gap-5">
        {/* LEFT SIDE - MAIN IMAGE */}
        <div>
          <img
            src={mainImage}
            alt={product.description}
            className="w-[500px] h-[500px] object-cover rounded-xl mb-4"
          />

          {/* Thumbnails */}
          <div className="flex gap-4 mt-2">
  {[product.image, product.image2, product.image3].map((img, index) => {

    const active = mainImage === img; // check selected image

    return (
      <img
        key={index}
        src={img || product.image}
        onClick={() => setMainImage(img || product.image)}
        className={`w-[150px] h-[150px] object-cover rounded-xl cursor-pointer 
          border transition 
          ${active ? "opacity-100" : "border-gray-300 opacity-50 hover:opacity-80"}
        `}
      />
    );
  })}
</div>

        </div>

        {/* RIGHT SIDE - TEXT DETAILS */}
        <div className="flex flex-col">
          <h2 className="text-[22px] font-[Poppins]">{product.description}</h2>

          <p className="text-yellow-500 mb-2">
            {"⭐".repeat(product.rating)}{" "}
            <span className="text-[#646665]">(204 reviews)</span>
          </p>

          <p className="text-[#2E2F2E] mb-2 text-xl font-[Poppins]">
            ₹{product.price}
          </p>

          <div className="flex gap-5 mt-5">
            <button className="border border-[#9DB29D] bg-[#EAF2EA] rounded-lg px-3 py-1 font-[Nunito] text-[14px]">
              200ml
            </button>
            <button className="border border-[#9DB29D] bg-[#EAF2EA] rounded-lg px-3 py-1 font-[Nunito] text-[14px]">
              100ml
            </button>
            <button className="border border-[#9DB29D] bg-[#EAF2EA] rounded-lg px-3 py-1 font-[Nunito] text-[14px]">
              Pack of 3
            </button>
          </div>
          <div className="flex mt-16 gap-5">
            <button className="flex justify-between items-center px-5 w-[50%] py-2 rounded-lg text-[#000000] border border-[#676767]"><span>-</span><p>1</p><span>+</span></button>
            <button className=" px-5 w-[50%] py-2 rounded-lg bg-[#3A643B] text-center text-white font-[Poppins] ">Add To Cart</button>
          </div>
         <p className="text-[#2E2F2E] font-[Nunito] leading-7 mt-10 text-[15px] max-w-[600px]">
  Amrutam's Kuntal Care Do-It-Yourself Hair Spa is an ayurvedic marvel filled
  with revitalizing herbs and essential oils like Eucalyptus oil, Triphala,
  Balchhad and Bhringraj. These Ayurvedic ingredients when fused together make
  a potent dollop that nourishes dry and frizzy hair making it soft and bouncy.
  This spa treatment revitalizes the roots, promotes growth, provides shine and
  coats hair with a moisturizing layer. It's time to bring spa home and unwind.
</p>


        </div>
      </div>

      {/* Same Category Products */}
      {sameCategoryProducts.length > 1 && (
        <div className="my-10">
          <h3 className="text-xl font-semibold mb-4 text-center">
            More in {product.category}
          </h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-8 w-[1127px]">
              {sameCategoryProducts.map((item) => (
                <div
                  key={item.id}
                  className={`flex flex-col items-center border p-4 rounded-xl transition-shadow duration-300 ${
                    item.id === product.id ? "border-green-500 shadow-lg" : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.description}
                    className="w-[350px] h-[400px] object-cover rounded-xl mb-4 cursor-pointer"
                  />
                  <p className="text-gray-600 text-center text-[15px] w-[330px] leading-[24px]">
                    {item.description}
                  </p>
                  <p className="text-center text-[14px] text-[#2E2F2E] opacity-75 mt-1">
                    ₹{item.price}.00 · 200ml
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
