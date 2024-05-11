import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import logo from '../../assets/market-sim-logo.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LaunchPage = ({
	MarketSimulatorStyles,
	setCurrentPageId,
	IndustryData,
	companyData,
	setCompanyData,
}) => {
	const [parentCompanyName, setParentCompanyName] = useState(
		companyData.parentCompanyName
	);
	const [shopName, setShopName] = useState(companyData.shopData[0].shopName);
	const [industryId, setIndustryId] = useState(
		companyData.shopData[0].industryId
	);
	const [employeeCnt, setEmployeeCnt] = useState(
		companyData.shopData[0].employeeCnt
	);
	const [minWage, setMinWage] = useState(companyData.shopData[0].minWage);
	const [allowTips, setAllowTips] = useState(companyData.shopData[0].allowTips);
	const [openTime, setOpenTime] = useState(companyData.shopData[0].openHr);
	const [closeTime, setCloseTime] = useState(companyData.shopData[0].closeHr);
	const [primaryColor, setPrimaryColor] = useState(
		companyData.shopData[0].colors[0] || '#00296b'
	);
	const [secondaryColor, setSecondaryColor] = useState(
		companyData.shopData[0].colors[1] || '#ffd500'
	);

	const [lunchOpenHr, setLunchOpenHr] = useState(
		companyData.shopData[0].lunchOpenHr
	);
	const [lunchCloseHr, setLunchCloseHr] = useState(
		companyData.shopData[0].lunchCloseHr
	);
	const [isUpdateClicked, setIsUpdateClicked] = useState(false);
	const [launchGameMenu, setLaunchGameMenu] = useState(false);
	const fullWeek = [
		{
			dayLong: 'Monday',
			dayShort: 'Mo',
			selected: companyData.shopData[0].openDays.includes('Mo'),
		},
		{
			dayLong: 'Tuesday',
			dayShort: 'Tu',
			selected: companyData.shopData[0].openDays.includes('Tu'),
		},
		{
			dayLong: 'Wednesday',
			dayShort: 'We',
			selected: companyData.shopData[0].openDays.includes('We'),
		},
		{
			dayLong: 'Thursday',
			dayShort: 'Th',
			selected: companyData.shopData[0].openDays.includes('Th'),
		},
		{
			dayLong: 'Friday',
			dayShort: 'Fr',
			selected: companyData.shopData[0].openDays.includes('Fr'),
		},
		{ dayLong: 'Saturday', dayShort: 'Sa', selected: false }, // Non-interactive
		{ dayLong: 'Sunday', dayShort: 'Su', selected: false }, // Non-interactive
	];

	const [daySelections, setDaySelections] = useState(fullWeek);
	const toggleDaySelection = (index) => {
		if (index < 5) {
			const newDaySelections = [...daySelections];
			newDaySelections[index].selected = !newDaySelections[index].selected;

			setDaySelections(newDaySelections);

			const updatedOpenDays = newDaySelections
				.filter((day, idx) => day.selected && idx < 5)
				.map((day) => day.dayShort);
			const newCompanyData = {
				...companyData,
				shopData: companyData.shopData.map((shop) => ({
					...shop,
					openDays: updatedOpenDays,
				})),
			};
			setCompanyData(newCompanyData);
		}
	};
	const handleUpdateCompanyData = () => {
		const updatedCompanyData = {
			...companyData,
			parentCompanyName,
			shopData: [
				{
					...companyData.shopData[0],
					shopName,
					industryId,
					employeeCnt,
					minWage,
					allowTips,
					openHr: openTime,
					closeHr: closeTime,
					colors: [primaryColor, secondaryColor],
					lunchOpenHr,
					lunchCloseHr,
				},
			],
		};

		setCompanyData(updatedCompanyData);
		setIsUpdateClicked(true);
	};

	useEffect(() => {
		if (isUpdateClicked) {
			setCurrentPageId(1);
			setIsUpdateClicked(false);
			console.log(companyData);
			setCurrentPageId(1);
		}
	}, [companyData]);

	return (
		<div>
			<Image src={logo} />
			<div
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					padding: 50,
				}}
			>
				<Button
					variant='light'
					onClick={() => {
						setLaunchGameMenu(true);
					}}
				>
					Start Game
				</Button>
				<Button variant='light'>Demo</Button>
				<Button variant='light'>Settings</Button>
			</div>
			<Modal
				show={launchGameMenu}
				size='xl'
				aria-labelledby='contained-modal-title-vcenter'
				centered
			>
				<Modal.Header closeButton style={{ backgroundColor: '#6c757d' }}>
					<Modal.Title
						id='contained-modal-title-vcenter'
						style={{ color: 'white', display: 'flex', position: 'relative' }}
					>
						Launch First Game
					</Modal.Title>
				</Modal.Header>
				<Modal.Body
					style={{
						backgroundColor: 'white',
						display: 'flex',
						userSelect: 'none',
					}}
				>
					<Form
						style={{
							width: '100%',
						}}
					>
						<div
							style={{
								paddingLeft: 25,
								paddingRight: 25,
								width: '100%',
							}}
						>
							<Form.Group className='mb-3' controlId='formBasicEmail'>
								<Form.Label>Parent Company Name:</Form.Label>
								<Form.Control
									value={parentCompanyName}
									onChange={(e) => setParentCompanyName(e.target.value)}
								/>
							</Form.Group>
						</div>
						<hr />
						<div
							style={{
								width: '100%',
								display: 'flex',
							}}
						>
							<div
								style={{
									width: '50%',
								}}
							>
								<div
									style={{
										//border: `2px solid ${MarketSimulatorStyles.DarkModeColors.moduleBackground}`,
										paddingLeft: 25,
										paddingRight: 25,
										paddingTop: 20,
										paddingBottom: 20,
										borderRadius: 8,
									}}
								>
									<Form.Group className='mb-3' controlId='formBasicEmail'>
										<Form.Label>Shop Name:</Form.Label>
										<Form.Control
											placeholder='Shop ABC'
											value={shopName}
											onChange={(e) => setShopName(e.target.value)}
										/>
										<Form.Label style={{ marginTop: 25 }}>Industry:</Form.Label>
										<Form.Select
											value={industryId}
											onChange={(e) => setIndustryId(e.target.value)}
											aria-label='Default select example'
										>
											{IndustryData.sort((a, b) =>
												a.industryName.localeCompare(b.industryName)
											).map((industry) => (
												<option
													key={industry.industryId}
													value={industry.industryId}
												>
													{industry.industryName}
												</option>
											))}
										</Form.Select>
									</Form.Group>
								</div>
							</div>
							<div
								style={{
									width: '50%',
								}}
							>
								<div
									style={{
										//border: `2px solid ${MarketSimulatorStyles.DarkModeColors.moduleBackground}`,
										paddingLeft: 25,
										paddingRight: 25,
										paddingTop: 20,
										paddingBottom: 20,
										borderRadius: 8,
									}}
								>
									<Form.Group className='mb-3' controlId='formBasicEmail'>
										<div
											style={{
												display: 'flex',
												width: '100%',
												justifyContent: 'space-evenly',
											}}
										>
											<div>
												<Form.Label>Open Time</Form.Label>
												<Form.Select
													aria-label='Open time select'
													value={openTime}
													onChange={(e) => setOpenTime(e.target.value)}
												>
													{[...Array(24)].map((_, hr) => {
														const hourString = `${hr >= 10 ? hr : `0${hr}`}:00`;
														return (
															<option key={hr} value={hr}>
																{hourString}
															</option>
														);
													})}
												</Form.Select>
											</div>
											<div>
												<Form.Label>Close Time</Form.Label>
												<Form.Select
													aria-label='Close time select'
													value={closeTime}
													onChange={(e) => setCloseTime(e.target.value)}
												>
													{[...Array(24)].map((_, hr) => {
														const hourString = `${hr >= 10 ? hr : `0${hr}`}:00`;
														return (
															<option key={hr} value={hr}>
																{hourString}
															</option>
														);
													})}
												</Form.Select>
											</div>
											<div
												style={{
													display: 'flex',
													height: 95,
													//border: '2px solid red',
													alignItems: 'center',
												}}
											>
												{daySelections.map((day, index) => (
													<div
														key={index}
														style={{
															width: 35,
															height: 35,
															padding: 2,
															margin: 2,
															fontSize: 13,
															fontVariant: 'all-petite-caps',
														}}
													>
														<div
															onClick={() => toggleDaySelection(index)}
															style={{
																border: `2px solid ${
																	!day.selected
																		? '#ced4da'
																		: MarketSimulatorStyles.DarkModeColors
																				.moduleBackground
																}`,
																borderRadius: 3,
																width: '100%',
																height: '100%',
																display: 'flex',
																justifyContent: 'center',
																alignItems: 'center',
																color: 'white',
																backgroundColor: day.selected
																	? MarketSimulatorStyles.DarkModeColors
																			.moduleBackground
																	: '#ced4da',
																cursor: index < 5 ? 'pointer' : 'default',
															}}
														>
															<strong>{day.dayShort}</strong>
														</div>
													</div>
												))}
											</div>
										</div>
										<Form.Label>Shop Colors:</Form.Label>
										<div
											style={{
												display: 'flex',
												width: 150,
												justifyContent: 'space-evenly',
											}}
										>
											<Form.Control
												type='color'
												value={primaryColor}
												onChange={(e) => setPrimaryColor(e.target.value)}
												title='Primary Color'
											/>
											<Form.Control
												type='color'
												value={secondaryColor}
												onChange={(e) => setSecondaryColor(e.target.value)}
												title='Secondary Color'
											/>
										</div>
									</Form.Group>
								</div>
							</div>
						</div>
					</Form>
				</Modal.Body>
				<Modal.Footer style={{ backgroundColor: '#6c757d' }}>
					<Button variant='info' onClick={handleUpdateCompanyData}>
						Launch
					</Button>

					<Button
						variant='danger'
						onClick={() => {
							setLaunchGameMenu(false);
						}}
					>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default LaunchPage;
