import React from 'react'
import './header.css'
import { FiSearch } from 'react-icons/fi';
import { CiCirclePlus } from 'react-icons/ci';
const Header = () => {
  return (
    <div className='header_body'>
    <div className='heder_item'>
        <div className='heder_r'>
           <div className='item_r'>
            <p>Home</p>
           </div>
           <div className='item_l'>
           <p>About Us</p>
           <p>Contact us</p>
           <p>Categories</p>
           </div>
        </div>
        <div className='heder_l'>
            
           <div> JOIN <samp><CiCirclePlus size={42} color='white' /></samp></div>
        </div>
    </div>
    <div className='header_text'>
        <div className='header_tex1'>
            WELLCOME TO AI WORLD.
        </div>
        <div className='header_search'>
            <input placeholder='Search for the photos' />
        </div>
    </div>
    </div>
  )
}

export default Header

