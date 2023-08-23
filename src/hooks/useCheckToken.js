import Cookies from 'js-cookie';
import { TOKEN } from '../app.constants';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from './useAuth';

export const useCheckToken = () => {
	const { setIsAuth, isAuth } = useAuth();

	const { pathname } = useLocation();

	useEffect(() => {
		const token = Cookies.get(TOKEN);

		if (!token) setIsAuth(false);
	}, [pathname, isAuth]);
};
