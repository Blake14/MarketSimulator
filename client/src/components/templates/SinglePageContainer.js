import React from 'react';

const SinglePageContainer = ({ children, MarketSimulatorStyles }) => {
	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: MarketSimulatorStyles.DarkModeColors.moduleBackground,
			}}
		>
			{children}
		</div>
	);
};

export default SinglePageContainer;
