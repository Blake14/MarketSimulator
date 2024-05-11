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
	console.log('Current Page ID:', currentPageId); // Log to check what currentPageId is being set to

	switch (currentPageId) {
		case 0:
			return (
				<LaunchPage
					MarketSimulatorStyles={MarketSimulatorStyles}
					setCurrentPageId={setCurrentPageId}
					IndustryData={IndustryData}
					companyData={companyData}
					setCompanyData={setCompanyData}
				/>
			);
		case 1:
			return (
				<Homepage
					MarketSimulatorStyles={MarketSimulatorStyles}
					setCurrentPageId={setCurrentPageId}
					companyData={companyData}
				/>
			);
		default:
			return <div>No page found.</div>;
	}
};

export default AppPointer;
