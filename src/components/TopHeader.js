import React from 'react';
import {
	Box,
	Flex,
	Image,
	Text,
	Heading,
} from 'rebass/styled-components';
import people from './assets/people.png';
const TopHeader = () => {
	return (
		<Flex
			variant={'wrapper'}
			opacity={0.9}
			textAlign={'center'}
			flexDirection={'column'}
			// flex={1}
		>
			<Heading
				alignItems='center'
				py={4}
				fontFamily={'Lato'}
				letterSpacing={'1rem'}
				css={{
					'&::after': {
						content: "''",
						height: '4px',
						width: '188px',
						backgroundColor: '#FDB913',
						display: 'block',
						margin: '0 auto',
					},
				}}
			>
				VEEVA FULL - SERVICE CONTENT PARTNER{' '}
			</Heading>
			<Box
				display={['block', 'block', 'flex']}
				width={'100%'}
				minWidth={'364px'}
				paddingY={['1rem', '2rem', '2rem']}
			>
				<Box
					width={['100%', '100%', '1/3']}
					height={'auto'}
					display='flex'
					alignItems='center'
					my={'10px'}
				>
					<Text
						textAlign={['justify', 'justify', 'right']}
						fontSize={['1.1rem', '1.5rem', '1.7rem']}
						maxWidth={'90%'}
						paddingBottom={'1rem'}
						fontFamily={'Lato'}
						lineHeight={'2rem'}
					>
						Veeva jest światowym liderem w dostarczaniu oprogramowania
						opartego na chmurze dla globalnej branży life sciences.
						Ich zaangażowanie w innowacje, doskonałość produktów i
						sukcesy klientów są siłą napędową ich wiodącej w branży
						platformy. <br /> <br />
						Jesteśmy dumni, że posiadamy certyfikat Veeva Full-Service
						Content Partner i jesteśmy najbardziej certyfikowanym
						Partnerem Veeva w Polsce i jednym z najbardziej
						akredytowanych w Europie – co czyni nas jedną z kilku
						wybranych agencji na świecie z udokumentowanym
						doświadczeniem w dostarczaniu najlepszych w swojej klasie
						usług w całym ekosystemie Veeva.
					</Text>
				</Box>
				<Box
					width={['100%', 'auto', 'auto']}
					height={'auto'}
					// mx={'10px'}
					display={'flex'}
					justifyContent='center'
					minWidth={'400px'}
				>
					<Image
						// objectFit='cover'
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
					width={['100%', '', '1/3']}
					height={'auto'}
					display='flex'
					alignItems='center'
					my={'10px'}
				>
					<Text
						textAlign={['justify', 'justify', 'left']}
						fontSize={['1rem', '1.5rem', '1.8rem']}
						maxWidth={'100%'}
						paddingBottom={'1rem'}
						paddingLeft="1rem"
						fontFamily={'Lato'}
						lineHeight={'2rem'}
					>
						Jesteśmy dumni, że posiadamy certyfikat Veeva Full-Service
						Content Partner i jesteśmy najbardziej certyfikowanym
						Partnerem Veeva w Polsce i jednym z najbardziej
						akredytowanych w Europie – co czyni nas jedną z kilku
						wybranych agencji na świecie z udokumentowanym
						doświadczeniem w dostarczaniu najlepszych w swojej klasie
						usług w całym ekosystemie Veeva.
						<br />
						<br />
						Jako Veeva Full-Service Content Partner wspieramy klientów
						w zakresie tworzenia treści materiałów promocyjnych CLM
						(Closed Loop Marketing) oraz w zadaniach związanych z
						zarządzaniem zasobami cyfrowymi, np. przegląd i
						zatwierdzanie treści oraz Digital Publishing.
					</Text>
				</Box>
			</Box>
		</Flex>
	);
};

export default TopHeader;
