import React from 'react';
import styled from 'styled-components';
import {
	Box,
	Flex,

	Heading,
} from 'rebass/styled-components';
import logoCert from './assets/certLogo.png';
const LogoContainer = styled.div`
	position: relative;
`;

const CertSign = styled.img`
	position: absolute;
	width: 250px;
	left: calc(50% - 125px);
`;
const CertSignRight = styled.img`
	position: absolute;
	width: 100px;
	top: 170px;
	left: 60%;
	filter: blur(2px);
	@media (max-width: 568px) {
		left: 300px;
	}
`;
const CertSignLeft = styled.img`
	position: absolute;
	width: 120px;
	top: 200px;
	left: calc(39% - 125px);
	filter: blur(1px);
	@media (max-width: 568px) {
		left: -90px;
	}
`;
const CertSignDeepLeft = styled.img`
	position: absolute;
	width: 50px;
	left: 22%;
	bottom: -150%;
	filter: blur(1px);
	@media (max-width: 568px) {
		display: none;
	}
`;
const CertSignDeepRight = styled.img`
	position: absolute;
	width: 80px;
	top: 220px;
	left: 75%;
	filter: blue(1px);
	@media (max-width: 568px) {
		display: none;
	}
`;
const Certificate = () => {
	return (
		<Flex height={['70vh', '', '60vh']}>
			<Box
				width={'100%'}
				sx={{
					height: '300px',
					px: 4,
					py: 6,
					backgroundSize: 'cover',
					borderRadius: 8,
					color: 'black',
				}}
			>
				<LogoContainer>
					<Heading
						alignItems='center'
						py={3}
						paddingLeft={'6px'}
						fontFamily={'Lato'}
						letterSpacing={'1rem'}
						lineHeight={'3.3rem'}
						textAlign='center'
						textTransform='uppercase'
					>
						CERTYFIKAT PARTNERSTWA
					</Heading>
					<CertSign src={logoCert} />
					<CertSignLeft src={logoCert} />
					<CertSignRight src={logoCert} />
					<CertSignDeepLeft src={logoCert} />
					<CertSignDeepRight src={logoCert} />
				</LogoContainer>
			</Box>
		</Flex>
	);
};

export default Certificate;
