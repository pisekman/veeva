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
		left: 15%;
		// object-fit: contain;
	}
`;
const Logo = styled.img`
	position: absolute;
	top: 10%;
	right: 5%;

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
		left: 80%;
		width: 264px;
	}
`;

const SectionTwo = () => {
	return (
		<Flex variant='wrapper' bg={'primary'} minWidth={'360px'} marginTop={50}>
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
							VEEVA CLM
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
				</Box>
                
			</LogoContainer>
		</Flex>
	);
};

export default SectionTwo;
