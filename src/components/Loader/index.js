import styled from 'styled-components';

const StyledLoader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Loader = () => {
	return (
		<StyledLoader>
			<img
				src={require('../../assets/loader.gif')}
				alt='loader'
				style={{ height: 100 }}
			/>
		</StyledLoader>
	);
};

export default Loader;
