import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

class Contacts extends Component {

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
		return (
			<div>{this.state.contacts}</div>
		)
		
	}
}

Contacts.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
}

export default Contacts;