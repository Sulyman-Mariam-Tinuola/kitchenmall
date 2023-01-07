import React from 'react'
import {AiFillHeart, AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'
const NavBar = () => {
  return (
    <nav className='w-11/12 xl:w-4/5 m-auto flex justify-between py-5 mt-3'>
        <h1 className='logo text-3xl font-semibold tracking-wide drop-shadow-xl' >kitchen<span className='text-rose-400'>Mall</span></h1>
<div>
<ul className='flex space-x-8 text-base hidden md:flex tracking-wide'>
    <li>Home</li>
    <li>Product</li>
    <li>Services</li>
    <li>About</li>
</ul>
</div>
<div className='flex space-x-8'>
    <AiOutlineSearch size={'1.5rem'}/>
    <AiFillHeart size={'1.5rem'}/>
    <AiOutlineShoppingCart size={'1.5rem'}/>
</div>
</nav>
  )
}

export default NavBar