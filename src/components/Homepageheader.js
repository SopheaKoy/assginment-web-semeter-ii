import React from 'react'
import './style.css'
import CA from '../logo/Computer troubleshooting-pana 1.png'
// import { Image } from '@mui/icons-material'

export default function Homepageheader() {
  return (
    <div className='flex justify-center'>

        <div className=' lg:grid lg:grid-cols-2 max-w-screen-2xl flex justify-center items-center flex-wrap'>
          <div className='flex flex-col justify-start lg:mr-56'>
              <h1 className='haha lg:text-48 md:text-38 sm:text-32'>Cambodia Accessory</h1>
              <div className='flex items-center flex-col flex-wrap'>
              <span className='lg:text-18 md:text-16 sm:text-14'>This is the Website  sale  accessory in Cambodia you can </span>
              <span className='lg:text-18 md:text-16 sm:text-14'>research and buy in my platform</span>
              </div>
          </div>
          <div className='flex justify-end lg:h-96 md:h-72 sm:h-64'>
            <img src={CA} alt='#'/>
          </div>
      </div>
      
      </div> 
  )
}
