import React from 'react'
import logo from '../lib/logo/CA.jpg'
import './style.css'

function Footer() {
  return (
   
<footer className="footer bg-white dark:bg-gray-900 bottom-0 ">
    <div className=" p-4 py-6 lg:py-2 bg-gradient-to-r from-gray-300 to-blue-400">
        <div className=''>
              <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex items-center lg:ml-16">
              <a href="https://flowbite.com/">
                  <img src={logo} className="h-24 rounded-full lg:ml-14 m-2" alt="FlowBite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cambodia Accessory</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">SITE MAP</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Home</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Phome</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Computer</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">INFORMATION</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">About</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mt-3 lg:mb-1" />
      <div className="sm:flex sm:items-center sm:justify-center">
          <a className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Cambodia Accessory™</a>. </a>
      </div>
        </div>
      
    </div>
</footer>
  
  )
}

export default Footer
