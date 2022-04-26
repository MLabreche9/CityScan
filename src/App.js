import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './LandingPage/LandingPage';
import { Search } from './Search/Search';

function App() {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='/search' element={<Search />} />
		</Routes>
	);
}

export default App;
