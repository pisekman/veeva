import logo from './logo.svg';
// import './App.css';
import Layout from './components/Layout';
import { Box, Flex, Image, Heading } from 'rebass/styled-components';
import TopNav from './components/TopNav';
import img1 from './components/assets/img1.png';
import sliderPhoto from './components/assets/slider.png';
import Slider from './components/Slider';

function App() {
	return (
		<Layout>
			<TopNav />
			<Slider />
		</Layout>
	);
}

export default App;
