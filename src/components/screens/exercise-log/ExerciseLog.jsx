import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import cn from 'clsx';

import { useExerciseLog } from './hooks/useExerciseLog';
import HeaderExerciseLog from './HeaderExerciseLog';
import Loader from '../../ui/loader/Loader';
import Alert from '../../ui/alert/Alert';
import ExerciseError from './ExerciseError';

import styles from './ExerciseLog.module.scss';

const ExerciseLog = () => {
	const { exerciseLog, isLoading, isSuccess } = useExerciseLog();

	return (
		<>
			<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{/* <ExerciseError errors={[errorChange,
errorCompleted]} /> */}
			</div>
		</>
	);
};

export default ExerciseLog;
