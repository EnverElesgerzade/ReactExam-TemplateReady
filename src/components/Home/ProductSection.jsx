
import React from 'react'
import data from "../../data/index"
import { useNavigate } from 'react-router';


const ProductSection = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-wrap w-[80%] mx-auto gap-[20px] relative top-[190px]'>

      {data.map((product) => (
        <div key={product.id} className='w-[225px] h-[365px] border border-[#E5E5E5] rounded-[8px] p-[16px] flex flex-col relative'>

          {product.badge && (
            <span className={`absolute top-[15px] left-[15px] text-white text-[12px] font-bold px-[6px] py-[3px] rounded-[4px] ${
              product.badge === "14%" ? "bg-green-600" : "bg-red-600"
            }`}>
              {product.badge}
            </span>
          )}

          <div className='w-full h-[190px] flex items-center justify-center'>
            <img src={product.img} alt={product.name} className='w-full h-full object-contain' />
          </div>

          <div className='flex flex-col gap-[8px] mt-auto'>

            <p className='text-[13px] text-gray-500'>
              {product.category}
            </p>

            <h3 className='text-[15px] font-semibold'>
              {product.name}
            </h3>

            <div className='flex items-center gap-[6px]'>
              <span className='text-yellow-500 text-[17px]'>
                {product.stars}
              </span>

              <span className='text-gray-500 text-[12px] font-[500]'>
                {product.rating} {product.reviews}
              </span>
            </div>

            <div className='flex items-center justify-between mt-[5px] '>
              <p className='font-semibold text-[14px]'>
                ${product.price}
              </p>

              <button onClick={() => navigate(`/products/${product.id}`)} className='bg-green-600 hover:bg-green-700 text-white text-[13px] font-semibold px-[14px] py-[7px] rounded-[6px]'>
                + Add
              </button>
            </div>

          </div>

        </div>
      ))}

    </div>
  )
}

export default ProductSection
