import React from 'react';
import './_style.scss';

const Button = (props) => {
	const { className, children, action } = props;
	return (
		<a className={className} onClick={action}>
			{children}
		</a>
	);
};

export default Button;
