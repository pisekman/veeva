import React from 'react';
import BenefitsTwo from './BenefitsTwo';
import BenefitsThree from './BenefitsThree';
import BenefitsFour from './BenefitsFour';
import BenefitsFive from './BenefitsFive';
import Benefits from './Benefits';

const BenefitsContainer = () => {
	return (
		<>
			<BenefitsTwo />
			<Benefits />
			<BenefitsThree />
			<BenefitsFour />
			<BenefitsFive />
		</>
	);
};

export default BenefitsContainer;
