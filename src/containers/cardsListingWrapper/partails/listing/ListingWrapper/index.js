import React from 'react';
import styled from 'styled-components';

import { Card, Filter, Typography, Input, Icon, Loader } from 'components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLocation } from 'react-router-dom';

const ListingContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`;

const ListingWrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: baseline;
	justify-content: center;
`;

const ListFilterWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 2em 0em;
`;

const FilterButton = styled.div`
	background: #f8f8f8;
	padding: 0.5em 1em;
	cursor: pointer;
	display: flex;
	align-items: center;
	box-shadow: 2px 2px 8px lightgrey;
	margin-right: ${(props) => (props?.margin ? props?.margin : '')};
`;

const SearchWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 35px;
`;

const LoaderMessage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 1em;
`;

const Listing = ({
	cards = [],
	allUsers,
	handleUserSelection = () => {},
	applyFilters = () => {},
	getCards = () => {},
	handleCardSelection = () => {},
	cardTypes,
	searchKey,
	setSearchKey,
	loadMore,
	hasMore,
	setIsFiltered = () => {}
}) => {
	let location = useLocation();
	const [isFilter, setIsFilter] = React.useState(false);
	const [isSearch, setIsSearch] = React.useState(false);

	const handleClear = () => {
		setIsFilter(false);
		setIsFiltered({});
		getCards(1);
	};

	return (
		<ListingContainer>
			{location.pathname === '/' ? (
				<ListFilterWrapper>
					<SearchWrapper>
						{isSearch ? (
							<Input value={searchKey} handleChange={setSearchKey} />
						) : (
							''
						)}
						<Icon
							icon='search'
							onClick={() => setIsSearch(!isSearch)}
							position='relative'
							right='35px'
						/>
					</SearchWrapper>
					<FilterButton onClick={() => handleClear()} margin='1em'>
						<Icon
							icon='refresh'
							color='#494646'
							size='1em'
							margin='0 0.5em 0 0'
						/>
						<Typography color='#494646' text='Refresh' fontSize='0.8em' />
					</FilterButton>
					<FilterButton onClick={() => setIsFilter(!isFilter)}>
						<Icon
							icon='filter_list'
							color='#494646'
							size='1em'
							margin='0 0.5em 0 0'
						/>
						<Typography color='#494646' text='Filter' fontSize='0.8em' />
					</FilterButton>
					{isFilter ? (
						<Filter
							setIsFilter={setIsFilter}
							allUsers={allUsers}
							handleUserSelection={handleUserSelection}
							applyFilters={applyFilters}
							getCards={getCards}
							handleCardSelection={handleCardSelection}
							cardTypes={cardTypes}
							setIsFiltered={setIsFiltered}
						/>
					) : (
						''
					)}
				</ListFilterWrapper>
			) : (
				''
			)}
			<InfiniteScroll
				dataLength={cards.length}
				next={loadMore}
				hasMore={hasMore}
				loader={<Loader />}
				endMessage={
					<LoaderMessage>
						<Typography
							text='All records loaded'
							color='#494646'
							fontSize='1em'
						/>
					</LoaderMessage>
				}
			>
				<ListingWrapper>
					{cards?.map((eachCard) => (
						<Card eachCard={eachCard} key={eachCard.id} />
					))}
				</ListingWrapper>
			</InfiniteScroll>
		</ListingContainer>
	);
};
export default Listing;
