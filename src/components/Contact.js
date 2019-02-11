import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {

	state = {
		contacts: [
			{
				id: 1,
				name: 'John Doe',
				email: 'jdoe@mail.com',
				phone: '555-555-5555'
			},
			{
				id: 2,
				name: "Mike", 
				email: "cool@mail.com" ,
				phone: "444-444-4444" 
			},
			{
				id: 3,
				name: "Daniel",
				email: "cool@mail.com", 
				phone: "444-444-4444" 
						
			}
		]
	}

	render() {
		const { name, email, phone } = this.props;
		return (
			<div className="card card-body mb-3">
				<h4>{name}</h4>
				<ul className="list-group">
					<li className="list-group-item">Email: {email}</li>
					<li className="list-group-item">Phone: {phone}</li>
				</ul>
			</div>
		)
	}
}

Contact.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
}

export default Contact;