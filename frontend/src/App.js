import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CreateRestaurant from './pages/CreateRestaurant/CreateRestaurant'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import { Provider } from 'react-redux';
import Registration from './pages/Registration/Registration'
import RegistrationMessage from './pages/RegistrationMessage/RegistrationMessage'
import RegistrationValidation from './pages/RegistrationValidation/RegistrationValidation'
import RestaurantPage from './pages/Restaurants/RestaurantPage'
import Search from './pages/Search/Search';
import WriteReview from './pages/WriteReview/WriteReview'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/registration" component={Registration}/>
          <Route exact path="/registration/message" component={RegistrationMessage}/>
          <Route exact path="/registration/validate" component={RegistrationValidation}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/restaurants/new" component={CreateRestaurant}/>
          <Route exact path="/restaurantpage" component={RestaurantPage}/>
          {/* toco: is this the correct url for this page? */}
          <Route exact path="/writereview" component={WriteReview}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/profile" component={Profile}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
