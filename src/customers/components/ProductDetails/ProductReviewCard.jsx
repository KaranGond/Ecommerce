import { Avatar, Box, Grid } from '@mui/material'
import React from 'react'
import Rating from '@mui/material/Rating';
function ProductReviewCard() {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
    <Grid>
        <Box>
            <Avatar className="text-white" sx={{width:56,heigth:56,bgcolor:"#9155fd"}}>
                K
            </Avatar>
        </Box>
    </Grid>
    <Grid item xs={9}>
        <div className='space-y-2'></div>
        <div>
            <p className='font-semibold text-lg'>kRaam</p>
            <p className='opacity-70'>Aprile 5, 2023</p>
        </div>
        <Rating value={4.5} name='half-rating' readOnly precision={.5}/>
        <p >Nice Product. I like the Product. Thank You! </p>
    </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard