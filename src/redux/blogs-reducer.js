
const ADD_POST = 'ADD-POST';

let initialState = {
    textAreaMessenge: '',
    blogPosts: [],
}

const blogsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                blogPosts: [...state.blogPosts, action.newText],
            };
        default:
            return state;
    }
}
  
export const addPost = (text) => {
    return {
      type: ADD_POST,
      newText: text
    }
}


export default blogsReducer;