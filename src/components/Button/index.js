import React from 'react';
import Typography from 'components/Typography';
import styled from 'styled-components';
import { BUTTON_POSTIVE } from 'theme';

const StyledButton = styled.div`
	margin: 0.5em;
	background: ${(props) => (props.bg ? BUTTON_POSTIVE : 'white')};
	width: 100%;
	align-items: center;
	justify-content: center;
	display: flex;
	padding: 0.5em;
	border-radius: 4px;
	box-shadow: 1px 1px 8px lightgrey;
	cursor: pointer;
`;

const Button = ({ text = '', bg = '', color = '', onClick = () => {} }) => {
	return (
		<StyledButton bg={bg} onClick={onClick}>
			<Typography text={text} color={color} fontSize='0.8em' />
		</StyledButton>
	);
};

export default Button;
