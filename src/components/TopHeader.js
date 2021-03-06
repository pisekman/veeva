import React from 'react';
import styled from 'styled-components';
import backlogo from './assets/logoHeader.png';
import {
	Box,
	Flex,
	Image,
	Text,
	Heading,
} from 'rebass/styled-components';
import people from './assets/people.png';

const LogoContainer = styled.div`
	position: relative;
`;
const Vsigns = styled.img`
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
		top: -10%;
		left: -6%;
		object-fit: contain;

	}
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
		top: 10%;
		left: 3%;
		object-fit: contain;

	}
`;
const textStyles = {
	maxWidth: '100%',
	paddingBottom: '1rem',
	fontFamily: 'Lato',
	lineHeight: '1.875rem',
	fontWeight: '400',
};
const TopHeader = () => {
	return (
		<Flex
			variant={'wrapper'}
			textAlign={'center'}
			flexDirection={'column'}
			// mb={50}
			// flex={1}
		>
			<LogoContainer>
			<Vsign src={backlogo} />

				<Heading
					alignItems='center'
					py={3}
					paddingLeft={'6px'}
					fontFamily={'Lato'}
					letterSpacing={'1.2rem'}
					lineHeight={'3.5rem'}
					css={{
				
						'&::after': {
							content: "''",
							height: '4px',
							width: '188px',
							backgroundColor: '#FDB913',
							display: 'block',
							margin: '0 auto',
						
							// paddingBottom:'15px',

						},
					}}
				>
					VEEVA FULL - SERVICE CONTENT PARTNER
				</Heading>
				<Box
					display={['block', 'block', 'flex']}
					width={'100%'}
					minWidth={'364px'}
					py={['1rem', '2rem', '2rem']}
					// lineHeight={'30px'}
				>
					<Box
						width={['100%', '90%', '100%']}
						display='flex'
						alignItems='center'
						// my={'10px'}
					>
						<Text
							sx={textStyles}
							fontSize={['1.1rem', '1.5rem', '1.7rem']}
							textAlign={['justify', 'justify', 'right']}
							paddingRight={['0', '0', '1.1rem']}
						>
							Veeva jest ??wiatowym liderem w dostarczaniu
							oprogramowania opartego na chmurze dla globalnej bran??y
							life sciences. Ich zaanga??owanie w innowacje,
							doskona??o???? produkt??w i sukcesy klient??w s?? si????
							nap??dow?? ich wiod??cej w bran??y platformy. <br /> <br />
							Jeste??my dumni, ??e posiadamy certyfikat Veeva
							Full-Service Content Partner i jeste??my najbardziej
							certyfikowanym Partnerem Veeva w Polsce i jednym z
							najbardziej akredytowanych w Europie ??? co czyni nas
							jedn?? z kilku wybranych agencji na ??wiecie z
							udokumentowanym do??wiadczeniem w dostarczaniu
							najlepszych w swojej klasie us??ug w ca??ym ekosystemie
							Veeva.
						</Text>
					</Box>
					<Box
						width={['100%', '100%', '100%']}
						// mx={'10px'}
						display={'flex'}
						justifyContent='center'
						minWidth={'400px'}
					>
						<Image
							objectFit='cover'
							src={people}
							maxHeight={'800px'}

							sx={{
								outline: '10px solid white',
								outlineOffset: '-40px',
								// width: 'auto',
								
							}}
						/>
					</Box>
					<Box
						width={['100%', '', '90%']}
						height={'auto'}
						display='flex'
						alignItems='center'
						my={'10px'}
					>
						<Text
							sx={textStyles}
							fontSize={['1.1rem', '1.5rem', '1.7rem']}
							paddingLeft={['0', '0', '1.1rem']}
							textAlign={['justify', 'justify', 'left']}
						>
							Jeste??my dumni, ??e posiadamy certyfikat Veeva
							Full-Service Content Partner i jeste??my najbardziej
							certyfikowanym Partnerem Veeva w Polsce i jednym z
							najbardziej akredytowanych w Europie ??? co czyni nas
							jedn?? z kilku wybranych agencji na ??wiecie z
							udokumentowanym do??wiadczeniem w dostarczaniu
							najlepszych w swojej klasie us??ug w ca??ym ekosystemie
							Veeva.
							<br />
							<br />
							Jako Veeva Full-Service Content Partner wspieramy
							klient??w w zakresie tworzenia tre??ci materia????w
							promocyjnych CLM (Closed Loop Marketing) oraz w
							zadaniach zwi??zanych z zarz??dzaniem zasobami cyfrowymi,
							np. przegl??d i zatwierdzanie tre??ci oraz Digital
							Publishing.
						</Text>
					</Box>
				</Box>

				<Heading
					alignItems='center'
					py={3}
					paddingLeft={'6px'}
					fontFamily={'Lato'}
					letterSpacing={'1.2rem'}
					fontSize={['1rem','3rem']}
					paddingBottom={'4rem'}

				>
					CERTYFIKATY
				</Heading>
			</LogoContainer>
		</Flex>
	);
};

export default TopHeader;
