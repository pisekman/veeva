import React from 'react';
import {
	Box,
	Flex,
	Text,
	Image,
	Heading,
} from 'rebass/styled-components';
import img1 from './assets/img1.png';
import people from './assets/people.png';

const Header = () => {
	return (
		<>
			<Flex
				variant={'wrapper'}
				bg={'grey'}
				textAlign={'center'}
				flexDirection={'column'}
				flex={1}
			>
				<Heading
					width={[1, 1, 1]}
					css={{
						'&::after': {
							content: "''",
							height: '4px',
							width: '188px',
							backgroundColor: '#007f0a',
							display: 'block',
						},
					}}
				>
					Veeva Full- Service Content Partner
				</Heading>
				<Box
					// zIndex={10}
					width={1}
					height={'60vh'}
					display={['block', 'flex', 'flex']}
					flexWrap='wrap'
					py={10}
					alignItems={'center'}
					alignSelft={'center'}
				>
					<Box bg='blue' width={[1, 1 / 3, 1 / 3]} height={1}>
						<Text textAlign={'right'}>
							Veeva jest światowym liderem w dostarczaniu
							oprogramowania opartego na chmurze dla globalnej branży
							life sciences. Ich zaangażowanie w innowacje,
							doskonałość produktów i sukcesy klientów są siłą
							napędową ich wiodącej w branży platformy.
							<br />
							Jesteśmy dumni, że posiadamy certyfikat Veeva
							Full-Service Content Partner i jesteśmy najbardziej
							certyfikowanym Partnerem Veeva w Polsce i jednym z
							najbardziej akredytowanych w Europie – co czyni nas
							jedną z kilku wybranych agencji na świecie z
							udokumentowanym doświadczeniem w dostarczaniu
							najlepszych w swojej klasie usług w całym ekosystemie
							Veeva.{' '}
						</Text>
					</Box>
					<Box bg='yellow' width={[1, 1 / 3, 1 / 3]} height={'100%'}>
						<Image src={people} />
					</Box>
					<Box bg='pink' width={[1, 1 / 3, 1 / 3]} height={'100%'}>
						><Text></Text>
					</Box>
					{/* WhyUS */}
				</Box>
			</Flex>
		</>
	);
};

export default Header;
