import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.scss';
import Header from '../Header/Header';
import { Contact } from '../../utils/Contact';
import ContactsList from '../ContactsList/ContactsList';

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
			<ContactsList contacts={contacts} />
			<div className='contact-display hidden-element'>
				<h2>Contact Name</h2>
				<p>123-456-789</p>
				<p>unnombrecualquiera@gmail.com</p>C
			</div>
		</div>
	);
};

export default Main;
