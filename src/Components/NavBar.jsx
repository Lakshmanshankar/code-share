import React from 'react'
import Menu from './Menu'
export default function NavBar() {
  return (
    <div>
        <div className="w-full bg-black h-7 fixed flex flex-row justify-between">
            <div className="text-white font-poppins">Code-Share</div>
            <ul className="sm:flex sm:flex-row sm:w-1/4 sm:h-7 text-white sm:justify-between font-poppins left-0 sm:relative absolute bg-black sm:bg-transparent px-4 rounded-lg py-3 sm:py-0 mt-7 sm:mt-0 grid place-content-center w-2/5 slideOut" id='sliderIn'>
                <li className='block hover:font-extrabold hover:cursor-pointer px-4 py-2 sm:py-0'>Home</li>
                <li className='block hover:font-extrabold hover:cursor-pointer px-4 py-2 sm:py-0'>Code</li>
                <li className='block hover:font-extrabold hover:cursor-pointer px-4 py-2 sm:py-0'>about</li>
            </ul>
            <div className="right"><div className=" sm:hidden"><Menu/></div></div>
        </div>

    </div>
  )
}
