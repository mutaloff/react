let initialState = {
    sideBarTabs: [{'ru': 'Профиль', 'en': 'Profile'},
                  {'ru': 'Подписки', 'en': 'Subscriptions'},
                  {'ru': 'Аналитика', 'en': 'Analytics'}, 
                  {'ru': 'Настройки', 'en': 'Settings'},
                  {'ru': 'Тест', 'en': 'Test'}]
}
                    
const sidebarReducer = (state = initialState, action) => {
    return {
        ...state,
        sideBarTabs: [...state.sideBarTabs]
    }
}

export default sidebarReducer;