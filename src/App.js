
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LoginForm from './components/LoginForm/LoginForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageNotFound from './components/PageNotFound/PageNotFound';
import Destination from './components/Destination/Destination';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export  const UserContext = createContext();

function App() {
  const [userLogged, setUserLogged] = useState({});
  return (
    <UserContext.Provider value={[userLogged, setUserLogged]}>
    <Router>
      <Switch>
        <Route exact path="/">  <Home></Home> </Route>
        <Route path="/home">   <Home></Home>   </Route>
        <Route path="/login"> <LoginForm></LoginForm> </Route>
        <PrivateRoute path="/destination/:categoryId" > <Destination> </Destination> </PrivateRoute>
        <Route path = "*"> <PageNotFound></PageNotFound> </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
