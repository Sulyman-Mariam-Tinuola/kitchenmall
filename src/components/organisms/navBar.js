import React from 'react'
import {AiFillHeart, AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className='w-11/12 xl:w-4/5 m-auto flex justify-between py-5 mt-3'>
        <h1 className='logo text-3xl font-semibold tracking-wide drop-shadow-xl' >kitchen<span className='text-rose-400'>Mall</span></h1>
<div>
<div className='flex space-x-8 text-base hidden md:flex tracking-wide'>
<Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/product'>Products</Link>
    {/* <li>
<Link to='/'>Home</Link>
    </li>
    <li>
<Link to='/About'>About</Link>
    </li>
    <li>
<Link to='/Product'>Product</Link>
    </li>
    <li>
<Link to='/Contact'>Contact</Link>
    </li> */}
</div>
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