import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { setLogin } from '../redux/slices/user';

export const User = () => {
	const dispatch = useDispatch();

	onAuthStateChanged(auth, (user) => {
		if (user) {
			const userID = user.uid;
			localStorage.setItem(userID);
			dispatch(
				setLogin({
					userId: user.uid,
				})
			);
			console.log(userID);
		} else {
			console.log('user is logged out');
		}
	});
};
