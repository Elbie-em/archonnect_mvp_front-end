import './App.css';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import store from './redux/store';
import 'react-toastify/dist/ReactToastify.css';
import Home from './containers/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Houseplans from './containers/Houseplans';
import Plan from './containers/Plan';
import Favourites from './containers/Favourites';

const App = () => (
  /* eslint-disable react/jsx-props-no-spreading */
  <BrowserRouter>
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} />
            )}
          />
          <Route
            exact
            path="/signup"
            render={props => (
              <SignUp {...props} />
            )}
          />
          <Route
            exact
            path="/signin"
            render={props => (
              <SignIn {...props} />
            )}
          />
          <Route
            exact
            path="/houseplans"
            render={props => (
              <Houseplans {...props} />
            )}
          />
          <Route path="/houseplans/:id" exact component={Plan} />
          <Route
            exact
            path="/favourites"
            render={props => (
              <Favourites {...props} />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
  /* eslint-enable react/jsx-props-no-spreading */
);

export default App;
