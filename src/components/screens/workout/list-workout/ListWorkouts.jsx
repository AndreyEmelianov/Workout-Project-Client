import Layout from '../../../layout/Layout';
import Alert from '../../../ui/alert/Alert';
import Loader from '../../../ui/loader/Loader';
import WorkoutItem from './WorkoutItem';

import styles from '../Workout.module.scss';
import { useWorkouts } from './useWorkouts';

const ListWorkouts = () => {
	const {
		data,
		error,
		isLoading,
		isSuccess,
		isSuccessMutate,
		createWorkoutLog: mutate
	} = useWorkouts();

	return (
		<>
			<Layout bgImage='/images/workout-bg.jpg' heading='Workout list' />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{error && <Alert type='error' text={error} />}
				{isSuccessMutate && <Alert text='Workout log created' />}
				{isLoading && <Loader />}
				{isSuccess && (
					<div className={styles.wrapper}>
						{data.map(workout => (
							<WorkoutItem key={workout.id} workout={workout} mutate={mutate} />
						))}
					</div>
				)}

				{isSuccess && data?.length === 0 && (
					<Alert type='warning' text='Workout not found' />
				)}
			</div>
		</>
	);
};

export default ListWorkouts;
