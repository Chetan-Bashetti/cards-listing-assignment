import All from 'containers/cardsListingWrapper/partails/listing/All';
import Your from 'containers/cardsListingWrapper/partails/listing/Your';
import Blocked from 'containers/cardsListingWrapper/partails/listing/Blocked';

const AllRoutes = [
	{
		route: '/your',
		label: 'Your',
		component: <Your />
	},
	{
		route: '/',
		label: 'All',
		component: <All />
	},

	{
		route: '/blocked',
		label: 'Blocked',
		component: <Blocked />
	}
];

export { AllRoutes };
