import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/*-----Left Section-----*/}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum, modi maiores numquam unde cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse, atque inventore accusamus culpa repellendus.</p>
            </div>
            {/*----Center Section----*/}
            <div>
                <p className='text-x1 font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/*----Right Section----*/}
            <div>
                <p className='text-x1 font-medium mb-5'>GET IN Touch</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>010 61818179</li>
                    <li>yahiaesam0101@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto - All right reserved.</p>
        </div>
    </div>
  )
}

export default Footer