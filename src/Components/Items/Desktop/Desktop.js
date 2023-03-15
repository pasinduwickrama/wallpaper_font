import React from 'react'
import './des.css'
import logo1 from '../../../img/digital-art-men-city-futuristic-night-hd-wallpaper-thumb.jpg';
import logo2 from '../../../img/2.jpg';
import logo3 from '../../../img/4.jpg';
import logo4 from '../../../img/5.jpg';
import logo5 from '../../../img/7.jpg';
import logo6 from '../../../img/9.jpg';
import logo7 from '../../../img/1.jpeg';
import logo8 from '../../../img/3.jpeg';
import logo9 from '../../../img/6.jpeg';
import { AiFillHeart } from 'react-icons/ai';
import {TiBookmark } from 'react-icons/ti';

import logo10 from '../../../img/10.jpeg';const Desktop = () => {
    const data = [
        {
            id:1,
            img:logo2,
            name: (<AiFillHeart color='red' />),
            name2: (<TiBookmark color='#ffffff' />),
        },
        {
            id:2,
            img:logo9,
            name: (<AiFillHeart color='red' />),
            name2: (<TiBookmark color='#ffffff' />),
        },
        {
            id:3,
            img:logo3,
            name: (<AiFillHeart color='red' />),
            name2: (<TiBookmark color='#ffffff' />),
        },
        {
            id:4,
            img:logo4,
            name: (<AiFillHeart color='red' />),
            name2: (<TiBookmark color='#ffffff' />),
        },
        {
            id:5,
            img:logo5,
           name: (<AiFillHeart color='red' />),
            name2: (<TiBookmark color='#ffffff' />),
        },
        {
            id:6,
            img:logo6,
            name: (<AiFillHeart color='red' />),
            name2: (<TiBookmark color='#ffffff' />),
        },
        {
            id:7,
            img:logo7,
           name: (<AiFillHeart color='red' />),
            name2: (<TiBookmark color='#ffffff' />),
        },
        {
            id:8,
            img:logo8,
           name: (<AiFillHeart color='red' />),
            name2: (<TiBookmark color='#ffffff' />),
        },
        {
            id:9,
            img:logo10,
            name: (<AiFillHeart color='red' />),
            name2: (<TiBookmark color='#ffffff' />),
        },
        {
            id:10,
            img:logo3,
            name: (<AiFillHeart color='red' />),
            name2: (<TiBookmark color='#ffffff' />),
        },
      ]
  return (
    <div className='de-boy'>
     {data.map((data) => (
        <div key={data.id}>
            <div className='decard_body'>
                <img src={data.img} />
                <div className='decard_tex'>
                    <h2>{data.name2} {data.name} </h2>
                    <h1> </h1>
                    
                </div>
            </div>
        </div>
     ))}
    
    </div>
  )
}


export default Desktop


