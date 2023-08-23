import Layout from '../../layout/Layout';
import cn from 'clsx';

import { useProfile } from './useProfile';

import stylesLayout from '../../layout/Layout.module.scss';
import styles from './Profile.module.scss';
import Header from '../../layout/header/Header';
import Loader from '../../ui/loader/Loader';
import Statistics from './statistics/Statistics';

const Profile = () => {
	const { data, isLoading } = useProfile();

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/profile-bg.jpg')`,
					height: 356
				}}
			>
				<Header />
				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								src='images/header/user.svg'
								alt='Profile'
								height='56'
								draggable={false}
							></img>
							<h1 className={stylesLayout.heading}>{data?.email}</h1>
						</>
					)}
				</div>
				<Statistics />
			</div>

			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div className={styles.before_after}>
					{data?.images?.map((image, index) => (
						<div key={image}>
							<div className={styles.heading}>
								{index === 1 ? 'After' : 'Before'}
							</div>
							<img
								src={image}
								alt={index === 1 ? 'After' : 'Before'}
								draggable={false}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Profile;
