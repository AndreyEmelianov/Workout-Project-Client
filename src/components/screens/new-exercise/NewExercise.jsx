import { useMutation } from '@tanstack/react-query';
import styles from './NewExercise.module.scss';
import ExerciseService from '../../../services/exercise/exercise.service';

const NewExercise = () => {
	const { isSuccess, error } = useMutation(['create exercise'], body =>
		ExerciseService.create(body)
	);

	return <div>NewExercise</div>;
};

export default NewExercise;
