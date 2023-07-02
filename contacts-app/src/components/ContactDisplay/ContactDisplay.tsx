import './ContactDisplay.scss';
import { Contact } from '../../utils/Contact';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

interface Props {
	selectedContact: Contact | undefined;
}

const ContactDisplay: React.FC<Props> = ({ selectedContact }) => {
	const getInitials = (name: string) => {
		const nameWords = name.split(' ');
		const filteredWords = nameWords.filter(
			(word) => !['Mr.', 'Miss', 'Mrs.'].includes(word),
		);
		const initials = filteredWords.map((word) => word.charAt(0)).join('');
		return initials;
	};

	return (
		<div className='contact-display'>
			{selectedContact && selectedContact.name ? (
				<>
					<div className='circle--big'>
						{selectedContact.name
							? getInitials(selectedContact.name)
							: ''}
					</div>
					<h2>{selectedContact.name}</h2>
					<div className='contact-field'>
						<FaPhone className='icon' />
						<p>{selectedContact.phone}</p>
					</div>

					{
						<div className='contact-field'>
							<FaEnvelope className='icon' />
							<p>{selectedContact.email}</p>
						</div>
					}
				</>
			) : (
				<h2>Select a Contact</h2>
			)}
		</div>
	);
};

export default ContactDisplay;
