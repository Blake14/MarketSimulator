import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoIosSettings } from 'react-icons/io';

const NavMenuBar = ({ styles, companyData }) => {
	const MenuItems = [
		{
			name: 'Home',
		},
		{
			name: 'Street Data',
		},
		{
			name: 'Social Media',
			options: companyData.shopData,
		},
		{
			name: 'My Shops',
			options: companyData.shopData,
		},
		{
			name: 'Finance',
			options: companyData.shopData,
		},
		{
			name: 'Settings',
		},
	];
	return (
		<div style={styles}>
			{MenuItems.map((item, itemIndex) => {
				switch (item.name) {
					case 'My Shops':
						return (
							<NavDropdown
								key={itemIndex}
								title={item.name}
								style={{
									cursor: 'pointer',
								}}
							>
								{(item.options || ['None']).map((subItem, subItemIndex) => {
									return (
										<NavDropdown.Item key={subItemIndex}>
											{subItem.shopName}
										</NavDropdown.Item>
									);
								})}
							</NavDropdown>
						);
					default:
						return (
							<div
								key={itemIndex}
								style={{
									cursor: 'pointer',
								}}
							>
								{item.name}
							</div>
						);
				}
			})}
		</div>
	);
};
export default NavMenuBar;
