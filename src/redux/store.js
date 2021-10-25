import blogReducer from "./blogs-reducer";


let store = {
    _state: {
        headerLinks: [{'ru': 'Главное', 'en': 'Main'}, 
                        {'ru': 'Блоги', 'en': 'Blogs'},
                        {'ru': 'Что-то', 'en': 'Something'}],
        sideBarTabs: [{'ru': 'Профиль', 'en': 'Profile'},
                        {'ru': 'Подписки', 'en': 'Subscriptions'},
                        {'ru': 'Аналитика', 'en': 'Analytics'}, 
                        {'ru': 'Настройки', 'en': 'Settings'}],
    
        profile: {id: 1, name: 'Тимур', lastname:'Муталов'},
        subscriptions: 'Подписки',
        analytics: 'Аналитика',
        settings: 'Настройки',
        blogs: {
            textAreaMessenge: '',
            blogPosts: [],
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){
        return
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.blogs = blogReducer(this._state.blogs, action);

        this._callSubscriber()
    }
}

export default store;