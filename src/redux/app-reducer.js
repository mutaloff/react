import { getUserData } from "./auth-reducer"

const ON_SUCCESS_INIT = 'ON-SUCCESS-INIT'

let initialState = {
    initialized: false
}


const appReducer = (state = initialState, action) => {
    switch(action.type){
        case ON_SUCCESS_INIT:
            return {
                ...state,
                initialized: true
            }
        default: return state
    }
}
export default appReducer;

export const onSuccessInit = () => ({type: ON_SUCCESS_INIT})

export const initApp = () => (dispatch) => {
    let promise = dispatch(getUserData())
    Promise.all([promise]).then(dispatch(onSuccessInit()))
}

