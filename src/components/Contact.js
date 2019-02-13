import React from 'react';

export const Contact = (props) => {
	
	const { name, email, phone } = props;
	
	return (
		<div className="card card-body mb-3">
			<h4>{name}<i className="fa fa-sort-down"/></h4>
			<ul className="list-group">
				<li className="list-group-item">{email}</li>
				<li className="list-group-item">{phone}</li>			
			</ul>
		</div>
	)
}
