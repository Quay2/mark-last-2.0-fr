import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="bg-Mblack mx-auto ">
    <div className='flex'>
      <h1 className="text-[#fff] font-bold text-3xl">
        Maxify TEXH <span className='text-Mgreen'>.</span>
      </h1>
      <nav>
        <ul className='flex text-White'>
          <li>home</li>
          <li>News</li>
          <li>Blog</li>
        </ul>
      </nav>
      <AiOutlineSearch />
    </div>
  </div>
  )
}

export default Navbar