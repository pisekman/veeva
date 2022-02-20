import React from 'react';
import styled from 'styled-components';
import position from 'styled-components'
import img1 from './assets/img1.png';
import cert from './assets/cert.png';
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

const Logo = styled.img`
	position: absolute;
	top: 10%;
	left: 5%;

	@media (max-width: 568px) {
		top: 3%;
		left: 10%;
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

const Benefits = () => {
	return (
		<Flex variant='wrapper' bg={'primary'} minWidth={'360px'}>
							<LogoContainer>

			<Box
				display={['block', 'flex', 'flex']}
				alignItems={['center', 'center', 'center']}
				justifyContent={['center', 'flex-end']}
				flexDirection={['column', 'column', 'row']}
				sx={{
					justifyContent: 'space-between',
					outline: '10px solid white',
					outlineOffset: '-40px',
				}}
	
			>
					<Image
						objectFit='cover'
						flexGrow={2}
						src={img1}
						minWidth={'60vw'}
						sx={{
							width: ['100%', '100%', '100%'],
						}}
					/>
					<Logo src={cert} />
				

				<Box
					sx={{
						maxWidth: '70%',
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<Heading
						my={1}
						fontSize={'3rem'}
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
					</Heading>
					<Text
						textAlign={['justify', 'justify', 'left']}
						paddingLeft={['3rem', '20px', '15px']}
						fontSpace='100px'
						fontSize={[40, 40, '2rem']}
						paddingTop={'10px'}
						maxWidth={'90%'}
						fontFamily={'Lato'}
					>
						Materiały cyfrowe są łatwo dostępne dla przedstawicieli
						zarówno farmaceutycznych jak i medycznych, co zwiększa
						komfort pracy oraz ma wpływ na poprawę uzyskiwanych
						wyników.
						<br />
						<br /> Veeva CLM to wbudowany w Veeva CRM moduł do CLM
						(Closed Loop Marketing). Umożliwia prowadzenie
						spersonalizowanych prezentacji sprzedażowych oraz szybkie
						i dokładne analizowanie rozmów promocyjnych.
					</Text>
				</Box>
			</Box>
			</LogoContainer>
		</Flex>
	);
};

export default Benefits;
