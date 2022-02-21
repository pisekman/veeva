import React from 'react';
import { Box, Flex, Image, Heading } from 'rebass/styled-components';
import vevalogo from './assets/vevalogo.png';

const sliderStyles = {
	backgroundImage: 'url(../../slider.png)',
	backgroundSize: 'cover',
	height: '432px',
	display: 'grid',
	placeItems: 'center',
    minWidth: '300px'
};
const Slider = () => {
	return (
		<>
			{/* <Box
				p={5}
				fontSize={4}
				color='white'
				bg={['primary', 'red', 'secondary']}
			>
				Box from 1st box
			</Box> */}
			<Box maxHeight={['356px', 'auto', 'auto']} sx={sliderStyles}>
				<Image
					src={vevalogo}
					width={['50%', '20%', '20%']}
					height={'auto'}
				/>
			</Box>
		</>
	);
};

export default Slider;
