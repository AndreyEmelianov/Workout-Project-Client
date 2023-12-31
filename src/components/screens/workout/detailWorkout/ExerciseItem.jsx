import cn from 'clsx';
import { useNavigate } from 'react-router-dom';

import styles from '../Workout.module.scss';

const ExerciseItem = ({ exerciseLog }) => {
	const navigate = useNavigate();

	return (
		<>
			<div
				className={cn(styles.item, {
					[styles.completed]: exerciseLog.isCompleted
				})}
			>
				<button
					onClick={() => navigate(`/exercise/${exerciseLog.id}`)}
					aria-label='Move to exercise'
				>
					<span>{exerciseLog.exercise.name}</span>
					<img
						src={
							import.meta.env.VITE_SERVER_URL + exerciseLog.exercise.iconPath
						}
						height='34'
						alt=''
						draggable={false}
					/>
				</button>
			</div>
		</>
	);
};

export default ExerciseItem;
