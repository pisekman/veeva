import React from 'react';
import styled from 'styled-components';
import img1 from './assets/woman.png';
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
		left: -15%;
	}
`;
const Logo = styled.img`
	position: absolute;
	top: 10%;
	left: 5%;

	@media (max-width: 568px) {
		top: 15%;
		left: 12.5%;
		width: 102px;
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
const textStyles = {
	// maxWidth: '100%',
	paddingBottom: '1rem',
	fontFamily: 'Lato',
	lineHeight: '1.875rem',
	fontWeight: '400',
};
const headingStyles = {
	alignItems: 'center',
	fontFamily:'Lato',
	fontSize: '1.5rem',
	letterSpacing: '1.1rem',
	lineHeight: '3rem',
}
const BenefitsTwo = () => {
	return (
		<Flex variant='wrapper' bg={'primary'} minWidth={'360px'}>
			<LogoContainer>
{/* Header mobile */}
				<Box
					display={['block', 'flex', 'flex']}
					alignItems={['center', 'center', 'center']}
					justifyContent={['center', 'center', 'flex-end']}
					flexDirection={['column', 'column', 'row']}
					sx={{
						justifyContent: 'space-between',
						outlineOffset: '-40px',
						'@media screen and (min-width: 40em)': {
							outline: '10px solid white',
						},
					}}
				>			
					<Heading
						display={['block', 'none', 'none']}
						my={40}
						sx={headingStyles}
						css={{
							'&::after': {
								content: "''",
								height: '4px',
								width: '188px',
								backgroundColor: '#FFFFFF',
								display: 'block',
								float: 'left',
								margin: '0 auto',
							},
						}}
					>
						VEEVA CLM
					</Heading>
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
						{/* Header desktop */}

						<Heading
							alignItems='center'
							my={4}
							display={['none', 'block', 'block']}
							fontFamily={'Lato'}
							fontSize={'2rem'}
							letterSpacing={'1.5rem'}
							lineHeight={'5rem'}
							css={{
								'&::after': {
									content: "''",
									height: '4px',
									width: '188px',
									backgroundColor: '#FFFFFF',
									display: 'block',
									// float: 'left',
									alignItems: 'start',
									margin: '0 auto',
								},
							}}
						>
							VEEVA CLM BENEFIT TWO
						</Heading>
						<Text
							sx={textStyles}
							textAlign={['left', 'justify', 'left']}
							paddingLeft={['1rem', '20px', '15px']}
							fontSize={['1.1rem', '1.5rem', '1.7rem']}
							lineHeight={['1.6rem', '2.5rem', '3rem']}
							paddingTop={['0', '10px', '15px']}
							maxWidth={['100%', '80%', '80%']}
							my={10}
						>
							Materiały cyfrowe są łatwo dostępne dla przedstawicieli
							zarówno farmaceutycznych jak i medycznych, co zwiększa
							komfort pracy oraz ma wpływ na poprawę uzyskiwanych
							wyników.
							<br />
							<br /> Veeva CLM to wbudowany w Veeva CRM moduł do CLM
							(Closed Loop Marketing). Umożliwia prowadzenie
							spersonalizowanych prezentacji sprzedażowych oraz
							szybkie i dokładne analizowanie rozmów promocyjnych.
						</Text>
					</Box>
				</Box>
			</LogoContainer>
		</Flex>
	);
};

export default BenefitsTwo;
