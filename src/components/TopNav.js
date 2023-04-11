import React from 'react';
import { Box, Flex, Image } from 'rebass/styled-components';
import softLogo from './assets/softwebologo.png';
import menuLogo from './assets/menuIcon.png'

const TopNav = () => {
	return (
		<Flex px={['100','200']} color='white' bg='white'  height={'15vh'} alignItems='center'>
			<Image p={2} width={40} src={softLogo} />
							<Box mx='auto' />
			<Image p={2} src={menuLogo}/>

</Flex>	);
};

export default TopNav;
