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


const Cards = () => {
	return (
		<>
			<Flex variant={'wrapper'} flexWrap='wrap' alignItems='center'minWidth={'300px'}>
				<Box px={2} py={2} width={[1, 1, 1 / 3]} flex='1 1 450px'>
					<Card variant='borderBox'>
					<Image width={1} height={['400px', '500px', '700px']} src={box2} />
					</Card>
				</Box>
				<Box px={2} py={2} width={[1, 1, 1 / 3]} flex='1 1 450px'>
				<Card variant='borderBox'>
					<Image width={1} height={['400px', '500px', '700px']} src={box2} />
					</Card>
				</Box>
				<Box px={2} py={2} width={[1, 1, 1 / 3]} flex='1 1 450px'>
				<Card variant='borderBox'>
						<Image width={1} height={['400px', '500px', '700px']} src={box2} />
					</Card>
				</Box>
			</Flex>
		</>
	);
};

export default Cards;
