import { Link, useNavigate } from 'react-router-dom';
import cn from 'clsx';

import { menu } from './menu.data';
import styles from './Hamburger.module.scss';
import { useAuth } from '../../../hooks/useAuth';
import Cookies from 'js-cookie';
import { TOKEN } from '../../../app.constants';

const Menu = ({ isShow, setIsShow }) => {
	const { setIsAuth } = useAuth();

	const navigate = useNavigate();

	const logoutHandler = () => {
		Cookies.remove(TOKEN);
		setIsAuth(false);
		setIsShow(false);

		navigate('/auth');
	};

	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>
			<ul>
				{menu.map((menuItem, index) => (
					<li key={`_menu_${index}`}>
						<Link to={menuItem.link}>{menuItem.title}</Link>
					</li>
				))}
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
