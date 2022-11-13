import Typography from 'components/Typography';
import styled from 'styled-components';
import { BUTTON_POSTIVE, LIT_GRAY } from 'theme';

const CheckBoxWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	cursor: pointer;
`;

const StyledCheckbox = styled.div`
	background: ${(props) => (props?.isSelected ? `${BUTTON_POSTIVE}` : 'white')};
	border: 0.2px solid ${LIT_GRAY};
	color: white;
	font-size: 0.9em;
	padding: 0.1em;
	width: 15px;
	height: 15px;
	text-align: center;
	border-radius: 4px;
	box-shadow: 0px 0px 3px lightgrey;
	cursor: pointer;
	margin-right: 0.5em;
`;

const CheckBox = ({ isSelected, text, setCardTypes = () => {}, index }) => {
	return (
		<CheckBoxWrapper onClick={() => setCardTypes(index)}>
			<StyledCheckbox isSelected={isSelected}>
				{isSelected ? '✓' : ''}
			</StyledCheckbox>
			<Typography text={text} color='#494646' fontSize='0.8em' />
		</CheckBoxWrapper>
	);
};

export default CheckBox;
