import { createStore,combineReducers ,compose } from "redux";

import newsReducer from './reducers/newsReducer';
import globalReducer from './reducers/globalReducer';
import loginReducer from './reducers/loginReducer';


const AllReducers = combineReducers({
    news: newsReducer ,
    globalVariable: globalReducer,
    login: loginReducer
})

const InitialState = {
    news: [],
    login: {
        email: "demo@collegify.com",
        password: "admin",
        isLogin: false,
        loginStatus: false
    },
    globalVariable: {
        loginModal: false,
        registerModal: false,

    }
}



const store = createStore(AllReducers ,InitialState );

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//use apply middleWare thunk for async function in dispatcher from front end request.
// thunk middleware will take care of functional actions.

export default store;
