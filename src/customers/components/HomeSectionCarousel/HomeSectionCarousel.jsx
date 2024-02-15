import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCards from '../HomeSectionCards/HomeSectionCards';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

function HomeSectionCarousel() {
    const [activeIndex,setActiveIndex]=useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };
    const slidePrev=()=>setActiveIndex(activeIndex-1);
    const slideNext=()=>setActiveIndex(activeIndex+1);
    const syncActiveIndex=({item})=>setActiveIndex(item)

    const items = [1, 1, 1, 1,1,1,1,1,1,1,1,1,1].map((item, index) => (
        <HomeSectionCards key={index} />
    ));

    return (
        <div className='relative px-4 lg:px-8 border'>
            <h2 className='text-2xl font-extrabold text-gray-800'>Section Name</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                    disableButtonsControls
                    disableDotsControls
                    // autoPlay
                    // autoPlayInterval={1000}
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
              {activeIndex!==items.length-5 && <Button
                    className="z-50 bg-white"
                    variant="contained"
                    onClick={slideNext}
                    sx={{
                        position: 'absolute',
                        top: '8rem', // Adjust as needed
                        right: '0rem',
                        transform: 'translateX(50%) rotate(90deg)', // Center vertically
                        bgcolor: 'white',
                    }}
                    aria-label='next'
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </Button>}

                {activeIndex!==0 && <Button
                    className="z-50 bg-white"
                    variant="contained"
                    onClick={slidePrev}
                    sx={{
                        position: 'absolute',
                        top: '8rem', // Adjust as needed
                        left: '0rem',
                        transform: 'translateX(-50%) rotate(-90deg)', // Center vertically
                        bgcolor: 'white',
                    }}
                    aria-label='next'
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </Button>}
            </div>
        </div>
    );
}

export default HomeSectionCarousel;
