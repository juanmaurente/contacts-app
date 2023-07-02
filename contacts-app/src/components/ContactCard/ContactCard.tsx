import './ContactCard.scss';
import { Contact } from '../../utils/Contact';

interface Props {
	contact: Contact;
}

const getInitials = (name: string) => {
	const nameWords = name.split(' ');
	const filteredWords = nameWords.filter(
		(word) => !['Mr.', 'Miss', 'Mrs.'].includes(word),
	);
	const initials = filteredWords.map((word) => word.charAt(0)).join('');
	return initials;
};

const ContactCard: React.FC<Props> = ({ contact }) => {
	return (
		<div className='contact-card'>
			<div className='circle--small'>{getInitials(contact.name)}</div>
			<div className='contact-details'>
				<h3>{contact.name}</h3>
				<p>Phone: {contact.phone}</p>
			</div>
		</div>
	);
};

export default ContactCard;
