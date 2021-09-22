const getRestaurantData = (dispatch) => {

    const method = 'GET';
	const url = `https://luna-aries.propulsion-learn.ch/backend/api/restaurants/1/`; //${user_id}/
	const headers = new window.Headers({
		Authorization:
			`Bearer ${localStorage.getItem("lunaAccessToken")}`,
	});
	const config = {
		method,
		headers,
	};

    // fetching data
	fetch(url, config)
    .then((res) => {
        // checking the response
        if (res.status === 200) {
            return res.json();
        } else {
            throw new Error(
                'something went wrong when fetching the posts data'
            );
        }
    })
    .then((data) => {
        // console.log(data)
        // dispatch an event to save the data in redux
        const action = {
            type: 'STORE_RESTAURANT_DATA',
            payload: data,
        };
        // console.log('action.payload', action.payload);
        dispatch(action);
    })
    .catch((err) => console.log(err));
}

export default getRestaurantData;