import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalContainer = ({
	children,
	show,
	closeMenu,
	header,
	nextBtnTitle,
	setCurrentPageId,
	nextPageId,
	onNext,
	setIsUpdateClicked,
}) => {
	return (
		<Modal
			show={show}
			size='xl'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<Modal.Header closeButton style={{ backgroundColor: '#6c757d' }}>
				<Modal.Title
					id='contained-modal-title-vcenter'
					style={{ color: 'white', display: 'flex', position: 'relative' }}
				>
					{header}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body
				style={{
					backgroundColor: 'white',
					display: 'flex',
					userSelect: 'none',
				}}
			>
				{children}
			</Modal.Body>
			<Modal.Footer style={{ backgroundColor: '#6c757d' }}>
				<Button
					variant='info'
					onClick={() => {
						setIsUpdateClicked(true);
						onNext();
						setCurrentPageId(nextPageId);
					}}
				>
					{nextBtnTitle}
				</Button>

				<Button
					variant='danger'
					onClick={() => {
						closeMenu(false);
					}}
				>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalContainer;
