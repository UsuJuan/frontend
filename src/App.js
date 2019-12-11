import React from 'react';
// REDUX
import { store } from './redux/store'
import { Provider } from 'react-redux'
// COMPONENTS
import Principal from './components/principal'
// STYLES
import './App.css';

function App() {

	return (
		<Provider store={store} >
			<div className="App">
				<Principal />
			</div>
		</Provider>
	);
}

export default App;
