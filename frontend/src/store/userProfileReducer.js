const initialState = {
    id: "",
    firstName: "",
    lastName: "",
    userName: "",
    avatar: "",
    banner: "",
    location: "",
    about: "",
    email: "",
    phone: "076 587 95 38",
    thingsUserLike: [],
    posts: 0,
    likes: 0,
    friends: 0,
    followers: 0,
    following: 0,
    password: ""
}

const userProfileReducer = (state,action) => {
    if(state===undefined){
        return initialState;
    }
    else if(action.type==="updateProfileInfo"){
        const newState = action.payload;
        console.log("I'm your new state",newState);
        return newState;
    }
    return state;
}

export default userProfileReducer;