import './App.css';
import store from './redux/store'
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch, NavLink } from 'react-router-dom';
import Home from './containers/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Houseplans from './containers/Houseplans';
import Plan from './containers/Plan';


const App = () => {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route exact path={"/"} render={props => (
              <Home {...props} />
            )} />
            <Route exact path={"/signup"} render={props => (
              <SignUp {...props} />
            )} />
            <Route exact path={"/signin"} render={props => (
              <SignIn {...props} />
            )} />
            <Route exact path={"/houseplans"} render={props => (
              <Houseplans {...props} />
            )} />
            <Route path="/houseplans/:id" exact component={Plan} />
            <Redirect to="/"/>
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
