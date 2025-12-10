import React from "react";
import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";

const ProductSection = ({ title, items }) => {
  return (
    <div className="shop-content relative my-5">
      <p className="font-[Poppins] mb-8 text-[16px] mx-52">{title}</p>

      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-3 w-[1127px]">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center p-4 rounded-xl "
            >
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.description}
                  className="w-[350px] h-[400px] object-cover rounded-xl mb-4 cursor-pointer"
                />
              </Link>
              <p className="text-gray-600 text-center font-[Poppins1] text-[15px] w-[330px] leading-[24px]">
                {item.description}
              </p>
              <p className="text-center text-[14px] text-[#2E2F2E] font-[Poppins1] opacity-75 mt-1">
                ₹{item.price}.00 · 200ml
              </p>
              <div className="w-[330px] mt-2 flex items-center justify-between relative">
                <div className="absolute left-1/2 -translate-x-1/2 flex gap-1 items-center text-[#2E2F2E]">
                  <p className="text-yellow-500 text-sm">
                    {"⭐".repeat(item.rating)}
                  </p>
                  <span className="opacity-90">(52)</span>
                </div>
                <IoAdd className="ml-auto text-white bg-[#3A643B] p-1 rounded-sm text-[28px] cursor-pointer hover:bg-[#2f5230]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
