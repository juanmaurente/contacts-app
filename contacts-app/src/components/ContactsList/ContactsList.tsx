import { Contact } from '../../utils/Contact';
import ContactCard from '../ContactCard/ContactCard';
import './ContactsList.scss';

interface Props {
	contacts: Contact[];
}

const ContactsList: React.FC<Props> = ({ contacts }) => {
	return (
		<div className='contacts-list'>
			<ul>
				{contacts.map((contact) => (
					<li key={contact.id}>
						<ContactCard contact={contact} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default ContactsList;
