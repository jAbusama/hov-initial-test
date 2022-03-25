import React from 'react';
import Homepage from '../Pages/Home';

const PublicLayout = () => {
	return (
		<div className='bg-background-primary h-screen overflow-scroll'>
			<div className='max-w-screen-lg m-auto py-8'>
				<Homepage />
			</div>
		</div>
	);
};

export default PublicLayout;
