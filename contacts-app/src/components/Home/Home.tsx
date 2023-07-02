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
	const [showContactDisplay, setShowContactDisplay] =
		useState<boolean>(false);

	useEffect(() => {
		axios
			.get<Contact[]>('https://jsonplaceholder.typicode.com/users')
			.then((response) => setContacts(response.data));
	}, []);

	const handleContact = (contact: Contact) => {
		setSelectedContact(contact);
		setShowContactDisplay(true);
	};

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setSearchQuery(value);
	};

	const filteredContacts = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	const handleCloseContactDisplay = () => {
		setSelectedContact({} as Contact);
		setShowContactDisplay(false);
	};

	return (
		<div className='container'>
			<Header handleSearch={handleSearch} />
			<ContactsList
				contacts={filteredContacts}
				setSelectedContact={handleContact}
			/>
			<ContactDisplay
				selectedContact={selectedContact}
				showContactDisplay={showContactDisplay}
				onClose={handleCloseContactDisplay}
			/>
		</div>
	);
};

export default Home;
