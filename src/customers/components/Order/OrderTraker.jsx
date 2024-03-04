import React from 'react'
import { Step, StepLabel, Stepper } from '@mui/material'
const steps=[
    "placed",
    "Order",
    "Shipped",
    "Out For Delivery",
    "Delieverd"
]
function OrderTraker({activeStep}) {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
       {steps.map((label)=><Step>
        <StepLabel sx={{color:"#9155FD", fontSize:"44px"}}>{label}</StepLabel>
       </Step>)} 
        </Stepper></div>
  )
}

export default OrderTraker