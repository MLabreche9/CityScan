import React from 'react';
import { SearchBar } from '../SearchBar/SeachBar';
import styles from './NavBar.module.css';
import CityScanGrey from '../assets/CityScanGrey.png';
import { Link } from 'react-router-dom';

export function NavBar(props) {
	return (
		<div className={styles['nav-bar']}>
			<Link to='/'>
				<img src={CityScanGrey} className={styles['logo']} alt='logo' />
			</Link>
			<SearchBar small term={props.term} location={props.location} />
			<button className={`button ${styles['nav-button']}`}>Sign In</button>
			<button className={`button ${styles['nav-button']}`}>Register</button>
		</div>
	);
}
