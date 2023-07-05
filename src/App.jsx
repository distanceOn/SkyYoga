import s from './App.module.scss';
import { ModalProgress } from './components/modalProgress/ModalProgress';

function App() {
	return (
		<div className={s.App}>
			<ModalProgress />
		</div>
	);
}

export default App;
