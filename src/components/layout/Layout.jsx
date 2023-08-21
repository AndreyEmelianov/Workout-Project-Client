import Header from './header/Header';
import cn from 'clsx';

import styles from './Layout.module.scss';

const Layout = ({ children, bgImage, heading = '', backLink = '/' }) => {
	return (
		<section
			className={cn(styles.wrapper, {
				[styles.otherPage]: !!heading
			})}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Header backLink={backLink} />
			{children}
		</section>
	);
};

export default Layout;
