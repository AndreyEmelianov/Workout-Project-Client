import { Controller } from 'react-hook-form';
import ReactSelect from 'react-select';
import cn from 'clsx';

const SelectExercises = ({ control }) => {
	return (
		<Controller
			name='exerciseIds'
			control={control}
			render={({ field: { value, onChange } }) => <ReactSelect />}
		/>
	);
};

export default SelectExercises;
