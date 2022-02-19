import React from 'react'
import { Box, Flex, Image, Heading } from 'rebass/styled-components';
import vevalogo from './assets/vevalogo.png';


const Slider = () => {
    return (
        <>
        <Box
        p={5}
        fontSize={4}
        width={[1, 1, 1]}
        color='white'
        bg={['primary', 'red', 'secondary']}
    >
        Box from 1st box
    </Box>
    <Box
        width={[1, 1, 1]}
        maxHeight={['426px', 'auto', 'auto']}
        sx={{
            backgroundImage: 'url(../../slider.png)',
            backgroundSize: 'cover',
            height: '432px',
            display: 'grid',
            placeItems: 'center',
        }}
    >
        <Image
            src={vevalogo}
            width={['60%', '40%', '40%']}
            sx={{}}
            height={'auto'}
        />
    </Box>
    </>
    )
}

export default Slider
