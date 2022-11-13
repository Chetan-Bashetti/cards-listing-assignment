import Typography from 'components/Typography';
import React from 'react';
import styled from 'styled-components';

const StyledSelectorWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1em;
`;

const StyledSelectLabel = styled.div`
	background: #f8f8f8;
	color: black;
	padding: 1em;
`;

const OptionsWrapper = styled.div`
	position: absolute;
	width: 84%;
	margin-top: 3em;
	box-shadow: 1px 1px 8px lightgray;
	background: white;
`;

const StyledSelectOptions = styled.div`
	display: flex;
	padding: 1em;
	background: ${(props) => (props?.isSelected ? '#f8f8f8' : '')};
	&:hover {
		background: #f8f8f8;
		cursor: pointer;
	}
`;

const Select = ({
	allUsers = [],
	setSelectedUser = () => {},
	handleUserSelection = () => {}
}) => {
	const [showOptions, setShowOptions] = React.useState(false);
	return (
		<StyledSelectorWrapper>
			<StyledSelectLabel onClick={() => setShowOptions(!showOptions)}>
				<Typography
					text={
						allUsers[allUsers.findIndex((aa) => aa.isSelected)]?.userName
							? allUsers[allUsers.findIndex((aa) => aa.isSelected)]?.userName
							: 'Select a card holder'
					}
					color='#909090'
					fontSize='0.8em'
				/>
			</StyledSelectLabel>
			{showOptions ? (
				<OptionsWrapper>
					{allUsers?.map((eachOption, index) => (
						<StyledSelectOptions
							key={eachOption.userId}
							isSelected={eachOption?.isSelected}
							onClick={() => {
								setSelectedUser(eachOption.userId);
								handleUserSelection(index);
								setShowOptions(false);
							}}
						>
							<Typography
								text={eachOption.userName}
								color='#909090'
								fontSize='0.8em'
							/>
						</StyledSelectOptions>
					))}
				</OptionsWrapper>
			) : (
				''
			)}
		</StyledSelectorWrapper>
	);
};

export default Select;
