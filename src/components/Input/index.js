import styled from 'styled-components';
import { LIT_GRAY } from 'theme';

const StyledInput = styled.input`
	width: 300px;
	height: 32px;
	border: 1px solid ${LIT_GRAY};
	border-radius: 50px;
	outline: none;
	padding-left: 1em;
	color: #797979;
`;

const Input = ({ value, handleChange }) => {
	return (
		<StyledInput value={value} onChange={(e) => handleChange(e.target.value)} />
	);
};

export default Input;
