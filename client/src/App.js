import React, { useState, useEffect } from 'react';
import SinglePageContainer from './components/templates/SinglePageContainer';
import AppPointer from './components/utilities/AppPointer';
import { MarketSimulatorStyles } from './styles/Styles';
import { IndustryData } from './data/IndustryData';

const App = () => {
	const [currentPageId, setCurrentPageId] = useState(0);

	return (
		<SinglePageContainer MarketSimulatorStyles={MarketSimulatorStyles}>
			<AppPointer
				currentPageId={currentPageId}
				MarketSimulatorStyles={MarketSimulatorStyles}
				setCurrentPageId={setCurrentPageId}
				IndustryData={IndustryData}
			/>
		</SinglePageContainer>
	);
};

export default App;
