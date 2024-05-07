import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../../assets/market-sim-logo.png';
import ModalContainer from '../modals/ModalContainer';

const LaunchPage = ({
	MarketSimulatorStyles,
	setCurrentPageId,
	IndustryData,
}) => {
	const [openTime, setOpenTime] = useState(8); // 8 corresponds to '08:00'
	const [closeTime, setCloseTime] = useState(17);
	const [launchGameMenu, setLaunchGameMenu] = useState(false);
	const [daySelections, setDaySelections] = useState([
		{
			dayLong: 'Monday',
			dayShort: 'Mo',
			selected: true,
		},
		{
			dayLong: 'Tuesday',
			dayShort: 'Tu',
			selected: true,
		},
		{
			dayLong: 'Wednesday',
			dayShort: 'We',
			selected: true,
		},
		{
			dayLong: 'Thursday',
			dayShort: 'Th',
			selected: true,
		},
		{
			dayLong: 'Friday',
			dayShort: 'Fr',
			selected: true,
		},
		{
			dayLong: 'Saturday',
			dayShort: 'Sa',
			selected: true,
		},
		{
			dayLong: 'Sunday',
			dayShort: 'Su',
			selected: true,
		},
	]);
	const toggleDaySelection = (index) => {
		// Create a new array with all items
		const newDaySelections = [...daySelections];

		// Toggle the selected property of the element at the given index
		newDaySelections[index].selected = !newDaySelections[index].selected;

		// Update the state with the new array
		setDaySelections(newDaySelections);
	};
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
			<ModalContainer
				show={launchGameMenu}
				closeMenu={setLaunchGameMenu}
				header={'Launch Game'}
				nextBtnTitle={'Launch'}
				setCurrentPageId={setCurrentPageId}
				nextPageId={1}
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
							<Form.Control placeholder='Company ABC' />
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
									<Form.Control placeholder='Shop ABC' />
									<Form.Label style={{ marginTop: 25 }}>Industry:</Form.Label>
									<Form.Select aria-label='Default select example'>
										{IndustryData.sort((a, b) =>
											a.industryName.localeCompare(b.industryName)
										).map((industry) => {
											return (
												<option
													key={industry.industryId}
													value={industry.industryId}
												>
													{industry.icon} {industry.industryName}
												</option>
											);
										})}
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
											{daySelections.map((day, dayIndex) => {
												if (day.dayShort === 'Sa' || day.dayShort === 'Su') {
													return (
														<div
															key={dayIndex}
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
																style={{
																	border: `2px solid #ced4da`,
																	borderRadius: 3,
																	width: '100%',
																	height: '100%',
																	display: 'flex',
																	justifyContent: 'center',
																	alignItems: 'center',
																	color: 'white',
																	backgroundColor: '#ced4da',
																}}
															>
																<strong>{day.dayShort}</strong>
															</div>
														</div>
													);
												} else {
													return (
														<div
															key={dayIndex}
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
																onClick={() => toggleDaySelection(dayIndex)}
																style={{
																	border: `2px solid ${MarketSimulatorStyles.DarkModeColors.moduleBackground}`,
																	borderRadius: 3,
																	width: '100%',
																	height: '100%',
																	cursor: 'pointer',
																	display: 'flex',
																	justifyContent: 'center',
																	alignItems: 'center',
																	color: day.selected
																		? 'white'
																		: MarketSimulatorStyles.DarkModeColors
																				.moduleBackground,
																	backgroundColor: day.selected
																		? MarketSimulatorStyles.DarkModeColors
																				.moduleBackground
																		: 'white',
																}}
															>
																<strong>{day.dayShort}</strong>
															</div>
														</div>
													);
												}
											})}
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
											defaultValue='#00296b'
											title='Primary Color'
										/>
										<Form.Control
											type='color'
											defaultValue='#ffd500'
											title='Secondary Color'
										/>
									</div>
								</Form.Group>
							</div>
						</div>
					</div>
				</Form>
			</ModalContainer>
		</div>
	);
};

export default LaunchPage;
