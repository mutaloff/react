import { profileAPI } from "../api/api";

const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'


let initialState = {
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default: return state
    }
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const setUser = (userId) => {
    return (dispatch) => {
        profileAPI.setUserProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        } 
    )}
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then(data => {
            dispatch(setUserStatus(data))
        } 
    )}
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status).then(data => {
            if(data.data.resultCode === 0){
                dispatch(setUserStatus(status))
            }
        } 
    )}
}

export default profileReducer;
