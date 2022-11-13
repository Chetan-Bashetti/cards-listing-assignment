import React from 'react';
import styled from 'styled-components';

import Typography from 'components/Typography';
import Icon from 'components/Icons';

const CardWrapper = styled.div`
	display: flex;
	padding: 1em;
	margin: 1em;
	box-shadow: 1px 1px 8px lightgrey;
	min-width: 400px;
	flex-direction: column;
	&:hover {
		transform: scale(1.05);
		transition: all 0.3s linear;
	}
`;

const CardDataWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const CardInfo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const CardTypeIcon = styled.div`
	display: flex;
	padding: 1em;
	background: #fff6f7;
	border-radius: 50%;
	box-shadow: 5px 4px 20px #dbdbdb;
`;

const Tag = styled.div`
	border: 1px solid lightgray;
	border-radius: 3px;
`;

const StatusBar = styled.div`
	height: 10px;
	margin: 1em 0em;
	background: #49935a;
	border-radius: 5px;
`;

const Exppenses = styled.div`
	flex: 1;
	margin: 0.5em;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const ExpensesWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const Dot = styled.div`
	height: 10px;
	width: 10px;
	background: ${(props) => (props?.bg ? props?.bg : '')};
	border-radius: 50%;
`;

const Card = ({ eachCard = {} }) => {
	return (
		<CardWrapper key={eachCard.name}>
			<CardDataWrapper>
				<CardInfo>
					<CardDataWrapper>
						<Typography text={eachCard.name} weight='600' color='#142434' />
						<Typography
							text={eachCard.owner_name + '  ·  ' + eachCard.budget_name}
							color='#979ea5'
							fontSize='1em'
							margin='0.5em 0'
						/>
					</CardDataWrapper>
					<CardTypeIcon>
						<Icon icon='mode_heat' color='#eb4869' />
					</CardTypeIcon>
				</CardInfo>
				<CardInfo>
					<Tag>
						<Typography
							text={eachCard.card_type}
							color='#979ea5'
							fontSize='0.8em'
							margin='0.1em 0.8em'
							transform='uppercase'
							weight='bold'
						/>
					</Tag>
					<Typography
						text={
							eachCard.card_type === 'burner'
								? 'Expires' + eachCard.expiry
								: 'August Limit: ' + eachCard.limit + ' SGD'
						}
						color='#979ea5'
						fontSize='0.8em'
						margin='0.1em 0.8em'
					/>
				</CardInfo>
			</CardDataWrapper>
			<StatusBar />
			<CardDataWrapper>
				<ExpensesWrapper>
					<Dot bg='#eb4869' />
					<Exppenses>
						<Typography text={'Spent'} color='#979ea5' fontSize='0.8em' />
						<Typography
							text={eachCard.spent.value}
							color='#979ea5'
							fontSize='0.8em'
							margin='0.1em 0.8em'
							transform='uppercase'
							weight='bold'
						/>
					</Exppenses>
				</ExpensesWrapper>
				<ExpensesWrapper>
					<Dot bg='#49935a' />
					<Exppenses>
						<Typography
							text='Available to spend'
							color='#979ea5'
							fontSize='0.8em'
						/>
						<Typography
							text={eachCard.available_to_spend.value}
							color='#979ea5'
							fontSize='0.8em'
							margin='0.1em 0.8em'
							transform='uppercase'
							weight='bold'
						/>
					</Exppenses>
				</ExpensesWrapper>
			</CardDataWrapper>
		</CardWrapper>
	);
};
export default Card;
