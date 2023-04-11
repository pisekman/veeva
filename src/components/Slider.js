import React from 'react';
import { Box, Image, } from 'rebass/styled-components';
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
