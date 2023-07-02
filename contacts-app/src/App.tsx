import { useState, useEffect } from 'react';
import axios from 'axios';

interface Contact {
	id: number;
	name: string;
	email: string;
	phone: string;
	address: string;
	city: string;
}

const App = () => {
	const [contacts, setContacts] = useState<Contact[]>([]);

	useEffect(() => {
		axios
			.get<Contact[]>('https://jsonplaceholder.typicode.com/users')
			.then((response) => setContacts(response.data));
	}, []);

	return (
		<div>
			<h1>Contacts</h1>
			<ul>
				{contacts.map((contact) => (
					<li key={contact.id}>
						<h3>{contact.name}</h3>
						<p>Email: {contact.email}</p>
						<p>Phone: {contact.phone}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
