import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import './index.css';
import App from './App';
import LoginComponent from './component/loginComponent';
import UserComponent from './component/userComponent';
import RegisterComponent from './component/registerComponent';
import DashboardComponent from './component/dashboardComponent';
import AdminDashboardComponent from './component/adminDashboardComponent';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configure';

const store = configureStore();

ReactDOM.render( 
<Provider store={store}>
    <div>
      <Router history={browserHistory}>
        {/* For temprory purpose */}
        <Route path='/' component={App} />
        <Route path='/SignUp' component={LoginComponent} />
        <Route path='/UserSignUp' component={UserComponent} />
        <Route path='/Login' component={RegisterComponent} />
        <Route path='/UserDashboard' component={DashboardComponent} />
        <Route path='/AdminDashboard' component={AdminDashboardComponent} />
      </Router>
    </div>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
