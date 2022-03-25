import React from 'react';
import { SearchIcon } from '../../../icons';

const Input = (props) => {
	const { onChange } = props;
	return (
		<div className='relative w-full'>
			<div className='flex border-2 items-center bg-background-secondary rounded-md border-border-primary'>
				<input
					type='text'
					placeholder='Search'
					className='text-xl bg-background-secondary text-subtle-primary border-0 outline-none rounded flex-grow focus:outline-none focus:shadow-none focus:ring-transparent ring-0 py-2 px-4'
					onChange={onChange}
				/>
				<div className='flex items-center pr-4'>
					<span>{SearchIcon(32)}</span>
				</div>
			</div>
		</div>
	);
};

export default Input;
