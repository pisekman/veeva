import logo from './logo.svg';
import './App.css';

import Layout from './components/Layout';
import { Box, Flex, Image, Text ,Heading } from 'rebass/styled-components';
import TopNav from './components/TopNav';
import img1 from './components/assets/img1.png';
import sliderPhoto from './components/assets/slider.png';
import Slider from './components/Slider';
import Header from './components/Header';
import Cards from './components/Cards';
import data from './data';

function App() {
	return (
		<Layout>
			<TopNav />
			<Slider />
			<Header />
			{data.map((data, i) => {
				return (
					<Flex variant='wrapper'>
					<Box bg={'primary'} height={'30%'}>
						<h1 key={data.id}>{data.title}</h1>
						<Box
							sx={{
								outline: '5px solid white',
								outlineOffset: '-15px',
							}}
						>
							<img key={data.id} src={data.img} />
						</Box>
						<Text>{data.text}</Text>
					</Box>
					</Flex>
				);
			})}
			<Cards />
		</Layout>
	);
}

export default App;
