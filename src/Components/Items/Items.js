import React, { useState } from 'react'
import './items.css'
import { IoIosDesktop,IoMdPhonePortrait } from 'react-icons/io';
import Animation from './Slider/Animation';
import Phone from './Phone/Phone';
import Desktop from './Desktop/Desktop';

const Items = () => {
    const [isAdd, toAdd] = useState(false);
  return (
    <div className='item_body'>
        <div className='item_header'>
            <div className='item_r'>
                <h3>{isAdd ? 'Phone' : 'Desktop'} Wallpaper</h3>
                <p>Free HD download for  {isAdd ? 'mobils' : 'Desktop'}</p>
            </div>
            <div className='item_ll'>
               <button onClick={() =>toAdd(!isAdd)}> { isAdd ?<IoIosDesktop size={50} />  : <IoMdPhonePortrait size={50} />}</button>
               <button onClick={() =>toAdd(!isAdd)}> { isAdd ?'For Desktop'  : 'For Phone'}</button>

            </div>
        </div>
        <div className='item_cus'>
        <p> <Animation />  </p>
        </div>
        <div className='item_phone'>
        {isAdd ? <Phone /> :  <Desktop />}
            
        </div>
    </div>
  )
}

export default Items