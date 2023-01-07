import React from 'react'
import {HiArrowNarrowRight,HiArrowLeft} from "react-icons/hi";

const Product = () => {
  return (
    <div className='w-4/5 m-auto space-y-10'>
   <div className='flex justify-between items-center p-2'>
<ul className='flex items-center space-x-8'>
  <li>Cooker</li>
  <li>Blender</li>
  <li>Microwave</li>
  <li>Pots</li>
  <li>Electric kettles</li>
</ul>

<div className='flex items-center space-x-5'>
<button><HiArrowLeft size={'1.5rem'}/></button>
<button className='bg-rose-300 rounded-full p-2 text-white drop'><HiArrowNarrowRight size={'1.5rem'}/></button>
</div> 
</div>
<div className='grid xl:grid-cols-4 md:grid cols-3 grid-cols-2 gap-4 -content-center'>
<div className='h-[350px] space-y-2'>
<img className='w-full h-4/5 object-cover border-rose-500' src='images/cooker.jpg' alt='cooker'/>
<p className='font-semibold text-gray-600'>Oven gas cooker</p>
<h1 className='text-xl font-semibold'>$700</h1>
</div>

<div className='h-[350px] space-y-2'>
<img className='w-full h-4/5 object-cover border-rose-500' src='images/electrickettles.jpg' alt='kettle'/>
<p className='font-semibold text-gray-600'>Electric kettle</p>
<h1 className='text-xl font-semibold'>$500</h1>
</div>

<div className='h-[350px] space-y-2'>
<img className='w-full h-4/5 object-cover border-rose-500' src='images/microwave.jpg' alt='microwave'/>
<p className='font-semibold text-gray-600'>Microwave</p>
<h1 className='text-xl font-semibold'>$900</h1>
</div>

<div className='h-[350px] space-y-2'>
<img className='w-full h-4/5 object-cover border-rose-500' src='images/pots.jpg' alt='cooker'/>
<p className='font-semibold text-gray-600'>Pots</p>
<h1 className='text-xl font-semibold'>$300</h1>
</div>

<div className='h-[350px] space-y-2'>
<img className='w-full h-4/5 object-cover border-rose-500' src='images/blender-mixer.jpg' alt='blender'/>
<p className='font-semibold text-gray-600'>Blender</p>
<h1 className='text-xl font-semibold'>$600</h1>
</div>

<div className='h-[350px] space-y-2'>
<img className='w-full h-4/5 object-cover border-rose-500' src='images/bowl.jpg' alt='bowl'/>
<p className='font-semibold text-gray-600'>Mixing bowl</p>
<h1 className='text-xl font-semibold'>$200</h1>
</div>

<div className='h-[350px] space-y-2'>
<img className='w-full h-4/5 object-cover border-rose-500' src='images/refrigerator.jpg' alt='fridge'/>
<p className='font-semibold text-gray-600'>Refrigerator</p>
<h1 className='text-xl font-semibold'>$900</h1>
</div>

<div className='h-[350px] space-y-2'>
<img className='w-full h-4/5 object-cover border-rose-500' src='images/spoon.jpg' alt='spoon'/>
<p className='font-semibold text-gray-600'>Set of spoon</p>
<h1 className='text-xl font-semibold'>$500</h1>
</div>
</div>

<div className='w-full h-[300px] relative'>
        <img className='w-full absolute top-0 rounded-xl h-full object-cover' src="images/airfryer.jpg" alt="air fryer" />
        <div className='w-11/12 xl:w-1/2 m-auto h-full flex flex-col justify-center space-y-3 text-white p-5 absolute'>
          <h1 className='text-4xl text-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit magni unde dicta optio consequatur enim?</p>
          <button className='w-28 bg-rose-400 p-2 rounded-md'>See More</button>
        </div>
      </div>
    </div>
    
  )
}

export default Product