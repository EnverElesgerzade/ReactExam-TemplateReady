import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { IoLocationOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { FiUser } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { NavLink } from 'react-router';


const Header = () => {
  return (
    <header className='flex w-[80%] mx-auto relative top-[10px]'>
         
        <div className="logo">
            <img src="https://preview.themewagon.com/freshcart/assets/images/logo/freshcart-logo.svg" alt="" />
        </div>
        <div className="inpbox flex items-center gap-[20px] relative left-[50px]">
            <div className="inp flex items-center w-[510px] h-[42px] border-[#c1bebf] border-[1px] justify-between p-[.6rem] rounded-[7px] ">
                <input type="text" name="" id="" placeholder='Search for products'/>
                <FaSearch  className='text-[#8d8e8e]'/>
            </div>
            <div className="location  w-[120px] h-[41px] flex items-center border-[#9B9297] border-[1px] p-[1rem] rounded-[7px]">
             <IoLocationOutline className='text-[#9B9297]'/>
             <p className='text-[#6c6b6b]'>Location</p>
            </div>
        </div>

        <div className="iconsbox flex items-center gap-[30px] relative left-[24%]">
            <div className="hearticon relative">
            <FaRegHeart className='text-[22px]'/>
          <span className='text-[white] text-[13.5px] font-[500] bg-[#0AAD0A] w-[18px] h-[18px] flex items-center justify-center rounded-[50%] absolute bottom-[10px] left-[15px]'>5</span>
            </div>
            <div className="usericon">
           <FiUser className='text-[23px]'/>
            
            </div>
            <div className="bagicon relative">
           <HiOutlineShoppingBag className='text-[23px]'/>
            <span className='text-[white] text-[13.5px] font-[500] bg-[#0AAD0A] w-[18px] h-[18px] flex items-center justify-center rounded-[50%] absolute bottom-[10px] left-[11px]'>0</span>
            </div>

        </div>
        <nav>
            <ul className='flex items-center gap-[30px] relative left-[5%] text-[15px] font-[500]'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/products/:id">Products</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header