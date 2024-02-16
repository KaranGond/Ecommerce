import React from 'react'
import './ProductCard.css'
function ProductCard() {
    return (
        <div className='productCard w-[15rem] m-3 transition=all cursor-pointer'>
            <div className='h-[20rem]'>
                <img className='h-full w-full object-cover object -left-top' src=".\logo512.png" alt="" />
            </div>
            <div className='textPart bg-white p-3'>
                <p className='font-bold opacity-60'>Brand Name</p>
                <p className=''>Title of product or discription goes here.</p>

                <div className='flex item-center spaxe-x-2'>
                    <p className='font-semibold'>₹199</p>
                    <p className='line-through opacity-50'>₹1999</p>
                    <p className='text-green-600 font-semibold'>70%</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard