import s from "./App.module.scss";
import Main from "./pages/Main/Main";
import { UnauthorizedCourse } from "./pages/unauthorizedCourse";

function App() {
  return (
    <div className={s.App}>
      <Main />
      <UnauthorizedCourse />
    </div>
  );
}

export default App;
