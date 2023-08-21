import { Link } from 'react-router-dom';
import cn from 'clsx';

import { menu } from './menu.data';
import styles from './Hamburger.module.scss';

const Menu = ({ isShow }) => {
	const logoutHandler = () => {};

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
