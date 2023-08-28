import { useMutation, useQueryClient } from '@tanstack/react-query';
import ExerciseLogService from '../../../../services/exercise/exercise-log.service';
import { useParams } from 'react-router-dom';

export const useUpdateLogTime = () => {
	const { id } = useParams();

	const queryClient = useQueryClient();

	const { mutate, error: errorChange } = useMutation(
		['update log time'],
		({ timeId, body }) => ExerciseLogService.updateTime(timeId, body),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get exercise log', id]);
			}
		}
	);

	return { updateTime: mutate, errorChange };
};
