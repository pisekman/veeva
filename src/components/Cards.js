import React from 'react';
import {
	Box,
	Flex,
	Card,
	Image,
	Text,
	Heading,
} from 'rebass/styled-components';
import img1 from './assets/img1.png';
import box2 from './assets/box2.png';
import box3 from './assets/box3.png';

const headingStyle = {
	alignItems: 'center',
	paddingLeft: '50px',
	fontFamily: 'Lato',
	letterSpacing: '1rem',
	width: '100%',
};
const imageStyle = {
	maxWidth: '100%',
	maxHeight: '100%',
};

const Cards = () => {
	return (
		<>
			<Flex
				variant={'wrapper'}
				flexWrap='wrap'
				alignItems='center'
				minWidth={'300px'}
				textAlign={'center'}
			>
				<Heading py={4} sx={headingStyle}>
					VEEVA SYSTEM SCREENSHOTS
				</Heading>
				<Box px={1} py={2} width={[1, 1, 1 / 3]} flex='1 1 450px'>
					<Image sx={imageStyle} src={box2} />
				</Box>
				<Box px={1} py={2} width={[1, 1, 1 / 3]} flex='1 1 450px'>
					<Image sx={imageStyle} src={box3} />
				</Box>
				<Box px={1} py={2} width={[1, 1, 1 / 3]} flex='1 1 450px'>
					<Image sx={imageStyle} src={box3} />
				</Box>
			</Flex>
		</>
	);
};

export default Cards;
