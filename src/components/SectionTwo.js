import React from 'react';
import styled from 'styled-components';
import img1 from './assets/puzzledMan.png';
import cert from './assets/cert.png';
import backlogo from './assets/vlogo.png';
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
		left: 15%;
		// object-fit: contain;
	}
`;
const Logo = styled.img`
	position: absolute;
	top: 10%;
	right: 5%;

	@media (max-width: 568px) {
		top: 70%;
		left: 70.5%;
		width: 80px;
	}

	@media (min-width: 568px) {
		top: 40%;
		left: 75%;
		width: 150px;
	}
	@media (min-width: 1024px) {
		top: 5%;
		left: 75%;
		width: 264px;
	}
`;

const SectionTwo = () => {
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
						
					}}
				>
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
							Veeva CRM Approved Email
						</Heading>
						<Text
							textAlign={['justify', 'justify', 'left']}
							paddingLeft={['0.5rem', '20px', '15px']}
							fontSpace='100px'
							fontSize={['1.5rem', '2rem', '2rem']}
							paddingTop={['0', '10px', '15px']}
							maxWidth={['100%', '100%' ,'70%']}
							fontFamily={'Lato'}
							my={10}
							paddingBottom={'100px'}
							lineHeight={'40px'}
						>
							Veeva CRM Approved Email Zaprojektowany z myślą o
							wspieraniu interakcji z pracownikami służby zdrowia,
							Veeva CRM Approved Email umożliwia wysyłanie zgodnych,
							zatwierdzonych treści za pośrednictwem poczty e-mail.
							<br />
							<br /> A ponieważ jest wbudowany w aplikację Veeva CRM,
							z której Twoi przedstawiciele korzystają na co dzień,
							jest szybki i łatwy w użyciu.
						</Text>
					</Box>
					<Image
						objectFit='cover'
						flexGrow={1}
						src={img1}
						minWidth={'60vw'}
						height={'100%'}
						sx={{
							width: ['100%', '100%', '100%'],
						}}
					/>
					<Vsign src={backlogo} />
					<Logo src={cert} />
				</Box>
			</LogoContainer>
		</Flex>
	);
};

export default SectionTwo;
