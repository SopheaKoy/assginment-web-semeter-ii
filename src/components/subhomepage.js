import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Homepageheader from './Homepageheader'

export default function subhomepage() {
  return (
    <div className='bg-gray-200'>
       <Navbar/>

            <Homepageheader/>  
      {/* <Footer/> */}
    </div>
  )
}
