import React from 'react';

const NavigationBar = ({ styles, parentCompanyName }) => {
	return <div style={styles}>{parentCompanyName}</div>;
};

export default NavigationBar;
