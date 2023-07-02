import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.scss';
import Header from '../Header/Header';
import { Contact } from '../../utils/Contact';
import ContactsList from '../ContactsList/ContactsList';
import ContactDisplay from '../ContactDisplay/ContactDisplay';

const Home = () => {
	const [contacts, setContacts] = useState<Contact[]>([]);
	const [selectedContact, setSelectedContact] = useState<Contact>(
		{} as Contact,
	);

	useEffect(() => {
		axios
			.get<Contact[]>('https://jsonplaceholder.typicode.com/users')
			.then((response) => setContacts(response.data));
	}, []);

	const handleContact = (contact: Contact) => {
		setSelectedContact(contact);
	};

	return (
		<div className='container'>
			<Header />
			<ContactsList
				contacts={contacts}
				setSelectedContact={handleContact}
			/>
			<ContactDisplay selectedContact={selectedContact} />
		</div>
	);
};

export default Home;
