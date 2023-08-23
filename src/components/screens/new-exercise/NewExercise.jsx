import { useMutation } from '@tanstack/react-query';
import styles from './NewExercise.module.scss';
import ExerciseService from '../../../services/exercise/exercise.service';

const NewExercise = () => {
	const {} = useMutation(['create exercise'], () => ExerciseService.create());

	return <div>NewExercise</div>;
};

export default NewExercise;
