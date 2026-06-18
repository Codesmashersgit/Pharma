// // import React from "react";
// // import { products, navbarImages } from "../data/data";  
// // import "../App.css";
// // import { FaArrowRightLong } from "react-icons/fa6";
// // import { CiSearch } from "react-icons/ci";
// // import { FiShoppingBag } from "react-icons/fi";
// // import ProductSection from "./Productpage"; 

// // const ShopPage = () => {
// //   return (
// //     <div className="w-full relative pb-20">

// //       <div className="middle-sec py-0 w-full">
// //         <div className="w-full bg-[#FFF7E2] flex flex-col items-center relative">
          
// //           {/* Store Banner */}
// //           <div className="py-0 relative w-full">
// //             <img
// //               src={navbarImages.storeBanner}
// //               className="h-[202px] object-cover w-full"
// //             />
// //             <p className="absolute inset-0 top-5 flex justify-center text-black text-3xl font-semibold">
// //               Store
// //             </p>

// //             {/* Search & Cart */}
// //             <div className="absolute inset-x-0 bottom-10 flex items-center gap-7 justify-center">
// //               <div className="relative w-[50%] md:w-[40%]">
// //                 <input
// //                   type="search"
// //                   placeholder="Search for Kuntal Care"
// //                   className="w-full p-3 pl-10 border border-gray-300 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
// //                 />
// //                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[20px]">
// //                   <CiSearch />
// //                 </span>
// //               </div>
// //               <div className="bg-white px-2 py-2 rounded-md">
// //                 <FiShoppingBag className="text-[30px] cursor-pointer" />
// //               </div>
// //             </div>
// //           </div>

// //           {/* Categories */}
// //           <div className="flex gap-7 mt-[-10px]">
// //             {navbarImages.categories.map((img, i) => (
// //               <img key={i} src={img} className="w-[84px] h-[201px]" />
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* First Summer Collection */}
// //       <ProductSection title="Summer Collection" items={products} />
// //       <div className="absolute top-[75%] right-20 transform -translate-y-1/2">
// //         <FaArrowRightLong className="bg-white border border-[#A5A5A5] py-3 px-3 rounded-full text-[50px] text-[#A5A5A5]" />
// //       </div>

// // <div className="mt-32">
// //       {/* Second Summer Collection (duplicate) */}
// //       <ProductSection className="" title="Summer Collection" items={products} />

// //       {/* Right Arrow */}
// //       <div className="absolute top-[30%] right-20 transform -translate-y-1/2">
// //         <FaArrowRightLong className="bg-white border border-[#A5A5A5] py-3 px-3 rounded-full text-[50px] text-[#A5A5A5]" />
// //       </div>
// //       </div>

// //     </div>
// //   );
// // };

// // export default ShopPage;


// import React from "react";
// import { products, navbarImages } from "../data/data";
// import "../App.css";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { CiSearch } from "react-icons/ci";
// import { FiShoppingBag } from "react-icons/fi";
// import ProductSection from "./ProductSection";

// const ShopPage = () => {
//   return (
//     <div className="w-full relative pb-20">
//       {/* Banner */}
//       <div className="w-full bg-[#FFF7E2] flex flex-col items-center relative">
//         <div className="py-0 relative w-full">
//           <img
//             src={navbarImages.storeBanner}
//             className="h-[202px] object-cover w-full"
//           />
//           <p className="absolute inset-0 top-5 flex justify-center text-black text-3xl font-semibold">
//             Store
//           </p>

//           {/* Search & Cart */}
//           <div className="absolute inset-x-0 bottom-10 flex items-center gap-7 justify-center">
//             <div className="relative w-[50%] md:w-[40%]">
//               <input
//                 type="search"
//                 placeholder="Search for Kuntal Care"
//                 className="w-full p-3 pl-10 border border-gray-300 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[20px]">
//                 <CiSearch />
//               </span>
//             </div>
//             <div className="bg-white px-2 py-2 rounded-md">
//               <FiShoppingBag className="text-[30px] cursor-pointer" />
//             </div>
//           </div>
//         </div>

//         {/* Categories */}
//         <div className="flex gap-7 mt-[-10px]">
//           {navbarImages.categories.map((img, i) => (
//             <img key={i} src={img} className="w-[84px] h-[201px]" />
//           ))}
//         </div>
//       </div>

//       {/* Product Sections by category */}
//       <ProductSection title="Summer Collection" items={products} />
//        <div className="absolute top-[37%] right-20 transform -translate-y-1/2">
//         <FaArrowRightLong className="bg-white border border-[#A5A5A5] py-3 px-3 rounded-full text-[50px] text-[#A5A5A5]" />
//       </div>

// <div className="mt-24">
//       <ProductSection title="Summer Collection" items={products} />
//        <div className="absolute top-[75%] right-20 transform -translate-y-1/2">
//         <FaArrowRightLong className="bg-white border border-[#A5A5A5] py-3 px-3 rounded-full text-[50px] text-[#A5A5A5]" />
//       </div>
//      </div>
        
//     </div>
//   );
// };

// export default ShopPage;


import React, { useState } from "react";
import { products, navbarImages } from "../data/data";
import "../App.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import ProductSection from "./ProductSection";

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products by selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full relative pb-20">
      {/* Banner */}
      <div className="w-full bg-[#FFF7E2] flex flex-col items-center relative">
        <div className="py-0 relative w-full">
          <img
            src={navbarImages.storeBanner}
            className="h-[202px] object-cover w-full"
          />
          <p className="absolute inset-0 top-5 flex justify-center text-black text-3xl font-semibold">
            Store
          </p>

          {/* Search & Cart */}
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

       
        <div className="flex gap-7 mt-[-10px]">
          {navbarImages.categories.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-[84px] h-[201px] cursor-pointer"
              onClick={() =>
                setSelectedCategory(
                  img.includes("All") ? "All" : img.split("/").pop().split(".")[0]
                )
              }
            />
          ))}
        </div>
      </div>

      {filteredProducts.length > 0 && (
        <div className="mt-10">
          <ProductSection
            title={selectedCategory === "All" ? "Summer Collections" : selectedCategory}
            items={filteredProducts}
          />
        </div>
        
      )}
      <div className="absolute top-[38%] right-20 transform -translate-y-1/2">
        <FaArrowRightLong className="bg-white border border-[#A5A5A5] py-3 px-3 rounded-full text-[50px] text-[#A5A5A5]" />     
          
          </div>
      {filteredProducts.length > 0 && (
        <div className="mt-32">
          <ProductSection
            title={selectedCategory === "All" ? "Summer Collections" : selectedCategory}
            items={filteredProducts}
           />
           
        </div>
      )}
       <div className="absolute top-[77%] right-20 transform -translate-y-1/2">
        <FaArrowRightLong className="bg-white border border-[#A5A5A5] py-3 px-3 rounded-full text-[50px] text-[#A5A5A5]" />     
          
          </div>
    </div>
  );
};

export default ShopPage;
