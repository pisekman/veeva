import React from 'react';
import styled from 'styled-components';
import img1 from './assets/threepeople.png';
import cert from './assets/cert.png';
// import backlogo from './assets/vlogo.png';
import {
	Box,
	Flex,
	Image,
	Text,
	Heading,
} from 'rebass/styled-components';

const LogoContainer = styled.div`
	position: relative;
`;
const Vsign = styled.img`
	position: absolute;
	// top: 0;
	// left: -15%;
	object-fit: contain;
	width: 100%;
	max-width: 100%;
	max-height: 100%;

	@media (max-width: 568px) {
		display: none;
	}
	@media (min-width: 568px) {
		top: -15%;
		left: 0%;
	}
	@media (min-width: 1024px) {
		top: 0%;
		left: -16%;
		// object-fit: contain;
	}
`;
const Logo = styled.img`
	position: absolute;
	top: 10%;
	left: 5%;

	@media (max-width: 568px) {
		top: 2.5%;
		left: 12.5%;
		width: 80px;
	}

	@media (min-width: 568px) {
		top: 3%;
		left: 10%;
		width: 150px;
	}
	@media (min-width: 1024px) {
		top: 5%;
		left: 5%;
		width: 264px;
	}
`;

const SectionFive = () => {
	return (
		<Flex
			variant='wrapper'
			bg={'primary'}
			minWidth={'360px'}
			marginTop={50}
		>
			<LogoContainer>
				<Box
					display={['block', 'flex', 'flex']}
					alignItems={['center', 'center', 'center']}
					justifyContent={['center', 'center', 'flex-end']}
					flexDirection={['column', 'column', 'row']}
					sx={{
						justifyContent: 'space-between',
						outline: '10px solid white',
						outlineOffset: '-40px',
					}}
				>
					<Image
						objectFit='cover'
						flexGrow={1}
						src={img1}
						minWidth={'60vw'}
						sx={{
							width: ['100%', '100%', '100%'],
						}}
					/>
					<Vsign src={backlogo} />
					<Logo src={cert} />
					<Box
						paddingTop={[null, '10px', '100px']}
						sx={{
							maxWidth: '90%',
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
							height: '100%',
						}}
					>
						{/* <Heading
							my={2}
							p={2}
							fontSize={'24px'}
							css={{
								'&::after': {
									content: "''",
									height: '4px',
									width: '188px',
									backgroundColor: '#FF0000',
									display: 'block',
									margin: '0 auto',
								},
							}}
						>
							Veeva CLM
						</Heading> */}
						<Heading
							alignItems='center'
							my={40}
							fontFamily={'Lato'}
							fontSize={'1.5rem'}
							letterSpacing={'1rem'}
							text
							css={{
								'&::after': {
									content: "''",
									height: '4px',
									width: '188px',
									backgroundColor: '#000000',
									display: 'block',
									margin: '0 auto',
								},
							}}
						>
							Veeva CRM Engage for Portals
						</Heading>
						<Text
							textAlign={['justify', 'justify', 'left']}
							paddingLeft={['3rem', '20px', '15px']}
							fontSpace='100px'
							fontSize={['1.5rem', '2rem', '2rem']}
							paddingTop={['0', '10px', '15px']}
							maxWidth={'70%'}
							fontFamily={'Lato'}
							my={10}
							paddingBottom={'100px'}
						>
							Veeva Engage for Portals upraszcza dostęp do materiałów
							promocyjnych przez udostępnianie na Twojej stronie www
							treści dopasowanej do każdej interakcji.
							<br />
							<br /> Tworzy bogate źródło wiedzy, dzięki
							automatycznemu zbieraniu danych.
						</Text>
					</Box>
				</Box>
			</LogoContainer>
		</Flex>
	);
};

export default SectionFive;
