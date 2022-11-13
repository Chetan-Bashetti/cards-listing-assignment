import styled from 'styled-components';
import { BUTTON_POSTIVE } from 'theme';

const StyledTab = styled.div`
	margin: 0em 1em;
	padding: 1em 0em;
	position: relative;
	border-bottom: ${(props) =>
		props.isSelected === true ? `3px solid ${BUTTON_POSTIVE}` : ''};
	color: ${(props) => (props.isSelected === true ? '' : '#909090')};
	cursor: pointer;
	top: 2px;
`;

const Tab = ({ eachTab = {}, handleTabSelection = () => {}, index = 0 }) => {
	return (
		<StyledTab
			isSelected={eachTab.isSelected}
			onClick={() => handleTabSelection(index)}
		>
			{eachTab.label}
		</StyledTab>
	);
};

export default Tab;
