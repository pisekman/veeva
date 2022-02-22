import React from 'react';
import {
	Box,
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
				<Card
					px={1}
					py={2}
					width={[1, 1, 1 / 3]}
					flex='1 1 450px'
					transition={'transform 2s'}
				>
					<Image
						sx={imageStyle}
						src={box2}
						css={{
							'&:hover': {
								boxShadow: 'inset 0 0 0 25px #53a7ea',
								transform: 'translateY(-10px)',
							},
						}}
					/>
				</Card>
				<Box px={1} py={2} width={[1, 1, 1 / 3]} flex='1 1 450px'>
					<Image sx={imageStyle} src={box3} />
				</Box>
				<Box px={1} py={2} width={[1, 1, 1 / 3]} flex='1 1 450px'>
					<Image sx={imageStyle} src={box3} />
				</Box>
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
