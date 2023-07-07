import s from "./App.module.scss";
import Profile from "./pages/Profile/Profile";
import Main from "./pages/Main/Main";
import UnauthorizedCourse from "./pages/unauthorizedCourse/UnauthorizedCourse";
import { ModalSubmittedProgress } from "./components/ModalSubmittedProgress/ModalSubmittedProgress";

function App() {
  return (
    <div className={s.App}>
      <Main />
      <UnauthorizedCourse />
      <ModalSubmittedProgress />
      <Profile />
    </div>
  );
}

export default App;
