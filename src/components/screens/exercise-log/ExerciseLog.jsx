import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import cn from 'clsx';

import { useExerciseLog } from './hooks/useExerciseLog';
import HeaderExerciseLog from './HeaderExerciseLog';
import Loader from '../../ui/loader/Loader';
import Alert from '../../ui/alert/Alert';
import ExerciseError from './ExerciseError';

import styles from './ExerciseLog.module.scss';
import TableHeader from './table/TableHeader';
import TableRow from './table/TableRow';
import { useUpdateLogTime } from './hooks/useUpdateLogTime';
import { useCompleteLog } from './hooks/useCompleteLog';

const ExerciseLog = () => {
	const {
		exerciseLog,
		isLoading,
		isSuccess,
		error,
		getState,
		onChangeState,
		toggleTime
	} = useExerciseLog();

	return (
		<>
			<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<ExerciseError errors={[error]} />
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<TableHeader />
						{exerciseLog?.times.map(item => (
							<TableRow
								item={item}
								key={item.id}
								getState={getState}
								toggleTime={toggleTime}
								onChangeState={onChangeState}
							/>
						))}
					</div>
				)}

				{isSuccess && exerciseLog?.times?.length === 0 && (
					<Alert type='warning' text='Times not found' />
				)}
			</div>
		</>
	);
};

export default ExerciseLog;
