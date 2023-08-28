import styles from '../Workout.module.scss';

const WorkoutItem = ({ workout, mutate }) => {
	return (
		<div className={styles.item}>
			<button
				onClick={() => mutate(workout.id)}
				aria-label='Create new workout'
			>
				<span>{workout.name}</span>
			</button>
		</div>
	);
};

export default WorkoutItem;
