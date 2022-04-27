import React from 'react';
import { TopNav } from './TopNav/TopNav';
import { SearchBar } from '../SearchBar/SeachBar';
import CityScan from '../assets/CityScan.png';
import styles from './LandingPage.module.css';
import { SearchSuggestions } from './SearchSuggestions/SearchSuggestions';
import { useNavigate } from 'react-router-dom';

export function LandingPage() {
	const navigate = useNavigate();

	function search(term, location) {
		const urlEncodedTerm = encodeURI(term);
		const urlEncodedLocation = encodeURI(location);
		navigate(
			`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
		);
	}

	return (
		<div className={styles.landing}>
			<div className={styles['search-area']}>
				<TopNav />
				<img src={CityScan} className={styles.logo} alt='logo' />
				<SearchBar search={search} />
				<SearchSuggestions />
			</div>
		</div>
	);
}
