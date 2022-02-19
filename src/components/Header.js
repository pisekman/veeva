import React from 'react';
import {
	Box,
	Flex,
	Text,
	Image,
	Heading,
} from 'rebass/styled-components';
import img1 from './assets/img1.png';


const Header = () => {
	return (
		<>
			<Flex variant={'wrapper'} bg={'grey'} textAlign={'center'} flexDirection={'column'}>
				<Heading
					width={1, 1, 1}
					// css={{
					// 	'&::after': {
					// 		content: "''",
					// 		height: '4px',
					// 		width: '188px',
					// 		backgroundColor: '#007f0a',
					// 		display: 'block',
					// 	},
					// }}
				>
					Veeva Full- Service Content Partner
				</Heading>
				<Box bg={img1}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Aspernatur molestias rem, rerum nam omnis at ad. Corrupti
					facilis ut, minima obcaecati rerum, voluptate inventore eos
					doloremque explicabo odio perferendis? Ipsam.
				</Box>
				{/* WhyUS */}
			</Flex>
			{}
		</>
	);
};

export default Header;
