import { Typography } from 'components';
import styled from 'styled-components';

const ListingContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const Blocked = () => {
	return (
		<ListingContainer>
			<Typography text='No blocked cards found' />
		</ListingContainer>
	);
};
export default Blocked;
