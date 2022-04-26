import React from 'react';
import { TopNav } from './TopNav/TopNav';
import { SearchBar } from '../SearchBar/SeachBar';
import CityScan from '../assets/CityScan.png';
import styles from './LandingPage.module.css';
import { SearchSuggestions } from './SearchSuggestions/SearchSuggestions';

export function LandingPage() {
	return (
		<div className={styles.landing}>
			<div className={styles['search-area']}>
				<TopNav />
				<img src={CityScan} className={styles.logo} alt='logo' />
				<SearchBar />
				<SearchSuggestions />
			</div>
		</div>
	);
}
