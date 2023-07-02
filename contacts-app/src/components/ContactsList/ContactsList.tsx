import { Contact } from '../../utils/Contact';
import ContactCard from '../ContactCard/ContactCard';
import './ContactsList.scss';

interface Props {
	contacts: Contact[];
	setSelectedContact: (contact: Contact) => void;
}

const ContactsList: React.FC<Props> = ({ contacts, setSelectedContact }) => {
	return (
		<div className='contacts-list'>
			<ul>
				{contacts.map((contact) => (
					<li key={contact.id}>
						<ContactCard
							contact={contact}
							setSelectedContact={setSelectedContact}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ContactsList;
