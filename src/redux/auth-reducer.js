import { authAPI } from "../api/api"

const GET_USER_DATA = 'GET-USER-DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}


const authReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default: return state
    }
}
export default authReducer;

export const setAuthUserData = (email, id, login, isAuth) => ({type: GET_USER_DATA , payload: {email, id, login, isAuth}})

export const getUserData = () => {
    return (dispatch) => {
        return authAPI.setAuthUserData().then(data => {
            if(data.resultCode === 0){
                let {email, id, login} = data.data
                dispatch(setAuthUserData(email, id, login, true))
            }
        } 
    )}
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => authAPI.login(email, password, rememberMe).then(response => {
        if(response.data.resultCode === 0){
            dispatch(getUserData())
        }
    })
}


export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if(response.data.resultCode === 0){
                dispatch(setAuthUserData(null, null, null,  false))
            }
        } 
    )}
}
