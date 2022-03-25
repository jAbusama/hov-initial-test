import React, { useEffect, useState } from 'react';
import Card from '../Card';
import { client } from '../../graphql/ApolloClient';
import { getCountry } from '../../graphql/queries';
import Modal from '../Modal';
import { Loader } from '../Loader';

const divideArray = (arr) => {
	let newArray = [];
	let size = 3;
	for (var i = 0; i < arr.length; i += size) {
		newArray.push(arr.slice(i, i + size));
	}

	return newArray;
};

const Countries = (props) => {
	const { data, isLoading } = props;
	const [countries, setCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState(null);
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		setCountries(divideArray(data));
	}, [data]);

	const getCountyData = async (code) => {
		const { loading, data } = await client.query({
			query: getCountry,
			variables: {
				countryCode: code,
			},
		});
		setSelectedCountry(data.country);
		setOpenModal(true);
	};

	const exploreCountry = (code) => {
		try {
			getCountyData(code);
		} catch (err) {
			setOpenModal(false);
			console.log(err);
		}
	};

	const onCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<div>
			{selectedCountry !== null && (
				<Modal
					data={selectedCountry}
					isOpen={openModal}
					closeModal={onCloseModal}
				/>
			)}
			{isLoading ? (
				<Loader />
			) : (
				<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
					{countries.map((group) => {
						return group.map((country, groupId) => (
							<Card
								country={country}
								key={groupId}
								groupId={groupId}
								action={exploreCountry}
							/>
						));
					})}
				</div>
			)}
		</div>
	);
};

export default Countries;
