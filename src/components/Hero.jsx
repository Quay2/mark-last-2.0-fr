import React from 'react'
import Mark from '../assets/mark.png'

const Hero = () => {
  return (
    <div className="bg-Mblack w-full h-[100vh]">
      <h1 className='text-White'>Changing <span>TECH </span> For The <span>Masses</span> </h1>
        <p className="">Here at MAXIFTY are goal is to help fellow devlopers like our selfs to lunch,  Test , and Depoly there ideas  </p>
        <p className="">CLICK HERE TO MAXIFY YOUR IDEAS </p>
        <button className="">Learn More</button>
        <img src={Mark} alt="#" />
    </div>
  )
}

export default Hero