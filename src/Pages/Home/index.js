import react, { useCallback, useEffect, useState } from 'react';
import Countries from '../../components/Countries';
import Input from '../../components/form-controls/Input';
import { client } from '../../graphql/ApolloClient';
import { getAllCountries } from '../../graphql/queries';
import { debounce } from 'lodash';

const Homepage = () => {
	const [countries, setCountries] = useState([]);
	const [baseData, setBaseData] = useState([]);
	const [search, setSearch] = useState('');

	const [isLoading, setIsLoading] = useState(false);
	useEffect(async () => {
		setIsLoading(true);
		getData();
	}, []);

	const getData = async () => {
		try {
			const { loading, data } = await client.query({ query: getAllCountries });
			setCountries(data.countries);
			setBaseData(data.countries);
			setIsLoading(loading || false);
		} catch (err) {
			setCountries([]);
			setBaseData([]);
			setIsLoading(false);
		}
	};

	const searchHandler = useCallback(
		debounce((e) => {
			let newOptions = baseData.filter(
				(option) =>
					JSON.stringify(option.name).search(new RegExp(e.target.value, 'ig')) >
					-1
			);
			setSearch(e.target.value);
			setCountries(newOptions);
		}, 300),
		[baseData]
	);

	return (
		<div className='relative'>
			<div className='bg-gray-primary rounded-md px-4 py-8 mb-8'>
				<div className='flex justify-center'>
					<h1 className='text-6xl text-subtle-primary font-bold'>
						Countries gallery
					</h1>
				</div>

				<div className='mt-8'>
					<div className=''>
						<Input onChange={searchHandler} value={search} />
					</div>
				</div>
			</div>

			<div className='relative'>
				<div className='px-4 text-subtle-text mb-2'>
					<h2 className='text-2xl font-semibold'>Country list</h2>
				</div>
				<div className='bg-gray-primary rounded-md px-4 py-8'>
					<Countries data={countries} isLoading={isLoading} />
				</div>
			</div>
		</div>
	);
};

export default Homepage;
