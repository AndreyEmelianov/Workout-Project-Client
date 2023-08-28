import { useQuery } from '@tanstack/react-query';
import ExerciseLogService from '../../../../services/exercise/exercise-log.service';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useUpdateLogTime } from './useUpdateLogTime';

export const useExerciseLog = () => {
	const { id } = useParams();

	const [times, setTimes] = useState([]);

	const {
		data: exerciseLog,
		isSuccess,
		isLoading
	} = useQuery(['get exercise log', id], () => ExerciseLogService.getById(id), {
		select: ({ data }) => data,
		onSuccess(data) {
			if (data?.times?.length) setTimes(data.times);
		}
	});

	const { errorChange, updateTime } = useUpdateLogTime();

	const onChangeState = (timeId, key, value) => {
		const newTimes = times.map(time => {
			if (time.id === timeId) {
				return { ...time, [key]: value };
			}

			return time;
		});

		setTimes(newTimes);
	};

	const getTimeValue = timeId => {
		return times.find(time => time.id === timeId);
	};

	const getState = (timeId, key) => {
		const time = getTimeValue(timeId);
		return time ? time[key] : key === 'isCompleted' ? false : 0;
	};

	const toggleTime = (timeId, isCompleted) => {
		const time = getTimeValue(timeId);
		updateTime({
			timeId,
			body: {
				isCompleted,
				repeat: +time.repeat,
				weight: +time.weight
			}
		});
	};

	return {
		exerciseLog,
		isSuccess,
		isLoading,
		toggleTime,
		errorChange,
		onChangeState,
		getState
	};
};
