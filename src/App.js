import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import TopHeader from './components/TopHeader'
import {
	Box,
	Flex,
	Image,
	Text,
	Heading,
} from 'rebass/styled-components';
import TopNav from './components/TopNav';
import Benefits from './components/Benefits'
import img1 from './components/assets/img1.png';
import sliderPhoto from './components/assets/slider.png';
import Slider from './components/Slider';
import Header from './components/Header';
import Cards from './components/Cards';
import Features from './components/Features';
import Form from './components/Form';

function App() {
	return (
		<Layout>
			<TopNav />
			<Slider />
			<TopHeader/>
			{/* <Header /> */}
			{/* <Features /> */}
			<Benefits/>
			<Cards />
			<Form/>
		</Layout>
	);
}

export default App;
