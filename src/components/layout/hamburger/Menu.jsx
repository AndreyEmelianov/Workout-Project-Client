import cn from 'clsx';
import styles from './Hamburger.module.scss';
import { menu } from './menu.data';

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
						{menuItem.title}
						{/* <Link to={menuItem.link}>{menuItem.title}</Link> */}
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
