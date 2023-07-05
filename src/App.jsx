import s from "./App.module.scss";
import Main from "./pages/Main/Main";
import { UnauthorizedСourse } from "./pages/unauthorizedСourse";

function App() {
  return (
    <div className={s.App}>
      <Main />
      <UnauthorizedСourse />
    </div>
  );
}

export default App;
