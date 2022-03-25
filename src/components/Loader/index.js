import React from 'react';
import PropTypes from 'prop-types';
import './_style.scss';

const sizeClasses = {
	xs: 'h-4 w-4 border-2 border-t-2',
	sm: 'h-6 w-6 border-2 border-t-2',
	md: 'h-8 w-8 border-4 border-t-4',
	lg: 'h-12 w-12 border-4 border-t-4',
};

const textSize = {
	xs: 'text-sm',
	sm: 'text-sm',
	md: 'text-lg',
	lg: 'text-lg',
};
const loaderHeight = {
	xs: 16,
	sm: 24,
	md: 24,
	lg: 24,
};

export const Loader = (props) => {
	const { size = 'md', label } = props;

	const sizeClass = sizeClasses[size];
	const textSizeClass = textSize[size];

	return (
		<div className='flex justify-center items-center flex-col'>
			<div
				className={`customLoader ease-linear rounded-full border-subtle-primary ${sizeClass}`}
				style={{ height: 32 }}
			></div>
			{/* {label && (
				<span
					className={`${textSizeClass} leading-6 font-medium text-white mt-4`}
				>
					{label}
				</span>
			)} */}
		</div>
	);
};

Loader.propTypes = {
	size: PropTypes.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
	label: PropTypes.string,
};
