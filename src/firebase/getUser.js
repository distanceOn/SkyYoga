import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './firebase';

export const User = () => {
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const userID = user.uid;

				console.log(userID);
			} else {
				console.log('user is logged out');
			}
		});
	}, []);
};
