import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products, navbarImages,downloadImages,benefits,heroText} from "../data/data";
import "../App.css";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";
import pic from "../assets/pics/3a1629e3fcaa89d88bdd6c767e0a3d2be2800d3f.png"
import Image from "../assets/pics/5af878e509217e175d69b8cfd3da49cb2a8a6437.png"

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
      <div className="flex mt-10 mx-40 gap-10">
        {/* LEFT SIDE - MAIN IMAGE */}
        <div>
          <img
            src={mainImage}
            alt={product.description}
            className=" object-cover rounded-xl mb-4"
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
<div className="flex flex-col my-16">
  <div className="flex gap-5 items-center">
          <img src={downloadImages.Katora} className="h-[42px] w-[32px]" />
          <p className="text-[30px] font-[Poppins]">Products Highlights</p>
          </div>
          <div className="flex w-[638px] mt-5 gap-5 ">
             {benefits.map((item, index) => (
            <div
              key={index}
              className="box flex bg-[#FDEAD2] items-end rounded-xl px-3 py-2 w-[149px] h-[204px]"
            >
             
              
              <p className="font-[Nunito]  text-[16px] text-[#2E2F2E] text-wrap">
                {item}
              </p>
            </div>
          ))}

          </div>
        </div>
        <div>
          <div className="flex flex-col my-5">
  <div className="flex gap-5 items-center">
          <img src={downloadImages.Katora} className="h-[42px] w-[32px]" />
          
          <p className="text-[30px] font-[Poppins]">Key Ingredients</p>

          <a className="flex ml-44 font-[Poppins] text-[16px] text-[#3A643B]">View All Ingredients</a>
         
          </div>
          <div className="flex w-[638px] flex-wrap mt-5 gap-5">
             {benefits.map((item, index) => (
            <div
              key={index}
              className="box flex bg-[#FDEAD2] items-center gap-5 rounded-xl w-[293px] px-4 py-3 "
            >
              <img
                              src={downloadImages.ingredients}
                              className="w-[40px] h-[40px]"
                            />
                             
                            <div>
                              
                              <div className="flex gap-28 justify-center items-center ">
                            <p className="font-[Poppins]">{heroText}</p>
                            <FaAngleRight className="text-[#28643B]"/>
                            </div>
                           
                            
              
              <p className="font-[Nunito] text-[16px] text-[#2E2F2E] text-wrap">
                {item}
              </p>
              </div>
            </div>
          ))}

          </div>
        </div>
        <div className="flex flex-col my-16">
  <div className="flex gap-5 items-center">
          <p className=" font-[Poppins]">How to use</p>
          </div>
          <div className="flex w-[638px] mt-5 gap-5 ">
             
            <div
              
              className="box flex bg-[#FDEAD2] items-end rounded-xl px-3 py-5 leading-7"
            >
             <p className="font-[Poppins1] text-wrap flex text-[#1A1A1ACC]">Mix one or tow tablespoons of Herbal Child Care Malt with milk or 100-200ml warm water and then consume twice a day or consult our Ayurvedic Expert to find the right Ayurvedic recipe for you.</p>
              
              
              
            </div>
         
         

          </div>
        </div>

        <div className="flex flex-col my-16">
  <div className="flex gap-5 items-center">
          <p className=" font-[Poppins]">General Instructions</p>
          </div>
          <div className="flex w-[638px] mt-5 gap-5 ">
             
            <div
              
              className="box flex bg-[#FDEAD2] items-end rounded-xl px-3 py-5 leading-7"
            >
             <p className="font-[Poppins1] text-wrap flex text-[#1A1A1ACC]">Store in a cool and dry palce away from direct sunlight. Not advisable for diabetic patients</p>
              
              
              
            </div>
         
         

          </div>
        </div>

        <div className="flex flex-col my-16">
  <div className="flex gap-5 items-center">
          <p className=" font-[Poppins]">Commonly Asked Questions</p>
          </div>
          <div className="flex w-[638px] mt-5 gap-5 flex-col ">
             
            <div
              
              className="box flex flex-col bg-[#FDEAD2] rounded-xl px-3 py-5 "
            >
              <p className="font-[Poppins] text-wrap flex text-[20px] leading-8">Who should be using Amrutam Child Care Malt | Herbal Supplement for Child Care</p>
             <p className="font-[Poppins1] text-wrap flex mt-3 text-[#1A1A1ACC] leading-8">This product is ideal for growing babies and kids to nurture their health in a holistic manner</p>
              
              
              
            </div>

             <div
              
              className="box flex flex-col bg-[#FDEAD2] rounded-xl px-3 py-5 "
            >
              <p className="font-[Poppins] text-wrap flex text-[20px] leading-8">Why choose Amrutam Child Care Malt | Herbal Supplement for Child Care</p>
             <p className="font-[Poppins1] text-wrap flex mt-3 text-[#1A1A1ACC] leading-8">Amrutam's Child Care Malt helps improve immunity and is useful in enhancing vitality and vigor in children.<br/>
