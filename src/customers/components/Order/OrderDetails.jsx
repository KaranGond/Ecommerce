import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTraker from './OrderTraker'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import { deepPurple } from '@mui/material/colors';

import StarBorderIcon from '@mui/icons-material/StarBorder';
function OrderDetails() {
    return (
        <div className='px:5 lg:px-20'>

            <div>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AddressCard />
            </div>
            <div className="py-20" >
                <OrderTraker activeStep={3} />
            </div>
            <Grid container className="space-y-5">
                {[1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: "Space-between" }}>
                    <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>
                        <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/kpodocw0/t-shirt/x/o/4/xl-wr-64-wrodss-original-imag3upwgq9n9fbv.jpeg?q=70" alt="" />
                        
                        <div className='space-y-2 ml-5'>
                            <p className='font semibold '>Men Slim Rise</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold'>
                                <span>Color: Pink</span><span>Size: M</span>
                            </p>
                            <p>Seller: linaria </p>
                            <p>₹1099</p>
                        </div>
                    </div>
                    </Grid>
                    <Grid item>
                        <Box sx={{color:deepPurple[500]}}>
                            <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-5xl'/>
                            <span>Rate and Review Product</span>
                        </Box>
                    </Grid>
                </Grid>)}
            </Grid>
        </div>
    )
}

export default OrderDetails