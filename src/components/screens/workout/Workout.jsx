import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import cn from 'clsx';

import WorkoutLogService from '../../../services/workout/workout-log.service';

import stylesLayout from '../../layout/Layout.module.scss';
import styles from './Workout.module.scss';
import Header from '../../layout/header/Header';

const Workout = () => {
	const { id } = useParams();

	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery(['get workout log', id], () => WorkoutLogService.getById(id), {
		select: ({ data }) => data
	});

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/workout-bg.jpg')`,
					height: 356
				}}
			>
				<Header backLink='/workouts' />
				{isSuccess && (
					<div>
						<time className={styles.time}>{workoutLog.minute + 'min.'}</time>
						<h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
					</div>
				)}
			</div>
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}></div>
			</div>
		</>
	);
};

export default Workout;
