import { useLocation, useNavigate } from 'react-router-dom';
import Hamburger from '../hamburger/Hamburger';

import styles from './Header.module.scss';
import { IoMdArrowBack } from 'react-icons/io';
import { SlUser } from 'react-icons/sl';
import { useAuth } from '../../../hooks/useAuth';

const Header = ({ backLink = '' }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const { isAuth } = useAuth();

	return (
		<header className={styles.header}>
			{pathname !== '/' || !isAuth ? (
				<button
					onClick={() => {
						navigate(isAuth ? backLink : '/auth');
					}}
				>
					<IoMdArrowBack fill='#fff' fontSize={28} />
				</button>
			) : (
				<button
					onClick={() => {
						navigate('/profile');
					}}
				>
					<SlUser fill='#fff' fontSize={25} />
				</button>
			)}
			{isAuth && <Hamburger />}
		</header>
	);
};

export default Header;
