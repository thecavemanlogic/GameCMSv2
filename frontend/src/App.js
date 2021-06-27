import logo from './logo.svg';
import './App.css';
import { Login } from './pages/Login/login';
import Cookie from 'js-cookie';

// Code editor?
// https://codemirror.net/

function App() {

  if (!Cookie.get('token')) return <Login />

  // console.log(login)
  // return login();
}

export default App;
