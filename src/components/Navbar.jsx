import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="bg-Mblack mx-auto ">
    <div className='flex justify-around items-center'>
      <h1 className="text-[#fff] font-bold text-3xl">
        Maxify TEXH <span className='text-Mgreen'>.</span>
      </h1>
      <nav>
        <ul className='flex font-semibold uppercase underline decoration-Mgreen underline-offset-4 ml-[-5em] text-White'>
          <li className='mx-28 my-8'>home</li>
          <li className='mx-28 my-8'>News</li>
          <li className='mx-28 my-8'>Blog</li>
        </ul>
      </nav>
      <AiOutlineSearch className='text-[1em]'/>
    </div>
  </div>
  )
}

export default Navbar