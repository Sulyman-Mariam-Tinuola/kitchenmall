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
<div className='flex xl:grid-cols-4 md:grid cols-3 grid-cols-2 gap-4 -content-centern'>
<div className='h-[350px] space-y-2'>
<img className='w-full h-4/5 object-contain border-rose-500 object-fit: contain' src='images/gas oven.jpg' alt='cooker'/>
<div className='title'>
<p className='oven title font-semibold text-gray-600'>Oven gas cooker</p>
<h1 className='oven-price text-xl font-semibold'>$700</h1>
</div>
</div>

<div className='h-[350px] space-y-2'>
<img className='w-full h-4/5 object-contain border-rose-500 object-fit: contain' src='images/kettles.jpg' alt='kettle'/>
<p className='kettle font-semibold text-gray-600'>Electric kettle</p>
<h1 className='kettle-price text-xl font-semibold'>$500</h1>
</div>

<div className='h-[350px] space-y-2'>
<img className='w-full h-4/5 object-cover border-rose-500 object-fit: contain' src='images/microwave.png' alt='microwave'/>
<p className='micro font-semibold text-gray-600'>Microwave</p>
<h1 className='micro-price text-xl font-semibold'>$900</h1>
</div>

<div className='h-[350px] space-y-2'>
<img className='w-full h-4/5 object-cover border-rose-500' src='images/pot.jpg' alt='pot'/>
<p className='pot font-semibold text-gray-600'>Pot</p>
<h1 className='pot-price text-xl font-semibold'>$300</h1>
</div>

<div className='h-[350px] space-y-2'>
<img className='w-full h-4/5 object-contain border-rose-500 object-fit: contain' src='images/blenderr.jpg' alt='blender'/>
<p className='blender font-semibold text-gray-600'>Blender</p>
<h1 className='blender-price text-xl font-semibold'>$600</h1>
</div>

<div className='h-[350px] space-y-2'>
<img className='w-full h-4/5 object-contain border-rose-500 object-fit: contain ' src='images/bowl.jpg' alt='bowl'/>
<p className='bowl font-semibold text-gray-600'>Mixing bowl</p>
<h1 className='bowl-price text-xl font-semibold'>$200</h1>
</div>

<div className='h-[350px] space-y-2'>
<img className='w-full h-4/5 object-cover border-rose-500 object-fit: contain' src='images/fridgee.jpeg' alt='fridge'/>
<p className='fridge font-semibold text-gray-600'>Refrigerator</p>
<h1 className='fridge-price text-xl font-semibold'>$900</h1>
</div>

<div className='h-[350px] space-y-2'>
<img className='w-full h-4/5 object-cover border-rose-500' src='images/spoons.jpg' alt='spoon'/>
<p className='spoon font-semibold text-gray-600'>Set of spoon</p>
<h1 className='spoon-price text-xl font-semibold'>$500</h1>
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