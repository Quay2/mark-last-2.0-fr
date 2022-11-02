import React, {useState} from 'react'
import '../CSS/Navbar.css'
import { AiOutlineSearch,AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import { HiOutlineNewspaper } from 'react-icons/hi';


const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
      setNav(!nav)
  }



  return (
    
    <div className="bg-[#1d1d1d]  ">
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <div className="flex ">
    <HiOutlineNewspaper className='text-White text-4xl r-3'/>
      <h1 className="LOGO md:ml-0 ml:9 text-[#fff] font-bold">
       Maxify TEXH <span className='text-Mgreen'>.</span>
      </h1>
      </div>
      <nav>
        <ul className='md:flex text-sm hidden font-semibold ml-[-10em] text-White'>
          <li className='text-123 mx-9 px-1 cursor-pointer'>Home</li>
          <li className='text-123 mx-9 px-1 cursor-pointer'>News</li>
          <li className='text-123 mx-9 px-1 cursor-pointer'>Blog</li>
        </ul> 
      </nav>
      <AiOutlineSearch className='ul-tag hidden md:flex text-[1.3em] text-White '/>
      <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose className='text-White ' size={20}/> : <AiOutlineMenu className='text-White ' size={20} /> }

        </div>
        <div className= {!nav ? 'fixed left-0 top-0 w-[60%] h-full  ease-in-out duration-[290ms]' : 'fixed left-[-100%] top-[-100%] w-[60%] h-full ease-in-out duration-500'}>
        <ul className='md:hidden block text-123 flex flex-col justify-center items-center w-full h-[70vh] bg-Mblack text-xl text-White ease-in-out duration-500'>
          <li className='hover:bg-Mgreen h-[7em] w-full text-center cursor-pointer pt-[55px] ease-in-out duration-500'>Home</li>
          <li className='hover:bg-Mgreen h-[7em] w-full text-center cursor-pointer pt-[55px] ease-in-out duration-500'>News</li>
          <li className='hover:bg-Mgreen h-[7em] w-full text-center cursor-pointer pt-[55px] ease-in-out duration-500'>Blog</li>
        </ul> 
    
    </div>
    </div>
    </div>


  )
}

export default Navbar