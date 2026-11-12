import React from 'react'
import data from "../../data/index"
import { useParams } from 'react-router';

const Products = () => {
    const { id } = useParams();
    const a = data.find((x) => x.id == id);
  return (
    <div className='w-[225px] h-[365px] border border-[#E5E5E5] rounded-[8px] p-[16px] flex flex-col relative'>
        <img src={a.img} alt={a.name} />
        <h3>{a.name}</h3>
        <p>{a.category}</p>
        <p>{a.price}</p>
        <p className='text-yellow-500 text-[17px]'>{a.stars}</p>
        <p>{a.rating}</p>
        <p>{a.reviews}</p>
    </div>
  )
}

export default Products