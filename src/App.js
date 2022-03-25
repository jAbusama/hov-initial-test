import './global.scss';
import { Suspense } from 'react';
import Layout from './layouts/Public';

function App() {
	return (
		<div className='App'>
			<Suspense fallback={<div>Loading...</div>}>
				<Layout />
			</Suspense>
		</div>
	);
}

export default App;
