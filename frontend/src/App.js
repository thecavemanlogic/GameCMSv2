import './App.css';
// import { Login } from './pages/Login/login';
import Cookie from 'js-cookie';

import { Login, Editor, Player } from './pages'

// Code editor?
// https://codemirror.net/

function App() {

  if (!Cookie.get('token')) return <Login />
  else return <Player/>

  // console.log(login)
  // return login();
}

export default App;
