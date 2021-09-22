const initialState = {
    restaurantData: {}
}

const restaurantReducer = (state, action) => {
    if(state === undefined) {
        return initialState
    }
    if (action.type === 'STORE_RESTAURANT_DATA') {
		// console.log('in restaurant reducer');
		const newState = { ...state };
		newState.restaurantData = action.payload;
		// console.log('newState', newState);
		return newState;
	}
    return state
}

export default restaurantReducer