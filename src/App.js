import './App.css';

// Components
import { CardsListing } from './containers';
import { ErrorBoundary } from 'components';

function App() {
	return (
		<div className='App'>
			<ErrorBoundary>
				<CardsListing />
			</ErrorBoundary>
		</div>
	);
}

export default App;
