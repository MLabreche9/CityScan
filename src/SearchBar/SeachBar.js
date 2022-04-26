import React from 'react';
import styles from './SearchBar.module.css';

export function SearchBar(props) {
	const sizeClass = props.small ? '' : 'is-medium';
	return (
		<div>
			<div className='field has-addons'>
				<p className='control'>
					<button className={`button is-static ${sizeClass}`}>Search</button>
				</p>
				<p className='control'>
					<input
						className={`input ${sizeClass} ${styles['input-control']}`}
						type='text'
						placeholder='What are you in the mood for?'
					/>
				</p>
				<p className='control'>
					<button className={`button is-static ${sizeClass}`}>Near</button>
				</p>
				<p className='control'>
					<input
						className={`input ${sizeClass} ${styles['input-control']}`}
						type='text'
						placeholder='Location'
					/>
				</p>
				<div className={`button ${sizeClass} ${styles['search-button']}`}>
					<span className='icon is-small'>
						<i className={`fas fa-search ${styles['search-icon']} `}></i>
					</span>
				</div>
			</div>
		</div>
	);
}
