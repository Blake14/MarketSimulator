import React, { useState, useEffect } from 'react';
import SinglePageContainer from './components/templates/SinglePageContainer';
import AppPointer from './components/utilities/AppPointer';
import { MarketSimulatorStyles } from './styles/Styles';
import { IndustryData } from './data/IndustryData';

const App = () => {
	const [currentPageId, setCurrentPageId] = useState(0);
	const [companyData, setCompanyData] = useState({
		parentCompanyName: 'Undefined',
		shopData: [
			{
				shopId: 1,
				shopName: 'Undefined Coffee Shop',
				industryId: 1,
				industryName: 'Coffee Shop',
				permClosed: false,
				employeeCnt: 0,
				level: 1,
				allowLunch: false,
				minWage: 11,
				allowTips: false,
				openHr: 6,
				closeHr: 15,
				openDays: ['Mo', 'Tu', 'We', 'Th', 'Fr'],
				lunchOpenHr: null,
				lunchCloseHr: null,
				colors: ['#00296b', '#ffd500'],
			},
		],
	});

	return (
		<SinglePageContainer MarketSimulatorStyles={MarketSimulatorStyles}>
			<AppPointer
				currentPageId={currentPageId}
				MarketSimulatorStyles={MarketSimulatorStyles}
				setCurrentPageId={setCurrentPageId}
				IndustryData={IndustryData}
				companyData={companyData}
				setCompanyData={setCompanyData}
			/>
		</SinglePageContainer>
	);
};

export default App;
