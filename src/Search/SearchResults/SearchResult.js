import React from 'react';
import { BusinessRating } from '../../BusinessRating/BusinessRating';
import styles from './SearchResult.module.css';

export function SearchResult() {
	return (
		<div className={styles['search-result']}>
			<img
				src='http://via.placeholder.com/210'
				alt='business'
				className={styles['business-image']}
			/>
			<div className={styles['business-info']}>
				<h2 className='subtitle'>Burger Place</h2>
				<BusinessRating />
				<p>
					$$ <span className='tag'>Burgers</span>
					{''}
					<span className='tag'>Fast Food</span>
				</p>
			</div>
			<div className={styles['contact-info']}>
				<p>123456789</p>
				<p>123 address place</p>
				<p>city, place, zip</p>
			</div>
		</div>
	);
}
