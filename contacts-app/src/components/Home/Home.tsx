import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.scss';
import Header from '../Header/Header';
import { Contact } from '../../utils/Contact';
import ContactsList from '../ContactsList/ContactsList';
import ContactDislay from '../ContactDisplay/ContactDislay';

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
			<ContactDislay />
		</div>
	);
};

export default Main;
