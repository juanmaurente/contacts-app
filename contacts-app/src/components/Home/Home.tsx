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
		// Fetch contacts data from API
		axios
			.get<Contact[]>('https://jsonplaceholder.typicode.com/users')
			.then((response) => setContacts(response.data));
	}, []);

	const handleContact = (contact: Contact) => {
		// Set the selected contact and show the contact display
		setSelectedContact(contact);
		setShowContactDisplay(true);
	};

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		// Update the search query value
		const { value } = event.target;
		setSearchQuery(value);
	};

	const filteredContacts = contacts.filter((contact) =>
		// Filter contacts based on the search query
		contact.name.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	const handleCloseContactDisplay = () => {
		// Reset the selected contact and hide the contact display
		setSelectedContact({} as Contact);
		setShowContactDisplay(false);
	};

	return (
		<div className='container'>
			{/* Header component with search functionality */}
			<Header handleSearch={handleSearch} />

			{/* List of contacts */}
			<ContactsList
				contacts={filteredContacts}
				setSelectedContact={handleContact}
				setShowContactDisplay={setShowContactDisplay}
			/>

			{/* Contact display */}
			<ContactDisplay
				selectedContact={selectedContact}
				showContactDisplay={showContactDisplay}
				onClose={handleCloseContactDisplay}
			/>
		</div>
	);
};

export default Home;
