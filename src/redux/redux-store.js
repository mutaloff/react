import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import analyticsReducer from "./analytics-reducer";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import blogsReducer from "./blogs-reducer";
import headerReducer from "./header-reducer";
import mainReducer from "./main-reducer";
import profileReducer from "./profile-reducer";
import settingsReducer from "./settings-reducer";
import sidebarReducer from "./sidebar-reducer";
import subscriptionsReducer from "./subscriptions-reducer";


let reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    header: headerReducer,
    sidebar: sidebarReducer,
    blogs: blogsReducer,
    profile: profileReducer,
    subscriptions: subscriptionsReducer,
    analytics: analyticsReducer,
    settings: settingsReducer,
    main: mainReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;