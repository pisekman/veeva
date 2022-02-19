import React from 'react';
import { Box, Flex, Text, Link } from 'rebass/styled-components';

const TopNav = () => {
	return (
		<Flex px={2} color='white' bg='black' alignItems='center'>
			<Text p={2} fontWeight='bold'>
				LOGO
			</Text>
			<Box mx='auto' />
			<Text>MENU</Text>
		</Flex>
	);
};

export default TopNav;
