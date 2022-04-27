import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { SubNav } from '../NavBar/SubNav/SubNav';
import { useLocation } from 'react-router-dom';
import { SearchResults } from './SearchResults/SearchResults';
import { SearchResultsSummary } from './SearchResultSummary/SearchResultsSummary';

export function Search() {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const term = params.get('find_desc');
	const locationParams = params.get('find_loc');

	return (
		<div>
			<NavBar term={term} location={locationParams} />
			<SubNav />
			<SearchResultsSummary term={term} location={locationParams} />
			<SearchResults />
		</div>
	);
}
