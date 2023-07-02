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
	const [searchQuery, setSearchQuery] = useState<string>('');

	useEffect(() => {
		axios
			.get<Contact[]>('https://jsonplaceholder.typicode.com/users')
			.then((response) => setContacts(response.data));
	}, []);

	const handleContact = (contact: Contact) => {
		setSelectedContact(contact);
	};

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setSearchQuery(value);
	};

	const filteredContacts = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<div className='container'>
			<Header handleSearch={handleSearch} />
			<ContactsList
				contacts={filteredContacts}
				setSelectedContact={handleContact}
			/>
			<ContactDisplay selectedContact={selectedContact} />
		</div>
	);
};

export default Home;
