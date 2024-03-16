import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Pageheader from './Pageheader'
import Card from './Card'

export default function subhomepage() {
  return (
    <div className='bg-gray-200'>
       <Navbar/>
        <Pageheader/> 
        <Card/>
      {/* <Footer/> */}
    </div>
  )
}
