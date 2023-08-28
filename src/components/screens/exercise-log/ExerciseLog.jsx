import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import cn from 'clsx';

import ExerciseLogService from '../../../services/exercise/exercise-log.service';

import styles from './ExerciseLog.module.scss';
import Header from '../../layout/header/Header';
import HeaderExerciseLog from './HeaderExerciseLog';

const ExerciseLog = () => {
	const { id } = useParams();

	const {
		data: exerciseLog,
		isSuccess,
		refetch,
		isLoading
	} = useQuery(['get exercise log', id], () => ExerciseLogService.getById(id), {
		select: ({ data }) => data
	});

	return (
		<>
			<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
		</>
	);
};

export default ExerciseLog;
