import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className='w-4/5 m-auto p-10'>
      <div className='md:flex grid grid-cols-2 gap justify-between items-start my-10'>
        <div className='space-y-5 py-5 border-b'>
          <h1 className='text-3xl font-bold'>Kitchenmall</h1>
          <div className='flex space-x-5'>
            <img className='w-6 h-4/5 rounded-full' src='images/watsapp.jpg'/>
            <img className='w-6 h-4/5 rounded-full' src='images/instagram.jpg'/>
            <img className='w-6 h-4/5 rounded-full' src='images/facebook.jpg'/>
          </div>
        </div>
        <div className='flex flex-col space-y-3'>
          <h1>Contact</h1>
          <a className='text-sm text-gray-400' href="/">88, Muritala,Ilorin, Kwara State.</a>
          <a className='text-sm text-gray-400' href="/">kitchenmall@gmail.com</a>
          <a className='text-sm text-gray-400' href="/">+2348568949904</a>
          <a className='text-sm text-gray-400' href="/">+2348999666665</a>
        </div>
        <div className='flex flex-col space-y-3'>
        <h1>Company</h1>
          <a className='text-sm text-gray-400' href="/">About us</a>
          <a className='text-sm text-gray-400' href="/">Contact Us</a>
          <a className='text-sm text-gray-400' href="/">Services</a>
          <a className='text-sm text-gray-400' href="/">Blog</a>
        </div>
        <div className='flex flex-col space-y-3'>
        <h1>Products</h1>
          <a className='text-sm text-gray-400' href="/">Skyrun</a>
          <a className='text-sm text-gray-400' href="/">Thermocool</a>
          <a className='text-sm text-gray-400' href="/">LG</a>
          <a className='text-sm text-gray-400' href="/">Breng</a>
        </div>
      </div>
      <div className='border-t py-2'>
        <p> &copy; 2022 <span className='font-bold text-rose-500'>Kitchenmall</span> All rights reserved</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer