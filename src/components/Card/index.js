import React, { useEffect, useState } from 'react';
import './_style.scss';
import Flag from 'react-world-flags';
import Button from '../form-controls/Button';

const frontColor = [
	'card__heading-span--0',
	'card__heading-span--1',
	'card__heading-span--2',
];
const backColor = [
	'card__side--back-0',
	'card__side--back-1',
	'card__side--back-2',
];

const Card = (props) => {
	const { groupId, country, action } = props;

	return (
		<div className='flex w-full max-w-xs'>
			<div className='card w-full'>
				<div className='card__side card__side--front bg-subtle-secondary'>
					<div className={`card__picture`}>
						<Flag code={country.code} />
					</div>

					<h4 className='card__heading'>
						<span className={`card__heading-span ${frontColor[groupId]}`}>
							{country.name}
						</span>
					</h4>

					<div className='card__details'>
						<div className='text-lg font-bold text-gray-secondary'>
							Information
						</div>
						<ul>
							<li>
								Capital: <span>{country.capital}</span>
							</li>
							<li>
								Native: <span>{country.native}</span>
							</li>
							<li>
								currency: <span>{country.currency}</span>
							</li>
							<li>
								Phone: <span>+{country.phone}</span>
							</li>
							<li>
								Continent: <span>{country.continent.name}</span>
							</li>
						</ul>
					</div>
				</div>

				<div className={`card__side card__side--back ${backColor[groupId]}`}>
					<div className='card__cta'>
						<div className='card__info-box'>
							<p className='card__info-only'>Explore</p>
							<p className='card__info-value uppercase'>{country.name}</p>
						</div>

						<Button
							className='btn btn--white'
							action={() => action(country.code)}
						>
							More info
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
