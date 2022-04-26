import React from 'react';
import { SearchBar } from '../SearchBar/SeachBar';
import styles from './NavBar.module.css';
import CityScanGrey from '../assets/CityScanGrey.png';

export function NavBar() {
	return (
		<div className={styles['nav-bar']}>
			<img src={CityScanGrey} className={styles['logo']} alt='logo' />
			<SearchBar small />
			<button className={`button ${styles['nav-button']}`}>Sign In</button>
			<button className={`button ${styles['nav-button']}`}>Register</button>
		</div>
	);
}
