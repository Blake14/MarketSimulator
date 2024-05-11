import React from 'react';
import NavigationBar from './NavigationBar';
import NavMenuBar from './NavMenuBar';

const Homepage = ({ companyData }) => {
	const NavbarHeight = 80;
	const SubMenuBarHeight = 50;
	const FooterHeight = 80;
	const OverallPadding = 30;
	const HomepageStyles = {
		Navbar: {
			height: NavbarHeight,
			width: '100%',
			position: 'absolute',
			top: 0,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			border: '2px solid red',
			paddingLeft: OverallPadding,
			paddingRight: OverallPadding,
		},
		MenuBar: {
			height: SubMenuBarHeight,
			width: '100%',
			position: 'absolute',
			top: NavbarHeight,
			display: 'flex',
			justifyContent: 'space-evenly',
			alignItems: 'center',
			border: '2px solid red',
			fontSize: 18,
			paddingLeft: OverallPadding,
			paddingRight: OverallPadding,
		},
		Footer: {
			height: FooterHeight,
			width: '100%',
			position: 'absolute',
			bottom: 0,
			display: 'flex',
			justifyContent: 'space-evenly',
			alignItems: 'center',
			border: '2px solid green',
			fontSize: 18,
			paddingLeft: OverallPadding,
			paddingRight: OverallPadding,
		},
		MainContainer: {
			height: '100%',
			width: '100%',
			display: 'flex',
			border: '2px solid blue',
			paddingTop: NavbarHeight + SubMenuBarHeight,
			paddingBottom: FooterHeight,
			paddingLeft: OverallPadding,
			paddingRight: OverallPadding,
		},
	};
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: 24,
				color: 'white',
				position: 'relative',
			}}
		>
			<NavigationBar
				styles={HomepageStyles.Navbar}
				parentCompanyName={companyData.parentCompanyName}
			/>
			<NavMenuBar styles={HomepageStyles.MenuBar} companyData={companyData} />
			<div style={HomepageStyles.MainContainer}></div>
			<div style={HomepageStyles.Footer}></div>
		</div>
	);
};

export default Homepage;
