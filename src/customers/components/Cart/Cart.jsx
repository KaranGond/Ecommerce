import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const navigation = useNavigate();
  const handleCheckout=()=>{
    navigation("/checkout?step=2")
  }
  return (

    <div>

      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2'>
         {[1,1,1,1].map((item)=> <CartItem />)}
          </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className="border">
            <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
            <hr />
            <div className='space-y-3 font-semibold mb-10'>
              <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span className='text-green-600'>₹499</span>
              </div>
              <div className='flex justify-between pt-3 text-black'>
                <span>Discount</span>
                <span className='text-red-600'>-₹99</span>
              </div>
              <div className='flex justify-between pt-3 text-black'>
                <span >Delivery Charges</span>
                <span className='text-green-600'>Free</span>
              </div>
              <div className='flex justify-between pt-3 text-black text-green font-bold'>
                <span >Total Amount</span>
                <span className='text-green-600'>₹1278</span>
              </div>
            </div>
            <Button onClick={handleCheckout} varient="contained" className="w-full mt-5" sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd", color: "#ffffff"}}>
              CheckOut
            </Button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart