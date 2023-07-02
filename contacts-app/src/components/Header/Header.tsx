import './Header.scss';
import { FaSearch } from 'react-icons/fa';

interface Props {
	handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<Props> = ({ handleSearch }) => {
	return (
		<div className='header'>
			<h2>Contacts</h2>
			<div className='search-container'>
				<FaSearch className='search-icon' />
				<input
					type='text'
					placeholder='Search...'
					onChange={handleSearch}
				/>
			</div>
		</div>
	);
};

export default Header;
