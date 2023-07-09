import s from './App.module.scss';

import AppRoutes from './routes/routes';

function App() {
	return (
		<div className={s.app}>
			<AppRoutes />
		</div>
	);
}

export default App;
