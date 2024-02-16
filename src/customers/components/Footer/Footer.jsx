import { Button } from '@mui/base'
import { Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <div><Grid className='bg-black text-white text-center ms-10'
            container
            sx={{ bgcolor: "black", color: "white", py: 3 }}>
            <Grid item xs={12} sm={6} md={3}>

                <Typography className='pb-5' variant='h6' gutterBotton>Company</Typography>
                <div><Button className='pb-5' variant='6'>About</Button></div>
                <div><Button className='pb-5' variant='6'>Blog</Button></div>
                <div><Button className='pb-5' variant='6'>press</Button></div>
                <div><Button className='pb-5' variant='6'>Jobs</Button></div>
                <div><Button className='pb-5' variant='6'>Partners</Button></div>

            </Grid>

            <Grid item xs={12} sm={6} md={3}>

                <Typography className='pb-5' variant='h6' gutterBotton>solutions</Typography>
                <div><Button className='pb-5' variant='6'>Marketing</Button></div>
                <div><Button className='pb-5' variant='6'>Analytics</Button></div>
                <div><Button className='pb-5' variant='6'>Commerce </Button></div>
                <div><Button className='pb-5' variant='6'>Insights</Button></div>
                <div><Button className='pb-5' variant='6'>Support</Button></div>

            </Grid>

            <Grid item xs={12} sm={6} md={3}>

                <Typography className='pb-5' variant='h6' gutterBotton>Documentation</Typography>
                <div><Button className='pb-5' variant='6'>Guides</Button></div>
                <div><Button className='pb-5' variant='6'>API Status</Button></div>
               

            </Grid>

            <Grid item xs={12} sm={6} md={3}>

                <Typography className='pb-5' variant='h6' gutterBotton>Company</Typography>
                <div><Button className='pb-5' variant='6'>Clain</Button></div>
                <div><Button className='pb-5' variant='6'>Privacy</Button></div>
                <div><Button className='pb-5' variant='6'>Terms</Button></div>
             

            </Grid>
<Grid className='pt-20' item xs={12}>
    <Typography varient="body2" component="p" align='center'>
        &copy; 2023 My Company. All rights Reserved.
    </Typography>

</Grid>

        </Grid>
        </div>
    )
}

export default Footer