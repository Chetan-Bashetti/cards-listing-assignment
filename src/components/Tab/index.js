import styled from 'styled-components';
import { BUTTON_POSTIVE } from 'theme';
import { useLocation, Link } from 'react-router-dom';

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

const Tab = ({ eachTab = {} }) => {
	let location = useLocation();

	return (
		<Link
			to={eachTab.route}
			style={{ textDecoration: 'none', color: '#909090' }}
		>
			<StyledTab isSelected={location.pathname === eachTab.route}>
				{eachTab.label}
			</StyledTab>
		</Link>
	);
};

export default Tab;
