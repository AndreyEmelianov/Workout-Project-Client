import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const Workout = () => {
	const { id } = useParams();

	const {} = useQuery(['get workout', id], );

	return <div>Workout</div>;
};

export default Workout;
