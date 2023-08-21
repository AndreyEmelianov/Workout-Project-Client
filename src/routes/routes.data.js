import Auth from '../components/screens/auth/Auth';
import Home from '../components/screens/home/Home';
import NewWorkout from '../components/screens/new-workout/NewWorkout';
import Profile from '../components/screens/profile/Profile';

export const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
		auth: false
	},
	{
		path: '/auth',
		exact: false,
		component: Auth,
		auth: false
	},
	{
		path: '/new-workout',
		exact: false,
		component: NewWorkout,
		auth: true
	},
	{
		path: '/profile',
		exact: false,
		component: Profile,
		auth: true
	}
];
