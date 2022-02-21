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
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionThree';

function App() {
	return (
		<Layout>
			<TopNav />
			<Slider />
			<TopHeader/>
			{/* <Header /> */}
			{/* <Features /> */}
			<Benefits/>
			<SectionTwo/>
			<SectionThree/>
			<SectionFour/>
			<SectionFive/>
			<Cards />
			<Form/>
		</Layout>
	);
}

export default App;
