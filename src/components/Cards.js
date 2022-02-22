import React from 'react';
import {
	Flex,
	Card,
	Image,
	Button,
	Heading,
	Text,
} from 'rebass/styled-components';
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
	transition: 'all .2s ease-in-out',
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
				<Card px={1} py={2} width={[1, 1, 1 / 3]} flex='1 1 450px'>
					
					<Image
						sx={imageStyle}
						src={box2}
						transition={'transform 2s'}
						css={{
							'&:hover': {
								boxShadow: 'inset 0 0 0 25px #53a7ea',
								transform: 'transform: scale(1.1);',
							},
						}}/>

				</Card>
				<Card px={1} py={2} width={[1, 1, 1 / 3]} flex='1 1 450px'>
					<Image
						sx={imageStyle}
						src={box3}
						transition={'transform 2s'}
						css={{
							'&:hover': {
								boxShadow: 'inset 0 0 0 25px #53a7ea',
								transform: 'transform: scale(1.1);',
							},
						}}
					/>
					
				</Card>
				<Card px={1} py={2} width={[1, 1, 1 / 3]} flex='1 1 450px'>
					<Image
						sx={imageStyle}
						src={box3}
						transition={'transform 2s'}
						css={{
							'&:hover': {
								boxShadow: 'inset 0 0 0 25px #53a7ea',
								transform: 'transform: scale(1.1);',
							},
						}}
					/>
					
				</Card>
				<Flex
					width={[1, 1, 1]}
					flexDirection={'column'}
					alignItems={'center'}
					marginBottom={50}
				>
					<Button
						alignSelf={'center'}
						sx={{
							'@media screen and (min-width: 40em)': {
								display: 'none',
							},
						}}
					>
						<Text>Sprawdź więcej</Text>
					</Button>
				</Flex>
			</Flex>
		</>
	);
};

export default Cards;
