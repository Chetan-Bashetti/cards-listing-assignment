import React from 'react';
import styled from 'styled-components';

import { CheckBox, Typography, Select, Button, Icon } from 'components';

const FilterWrapper = styled.div`
	display: flex;
	width: 400px;
	position: absolute;
	background: white;
	box-shadow: 1px 1px 8px lightgrey;
	border-radius: 5px;
	z-index: 999;
	margin-top: 2.3em;
	flex-direction: column;
`;

const FilterHeader = styled.div`
	padding: 1em;
	border-bottom: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const FilterBody = styled.div`
	padding: 1em 2em;
	display: flex;
	flex-direction: column;
`;

const FilterTypeSelector = styled.div`
	display: flex;
	flex-direction: column;
`;

const FilterTypes = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 1em;
`;

const FilterUserSelector = styled.div`
	display: flex;
	margin-top: 1em;
	flex-direction: column;
`;

const FilterFooter = styled.div`
	display: flex;
	flex-direction: row;
	padding: 0em 1.5em 1em 1.5em;
`;

const Filter = ({
	setIsFilter,
	allUsers = [],
	handleUserSelection,
	applyFilters = () => {},
	getCards = () => {},
	cardTypes = [],
	handleCardSelection = () => {},
	setIsFiltered = () => {}
}) => {
	const handleClear = () => {
		setIsFilter(false);
		setIsFiltered({});
		getCards(1);
	};
	return (
		<FilterWrapper>
			<FilterHeader>
				<Typography text='Filters' color='#494646' fontSize='0.8em' />
				<Icon icon='close' onClick={() => setIsFilter(false)} />
			</FilterHeader>
			<FilterBody>
				<FilterTypeSelector>
					<Typography text='Type' color='#909090' fontSize='0.8em' />
					<FilterTypes>
						{cardTypes?.map((eachCardType, index) => (
							<CheckBox
								key={index}
								isSelected={eachCardType.isSelected}
								text={eachCardType.label}
								index={index}
								setCardTypes={handleCardSelection}
							/>
						))}
					</FilterTypes>
				</FilterTypeSelector>
				<FilterUserSelector>
					<Typography text='Card holder' color='#909090' fontSize='0.8em' />
					<Select
						allUsers={allUsers}
						handleUserSelection={handleUserSelection}
					/>
				</FilterUserSelector>
			</FilterBody>
			<FilterFooter>
				<Button
					text='Apply'
					bg={true}
					color='white'
					onClick={() => {
						applyFilters();
						setIsFilter(false);
					}}
				/>
				<Button text='Clear' color='#909090' onClick={() => handleClear()} />
			</FilterFooter>
		</FilterWrapper>
	);
};

export default Filter;
