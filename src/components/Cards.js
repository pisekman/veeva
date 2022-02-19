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

const Cards = () => {
	return (
		<>
			<Flex variant={'wrapper'} flexWrap='wrap' alignItems='center' >
				<Box px={2} py={2} width={[1, 1, 1 / 3]} flex='1 1 250px'>
					<Card mx='auto' variant='borderBox'>
						<Image height={['400px', '500px', '700px']} src={img1} />
					</Card>
				</Box>
				<Box px={2} py={2} width={[1, 1, 1 / 3]} flex='1 1 250px'>
					<Card mx='auto' variant='borderBox'>
						<Image height={['400px', '500px', '700px']} src={img1} />
					</Card>
				</Box>
				<Box px={2} py={2} width={[1, 1, 1 / 3]} flex='1 1 250px'>
					<Card mx='auto' variant='borderBox'>
						<Image height={['400px', '500px', '700px']} src={img1} />
					</Card>
				</Box>
			</Flex>
		</>
	);
};

export default Cards;
