import s from "./App.module.scss";
import Main from "./pages/Main/Main";
import { AuthorizedCourse } from "./pages/authorizedCourse/AuthorizedCourse";
import { UnauthorizedCourse } from "./pages/unauthorizedCourse/index";


function App() {
  return (
    <div className={s.App}>
      <Main />
      <UnauthorizedCourse/>
      <AuthorizedCourse/>
    </div>
  );
}

export default App;
