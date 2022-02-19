import logo from './logo.svg';
import './App.css';

import Layout from './components/Layout';
import {
	Box,
	Flex,
	Image,
	Text,
	Heading,
} from 'rebass/styled-components';
import TopNav from './components/TopNav';
import img1 from './components/assets/img1.png';
import sliderPhoto from './components/assets/slider.png';
import Slider from './components/Slider';
import Header from './components/Header';
import Cards from './components/Cards';
import Features from './components/Features';

function App() {
	return (
		<Layout>
			<TopNav />
			<Slider />
			<Header />
			<Features />
			<Cards />
		</Layout>
	);
}

export default App;
