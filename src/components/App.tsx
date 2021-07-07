import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { NavigationRoute } from 'src/interfaces/Navigation';
import AboutComponent from 'src/pages/AboutComponent';
import HomeComponent from 'src/pages/HomeComponent';
import StyledApp from 'src/styled-components/StyledApp';
import store from '../redux/store';
import GlobalStyle from '../styled-components/GlobalStyle';
import Navigation from './Navigation';

const App = (): JSX.Element => {
  const routes: NavigationRoute[] = [
    {
      link: '/',
      label: 'Home',
    },
    {
      link: '/about',
      label: 'About',
    },
  ];

  return (
    <StyledApp>
      <Provider store={store}>
        <Router>
          <GlobalStyle />
          <Navigation routes={routes} />
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/about" component={AboutComponent} />
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </StyledApp>
  );
};

export default App;
