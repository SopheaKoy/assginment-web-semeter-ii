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
        <div className='flex justify-center '>
          <div className='max-w-screen-xl h-96 '>
            <div className='flex'>
            <h1 className='mx-2 text-20'>All Producs</h1>
            <svg className='mt-1' width="11" height="18" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0929 12.677L2.98301 23.1468C2.54365 23.6517 1.83134 23.6517 1.39202 23.1468L0.329509 21.9256C-0.109101 21.4216 -0.109944 20.6046 0.327634 20.0993L7.54737 11.7627L0.327634 3.42618C-0.109944 2.92091 -0.109101 2.10393 0.329509 1.59984L1.39202 0.378712C1.83138 -0.126237 2.5437 -0.126237 2.98301 0.378712L12.0928 10.8485C12.5322 11.3534 12.5322 12.172 12.0929 12.677Z" fill="black"/>
            </svg>
            </div>
            <div className='flex'>  
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div className='flex'>
            <h1 className='mx-2 text-20'>Computer</h1>
            <svg className='mt-1' width="11" height="18" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0929 12.677L2.98301 23.1468C2.54365 23.6517 1.83134 23.6517 1.39202 23.1468L0.329509 21.9256C-0.109101 21.4216 -0.109944 20.6046 0.327634 20.0993L7.54737 11.7627L0.327634 3.42618C-0.109944 2.92091 -0.109101 2.10393 0.329509 1.59984L1.39202 0.378712C1.83138 -0.126237 2.5437 -0.126237 2.98301 0.378712L12.0928 10.8485C12.5322 11.3534 12.5322 12.172 12.0929 12.677Z" fill="black"/>
            </svg>
            </div>
            <div className='flex'>  
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div className='flex'>
            <h1 className='mx-2 text-20'>Phone</h1>
            <svg className='mt-1' width="11" height="18" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0929 12.677L2.98301 23.1468C2.54365 23.6517 1.83134 23.6517 1.39202 23.1468L0.329509 21.9256C-0.109101 21.4216 -0.109944 20.6046 0.327634 20.0993L7.54737 11.7627L0.327634 3.42618C-0.109944 2.92091 -0.109101 2.10393 0.329509 1.59984L1.39202 0.378712C1.83138 -0.126237 2.5437 -0.126237 2.98301 0.378712L12.0928 10.8485C12.5322 11.3534 12.5322 12.172 12.0929 12.677Z" fill="black"/>
            </svg>
            </div>
            <div className='flex'>  
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
     
          </div>
        </div>
        
      {/* <Footer/> */}
    </div>
  )
}
