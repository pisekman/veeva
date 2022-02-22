import './App.css';
import Layout from './components/Layout';
import TopHeader from './components/TopHeader';
import TopNav from './components/TopNav';
import Slider from './components/Slider';
import Cards from './components/Cards';
import Form from './components/Form';
import BenefitsContainer from './components/BenefitsContainer';
import Footer from './components/Footer';

function App() {
	return (
		<Layout>
			<TopNav />
			<Slider />
			<TopHeader />
			<BenefitsContainer />
			<Cards />
			<Form />
			<Footer/>
		</Layout>
	);
}

export default App;
