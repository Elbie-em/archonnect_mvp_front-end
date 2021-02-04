import './App.css';
import store from './redux/store'
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


const App = () => {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/signup"} component={SignUp}/>
          <Route exact path={"/signin"} component={SignIn}/>
        </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
