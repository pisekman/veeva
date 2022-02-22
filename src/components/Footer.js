import React from 'react';
import {
	Box,
	Flex,
	Text,
	Button,
	Image,
	Heading,
} from 'rebass/styled-components';
import styled from 'styled-components';
import softLogo from './assets/softwebologo.png';

const FooterStyled = styled.li`
	display: inline-block;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
	color: grey;
`;
const StyledLink = styled.a`
	text-decoration:none;
	text-transform: uppercase;
	color: #505050;
 }`;

const Footer = () => {
	return (
		<Flex
			width={[1, 1, 1]}
			flexDirection={'column'}
			alignItems={'center'}
			justifyContent={'center'}
			bg={'#0D1F2D'}
			height={'20vh'}
		>
			<Box
				sx={{
					padding: '24px',
					borderBottom: '2px solid #505050',
				}}
			>
				<FooterStyled>
					<Box >
						<Image src={softLogo} paddingRight={200}/>

						<StyledLink href='#'>Start</StyledLink>
					</Box>
				</FooterStyled>
				<FooterStyled>
					<StyledLink href='#'>Clients</StyledLink>
				</FooterStyled>
				<FooterStyled>
					<StyledLink href='#'>Project</StyledLink>
				</FooterStyled>
				<FooterStyled>
					<StyledLink href='#'>About Us</StyledLink>
				</FooterStyled>
				<FooterStyled>
					<StyledLink href='#'>Contact</StyledLink>
				</FooterStyled>
			</Box>
		</Flex>
	);
};

export default Footer;
