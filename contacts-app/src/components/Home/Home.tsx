import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.scss';
import Header from '../Header/Header';

interface Contact {
	id: number;
	name: string;
	email: string;
	phone: string;
	address: string;
	city: string;
}

const Main = () => {
	const [contacts, setContacts] = useState<Contact[]>([]);

	useEffect(() => {
		axios
			.get<Contact[]>('https://jsonplaceholder.typicode.com/users')
			.then((response) => setContacts(response.data));
	}, []);

	return (
		<div className='container'>
			<Header />
			<div className='contacts-list'>
				<ul>
					{contacts.map((contact) => (
						<li key={contact.id}>
							<h3>{contact.name}</h3>
							<p>Phone: {contact.phone}</p>
						</li>
					))}
				</ul>
			</div>
			<div className='contact-display hidden-element'>
				<h2>Contact Name</h2>
				<p>123-456-789</p>
				<p>unnombrecualquiera@gmail.com</p>
			</div>
		</div>
	);
};

export default Main;
