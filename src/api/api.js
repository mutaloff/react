import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': 'f40ab3d2-7428-456d-adfc-7e2154a5a845' }
})

export const userAPI = {
    getUsers(selectedPage, pageSize) {
        return (
            instance.get(`users?page=${selectedPage}&count=${pageSize}`).then(response => {
                return response.data
            })
        )
    },
    follow(id) {
        return (instance.post(`follow/${id}`).then(response => { return response.data }))
    },
    unfollow(id) {
        return (instance.delete(`follow/${id}`).then(response => { return response.data }))
    }
}

export const profileAPI = {
    setUserProfile(id) {
        return (instance.get(`profile/${id}`).then(response => { return response.data }))
    },
    getUserStatus(id) {
        return (instance.get(`profile/status/${id}`).then(response => { return response.data }))
    },
    updateUserStatus(status) {
        return instance.put('profile/status', { status })
    }
}

export const authAPI = {
    setAuthUserData() {
        return (instance.get(`auth/me/`).then(response => { return response.data }))
    },
    login(email, password, rememberMe) {
        return (instance.post(`auth/login/`, { email, password, rememberMe }))
    },
    logout() {
        return (instance.delete(`auth/login/`))
    }
}