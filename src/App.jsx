import s from './App.module.scss';
import Main from './pages/Main/Main';
import { UnauthorizedCourse } from './pages/unauthorizedCourse';
import { ModalSubmittedProgress } from './components/ModalSubmittedProgress/ModalSubmittedProgress';

function App() {
	return (
		<div className={s.App}>
			{/* <Main /> */}
			<UnauthorizedCourse />
			<ModalSubmittedProgress />
		</div>
	);
}

export default App;
