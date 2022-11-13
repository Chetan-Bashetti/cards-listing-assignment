/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from 'styled-components';

import { Header, Listing } from './partails';

const ListWrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	@media only screen and (min-width: 320px) {
		padding: 1em;
	}
	@media only screen and (min-width: 650px) {
		padding: 1em;
	}
	@media only screen and (min-width: 850px) {
		padding: 2em;
	}
	@media only screen and (min-width: 1440px) {
		padding: 3em;
	}
	@media only screen and (min-width: 1992px) {
		padding: 5em;
	}
	@media only screen and (min-width: 2440px) {
		padding: 6em;
	}
`;

const CardsListing = () => {
	const [cards, setCards] = React.useState([]);
	const [tabs, setTabs] = React.useState([
		{
			label: 'Your',
			value: 'your',
			isSelected: false
		},
		{
			label: 'All',
			value: 'all',
			isSelected: true
		},
		{
			label: 'Blocked',
			value: 'blocked',
			isSelected: false
		}
	]);
	const [selectedTab, setSelectedTab] = React.useState('all');
	const [allUsers, setAllUsers] = React.useState([]);
	const [cardTypes, setCardTypes] = React.useState([
		{
			label: 'Subscription',
			value: 'subscription',
			isSelected: false
		},
		{
			label: 'Burner',
			value: 'burner',
			isSelected: false
		}
	]);
	const [searchKey, setSearchKey] = React.useState('');
	const [page, setPage] = React.useState(1);
	const [isFiltered, setIsFiltered] = React.useState({});
	const [hasMore, setHasMore] = React.useState(true);

	React.useEffect(() => {
		getCards(page);
	}, []);

	const getCards = async (
		page,
		isFiltering = false,
		searching = false,
		filters,
		searchText
	) => {
		let res = await fetch('http://localhost:3000/cardsData.json')
			.then((res) => res.json())
			.then((data) => data);

		if (isFiltering) {
			let data = [];
			data = res.data?.filter((row) => {
				return Object.keys(filters).every(
					(propertyName) =>
						row[propertyName]
							.toString()
							.toLowerCase()
							.indexOf(filters[propertyName].toString().toLowerCase()) > -1
				);
			});
			setCards(data.slice(0, page * 10));
			setHasMore(page * 10 < data.length);
		} else if (searching) {
			let data = [];
			data = res.data?.filter((row) =>
				row?.name.toLowerCase().includes(searchText)
			);
			setCards(data.slice(0, page * 10));
			setHasMore(page * 10 < data.length);
		} else {
			let users = res.data?.map((eachUser) => {
				return {
					userId: eachUser.owner_id,
					userName: eachUser.owner_name,
					isSelected: false
				};
			});
			const ids = users.map((o) => o.userId);
			const filtered = users.filter(
				({ userId }, index) => !ids.includes(userId, index + 1)
			);
			setAllUsers(filtered);
			setCards(res.data.slice(0, page * 10));
			setHasMore(page * 10 < res.total);
		}
	};

	const handleTabSelection = (index) => {
		let exestingTabs = [...tabs];
		exestingTabs = exestingTabs?.map((eachTab, id) => {
			return { ...eachTab, isSelected: id === index ? true : false };
		});
		setSelectedTab(exestingTabs[index].value);
		setTabs(exestingTabs);
		if (exestingTabs[index].value === 'your') {
			getCards(1, true, false, { owner_id: 1 });
		} else {
			getCards(1);
		}
	};

	const handleUserSelection = (index) => {
		let exestingUsers = [...allUsers];
		exestingUsers = exestingUsers?.map((eachTab, id) => {
			return { ...eachTab, isSelected: id === index ? true : false };
		});
		setAllUsers(exestingUsers);
	};

	const applyFilters = () => {
		let filters = {
			owner_id: allUsers[allUsers.findIndex((aa) => aa.isSelected)]?.userId
				? allUsers[allUsers.findIndex((aa) => aa.isSelected)]?.userId
				: '',
			card_type: cardTypes[cardTypes.findIndex((aa) => aa.isSelected)]?.value
				? cardTypes[cardTypes.findIndex((aa) => aa.isSelected)]?.value
				: ''
		};
		setIsFiltered(filters);
		getCards(page, true, false, filters);
	};

	const handleCardSelection = (index) => {
		let exestingCardsTypes = [...cardTypes];
		exestingCardsTypes = exestingCardsTypes?.map((eachTab, id) => {
			return {
				...eachTab,
				isSelected: id === index ? !exestingCardsTypes[index].isSelected : false
			};
		});
		setCardTypes(exestingCardsTypes);
	};

	const debounce = (cb, delay) => {
		let timer;
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			cb();
		}, delay);
		return timer;
	};

	const handleChange = (val) => {
		setSearchKey(val);
		debounce(() => {
			getCards(page, false, true, [], val);
		}, 1000);
	};

	const loadMore = () => {
		let updatedPage = page + 1;
		setPage(updatedPage);
		if (searchKey.length) {
			getCards(updatedPage, false, true, [], searchKey);
		}
		if (Object.keys(isFiltered).length) {
			getCards(updatedPage, true, false, isFiltered);
		} else {
			// ADDED TIMEOUT SEE LOAD MORE FUNCTIONALITY
			setTimeout(() => {
				getCards(updatedPage);
			}, 2000);
		}
	};

	return (
		<ListWrapper>
			<Header tabs={tabs} handleTabSelection={handleTabSelection} />
			<Listing
				cards={cards}
				selectedTab={selectedTab}
				allUsers={allUsers}
				handleUserSelection={handleUserSelection}
				applyFilters={applyFilters}
				getCards={getCards}
				handleCardSelection={handleCardSelection}
				cardTypes={cardTypes}
				searchKey={searchKey}
				setSearchKey={handleChange}
				loadMore={loadMore}
				hasMore={hasMore}
				setIsFiltered={setIsFiltered}
			/>
		</ListWrapper>
	);
};
export default CardsListing;
