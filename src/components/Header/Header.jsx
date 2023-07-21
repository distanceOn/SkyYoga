import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import s from './Header.module.scss';
import Button from '../Button/Button';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectIsAuthenticated } from '../../redux/selectors';

const Header = () => {
	const location = useLocation();

	const navigate = useNavigate();

	const onLogout = () => {
		signOut(auth)
			.then(() => {
				localStorage.clear();
				navigate('/');
			})
			.catch((error) => {
				localStorage.clear();
				console.log('error');
			});
	};

	const handleEntry = () => {
		navigate('/login');
	};

	const isAuthenticated = useSelector(selectIsAuthenticated);

	return (
		<div className={s.header}>
			<Logo fill={location.pathname === '/' ? 'white' : 'black'} />
			{isAuthenticated ? (
				<div>
					<ProfileIcon />
					<Button
						buttonText="Выйти"
						class={s.entry}
						onClick={onLogout}
					/>
				</div>
			) : (
				<Button
					uniqueClass={s.entry}
					buttonText="Войти"
					onClick={handleEntry}
				/>
			)}
		</div>
	);
};

export default Header;
