import React from 'react';
import { Box, Flex } from 'rebass/styled-components';
import { ThemeProvider } from 'styled-components';
import './../index.css';


const breakpoints = ['70em', '90em', '110em'];

export const theme = {
	breakpoints,
	color: '#707070',
	colors: {
		text: '#707070',
		background: '##E5E5E5',
		primary: '#FDB913',
		secondary: '#0D1F2D',
		muted: '#f6f6f6',
		gray: '#505050',
		silent: '#959595',
		success: '#007f0a',
	},
	fonts: {
		body: 'Lato',
	},
	buttons: {
		primary: {
			minHeight: 50,
			minWidth: 230,
			borderRadius: 0,
			fontWeight: 300,
			cursor: 'pointer',
		},
	},
	lineHeights: {
		heading: 2,
		body: 1,
	},
	forms: {
		input: {
		  color: 'primary',
		},
	},	
	variants: {
		wrapper: {
			marginX: [10, 50, 100],
		},
		borderBox: {
			borderRadius: '2px',
			boxShadow:
				'rgb(0 0 0 / 12%) 0px 1px 6px, rgb(0 0 0 / 12%) 0px 1px 4px',
		},

	
	},
};

const Layout = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Layout;
