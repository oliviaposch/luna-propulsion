import { combineReducers, createStore } from 'redux';

// import authReducer from './authReducer'
import restaurantReducer from './restaurantReducer'
import userProfileReducer from './userProfileReducer'

const reducers = combineReducers({
	// authReducer,
	userProfileReducer,
	restaurantReducer,
	// we can add more reducers here...
});

const store = createStore(reducers
    //, composeWithDevTools(
	// applyMiddleware(...middleware),)
    );

export default store;