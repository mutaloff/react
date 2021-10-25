import { createSelector } from "reselect"

const getSubscriptionUsersSelector = (state) => {
    return state.subscriptions.users
}
export const getSubscriptionUsers = createSelector(getSubscriptionUsersSelector, (subscription) => {
    return subscription.filter(el => true)
})

export const getTotalUsersCount = (state) => {
    return state.subscriptions.totalUsersCount
}

export const getPageSize = (state) => {
    return state.subscriptions.pageSize
}

export const getCurrentPage = (state) => {
    return state.subscriptions.currentPage
}

export const getIsFetching = (state) => {
    return state.subscriptions.isFetching
}

export const getIsFollowingForbidden = (state) => {
    return state.subscriptions.isFollowingForbidden
}

