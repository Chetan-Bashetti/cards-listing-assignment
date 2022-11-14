/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import styled from 'styled-components';
import Listing from '../ListingWrapper';

const Wrapper = styled.div`
	padding-top: 2em;
`;

const Your = () => {
	const [cards, setCards] = useState([]);
	const [page, setPage] = React.useState(1);
	const [hasMore, setHasMore] = React.useState(true);

	React.useEffect(() => {
		getCards(page, { owner_id: 1 });
	}, []);

	const getCards = async (page, filters) => {
		let res = await fetch('/cardsData.json')
			.then((res) => res.json())
			.then((data) => data);

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
	};

	const loadMore = () => {
		let updatedPage = page + 1;
		setPage(updatedPage);
		setTimeout(() => {
			getCards(updatedPage, { owner_id: 1 });
		}, 2000);
	};

	return (
		<Wrapper>
			<Listing
				cards={cards}
				getCards={getCards}
				loadMore={loadMore}
				hasMore={hasMore}
			/>
		</Wrapper>
	);
};
export default Your;
