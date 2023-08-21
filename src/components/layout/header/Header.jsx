import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import Hamburger from '../hamburger/Hamburger';

import styles from './Header.module.scss';
import { IoMdArrowBack } from 'react-icons/io';
import { SlUser } from 'react-icons/sl';

const Header = ({ backLink = '' }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const { isAuth } = useAuth();

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(backLink);
					}}
				>
					<IoMdArrowBack fill='#fff' fontSize={28} />
				</button>
			) : (
				<button
					onClick={() => {
						navigate(isAuth ? '/profile' : '/auth');
					}}
				>
					<SlUser fill='#fff' fontSize={25} />
				</button>
			)}
			<Hamburger />
		</header>
	);
};

export default Header;
