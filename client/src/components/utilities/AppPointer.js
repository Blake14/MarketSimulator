import React from 'react';
import LaunchPage from '../homepage/LaunchPage';
import Homepage from '../homepage/Homepage';

const AppPointer = ({
	currentPageId,
	MarketSimulatorStyles,
	setCurrentPageId,
	IndustryData,
	companyData,
	setCompanyData,
}) => {
	if (currentPageId === 0) {
		return (
			<LaunchPage
				MarketSimulatorStyles={MarketSimulatorStyles}
				setCurrentPageId={setCurrentPageId}
				IndustryData={IndustryData}
				companyData={companyData}
				setCompanyData={setCompanyData}
			/>
		);
	} else if (currentPageId === 1) {
		return (
			<Homepage
				MarketSimulatorStyles={MarketSimulatorStyles}
				setCurrentPageId={setCurrentPageId}
			/>
		);
	}
};

export default AppPointer;