This 100% natural Ayurvedic jam is extremely effective in fighting chronic diseases.<br/>
Giving your little one Amrutam's Child Care Malt daily will help them Improve their appetite and digestion.<br/>
It is useful in treating anemia, general debility and maintaining a healthy weight.<br/>
100% Natural and Ayurvedic<br/>
PETA certified cruelty-free<br/>
Hand-picked and ethically sourced ingredients<br/>
AYUSH certified and US FDA approved<br/>
</p>
              
              
              
            </div>
            <div className="flex gap-5 flex-col">
          <p className=" font-[Poppins]">Trust the voice</p>
          <img src={pic} className="rounded-lg"/>
          </div>
         
         

          </div>
          
        </div>
        

        
        
        

        </div>
        
        


        </div>
        
        
      </div>
      <div className="flex flex-col">
        <h1 className="text-[#2E2F2E] font-[Poppins] text-center text-[24px]">Reviews and Ratings</h1>
         <span
              
              className="box my-10 flex justify-between items-center mx-36 rounded-xl px-3 py-5 leading-7"
            >
              <div className="flex items-center justify-center bg-[#FDEAD2] py-5 px-10 rounded-lg gap-3">
  {/* Rating Number */}
  <p className="font-[Poppins] text-[#1A1A1ACC] text-[30px]">{product.rating.toFixed(1)}</p>

  {/* Stars + Review Count */}
  <div className="flex flex-col leading-tight">
    <p className="text-yellow-500 text-xl">
      {"⭐".repeat(product.rating)}
    </p>
    <span className="text-[#646665] font-[Nunito] text-sm leading-8">Based on 20 reviews</span>
  </div>
