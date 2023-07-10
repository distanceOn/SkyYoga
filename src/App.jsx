import s from "./App.module.scss";
import { ModalNewLogin } from "./components/ModalNewPassword/ModalNewLogin";

import { ModalNewPassword } from "./components/ModalNewPassword/ModalNewPassword";
import { Login } from "./pages/Login/Login";
import { SignIn } from "./pages/Signin/SignIn";

// eslint-disable-next-line no-lone-blocks
{
  /*import Main from "./pages/Main/Main";
import { AuthorizedCourse } from "./pages/authorizedCourse/AuthorizedCourse";
import UnauthorizedCourse from "./pages/unauthorizedCourse/UnauthorizedCourse";*/
}

function App() {
  return (
    <div className={s.App}>
      {/* <Main />
      <UnauthorizedCourse />
  <AuthorizedCourse />*/}
      <Login />
      <SignIn />
      <ModalNewPassword />
      <ModalNewLogin />
    </div>
  );
}

export default App;
