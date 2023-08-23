import { useMutation } from '@tanstack/react-query';
import { useForm, Controller } from 'react-hook-form';
import cn from 'clsx';

import WorkoutService from '../../../services/workout/workout.service';
import Layout from '../../layout/Layout';
import Loader from '../../ui/loader/Loader';
import Button from '../../ui/button/Button';
import Alert from '../../ui/alert/Alert';

import styles from './NewWorkout.module.scss';
import Field from '../../ui/field/Field';

const NewWorkout = () => {


	return (
		<>
			<Layout
				bgImage='/images/new-workout-bg.jpg'
				heading='Create new workout'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Workout created' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{
							required: 'Name is required'
						}}
						type='text'
						placeholder='Enter name'
					/>
					<Field
						error={errors?.times?.message}
						name='times'
						register={register}
						options={{
							valueAsNumber: true,
							required: 'Times is required',
							validate: value => value > 0 || 'Times must be number'
						}}
						placeholder='Enter times'
					/>

					<Controller
						name='iconPath'
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map(name => (
									<img
										key={`ex img ${name}`}
										src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(
											name
										)}`}
										alt={name}
										className={cn({
											[styles.active]: value === getIconPath(name)
										})}
										onClick={() => onChange(getIconPath(name))}
										draggable={false}
										height='45'
									></img>
								))}
							</div>
						)}
					/>

					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}
					<Button>Create</Button>
				</form>
			</div>
		</>
	);
};

export default NewWorkout;
