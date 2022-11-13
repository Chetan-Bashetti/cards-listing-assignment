/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './partails';

import { AllRoutes } from 'Routes';

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
	return (
		<ListWrapper>
			<Router>
				<Header />
				<Routes>
					{AllRoutes?.map((eachRoute) => (
						<Route
							path={eachRoute.route}
							key={eachRoute.route}
							element={eachRoute.component}
						></Route>
					))}
				</Routes>
			</Router>
		</ListWrapper>
	);
};
export default CardsListing;
