import { userAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const LOAD_USERS = 'LOAD-USERS'
const SELECT_PAGE = 'PAGE-SELECT'
const SET_TOTAL_USERS = 'SET-TOTAL-USERS'
const ON_CONTENT_FETCHING = 'ON-CONTENT-FETCHING'
const FOLLOWING_TOGGLED = 'FOLLOWING-TOGGLED'

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 20,
    currentPage: 1,
    isFetching: false,
    isFollowingForbidden: []
}


const subscriptionsReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((e) => {
                    if(e.id === action.userId) return {...e, followed: true}
                    return e
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if(e.id === action.userId) return {...e, followed: false}
                    return e
                })
            }
        case LOAD_USERS:
            return {
                ...state, 
                users: [...action.users]
            }
        case SELECT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        case ON_CONTENT_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case FOLLOWING_TOGGLED:
            return{
                ...state,
                isFollowingForbidden: action.isFetching 
                    ? [...state.isFollowingForbidden, action.userId] 
                    : [...state.isFollowingForbidden.filter(id => id !== action.userId)]
            }
        default: return state
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const loadUsers = (users) => ({type: LOAD_USERS, users})
export const onPageSelect = (page) => ({type: SELECT_PAGE, page})
export const setTotalUsersCount = (usersCount) => ({type: SET_TOTAL_USERS, usersCount})
export const onContentFetching = (isFetching) => ({type: ON_CONTENT_FETCHING, isFetching})
export const followingToggled = (isFetching, userId) => ({type: FOLLOWING_TOGGLED, isFetching, userId})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(onContentFetching(true))
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(loadUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(onContentFetching(false))
        })
    }
}

export const changePage = (selectedPage, currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(onPageSelect(selectedPage))
        dispatch(onContentFetching(true))
        userAPI.getUsers(selectedPage, pageSize).then(data => {
            dispatch(loadUsers(data.items))
            dispatch(onContentFetching(false))
        } 
    )}
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(followingToggled(true, userId))
        userAPI.unfollow(userId).then(data => {
            if(data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
                dispatch(followingToggled(false, userId))
            }  
        }
    )}
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(followingToggled(true, userId))
        userAPI.follow(userId).then(data => {
            if(data.resultCode === 0) {
                dispatch(followSuccess(userId))
                dispatch(followingToggled(false, userId))
            }  
        }
    )}
}



export default subscriptionsReducer;