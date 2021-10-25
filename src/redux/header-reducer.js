
let initialState = {
    headerLinks: [{'ru': 'Главное', 'en': 'Main'}, 
                  {'ru': 'Блоги', 'en': 'Blogs'},
                  {'ru': 'Что-то', 'en': 'Something'}]
}

const headerReducer = (state = initialState, action) => {
    return {
        ...state,
        headerLinks: [...state.headerLinks]
    }
}

export default headerReducer;