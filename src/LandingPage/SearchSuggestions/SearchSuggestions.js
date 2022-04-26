import React from 'react';
import styles from './SearchSuggestions.module.css';

export function SearchSuggestions() {
	return (
		<div className={styles.suggestions}>
			<span className='icon is-small'>
				<i className='fas fa-utensils' />{' '}
			</span>
			<span className={styles.suggestion}>Restaurants</span>
			<span className='icon is-small'>
				<i className='fas fa-cocktail' />{' '}
			</span>
			<span className={styles.suggestion}>Nightlife</span>
			<span className='icon is-small'>
				<i className='fas fa-concierge-bell' />{' '}
			</span>
			<span className={styles.suggestion}>Services</span>
			<span className='icon is-small'>
				<i className='fas fa-truck' />{' '}
			</span>
			<span className={styles.suggestion}>Delivery Services</span>
		</div>
	);
}
