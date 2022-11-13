import { Icon, Tab, Typography } from 'components';
import React from 'react';
import styled from 'styled-components';

import { AllRoutes } from 'Routes';

const HeaderWrapper = styled.div`
	display: flex;
	border-bottom: 1px solid lightgray;
	flex-direction: column;
`;

const HeaderTitleWrapper = styled.div`
	padding-bottom: 1em;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const HeaderActionsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const HeaderTabsWrapper = styled.div`
	display: flex;
`;

const HeadersFiltersWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

const LearMore = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 1em;
	background: #f8f8f8;
	padding: 0.2em;
`;

const AddCardButton = styled.div`
	display: flex;
	padding: 0.7em;
	align-items: center;
	justify-content: center;
	box-shadow: 1px 1px 8px lightgray;
	cursor: pointer;
`;

const Info = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Header = ({ tabs = [], handleTabSelection = () => {} }) => {
	return (
		<HeaderWrapper>
			<HeaderTitleWrapper>
				<Info>
					<Typography text='Virtual cards' weight='bold' />
					<LearMore>
						<Icon icon='videocam' color='#3175e3' size='0.8em' />
						<Typography
							text='Learn more'
							fontSize='0.7em'
							color='#3175e3'
							margin='0 0.5em'
							weight='600'
						/>
					</LearMore>
				</Info>
				<AddCardButton>
					<Icon icon='add' color='#262626' size='1em' />
					<Typography
						text='Virtual card'
						fontSize='0.8em'
						color='#262626'
						margin='0 0.5em'
						weight='600'
					/>
				</AddCardButton>
			</HeaderTitleWrapper>
			<HeaderActionsWrapper>
				<HeaderTabsWrapper>
					{AllRoutes?.map((eachTab, id) => (
						<Tab
							key={id}
							index={id}
							eachTab={eachTab}
							handleTabSelection={handleTabSelection}
						/>
					))}
				</HeaderTabsWrapper>
				<HeadersFiltersWrapper>
					<Icon
						icon='grid_view'
						color='#707070'
						size='1em'
						margin='0 0.5em 0 0'
					/>
					<Icon
						icon='reorder'
						color='#1e1e1e'
						size='1.1em'
						margin='0 0.5em 0 0'
					/>
				</HeadersFiltersWrapper>
			</HeaderActionsWrapper>
		</HeaderWrapper>
	);
};
export default Header;