</div>

              <div className="flex gap-3">
              <button className="text-[#3A643B] bg-[#FFF7E2] px-7 py-1 shadow-md border border-[#EAF2EA] rounded-lg font-[DM Sans3]">See More Reviews</button>
              <button className="text-[#3A643B] bg-[#FFF7E2] px-7 py-1 shadow-md border border-[#EAF2EA] rounded-lg">Write a review</button>
              </div>
            </span>
            <div className="mx-40 leading-8 bg-[#FDEAD2] flex items-center gap-3 rounded-lg">
              <p className="rounded-full bg-[white] font-[Poppins] px-4 py-3 mx-5 text-sm">SJ</p>
              <div className="flex flex-col ">
              <p className="font-[Nunito] text-[#2E2F2E]">Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
              <div className="flex gap-3 items-center font-[Nunito] leading-8 ">
                <span className="text-[#646665]">Sabarinath J</span>·
                <span className="text-[#646665]">20 January 2023</span>·
                <span><p className="text-yellow-500 text-sm">
      {"⭐".repeat(product.rating)}
    </p></span>
              </div>
              </div>
            </div>
            
         <div className="mx-40 my-7 leading-8 bg-[#FDEAD2] flex items-center gap-3 rounded-lg">
              <p className="rounded-full bg-[white] font-[Poppins] px-4 py-3 mx-5 text-sm">SJ</p>
              <div className="flex flex-col ">
              <p className="font-[Nunito] text-[#2E2F2E]">Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
              <div className="flex gap-3 items-center font-[Nunito] leading-8 ">
                <span className="text-[#646665]">Sabarinath J</span>·
                <span className="text-[#646665]">20 January 2023</span>·
                <span><p className="text-yellow-500 text-sm">
      {"⭐".repeat(product.rating)}
    </p></span>
              </div>
              </div>
            </div>
            
         

      </div>

     
      {sameCategoryProducts.length > 1 && (
        <div className="my-20">
          <h3 className="text-[24px] font-[Poppins] mb-4 text-center">
             People has also bought
          </h3>
          <div className="flex justify-center mt-8">
            <div className="grid grid-cols-3 gap-8 w-[1127px]">
              {sameCategoryProducts.map((item) => (
                <div
                  key={item.id}
                  className={`flex flex-col items-center ${
                    item.id === product.id ? "" : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.description}
                    className="w-[350px] h-[400px] object-cover rounded-xl mb-4 cursor-pointer"
                  />
                  <p className="text-[#2E2F2E] text-center text-[15px] font-[Poppins]  w-[330px] leading-[24px]">
                    {item.description}
                  </p>
                  <p className="text-center text-[14px] text-[#2E2F2E] font-[Poppins] opacity-75 mt-1 leading-8">
                    ₹{item.price}.00 · 200ml
                  </p>
                  <p className="text-yellow-500 text-sm leading-8">
      {"⭐".repeat(product.rating)}<span className="text-[#2E2F2E] font-[Poppins] opacity-75">(52)</span>
    </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      )}
  <div className="w-full flex flex-col items-center py-28 bg-white ">
  <h1 className="font-[Poppins] text-2xl mb-8">Meet Our Experts</h1>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="bg-[#FFF7E2] w-[320px] rounded-3xl shadow-md flex flex-col justify-between items-center pt-5 overflow-hidden"
      >
        
        <div className="flex flex-col items-center px-5">
          
          <div className="relative">
            <img
              src={Image}
              alt="Doctor"
              className="w-[140px] h-[140px] rounded-full object-cover"
            />

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 
                            bg-[#0B0B0BC9] px-2 py-1 rounded-full shadow flex items-center gap-1">
              <span className="text-[12px] font-[Poppins] text-white">4.5</span>
              <span className="text-yellow-500 text-[12px]">⭐</span>
            </div>
          </div>

          
          <p className="font-[Poppins] text-[20px] mt-4">Dr. Vaishali Sharma</p>
          <p className="font-[Nunito] text-[#838383] mt-1 text-sm">
            Ayurveda Practitioner (BAMS, MD)
          </p>
          <p className="font-[Nunito] text-[#0C0C0C] text-[14px] mt-1">
            25 years of experience
          </p>

          
          <div className="flex items-center gap-2 text-[12px] text-[#3A643B] mt-3 cursor-pointer bg-[#3A643B1F] rounded-lg px-2 py-1">
            <span>🔗</span>
            <p className="font-[Nunito]">Skin Specialist</p>
          </div>
        </div>

        
        <button className="bg-[#3A643B] text-white py-4 w-full font-[Poppins] rounded-b-2xl mt-5">
          Book Session
        </button>
      </div>
    ))}
  </div>

  <div className="flex gap-3 mt-8">
    <div className="w-3 h-3 bg-[#3A643B] rounded-full"></div>
    <div className="w-3 h-3 bg-[#D2D2D2] rounded-full"></div>
    <div className="w-3 h-3 bg-[#D2D2D2] rounded-full"></div>
  </div>

  <button className="mt-8 bg-white text-[#3A643B] border border-[#DBE3DC63] px-8 py-2 rounded-xl font-[Nunito] text-sm shadow-md hover:opacity-90">
    Find More Experts
  </button>

</div>




    </div>
    
    
  );
};

export default ProductPage;


